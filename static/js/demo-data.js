var DEMO_DATA = {
  "recap": {
    "samples": [
      {
        "sample_id": "bridge-39043",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "Place the red spoon near the steel pan.",
        "instruction_word_count": 8,
        "human_review": [
          "Grasp the handle of the red spoon located on the left side of the countertop from above.",
          "Pick up the red spoon by lifting it vertically off the wooden surface.",
          "Move the spoon diagonally forward-right towards the steel pan.",
          "Place the spoon on the wooden surface adjacent to the steel pan.",
          "Release the spoon and retract the gripper upwards."
        ],
        "human_review_word_count": 59,
        "word_count_ratio": 7.4
      },
      {
        "sample_id": "robomindv1-place_plate_table_241211_12-100",
        "dataset": "RoboMIND V1",
        "robot_type": "tienkung_gello_1rgb",
        "instruction_raw": "pick plate from rack and place on table",
        "instruction_word_count": 8,
        "human_review": [
          "Grasp the white plate at the front of the rack from the right side using the right robot arm.",
          "Lift the white plate vertically off the wooden rack.",
          "Move the plate forward and slightly to the left over the empty table surface.",
          "Lower the plate gently onto the center of the table surface, in front left of the rack, keeping it flat.",
          "Release the grip on the plate and retract the arm."
        ],
        "human_review_word_count": 72,
        "word_count_ratio": 9.0
      },
      {
        "sample_id": "robomindv2-pour_fried_egg_into_plate_with_right_arm-39",
        "dataset": "RoboMIND V2",
        "robot_type": "agilex",
        "instruction_raw": "pour fried egg into plate with right arm",
        "instruction_word_count": 8,
        "human_review": [
          "Grasp the right rim of the white plate  from above with right arm.",
          "Pick up and hover the plate in the center of the stovetop.",
          "Hold the plate steady with the right arm while the fried egg is poured with left arm from the frying pan on the left.",
          "Place the frying pan on the left side of stove with left arm. Release the left arm and retract the left arm.",
          "Pick up the plate with the fried egg from the right rim with right arm.",
          "Place the plate back down on the stovetop surface and release the grip, retract the arm upwards."
        ],
        "human_review_word_count": 103,
        "word_count_ratio": 12.9
      },
      {
        "sample_id": "droid_robointer-22",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the soft pineapple from the table",
        "instruction_word_count": 8,
        "human_review": [
          "Descends from above and front to grasp above the side of the yellow soft pineapple situated between the watermelon slice and the orange basket, then lifts it vertically off the table.",
          "Translates the held yellow soft pineapple to the left and lowers it towards the table surface on the right of the light blue toaster.",
          "Repeatedly places the yellow soft pineapple on the table surface immediately to the right of the light blue toaster, then releases the grip, during the process, the paw touches the orange basket, causing the orange basket to move, and retracts vertically upward."
        ],
        "human_review_word_count": 97,
        "word_count_ratio": 12.1,
        "steps_raw": [
          "pick up the soft pineapple from the table",
          "transfer the soft pineapple from the table to beside the oven",
          "place the soft pineapple beside the oven"
        ]
      },
      {
        "sample_id": "rt1-RT-1-34586",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "pick 7up can from top shelf of fridge",
        "instruction_word_count": 8,
        "human_review": [
          "Move the robotic arm towards the left side of the topmost fridge shelf where the 7up cans are located.",
          "Position the open gripper in front of the leftmost 7up can on the shelf.",
          "Grasp the 7up can firmly by its cylindrical body from the front.",
          "Pull the can backward and slightly upward towards the edge of the shelf to begin extraction."
        ],
        "human_review_word_count": 61,
        "word_count_ratio": 7.6
      },
      {
        "sample_id": "bc_z-BC_Z-38560",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "move the arm in a circular motion",
        "instruction_word_count": 7,
        "human_review": [
          "Move the end-effector down and to the left, approaching the plastic cup closely.",
          "Sweep the arm up and to the right, tracing a circular arc away from the cup.",
          "Move the arm back down and to the left to complete the circular loop.",
          "Repeat the circular motion sequence multiple times without grasping or displacing the cup."
        ],
        "human_review_word_count": 56,
        "word_count_ratio": 8.0
      },
      {
        "sample_id": "galaxea-Take_Out_The_Laundry_From_The_Washing_Machine20250618_001-40",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "take out the laundry from the washing machine",
        "instruction_word_count": 8,
        "human_review": [
          "Left arm approaches the left washing machine door from the front, contacts the handle with its open gripper, and pulls the door open outward to the left, then uses its closed gripper to push the top edge of the door to open it further.",
          "The right arm grasps a piece of denim clothing from inside the washing machine drum and lifts it upward, moving it toward the laundry basket positioned in front of the machine, then releases it flat into the laundry basket.",
          "Left arm closes the washing machine door by pushing it from the left side toward the right with closed gripper, rotating it counterclockwise around its hinge until fully sealed."
        ],
        "human_review_word_count": 112,
        "word_count_ratio": 14.0,
        "steps_raw": [
          "Open the washing machine lid with the left hand.",
          "Move left to align with the washing machine.",
          "Rotate body left to face the washing machine.",
          "Put the brown clothes into the laundry basket with your right hand.",
          "Rotate body right to face the washing machine.",
          "Close the washing machine lid with your left hand."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-38843",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the plate from the green table",
        "instruction_word_count": 8,
        "human_review": [
          "Descend vertically from above to align the gripper with the center of the white plate resting at the upper right of the wooden stand, making contact to initiate the pick-up.",
          "Lift the white plate from above, then move backward towards the dish rack.",
          "Release the white plate onto the dish rack, ensuring it rests flat, then retract the gripper vertically upwards away from the object.",
          "Grasp the right rim of the white plate from the right side, rotate it 90 degrees counterclockwise to an upright position, then insert it vertically downward into the dish rack slot.",
          "Release the gripper and retract the arm upward."
        ],
        "human_review_word_count": 104,
        "word_count_ratio": 13.0,
        "steps_raw": [
          "pick up the plate from the green table",
          "transfer the plate from the green table to the dish rack",
          "place the plate on the dish rack"
        ]
      },
      {
        "sample_id": "rdt-open_laptop-5",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Open the lid of the black laptop.",
        "instruction_word_count": 7,
        "human_review": [
          "Right arm approaches from the right side and grasps the top-right corner of the black laptop lid with its gripper.",
          "Left arm approaches from the left side and grasps the top-left corner of the black laptop lid with its gripper.",
          "Both arms simultaneously lift and push the lid upward in a synchronized motion, rotating it around the hinge until fully open at approximately 90 degrees.",
          "After release, the laptop screen activates automatically, displaying a sunset wallpaper with time '15:33' centered on screen."
        ],
        "human_review_word_count": 82,
        "word_count_ratio": 11.7
      },
      {
        "sample_id": "robocoin-Cobot_Magic_twist_bottle_cap-364",
        "dataset": "RoboCoin",
        "robot_type": "agilex_cobot_decoupled_magic",
        "instruction_raw": "loosen the cap of the green tea bottle.",
        "instruction_word_count": 8,
        "human_review": [
          "Left arm approaches the upright Peach Oolong Tea bottle from the left side and grasps its mid-section, closing the gripper fingers around the body to secure it.",
          "Left arm lifts the Peach Oolong Tea bottle vertically off the table surface to adjust its position for cap manipulation.",
          "Left arm stabilizes the bottle upright while the right arm positions its gripper above the white bottle cap.",
          "Right arm places the white bottle cap on the table to the right of the bottle, while the left arm holds the bottle upright, right arm turn the bottle cap counterclockwise to open it.",
          "Left arm places the Peach Oolong Tea bottle back onto the table surface and opens its gripper to release.",
          "Both arms retract from the workspace, with the left arm moving leftward away from the bottle and the right arm moving rightward and upward away from the cap, leaving both objects stationary on the table."
        ],
        "human_review_word_count": 153,
        "word_count_ratio": 19.1,
        "steps_raw": [
          "Grab the Peach Oolong Tea with the left hand",
          "Lift the Peach Oolong Tea with the left hand",
          "Secure the Peach Oolong Tea with the left hand",
          "Place the bottle cap on the right",
          "Place the Peach Oolong Tea with the left hand"
        ]
      }
    ],
    "stats": {
      "total_trajectories": 47159,
      "avg_raw_words": 9.3,
      "avg_fg_words": 96.8,
      "word_count_increase": "10.4x"
    }
  },
  "vlm_comparison": {
    "samples": [
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-25616",
        "dataset": "RH20T ROBOINTER",
        "instruction_raw": "push the block to one side",
        "captions": {
          "RoboFine-VLM (Ours)": [
            "The robotic arm approaches the wooden frame from the upper right, contacts the right edge, and pushes it leftward to adjust its position on the table.",
            "Retract the arm upward."
          ],
          "GPT-5.4": [
            "approach the standing wooden frame from above-right with the gripper open and make contact near its top-right edge/front face",
            "push the wooden frame sideways to the right across the tabletop, keeping it upright on its kickstand and rotating it slightly, ending with it farther right of the green button",
            "move the gripper away from the frame and over to the green push button mounted on the white square on the tabletop",
            "lower onto the green button's top face and press it",
            "lift off and retract from the button",
            "move the gripper back toward the frame's top edge from above, stopping close to the frame"
          ],
          "Gemini 3.1 Pro": [
            "Move the open gripper towards the top-left corner of the standing picture frame.",
            "Close the gripper to grasp the top-left edge of the frame.",
            "Pull the frame forward, causing it to tip over and fall flat onto the wooden table.",
            "Open the gripper to release the frame.",
            "Retract the arm upward and to the left, moving away from the frame."
          ],
          "Doubao Seed 2.0 Pro": [
            "grasp the top edge of the upright photo frame on the ribbed wooden surface from the front with the right gripper, closing the gripper around the edge",
            "lift the grasped photo frame upward, rotate it counter-clockwise, and move it leftward to lean the frame against the wooden panel next to the green pushbutton",
            "open the right gripper to release the photo frame, then retract the right gripper to the right away from the frame"
          ],
          "Qwen3.5-Plus": [
            "move the gripper to the top right corner of the wooden frame",
            "grasp the top right corner of the wooden frame",
            "tilt the wooden frame backwards",
            "release the wooden frame",
            "move the gripper to the yellow note on the board",
            "move the gripper up and away from the frame"
          ],
          "Qwen3-VL-Plus": [
            "approach the wooden frame from above with the right gripper",
            "grasp the top-right corner of the wooden frame",
            "lift the frame slightly upward and tilt it backward",
            "rotate the frame counter-clockwise about its vertical axis while maintaining grasp",
            "lower the frame back onto the wooden surface in a more upright orientation",
            "release the frame and retract the gripper",
            "move the gripper toward the green push-button switch on the left side of the table",
            "press the green button with the tip of the gripper",
            "retract the gripper from the button and return toward the frame",
            "grasp the top edge of the frame again from the right side",
            "slide the frame slightly to the left along the table surface",
            "maintain grasp and adjust frame orientation to be more perpendicular to the camera view"
          ]
        },
        "token_stats": {
          "RoboFine-VLM (Ours)": {
            "total_tokens": 8240,
            "elapsed_sec": 96.5
          },
          "GPT-5.4": {
            "total_tokens": 11662,
            "elapsed_sec": 88.3
          },
          "Gemini 3.1 Pro": {
            "total_tokens": 96587,
            "elapsed_sec": 24.2
          },
          "Doubao Seed 2.0 Pro": {
            "total_tokens": 115502,
            "elapsed_sec": 107.6
          },
          "Qwen3.5-Plus": {
            "total_tokens": 9523,
            "elapsed_sec": 110.9
          },
          "Qwen3-VL-Plus": {
            "total_tokens": 3627,
            "elapsed_sec": 6.6
          }
        }
      },
      {
        "sample_id": "bc_z-BC_Z-21027",
        "dataset": "BC Z",
        "instruction_raw": "wipe purple bowl with towel",
        "captions": {
          "RoboFine-VLM (Ours)": [
            "Move the robotic arm from the green tray area towards the purple bowl located on the upper left side of the table.",
            "Grasp the white towel inside the purple bowl from above using the gripper.",
            "Wipe the inner surface of the purple bowl by moving the towel in a circular scrubbing motion."
          ],
          "GPT-5.4": [
            "move the gripper from the robot side to hover above the green rectangular tray at the back-right of the table",
            "lower the gripper into the green tray from above near the tray’s right half",
            "sweep the gripper inside the tray toward the tray’s left/back interior",
            "lift the gripper back up out of the green tray",
            "translate the gripper from the tray to above the dark patterned bowl at the back-center of the table",
            "lower the gripper into the dark patterned bowl from above near the bowl center",
            "push the gripper slightly deeper inside the bowl",
            "raise the gripper a small distance above the bowl opening",
            "shift the gripper a small distance around the bowl opening",
            "lower the gripper into the bowl again from above",
            "make a small rocking or rotational adjustment with the gripper at the bowl opening",
            "lift the gripper slightly while staying over the bowl"
          ],
          "Gemini 3.1 Pro": [
            "move gripper to the sponge in the green square plate",
            "grasp the sponge",
            "lift the sponge",
            "move to the brown bowl",
            "lower the sponge into the brown bowl"
          ],
          "Doubao Seed 2.0 Pro": [
            "move the robotic gripper leftward from its initial position to the right of the green tray, entering the green tray through its right edge",
            "move the robotic gripper leftward out of the green tray, lowering slightly as it approaches the dark brown bowl with purple contents located to the left of the green tray",
            "lower the robotic gripper into the dark brown bowl, making contact with the purple items inside the bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl",
            "close the robotic gripper to grasp a purple item inside the dark brown bowl",
            "lift the robotic gripper upward, raising the grasped purple item a short distance above the contents of the dark brown bowl",
            "lower the robotic gripper downward, placing the purple item back into the dark brown bowl",
            "open the robotic gripper to release the purple item into the dark brown bowl"
          ],
          "Qwen3.5-Plus": [
            "grasp the small object inside the green tray with the right gripper",
            "lift the object and move it left towards the purple bowl",
            "place the object into the purple bowl and release",
            "move the gripper into the purple bowl",
            "grasp the object inside the purple bowl",
            "adjust the object inside the purple bowl"
          ],
          "Qwen3-VL-Plus": [
            "grasp the green tray with the right gripper at its near edge",
            "lift the green tray slightly upward and tilt it forward",
            "release the green tray back onto the table",
            "move the right gripper toward the purple bowl",
            "grasp the purple bowl by its rim from above",
            "lift the purple bowl upward",
            "tilt the purple bowl slightly to the left while holding it",
            "lower the purple bowl back onto the table",
            "maintain grasp on the purple bowl while adjusting its position slightly leftward",
            "release the purple bowl"
          ]
        },
        "token_stats": {
          "RoboFine-VLM (Ours)": {
            "total_tokens": 6614,
            "elapsed_sec": 34.0
          },
          "GPT-5.4": {
            "total_tokens": 5286,
            "elapsed_sec": 64.2
          },
          "Gemini 3.1 Pro": {
            "total_tokens": 36976,
            "elapsed_sec": 28.0
          },
          "Doubao Seed 2.0 Pro": {
            "total_tokens": 46481,
            "elapsed_sec": 133.1
          },
          "Qwen3.5-Plus": {
            "total_tokens": 7216,
            "elapsed_sec": 102.6
          },
          "Qwen3-VL-Plus": {
            "total_tokens": 1686,
            "elapsed_sec": 4.2
          }
        }
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-45096",
        "dataset": "RH20T ROBOINTER",
        "instruction_raw": "press the button on the desk lamp to turn off the light",
        "captions": {
          "RoboFine-VLM (Ours)": [
            "The robot arm lowers its end effector from above to press the circular button on the blue and white control panel of the device lying on the table."
          ],
          "GPT-5.4": [
            "Move the gripper toward the blue-and-white handheld device lying flat on the board, rotating the end effector to align over the white top surface near the circular button; no grasp is made.",
            "Lower the gripper from above and briefly press/tap the white top area beside the circular button without closing on the object; the device remains essentially in place.",
            "Lift the gripper up and retreat away from the device, ending clear of contact."
          ],
          "Gemini 3.1 Pro": [
            "move the right arm towards the blue and white object",
            "lower the suction cup to grasp the object",
            "lift the object",
            "move the object to the left",
            "place the object on the table"
          ],
          "Doubao Seed 2.0 Pro": [
            "move the robotic presser arm downward to contact the fabric on the worktable, approaching from above",
            "move the robotic presser forward along the fabric surface while maintaining contact, pressing the fabric",
            "lift the robotic presser upward away from the fabric to a raised position above the worktable",
            "shift the camera to a close-up view focusing on the blue and white steam iron above the fabric",
            "move the blue and white steam iron downward to contact the fabric surface from above",
            "move the steam iron forward along the fabric surface while maintaining contact to perform an ironing stroke",
            "lift the steam iron slightly upward and reposition it to an adjacent unironed section of the fabric",
            "move the steam iron forward along the new fabric section while maintaining contact to perform another ironing stroke",
            "lift the steam iron slightly upward and reposition it to another unironed section of the fabric",
            "move the steam iron forward along the new fabric section while maintaining contact to perform an additional ironing stroke",
            "lift the steam iron upward away from the fabric, ending the ironing action"
          ],
          "Qwen3.5-Plus": [
            "move the open gripper towards the handle of the blue and white steamer lying on the table",
            "close the gripper to grasp the handle of the steamer",
            "lift the steamer upwards from the table"
          ],
          "Qwen3-VL-Plus": [
            "the robot arm moves downward toward the blue-and-white handheld steamer on the white sheet",
            "the gripper closes around the top of the steamer, grasping it from above",
            "the arm lifts the steamer upward and slightly backward",
            "the arm rotates the steamer clockwise while lifting",
            "the steamer is repositioned and placed back onto the sheet, now angled differently",
            "the gripper opens and releases the steamer",
            "the arm retracts upward and away from the steamer"
          ]
        },
        "token_stats": {
          "RoboFine-VLM (Ours)": {
            "total_tokens": 7795,
            "elapsed_sec": 56.3
          },
          "GPT-5.4": {
            "total_tokens": 9220,
            "elapsed_sec": 52.7
          },
          "Gemini 3.1 Pro": {
            "total_tokens": 92863,
            "elapsed_sec": 48.7
          },
          "Doubao Seed 2.0 Pro": {
            "total_tokens": 110164,
            "elapsed_sec": 93.4
          },
          "Qwen3.5-Plus": {
            "total_tokens": 4421,
            "elapsed_sec": 21.9
          },
          "Qwen3-VL-Plus": {
            "total_tokens": 3430,
            "elapsed_sec": 4.7
          }
        }
      },
      {
        "sample_id": "bc_z-BC_Z-29674",
        "dataset": "BC Z",
        "instruction_raw": "place sponge in purple bowl",
        "captions": {
          "RoboFine-VLM (Ours)": [
            "Grasp the blue sponge located to the right of the purple bowl from above.",
            "Lift the sponge and move it horizontally to the left to position it over the purple bowl.",
            "Lower the sponge into the purple bowl and release the grip."
          ],
          "GPT-5.4": [
            "move the right gripper down and toward the purple bowl at the back-right of the table, approaching the bowl's right rim from above-right",
            "push/nudge the purple bowl at its right rim with the right gripper, rotating the bowl from a sideways-angled pose to an upright pose with the opening facing up, with a small shift across the tabletop",
            "lift and retract the right gripper up and away from the purple bowl, ending with the bowl left upright near the back-right area of the table"
          ],
          "Gemini 3.1 Pro": [
            "move the gripper to the brown bowl",
            "grasp the brown bowl",
            "lift the brown bowl",
            "move the brown bowl to the green tray",
            "lower the brown bowl into the green tray and release it",
            "move the gripper away to the right"
          ],
          "Doubao Seed 2.0 Pro": [
            "rotate the grasped blue bottle clockwise with the left gripper, tilting its opening downward into the dark bowl on the wooden table",
            "rotate the grasped blue bottle counterclockwise with the left gripper, returning it to an upright position inside the dark bowl",
            "open the left gripper to release the blue bottle inside the dark bowl",
            "move the left gripper upward away from the dark bowl and the blue bottle"
          ],
          "Qwen3.5-Plus": [
            "grasp the purple bowl with the gripper",
            "lift and tilt the purple bowl over the blue bowl",
            "place the purple bowl back on the table",
            "release the purple bowl",
            "move the arm away"
          ],
          "Qwen3-VL-Plus": [
            "grasp the dark bowl on the right side of the table with the right gripper, contacting it near the rim from above",
            "lift the dark bowl slightly upward and tilt it clockwise, causing a small blue object inside to shift toward the rim",
            "release the dark bowl back onto the table in its original position"
          ]
        },
        "token_stats": {
          "RoboFine-VLM (Ours)": {
            "total_tokens": 5378,
            "elapsed_sec": 17.9
          },
          "GPT-5.4": {
            "total_tokens": 3537,
            "elapsed_sec": 44.2
          },
          "Gemini 3.1 Pro": {
            "total_tokens": 28894,
            "elapsed_sec": 15.1
          },
          "Doubao Seed 2.0 Pro": {
            "total_tokens": 36821,
            "elapsed_sec": 124.5
          },
          "Qwen3.5-Plus": {
            "total_tokens": 4100,
            "elapsed_sec": 51.5
          },
          "Qwen3-VL-Plus": {
            "total_tokens": 1421,
            "elapsed_sec": 3.5
          }
        }
      }
    ],
    "score_table": [
      {
        "model": "RoboFine-VLM (Ours)",
        "caption_score": 0.8363,
        "consistency": 0.8191,
        "coverage": 0.753,
        "anti_hallucination": 0.937,
        "is_ours": true
      },
      {
        "model": "GPT-5.4",
        "caption_score": 0.7806,
        "consistency": 0.7417,
        "coverage": 0.6891,
        "anti_hallucination": 0.911,
        "is_ours": false
      },
      {
        "model": "Gemini 3.1 Pro",
        "caption_score": 0.7723,
        "consistency": 0.7703,
        "coverage": 0.6128,
        "anti_hallucination": 0.9338,
        "is_ours": false
      },
      {
        "model": "Qwen3.5-Plus",
        "caption_score": 0.7247,
        "consistency": 0.7085,
        "coverage": 0.5682,
        "anti_hallucination": 0.8973,
        "is_ours": false
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "caption_score": 0.6821,
        "consistency": 0.7225,
        "coverage": 0.656,
        "anti_hallucination": 0.6677,
        "is_ours": false
      },
      {
        "model": "Qwen3-VL-Plus",
        "caption_score": 0.651,
        "consistency": 0.6871,
        "coverage": 0.57,
        "anti_hallucination": 0.6958,
        "is_ours": false
      }
    ],
    "setting": "hard"
  },
  "benchmark": {
    "samples": [
      {
        "sample_id": "bc_z-BC_Z-34392",
        "dataset": "BC-Z",
        "instruction_raw": "place brush in paper cup",
        "capability_summary": {
          "action_sequence": 5,
          "active_actor": 0,
          "target_object": 1,
          "initial_configuration": 3,
          "final_configuration": 3,
          "contact_and_approach": 2,
          "trajectory_and_orientation": 3,
          "object_interaction": 2,
          "failure_and_recovery": 1,
          "body_motion": 0
        },
        "atomic_facts_sample": [
          {
            "capability": "action_sequence",
            "fact_text": "grasp the brush by its black handle",
            "slot": "primitive_action",
            "value": "grasp"
          },
          {
            "capability": "action_sequence",
            "fact_text": "lift the brush off the table surface",
            "slot": "primitive_action",
            "value": "lift"
          },
          {
            "capability": "action_sequence",
            "fact_text": "move the brush over the white paper cup",
            "slot": "primitive_action",
            "value": "move"
          },
          {
            "capability": "target_object",
            "fact_text": "the primary manipulated object is a brush",
            "slot": "category",
            "value": "brush"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "the brush starts in a lying position",
            "slot": "initial_pose",
            "value": "lying"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "the brush starts on the left side of the wooden board",
            "slot": "initial_workspace_location",
            "value": "left side of the wooden board"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "the brush starts near the green tray",
            "slot": "initial_relation",
            "value": "near the green tray"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the brush ends lying flat",
            "slot": "final_pose",
            "value": "lying flat"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the brush ends on the table",
            "slot": "final_workspace_location",
            "value": "on the table"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the brush is released at the end of the action",
            "slot": "final_state",
            "value": "released"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the brush is contacted at its black handle",
            "slot": "contact_region",
            "value": "black handle"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the brush is approached from above for the grasp",
            "slot": "approach_direction",
            "value": "from above"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the brush moves vertically upward off the table surface",
            "slot": "translation_direction",
            "value": "vertically upward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the brush moves forward and slightly to the right",
            "slot": "translation_direction",
            "value": "forward and slightly to the right"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the brush falls forward",
            "slot": "translation_direction",
            "value": "forward"
          },
          {
            "capability": "object_interaction",
            "fact_text": "the white paper cup topples during the brush release",
            "slot": "interaction_type",
            "value": "toppling"
          },
          {
            "capability": "object_interaction",
            "fact_text": "the white paper cup falls forward and lies flat on the table",
            "slot": "effect",
            "value": "falls forward and lies flat on the table"
          },
          {
            "capability": "failure_and_recovery",
            "fact_text": "the brush falls forward with the cup during the release",
            "slot": "failure",
            "value": "the brush falls forward with the cup during the release"
          }
        ],
        "qas": [
          {
            "question": "After lifting the brush, how was it moved to align over the white paper cup?",
            "options": [
              "forward and slightly to the right",
              "backward and slightly to the right",
              "forward and slightly to the left",
              "straight upward only"
            ],
            "answer": "forward and slightly to the right",
            "capability": "trajectory_and_orientation",
            "mode": "conflict"
          },
          {
            "question": "Which part of the brush was inserted into the opening of the white paper cup?",
            "options": [
              "the handle end",
              "the bristle end",
              "the middle of the brush",
              "the side of the brush head"
            ],
            "answer": "the handle end",
            "capability": "contact_and_approach",
            "mode": "conflict"
          },
          {
            "question": "What was the final state of the brush and cup after the release?",
            "options": [
              "The brush stood upright in the cup and the cup stayed upright.",
              "The brush lay flat on the table while the cup stayed upright.",
              "The cup and the brush fell forward and lay flat on the table.",
              "The brush was placed beside the cup on the table."
            ],
            "answer": "The cup and the brush fell forward and lay flat on the table.",
            "capability": "final_configuration",
            "mode": "conflict"
          },
          {
            "question": "Did the manipulation cause the white paper cup to be knocked over?",
            "options": [],
            "answer": "yes",
            "capability": "object_interaction",
            "mode": "conflict"
          }
        ]
      },
      {
        "sample_id": "rt1-59119",
        "dataset": "RT-1",
        "instruction_raw": "move pepsi can near paper bowl",
        "capability_summary": {
          "action_sequence": 6,
          "active_actor": 0,
          "target_object": 2,
          "initial_configuration": 1,
          "final_configuration": 4,
          "contact_and_approach": 2,
          "trajectory_and_orientation": 1,
          "object_interaction": 3,
          "failure_and_recovery": 0,
          "body_motion": 0
        },
        "atomic_facts_sample": [
          {
            "capability": "action_sequence",
            "fact_text": "the robot grasps the Pepsi can.",
            "slot": "primitive_action",
            "value": "grasp"
          },
          {
            "capability": "action_sequence",
            "fact_text": "the gripper closes around the Pepsi can.",
            "slot": "gripper_state",
            "value": "closed"
          },
          {
            "capability": "action_sequence",
            "fact_text": "the robot moves the Pepsi can toward the paper bowl.",
            "slot": "primitive_action",
            "value": "move"
          },
          {
            "capability": "target_object",
            "fact_text": "the manipulated object is a Pepsi can.",
            "slot": "category",
            "value": "can"
          },
          {
            "capability": "target_object",
            "fact_text": "the Pepsi can is blue.",
            "slot": "color",
            "value": "blue"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "the Pepsi can starts on the right side of the table.",
            "slot": "initial_workspace_location",
            "value": "right side of the table"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the Pepsi can ends on the table.",
            "slot": "final_workspace_location",
            "value": "on the table"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the Pepsi can ends immediately adjacent to the right side of the paper bowl.",
            "slot": "final_relation",
            "value": "immediately adjacent to the right side of the paper bowl"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the Pepsi can ends upright.",
            "slot": "final_pose",
            "value": "upright"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the gripper approaches the Pepsi can from the right.",
            "slot": "approach_direction",
            "value": "from the right"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the gripper contacts the upper body of the Pepsi can.",
            "slot": "contact_region",
            "value": "upper body"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the Pepsi can moves horizontally to the left with a slight upward lift toward the white paper bowl.",
            "slot": "translation_direction",
            "value": "horizontally to the left with a slight upward lift toward the paper bowl"
          },
          {
            "capability": "object_interaction",
            "fact_text": "the moving Pepsi can touches the right rim of the white paper bowl.",
            "slot": "interaction_type",
            "value": "touch"
          },
          {
            "capability": "object_interaction",
            "fact_text": "the white paper bowl is the object affected by the Pepsi can's incidental contact.",
            "slot": "affected_object",
            "value": "white paper bowl"
          },
          {
            "capability": "object_interaction",
            "fact_text": "the white paper bowl is pushed slightly to the left by the Pepsi can.",
            "slot": "effect",
            "value": "slightly pushed to the left"
          }
        ],
        "qas": [
          {
            "question": "While the robot was moving the blue Pepsi can, did the can make contact with the white paper bowl?",
            "options": [],
            "answer": "yes",
            "capability": "object_interaction",
            "mode": "conflict"
          },
          {
            "question": "Which part of the blue Pepsi can did the gripper close around?",
            "options": [
              "The upper body",
              "The lower body",
              "The top lid",
              "The middle body"
            ],
            "answer": "The upper body",
            "capability": "contact_and_approach",
            "mode": "gt_only"
          },
          {
            "question": "After the robot placed the can down, where was it relative to the white paper bowl?",
            "options": [
              "Immediately adjacent to the right side of the bowl",
              "Immediately adjacent to the left side of the bowl",
              "Inside the bowl",
              "Behind the bowl"
            ],
            "answer": "Immediately adjacent to the right side of the bowl",
            "capability": "final_configuration",
            "mode": "gt_only"
          }
        ]
      },
      {
        "sample_id": "bridge-31544",
        "dataset": "BridgeDataV2",
        "instruction_raw": "moved the towel to the right of the stove",
        "capability_summary": {
          "action_sequence": 5,
          "active_actor": 0,
          "target_object": 2,
          "initial_configuration": 0,
          "final_configuration": 4,
          "contact_and_approach": 2,
          "trajectory_and_orientation": 2,
          "object_interaction": 3,
          "failure_and_recovery": 0,
          "body_motion": 0
        },
        "atomic_facts_sample": [
          {
            "capability": "action_sequence",
            "fact_text": "The robot presses the towel.",
            "slot": "primitive_action",
            "value": "press"
          },
          {
            "capability": "action_sequence",
            "fact_text": "The robot moves the towel.",
            "slot": "primitive_action",
            "value": "move"
          },
          {
            "capability": "action_sequence",
            "fact_text": "The robot places the towel.",
            "slot": "primitive_action",
            "value": "place"
          },
          {
            "capability": "target_object",
            "fact_text": "The target object is a towel.",
            "slot": "category",
            "value": "towel"
          },
          {
            "capability": "target_object",
            "fact_text": "The towel is green.",
            "slot": "color",
            "value": "green"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The towel is flat at the end of the task.",
            "slot": "final_pose",
            "value": "flat"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The towel is on the black stovetop surface at the end of the task.",
            "slot": "final_workspace_location",
            "value": "on the black stovetop surface"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The towel is in front of the blue scrubber at the end of the task.",
            "slot": "final_relation",
            "value": "in front of the blue scrubber"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "The robot contacts the towel at its center.",
            "slot": "contact_region",
            "value": "center"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "The robot approaches the towel from above.",
            "slot": "approach_direction",
            "value": "from above"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "The towel moves to the right and slightly backward.",
            "slot": "translation_direction",
            "value": "to the right and slightly backward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "The robot arm moves upward while retracting.",
            "slot": "translation_direction",
            "value": "upward"
          },
          {
            "capability": "object_interaction",
            "fact_text": "The towel pushes a secondary object during the move.",
            "slot": "interaction_type",
            "value": "push"
          },
          {
            "capability": "object_interaction",
            "fact_text": "The secondary object affected by the towel is the black and white object.",
            "slot": "affected_object",
            "value": "black and white object"
          },
          {
            "capability": "object_interaction",
            "fact_text": "The black and white object is pushed to the front right edge of the black stove.",
            "slot": "effect",
            "value": "moved to the front right edge of the black stove"
          }
        ],
        "qas": [
          {
            "question": "What was the robot's initial action on the green towel?",
            "options": [
              "Press it",
              "Grasp it",
              "Pull it",
              "Rotate it"
            ],
            "answer": "Press it",
            "capability": "action_sequence",
            "mode": "conflict"
          },
          {
            "question": "Which part of the green towel did the robot contact from above at the start?",
            "options": [
              "The center",
              "The top edge",
              "The bottom edge",
              "The left corner"
            ],
            "answer": "The center",
            "capability": "contact_and_approach",
            "mode": "conflict"
          },
          {
            "question": "In which direction did the robot move the towel?",
            "options": [
              "To the right and slightly backward",
              "Straight to the left",
              "Straight forward",
              "Straight upward"
            ],
            "answer": "To the right and slightly backward",
            "capability": "trajectory_and_orientation",
            "mode": "conflict"
          },
          {
            "question": "Where was the green towel finally placed relative to the blue scrubber?",
            "options": [
              "In front of the blue scrubber",
              "To the left of the blue scrubber",
              "Behind the blue scrubber",
              "On top of the blue scrubber"
            ],
            "answer": "In front of the blue scrubber",
            "capability": "final_configuration",
            "mode": "conflict"
          },
          {
            "question": "While moving the towel, did the robot steer clear of other objects on the stove?",
            "options": [],
            "answer": "no",
            "capability": "object_interaction",
            "mode": "conflict"
          },
          {
            "question": "During the draging of the towel, what other object is touched?",
            "options": [
              "Sushi toy and the brush",
              "Sushi toy and metal pot",
              "Sushi toy only",
              "Brush only"
            ],
            "answer": "Sushi toy and the brush",
            "capability": "action_sequence",
            "mode": ""
          }
        ]
      },
      {
        "sample_id": "robomindv2-stack_green_on_blue_with_arms-215",
        "dataset": "RoboMINDV2",
        "instruction_raw": "stack green on blue with arms",
        "capability_summary": {
          "action_sequence": 10,
          "active_actor": 6,
          "target_object": 4,
          "initial_configuration": 0,
          "final_configuration": 3,
          "contact_and_approach": 2,
          "trajectory_and_orientation": 6,
          "object_interaction": 0,
          "failure_and_recovery": 0,
          "body_motion": 0
        },
        "atomic_facts_sample": [
          {
            "capability": "action_sequence",
            "fact_text": "both arms lower toward the blocks.",
            "slot": "primitive_action",
            "value": "lower"
          },
          {
            "capability": "action_sequence",
            "fact_text": "the robot grasps the green block.",
            "slot": "primitive_action",
            "value": "grasp"
          },
          {
            "capability": "action_sequence",
            "fact_text": "the robot grasps the yellow block.",
            "slot": "primitive_action",
            "value": "grasp"
          },
          {
            "capability": "active_actor",
            "fact_text": "both arms move down to grasp the two blocks.",
            "slot": "actor",
            "value": "both arms"
          },
          {
            "capability": "active_actor",
            "fact_text": "the right arm lifts the yellow block.",
            "slot": "actor",
            "value": "right arm"
          },
          {
            "capability": "active_actor",
            "fact_text": "the left arm lifts the green block.",
            "slot": "actor",
            "value": "left arm"
          },
          {
            "capability": "target_object",
            "fact_text": "the green target object is a block.",
            "slot": "category",
            "value": "block"
          },
          {
            "capability": "target_object",
            "fact_text": "the target block is green.",
            "slot": "color",
            "value": "green"
          },
          {
            "capability": "target_object",
            "fact_text": "the yellow target object is a block.",
            "slot": "category",
            "value": "block"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the yellow block ends at the center of the blue mat.",
            "slot": "final_workspace_location",
            "value": "center of the blue mat"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the yellow block ends on the blue mat.",
            "slot": "final_relation",
            "value": "on the blue mat"
          },
          {
            "capability": "final_configuration",
            "fact_text": "the green block ends on the left side of the yellow block.",
            "slot": "final_relation",
            "value": "on the left side of the yellow block"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the robot approaches the green block from above to grasp it.",
            "slot": "approach_direction",
            "value": "from above"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "the robot approaches the yellow block from above to grasp it.",
            "slot": "approach_direction",
            "value": "from above"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "both arms move downward.",
            "slot": "translation_direction",
            "value": "downward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the yellow block moves upward during the lift.",
            "slot": "translation_direction",
            "value": "upward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "the green block moves upward during the lift.",
            "slot": "translation_direction",
            "value": "upward"
          }
        ],
        "qas": [
          {
            "question": "Which arm lifts the yellow block after the initial grasp?",
            "options": [
              "Right arm",
              "Left arm",
              "Both arms together",
              "Neither arm"
            ],
            "answer": "Right arm",
            "capability": "active_actor",
            "mode": "conflict"
          },
          {
            "question": "After the yellow block is placed, where is the green block positioned relative to the yellow block?",
            "options": [
              "On the left side of the yellow block",
              "On the right side of the yellow block",
              "Behind the yellow block",
              "In front of the yellow block"
            ],
            "answer": "On the left side of the yellow block",
            "capability": "final_configuration",
            "mode": "conflict"
          },
          {
            "question": "What does the left arm do with the green block at the end of the manipulation?",
            "options": [
              "Presses it onto the left side of the yellow block",
              "Drops it onto an empty area of the mat",
              "Pushes it away from the yellow block",
              "Stacks it on top of the yellow block"
            ],
            "answer": "Presses it onto the left side of the yellow block",
            "capability": "action_sequence",
            "mode": "conflict"
          }
        ]
      },
      {
        "sample_id": "galaxea-Arrange_Throw_Pillows_On_Living_Room_Sofa_20250624_002-69",
        "dataset": "Galaxea",
        "instruction_raw": "Pick up the long gray pillow on the left side of the sofa with your left hand. → Pick up the long gray pillow on the left side of the sofa with your left hand and place it vertically against the left backrest of the sofa. → Pick up the long gray pillow on the left side of the sofa with your left hand, and place it horizontally on the left armrest with your right hand. → Move body right to the front of the flat gray pillow on the right side of the sofa. → Grasp the pillow lying flat on the right side of the sofa with both hands and lean it against the right rear backrest.",
        "capability_summary": {
          "action_sequence": 20,
          "active_actor": 5,
          "target_object": 5,
          "initial_configuration": 4,
          "final_configuration": 4,
          "contact_and_approach": 10,
          "trajectory_and_orientation": 7,
          "object_interaction": 0,
          "failure_and_recovery": 4,
          "body_motion": 1
        },
        "atomic_facts_sample": [
          {
            "capability": "action_sequence",
            "fact_text": "The left arm approaches the left pillow from left.",
            "slot": "primitive_action",
            "value": "approach"
          },
          {
            "capability": "action_sequence",
            "fact_text": "The left arm grasps the left edge of the left pillow.",
            "slot": "primitive_action",
            "value": "grasp"
          },
          {
            "capability": "action_sequence",
            "fact_text": "The left arm lifts the left pillow.",
            "slot": "primitive_action",
            "value": "lift"
          },
          {
            "capability": "active_actor",
            "fact_text": "The left arm is the acting arm while moving the left pillow.",
            "slot": "actor",
            "value": "left arm"
          },
          {
            "capability": "active_actor",
            "fact_text": "The left arm is the acting arm while shaking the left pillow in mid-air.",
            "slot": "actor",
            "value": "left arm"
          },
          {
            "capability": "active_actor",
            "fact_text": "The left arm acts on the left pillow by stabilizing it with a grasp.",
            "slot": "actor",
            "value": "left arm"
          },
          {
            "capability": "target_object",
            "fact_text": "The object manipulated on the left side is a pillow.",
            "slot": "category",
            "value": "pillow"
          },
          {
            "capability": "target_object",
            "fact_text": "The pillow manipulated on the left side is beige.",
            "slot": "color",
            "value": "beige"
          },
          {
            "capability": "target_object",
            "fact_text": "The pillow manipulated on the left side is long.",
            "slot": "shape_or_size",
            "value": "long"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "The left pillow starts lying flat.",
            "slot": "initial_pose",
            "value": "lying flat"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "The left pillow starts on the sofa seat.",
            "slot": "initial_relation",
            "value": "on the sofa seat"
          },
          {
            "capability": "initial_configuration",
            "fact_text": "The right pillow starts on the right seat cushion.",
            "slot": "initial_workspace_location",
            "value": "right seat cushion"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The left pillow ends upright.",
            "slot": "final_pose",
            "value": "upright"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The left pillow ends against the sofa corner.",
            "slot": "final_relation",
            "value": "against the sofa corner"
          },
          {
            "capability": "final_configuration",
            "fact_text": "The right pillow ends upright.",
            "slot": "final_pose",
            "value": "upright"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "The left arm approaches the left pillow from above.",
            "slot": "approach_direction",
            "value": "from above"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "The left arm contacts the left pillow at its left edge.",
            "slot": "contact_region",
            "value": "left edge"
          },
          {
            "capability": "contact_and_approach",
            "fact_text": "The left arm approaches the left pillow from the left side.",
            "slot": "approach_direction",
            "value": "from the left side"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "The left pillow moves upward.",
            "slot": "translation_direction",
            "value": "upward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "The left pillow moves leftward.",
            "slot": "translation_direction",
            "value": "leftward"
          },
          {
            "capability": "trajectory_and_orientation",
            "fact_text": "The left pillow moves upward off the sofa.",
            "slot": "translation_direction",
            "value": "upward"
          },
          {
            "capability": "failure_and_recovery",
            "fact_text": "The left arm makes repeated grasp attempts on the left pillow while it lies on the seat.",
            "slot": "retry",
            "value": "repeated grasp attempts"
          },
          {
            "capability": "failure_and_recovery",
            "fact_text": "The repeated grasp attempts on the left pillow eventually lead to it being lifted and leaned against the left armrest.",
            "slot": "recovery_result",
            "value": "eventually lifted and leaned against the left armrest"
          },
          {
            "capability": "failure_and_recovery",
            "fact_text": "The left arm makes repeated grasp attempts on the left pillow while it leans against the armrest.",
            "slot": "retry",
            "value": "repeated grasp attempts"
          },
          {
            "capability": "body_motion",
            "fact_text": "The robot base translates laterally to the right.",
            "slot": "base_motion",
            "value": "translate laterally to the right"
          }
        ],
        "qas": [
          {
            "question": "What color is the pillow that both arms grasp from the sides before placing it upright against the rear backrest?",
            "options": [
              "beige",
              "white",
              "yellow",
              "green"
            ],
            "answer": "beige",
            "capability": "target_object",
            "mode": "conflict"
          },
          {
            "question": "While the left arm keeps the long beige pillow shaking in mid-air for 6 seconds, what is the pillow's orientation?",
            "options": [
              "vertical",
              "horizontal",
              "diagonal",
              "upside down"
            ],
            "answer": "vertical",
            "capability": "trajectory_and_orientation",
            "mode": "conflict"
          },
          {
            "question": "Which part of the long beige pillow does the left arm grasp to stabilize it while the right arm pushes?",
            "options": [
              "upper middle edge",
              "lower middle edge",
              "left edge",
              "top corner"
            ],
            "answer": "upper middle edge",
            "capability": "contact_and_approach",
            "mode": "conflict"
          },
          {
            "question": "After shaking the long beige pillow in mid-air, where does the left arm place it?",
            "options": [
              "leftmost sofa seat",
              "rightmost sofa seat",
              "rear backrest",
              "floor beside the sofa"
            ],
            "answer": "rightmost sofa seat",
            "capability": "final_configuration",
            "mode": "conflict"
          },
          {
            "question": "After the pillow is propped upright against the sofa corner, does the left arm get hold of the pillow?",
            "options": [],
            "answer": "no",
            "capability": "action_sequence",
            "mode": "conflict"
          }
        ]
      }
    ],
    "stats": {
      "total_videos": 500,
      "total_atomic_facts": 10816,
      "total_qa_pairs": 1030,
      "capability_dimensions": 10
    },
    "capability_labels": {
      "action_sequence": "Action Sequence",
      "active_actor": "Active Actor",
      "target_object": "Target Object",
      "initial_configuration": "Initial Configuration",
      "final_configuration": "Final Configuration",
      "contact_and_approach": "Contact & Approach",
      "trajectory_and_orientation": "Trajectory & Orientation",
      "body_motion": "Body Motion",
      "object_interaction": "Object Interaction",
      "failure_and_recovery": "Failure & Recovery"
    }
  },
  "vla_results": {
    "placeholder": true
  }
};