#!/usr/bin/env python3
"""
Prepare sampled demo data for the FineVLA project page.
Reads from raw data files and generates static/js/demo-data.js.

Usage:
    python scripts/prepare_demo_data.py
"""
import json
import csv
import os
import sys

BASE_HR = "/mnt/cpfs_m6_29eu38p1/data/shared/Group-m6/tongzai.hxt/ItagDataAfterHumanReveiw/"
BASE_CAPTION = "/mnt/cpfs_m6_29eu38p1/data/shared/Group-m6/tongzai.hxt/VLM4Robotics_Benchmark/CaptionEval/"
BASE_EVAL = "/mnt/cpfs_m6_29eu38p1/data/shared/Group-m6/tongzai.hxt/VLM4Robotics_Benchmark/Eval_Set/"
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
OUTPUT = os.path.join(PROJECT_DIR, "static", "js", "demo-data.js")

def normalize_instruction(val):
    """Normalize instruction_raw which may be a string or list."""
    if isinstance(val, list):
        return " ".join(str(v) for v in val)
    return str(val) if val else ""


CAPABILITY_LABELS = {
    "action_sequence": "Action Sequence",
    "active_actor": "Active Actor",
    "target_object": "Target Object",
    "initial_configuration": "Initial Configuration",
    "final_configuration": "Final Configuration",
    "contact_and_approach": "Contact & Approach",
    "trajectory_and_orientation": "Trajectory & Orientation",
    "body_motion": "Body Motion",
    "object_interaction": "Object Interaction",
    "failure_and_recovery": "Failure & Recovery",
}

# Model display names mapping
MODEL_DISPLAY = {
    "Qwen36-SFT": "RoboFine-VLM (Ours)",
    "Qwen36-SFT_T0.7": "RoboFine-VLM T0.7",
    "openai_gpt-5_4-2026-03-05": "GPT-5.4",
    "vertex_ai_gemini-3_1-pro-preview": "Gemini 3.1 Pro",
    "doubao_doubao-seed-2-0-pro-260215": "Doubao Seed 2.0 Pro",
    "qwen3-vl-plus": "Qwen3-VL-Plus",
    "qwen3_5-plus": "Qwen3.5-Plus",
}

# Models to show in VLM comparison (skip T0.7 duplicate)
VLM_MODELS = [
    ("Qwen36-SFT", "Qwen36-SFT_CaptionResult.jsonl", "RoboFine-VLM (Ours)"),
    ("openai_gpt-5_4-2026-03-05", "openai_gpt-5_4-2026-03-05_CaptionResult.jsonl", "GPT-5.4"),
    ("vertex_ai_gemini-3_1-pro-preview", "vertex_ai_gemini-3_1-pro-preview_CaptionResult.jsonl", "Gemini 3.1 Pro"),
    ("doubao_doubao-seed-2-0-pro-260215", "doubao_doubao-seed-2-0-pro-260215_CaptionResult.jsonl", "Doubao Seed 2.0 Pro"),
    ("qwen3_5-plus", "qwen3_5-plus_CaptionResult.jsonl", "Qwen3.5-Plus"),
    ("qwen3-vl-plus", "qwen3-vl-plus_CaptionResult.jsonl", "Qwen3-VL-Plus"),
]


