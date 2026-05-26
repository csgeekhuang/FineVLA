// Interactive demo logic for FineVLA project page
$(document).ready(function () {

  // Helper: render a video player for a sample
  function renderVideo(containerId, sampleId) {
    var $c = $(containerId).empty();
    var src = './static/videos/demos/' + sampleId + '.mp4';
    $c.append(
      '<video controls muted loop playsinline style="max-width:480px;width:100%;border-radius:10px;box-shadow:0 2px 8px rgba(0,0,0,0.15);">' +
      '<source src="' + src + '" type="video/mp4">' +
      '</video>'
    );
  }

  // ===== DEMO 1: Fine-Grained Annotation Showcase =====
  function initRecap() {
    var samples = DEMO_DATA.recap.samples;
    var $select = $('#recap-sample-select');
    samples.forEach(function (s, i) {
      $select.append('<option value="' + i + '">' + s.dataset + ' \u2014 "' + s.instruction_raw + '"</option>');
    });
    renderRecap(0);
    $select.on('change', function () {
      renderRecap(parseInt(this.value));
    });
  }

  function renderRecap(idx) {
    var s = DEMO_DATA.recap.samples[idx];
    renderVideo('#recap-video-container', s.sample_id);
    $('#recap-dataset-tag').text(s.dataset);
    $('#recap-robot-tag').text(s.robot_type);
    $('#recap-instruction-text').text('"' + s.instruction_raw + '"');
    // Show steps_raw if available
    var $rawSteps = $('#recap-raw-steps').empty();
    if (s.steps_raw && s.steps_raw.length > 0) {
      $('#recap-raw-label').text('Original Step Annotation');
      s.steps_raw.forEach(function (step) {
        $rawSteps.append('<li>' + step + '</li>');
      });
      $rawSteps.show();
      $('#recap-raw-wc').text(s.steps_raw.length + ' steps');
    } else {
      $('#recap-raw-label').text('Goal-Level Instruction');
      $rawSteps.hide();
      $('#recap-raw-wc').text(s.instruction_word_count + ' words');
    }
    var $list = $('#recap-steps-list').empty();
    s.human_review.forEach(function (step) {
      $list.append('<li>' + step + '</li>');
    });
    $('#recap-fg-wc').text(s.human_review_word_count + ' words');
  }

  // ===== DEMO 2: VLM Caption Comparison =====
  function initVLM() {
    var samples = DEMO_DATA.vlm_comparison.samples;
    var $tabs = $('#vlm-sample-tabs ul');
    samples.forEach(function (s, i) {
      var ds = s.dataset.split('-')[0];
      $tabs.append('<li class="' + (i === 0 ? 'is-active' : '') + '"><a data-idx="' + i + '">Sample ' + (i + 1) + '</a></li>');
    });
    renderVLM(0);
    $tabs.on('click', 'a', function (e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderVLM(idx);
    });
    renderVLMScoreTable();
  }

  function renderVLM(idx) {
    var s = DEMO_DATA.vlm_comparison.samples[idx];
    $('#vlm-instruction').text(s.instruction_raw || '(vision-only, no instruction provided)');
    renderVideo('#vlm-video-container', s.sample_id);
    var $cards = $('#vlm-caption-cards').empty();
    var modelOrder = [
      "RoboFine-VLM (Ours)", "GPT-5.4", "Gemini 3.1 Pro",
      "Doubao Seed 2.0 Pro", "Qwen3.5-Plus", "Qwen3-VL-Plus"
    ];
    modelOrder.forEach(function (model) {
      var steps = s.captions[model] || [];
      var isOurs = model.indexOf('Ours') >= 0;
      var cardClass = isOurs ? 'vlm-card vlm-card-ours' : 'vlm-card';
      var crown = isOurs ? ' <i class="fas fa-crown"></i>' : '';
      var stepsHtml = '';
      if (steps.length === 0) {
        stepsHtml = '<p class="has-text-grey-light">No caption available</p>';
      } else {
        stepsHtml = '<ol class="vlm-steps">';
        steps.forEach(function (st) { stepsHtml += '<li>' + st + '</li>'; });
        stepsHtml += '</ol>';
      }
      // Token/time stats
      var statsHtml = '';
      if (s.token_stats && s.token_stats[model]) {
        var ts = s.token_stats[model];
        var tokens = ts.total_tokens > 1000 ? (ts.total_tokens / 1000).toFixed(1) + 'K' : ts.total_tokens;
        statsHtml = '<div class="vlm-stats"><span class="icon is-small"><i class="fas fa-coins"></i></span> ' + tokens + ' tokens &nbsp; <span class="icon is-small"><i class="fas fa-clock"></i></span> ' + ts.elapsed_sec + 's</div>';
      }
      $cards.append(
        '<div class="column is-one-third-desktop is-half-tablet">' +
        '<div class="card ' + cardClass + '">' +
        '<div class="card-header"><p class="card-header-title">' + model + crown + '</p></div>' +
        '<div class="card-content">' + stepsHtml + statsHtml + '</div>' +
        '</div></div>'
      );
    });
  }

  function renderVLMScoreTable() {
    var $tbody = $('#vlm-score-tbody').empty();
    DEMO_DATA.vlm_comparison.score_table.forEach(function (row) {
      var isOurs = row.is_ours;
      var trClass = isOurs ? 'model-ours' : '';
      $tbody.append(
        '<tr class="' + trClass + '">' +
        '<td>' + row.model + (isOurs ? ' <i class="fas fa-crown" style="color:#48c774;"></i>' : '') + '</td>' +
        '<td>' + (row.caption_score * 100).toFixed(1) + '</td>' +
        '<td>' + (row.consistency * 100).toFixed(1) + '</td>' +
        '<td>' + (row.coverage * 100).toFixed(1) + '</td>' +
        '<td>' + (row.anti_hallucination * 100).toFixed(1) + '</td>' +
        '</tr>'
      );
    });
  }

  // ===== DEMO 3: Benchmark Explorer =====
  function initBenchmark() {
    var samples = DEMO_DATA.benchmark.samples;
    var $tabs = $('#bench-sample-tabs ul');
    samples.forEach(function (s, i) {
      var shortId = s.sample_id.length > 25 ? s.sample_id.substring(0, 25) + '...' : s.sample_id;
      $tabs.append('<li class="' + (i === 0 ? 'is-active' : '') + '"><a data-idx="' + i + '">' + shortId + '</a></li>');
    });
    renderBenchmark(0);
    $tabs.on('click', 'a', function (e) {
      e.preventDefault();
      var idx = parseInt($(this).data('idx'));
      $tabs.find('li').removeClass('is-active');
      $(this).parent().addClass('is-active');
      renderBenchmark(idx);
    });
  }

  function renderBenchmark(idx) {
    var s = DEMO_DATA.benchmark.samples[idx];
    var labels = DEMO_DATA.benchmark.capability_labels;

    // Show instruction
    $('#bench-instruction').text(s.instruction_raw || '(not available)');
    renderVideo('#bench-video-container', s.sample_id);

    // Capability badges
    var $tags = $('#bench-cap-tags').empty();
    Object.keys(labels).forEach(function (cap) {
      var count = s.capability_summary[cap] || 0;
      var cls = count > 0 ? 'tag is-success' : 'tag is-light';
      $tags.append('<span class="' + cls + '" style="margin:2px;">' + labels[cap] + ' (' + count + ')</span> ');
    });

    // Atomic facts accordion
    var $accordion = $('#bench-facts-accordion').empty();
    var factsByCapability = {};
    s.atomic_facts_sample.forEach(function (f) {
      if (!factsByCapability[f.capability]) factsByCapability[f.capability] = [];
      factsByCapability[f.capability].push(f);
    });
    Object.keys(labels).forEach(function (cap) {
      var facts = factsByCapability[cap] || [];
      if (facts.length === 0) return;
      var totalCount = s.capability_summary[cap];
      var factsHtml = '<ul>';
      facts.forEach(function (f) {
        factsHtml += '<li><span class="tag is-light is-small" style="margin-right:4px;">' + f.slot + ': ' + f.value + '</span> ' + f.fact_text + '</li>';
      });
      factsHtml += '</ul>';
      $accordion.append(
        '<div class="bench-fact-group">' +
        '<button class="bench-fact-toggle button is-small is-light is-fullwidth">' +
        '<span class="icon"><i class="fas fa-chevron-right"></i></span>' +
        '<span>' + labels[cap] + ' (' + totalCount + ' facts)</span>' +
        '</button>' +
        '<div class="bench-fact-list" style="display:none;">' + factsHtml + '</div>' +
        '</div>'
      );
    });

    // Accordion toggle
    $('.bench-fact-toggle').off('click').on('click', function () {
      $(this).toggleClass('is-expanded');
      $(this).find('.icon i').toggleClass('fa-chevron-right fa-chevron-down');
      $(this).next('.bench-fact-list').slideToggle(200);
    });

    // VQA questions
    var $vqa = $('#bench-vqa-cards').empty();
    s.qas.forEach(function (qa, qi) {
      var optionsHtml = '';
      if (qa.options && qa.options.length > 0) {
        qa.options.forEach(function (opt) {
          optionsHtml += '<label class="radio" style="display:block;margin-bottom:4px;"><input type="radio" name="bench-q' + idx + '-' + qi + '" disabled> ' + opt + '</label>';
        });
      } else {
        optionsHtml = '<p class="has-text-grey">Yes / No</p>';
      }
      var capLabel = labels[qa.capability] || qa.capability;
      $vqa.append(
        '<div class="card bench-qa-card" style="margin-bottom:1rem;">' +
        '<div class="card-content">' +
        '<div class="tags" style="margin-bottom:0.5rem;"><span class="tag is-info is-light">' + capLabel + '</span></div>' +
        '<p class="bench-question"><strong>Q:</strong> ' + qa.question + '</p>' +
        '<div class="bench-options" style="margin:0.5rem 0 0.75rem 1rem;">' + optionsHtml + '</div>' +
        '<button class="button is-small is-info bench-reveal-btn">Reveal Answer</button>' +
        '<p class="bench-answer" style="display:none;margin-top:0.75rem;">' +
        '<span class="tag is-success is-medium">Answer: ' + qa.answer + '</span>' +
        '</p>' +
        '</div></div>'
      );
    });

    $('.bench-reveal-btn').off('click').on('click', function () {
      $(this).hide();
      $(this).next('.bench-answer').slideDown(200);
    });
  }

  // ===== Smooth scroll for demo nav =====
  $('#demo-nav-tabs a').on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 60 }, 400);
    $('#demo-nav-tabs li').removeClass('is-active');
    $(this).parent().addClass('is-active');
  });

  // ===== Initialize all demos =====
  if (typeof DEMO_DATA !== 'undefined') {
    initRecap();
    initVLM();
    initBenchmark();
  }
});