def sample_recap():
    """Demo 1: Sample 8 diverse recap examples from Human Review data."""
    datasets = [
        ("Bridge_Human_review.json", "Bridge"),
        ("RoboMindV1_Human_review.json", "RoboMIND V1"),
        ("RoboMindV2_Human_review.json", "RoboMIND V2"),
        ("Droid_Human_review.json", "DROID"),
        ("RT_Human_review.json", "RT-1"),
        ("BCZ_Human_review.json", "BC-Z"),
        ("Galaxea_Human_review.json", "Galaxea"),
        ("RH20T_Human_review.json", "RH20T"),
    ]
    samples = []
    for filename, display_name in datasets:
        filepath = os.path.join(BASE_HR, filename)
        print(f"  Loading {filename}...", end=" ", flush=True)
        with open(filepath) as f:
            data = json.load(f)
        print(f"{len(data)} entries")

        candidates = []
        for entry in data:
            hr = entry.get("Human_Review", [])
            if not isinstance(hr, list) or not (4 <= len(hr) <= 6):
                continue
            instr = entry.get("meta", {}).get("instruction_raw", "")
            if not instr:
                continue
            instr_wc = len(instr.split())
            if not (5 <= instr_wc <= 15):
                continue
            hr_text = " ".join(hr)
            hr_wc = len(hr_text.split())
            if not (50 <= hr_wc <= 150):
                continue
            ratio = hr_wc / max(instr_wc, 1)
            # Skip entries with Chinese text in Human_Review
            has_chinese = any(
                any("\u4e00" <= c <= "\u9fff" for c in step) for step in hr
            )
            if has_chinese:
                continue
            candidates.append(
                {
                    "sample_id": entry["sample_id"],
                    "dataset": display_name,
                    "robot_type": entry.get("meta", {}).get("robot_type", "unknown"),
                    "instruction_raw": instr,
                    "instruction_word_count": instr_wc,
                    "human_review": hr,
                    "human_review_word_count": hr_wc,
                    "word_count_ratio": round(ratio, 1),
                }
            )

        # Pick a sample with moderate ratio (~10-20x), not extreme
        candidates.sort(key=lambda x: abs(x["word_count_ratio"] - 15))
        if candidates:
            samples.append(candidates[0])
            print(
                f"    Selected: {candidates[0]['sample_id']} "
                f"(ratio={candidates[0]['word_count_ratio']}x, "
                f"{candidates[0]['instruction_word_count']}→{candidates[0]['human_review_word_count']} words)"
            )
        else:
            print(f"    WARNING: No suitable candidate from {display_name}")

    return samples


def load_instruction_map():
    """Load instruction_raw for benchmark samples from EvalSets.json."""
    filepath = os.path.join(BASE_EVAL, "EvalSets.json")
    with open(filepath) as f:
        data = json.load(f)
    return {entry["sample_id"]: normalize_instruction(entry.get("instruction_raw", "")) for entry in data}


def sample_vlm_comparison():
    """Demo 2: Sample 4 VLM comparison examples + score table."""
    print("\n[Demo 2] VLM Caption Comparison")
    instr_map = load_instruction_map()

    # Step 1: Load per-sample scores for each model
    model_scores = {}  # model_key -> {sample_id -> caption_score}
    for model_key, _, display_name in VLM_MODELS:
        score_dir = os.path.join(
            BASE_CAPTION, "AtomicResult", "DirectAlign", f"{model_key}_hard"
        )
        score_file = os.path.join(score_dir, "scored_results.jsonl")
        if not os.path.exists(score_file):
            print(f"  WARNING: {score_file} not found")
            continue
        scores = {}
        with open(score_file) as f:
            for line in f:
                entry = json.loads(line)
                if entry.get("status") == "ok":
                    scores[entry["sample_id"]] = entry.get("caption_score", 0)
        model_scores[model_key] = scores
        print(f"  Loaded {len(scores)} scores for {display_name}")

    # Step 2: Find samples with max divergence (Ours highest, others lowest)
    our_key = "Qwen36-SFT"
    other_keys = [k for k, _, _ in VLM_MODELS if k != our_key]
    our_scores = model_scores.get(our_key, {})

    divergence = []
    for sid, our_score in our_scores.items():
        other_scores_list = [
            model_scores.get(k, {}).get(sid) for k in other_keys
        ]
        other_scores_list = [s for s in other_scores_list if s is not None]
        if len(other_scores_list) < 4:
            continue
        min_other = min(other_scores_list)
        avg_other = sum(other_scores_list) / len(other_scores_list)
        div = our_score - avg_other
        # Require instruction_raw to be available
        if not instr_map.get(sid):
            continue
        divergence.append((sid, div, our_score, avg_other))

    divergence.sort(key=lambda x: -x[1])
    selected_sids = [d[0] for d in divergence[:4]]
    print(f"  Selected {len(selected_sids)} divergent samples")
    for sid, div, ours, avg_other in divergence[:4]:
        print(f"    {sid}: ours={ours:.3f}, avg_other={avg_other:.3f}, div={div:.3f}")

    # Step 3: Load captions for selected samples
    model_captions = {}  # model_key -> {sample_id -> caption_result}
    for model_key, filename, display_name in VLM_MODELS:
        caption_file = os.path.join(
            BASE_CAPTION, "CaptionResult", "hard", filename
        )
        captions = {}
        with open(caption_file) as f:
            for line in f:
                entry = json.loads(line)
                if entry["sample_id"] in selected_sids:
                    captions[entry["sample_id"]] = entry.get("caption_result", [])
        model_captions[model_key] = captions

    # Build samples
    samples = []
    for sid in selected_sids:
        sample = {
            "sample_id": sid,
            "dataset": sid.split("-")[0].replace("_", " ").upper()
            if "-" in sid
            else sid,
            "instruction_raw": instr_map.get(sid, ""),
            "captions": {},
        }
        for model_key, _, display_name in VLM_MODELS:
            sample["captions"][display_name] = model_captions.get(
                model_key, {}
            ).get(sid, [])
        samples.append(sample)

    # Step 4: Load aggregate score table from CSV
    csv_path = os.path.join(
        BASE_CAPTION,
        "AtomicResult",
        "DirectAlign",
        "cross_model_summary_hard.csv",
    )
    score_table = []
    with open(csv_path) as f:
        reader = csv.DictReader(f)
        for row in reader:
            model_name = row["model_name"]
            display = MODEL_DISPLAY.get(model_name, model_name)
            score_table.append(
                {
                    "model": display,
                    "caption_score": float(row["caption_score"]),
                    "consistency": float(row["consistency"]),
                    "coverage": float(row["coverage"]),
                    "anti_hallucination": float(row["anti_hallucination"]),
                    "is_ours": "Ours" in display,
                }
            )
    # Sort by caption_score descending
    score_table.sort(key=lambda x: -x["caption_score"])

    return {"samples": samples, "scores": score_table}


def sample_benchmark():
    """Demo 3: Sample 5 benchmark examples with atomic facts and VQA."""
    print("\n[Demo 3] Benchmark Explorer")

    # Load QA data
    qa_path = os.path.join(BASE_EVAL, "QAEvalSets.json")
    with open(qa_path) as f:
        qa_data = json.load(f)
    qa_map = {}
    for entry in qa_data:
        if entry["status"] == "ok" and entry.get("qas"):
            qa_map[entry["sample_id"]] = entry["qas"]
    print(f"  Loaded {len(qa_map)} QA samples with questions")

    # Load atomic facts
    af_path = os.path.join(
        BASE_CAPTION, "AtomicResult", "GT_AtomicFacts.jsonl"
    )
    af_map = {}
    with open(af_path) as f:
        for line in f:
            entry = json.loads(line)
            if entry.get("status") == "ok":
                af_map[entry["sample_id"]] = entry["capability_results"]
    print(f"  Loaded {len(af_map)} atomic fact samples")

    # Load instruction_raw from EvalSets.json
    instr_map = load_instruction_map()

    # Find samples present in both QA and AF, score by diversity
    candidates = []
    for sid in qa_map:
        if sid not in af_map:
            continue
        qas = qa_map[sid]
        af_results = af_map[sid]

        # Count capabilities with facts
        cap_summary = {}
        all_facts = []
        populated_caps = 0
        for cap_result in af_results:
            cap = cap_result["capability"]
            facts = cap_result.get("gt_atomic_facts", [])
            cap_summary[cap] = len(facts)
            if facts:
                populated_caps += 1
                # Take up to 3 representative facts per capability
                for fact in facts[:3]:
                    all_facts.append(
                        {
                            "capability": cap,
                            "fact_text": fact["fact_text"],
                            "slot": fact.get("slot", ""),
                            "value": fact.get("value", ""),
                        }
                    )

        # Score: populated_caps * len(qas) (prefer diverse)
        score = populated_caps * len(qas)
        candidates.append(
            {
                "sample_id": sid,
                "dataset": sid.split("-")[0].replace("_", " "),
                "instruction_raw": instr_map.get(sid, ""),
                "capability_summary": cap_summary,
                "atomic_facts_sample": all_facts,
                "qas": [
                    {
                        "question": qa["question"],
                        "options": qa.get("options", []),
                        "answer": qa["answer"],
                        "capability": qa["capability"],
                        "mode": qa.get("mode", ""),
                    }
                    for qa in qas
                ],
                "score": score,
                "populated_caps": populated_caps,
                "num_qas": len(qas),
            }
        )

    # Sort by score descending, but also ensure dataset diversity
    candidates.sort(key=lambda x: -x["score"])

    # Pick top 5 with dataset diversity
    selected = []
    seen_datasets = set()
    for c in candidates:
        ds = c["dataset"]
        if ds in seen_datasets and len(selected) < 5:
            continue
        seen_datasets.add(ds)
        # Remove internal fields
        sample = {k: v for k, v in c.items() if k not in ("score", "populated_caps", "num_qas")}
        selected.append(sample)
        print(
            f"    {c['sample_id']}: {c['populated_caps']} caps, {c['num_qas']} QAs"
        )
        if len(selected) >= 5:
            break

    # If we don't have 5 yet, fill from remaining
    if len(selected) < 5:
        for c in candidates:
            if c["sample_id"] not in {s["sample_id"] for s in selected}:
                sample = {k: v for k, v in c.items() if k not in ("score", "populated_caps", "num_qas")}
                selected.append(sample)
                print(
                    f"    {c['sample_id']}: {c['populated_caps']} caps, {c['num_qas']} QAs (fill)"
                )
                if len(selected) >= 5:
                    break

    return selected


def main():
    print("=" * 60)
    print("FineVLA Demo Data Preparation")
    print("=" * 60)

    print("\n[Demo 1] Fine-Grained Annotation Showcase")
    recap = sample_recap()

    vlm = sample_vlm_comparison()

    benchmark = sample_benchmark()

    # Build output
    output = {
        "recap": {
            "samples": recap,
            "stats": {
                "total_trajectories": 47159,
                "avg_raw_words": 9.3,
                "avg_fg_words": 96.8,
                "word_count_increase": "10.4x",
            },
        },
        "vlm_comparison": {
            "samples": vlm["samples"],
            "score_table": vlm["scores"],
            "setting": "hard",
        },
        "benchmark": {
            "samples": benchmark,
            "stats": {
                "total_videos": 500,
                "total_atomic_facts": 10816,
                "total_qa_pairs": 1030,
                "capability_dimensions": 10,
            },
            "capability_labels": CAPABILITY_LABELS,
        },
        "vla_results": {"placeholder": True},
    }

    # Write output
    os.makedirs(os.path.dirname(OUTPUT), exist_ok=True)
    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by scripts/prepare_demo_data.py -- do not edit manually\n")
        f.write(
            f"const DEMO_DATA = {json.dumps(output, indent=2, ensure_ascii=False)};\n"
        )

    # Report size
    size_kb = os.path.getsize(OUTPUT) / 1024
    print(f"\n{'=' * 60}")
    print(f"Written to {OUTPUT}")
    print(f"File size: {size_kb:.1f} KB")
    print(
        f"Samples: {len(recap)} recap, {len(vlm['samples'])} vlm, {len(benchmark)} benchmark"
    )


if __name__ == "__main__":
    main()
