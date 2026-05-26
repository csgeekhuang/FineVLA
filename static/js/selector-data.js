const SELECTOR_DATA = [
  {
    "name": "Bridge",
    "samples": [
      {
        "sample_id": "bridge-39043",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "Place the red spoon near the steel pan.",
        "human_review": [
          "Grasp the handle of the red spoon located on the left side of the countertop from above.",
          "Pick up the red spoon by lifting it vertically off the wooden surface.",
          "Move the spoon diagonally forward-right towards the steel pan.",
          "Place the spoon on the wooden surface adjacent to the steel pan.",
          "Release the spoon and retract the gripper upwards."
        ]
      },
      {
        "sample_id": "bridge-21804",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "move the yellow knife near the mettalic pot",
        "human_review": [
          "Grasp the yellow knife by its handle from above while it rests on the left stovetop burner.",
          "Lift the knife vertically off the stovetop surface.",
          "Move the knife diagonally forward-right towards the metallic pot containing a chicken wing.",
          "Place the knife on the countertop surface immediately to the left of the metallic pot.",
          "Release the grip on the knife handle and retract the arm upwards."
        ]
      },
      {
        "sample_id": "bridge-21562",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "move the blue spoon between sink and stove",
        "human_review": [
          "Grasp the blue spoon by its handle from above, positioning the gripper over the center of the handle.",
          "Lift the blue spoon vertically off the stove surface.",
          "Move the blue spoon diagonally forward-right towards the gap between the stove and the sink.",
          "Orient the spoon with its handle parallel to the right stove edge.",
          "Place the blue spoon lying flat in the space between the stove edge and the sink basin."
        ]
      },
      {
        "sample_id": "bridge-21377",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "move the blue spoon to the right burner",
        "human_review": [
          "Grasp the blue spoon by its handle from above.",
          "Lift the blue spoon vertically.",
          "Move the blue spoon diagonally forward-left towards the right burner.",
          "Place the blue spoon on the right burner with the spoon facing up."
        ]
      },
      {
        "sample_id": "bridge-37384",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "Drops a wooden block on another wooden block",
        "human_review": [
          "Grasp the beige wooden block at the top of the left stack from above.",
          "Lift the beige block vertically.",
          "Move the held beige block horizontally to align it directly above the green block.",
          "Lower the beige block onto the top surface of the green block to stack them.",
          "Release the grip on the beige block and retract the arm upwards."
        ]
      },
      {
        "sample_id": "bridge-37071",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "Put the metal pan on the blue cloth.",
        "human_review": [
          "Grasp the metal pan on the right by its right rim from above.",
          "Lift the metal pan vertically off the wooden surface.",
          "Move the metal pan backward over the purple cloth.",
          "Lower the metal pan onto the center of the purple cloth. During the motion, the pan pulls the cloth slightly to the left.",
          "Release the grip and retract the arm upwards."
        ]
      },
      {
        "sample_id": "bridge-45061",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "moves the silver spoon into the brown pot",
        "human_review": [
          "Grasp the red-handled silver spoon by its handle from above.",
          "Lift the spoon vertically off the table surface.",
          "Move the spoon horizontally to the right toward the brown pot.",
          "Position the spoon horizontally across the top of the brown pot, resting on its rim.",
          "Release the spoon on the brown pot, leaving it lying flat."
        ]
      },
      {
        "sample_id": "bridge-44948",
        "dataset": "Bridge",
        "robot_type": "widowx",
        "instruction_raw": "Move cube on top of cube with hole",
        "human_review": [
          "Grasp the cube located at the front of the table from above.",
          "Pick up the cube by lifting it vertically off the wooden surface, while during the movement it touches the adjacent wooden stick, causing the stick to roll back slightly.",
          "Move the cube forwards and slightly right to align it over the cube with a hole in the center.",
          "Place the cube onto the cube with a hole, lowering it so the cube sits over the bottom cube.",
          "Release the gripper to leave the cube stacked securely on the cube with a hole."
        ]
      }
    ]
  },
  {
    "name": "RoboMIND V1",
    "samples": [
      {
        "sample_id": "robomindv1-piled_on_stack_blue_block_on_pink_block-98",
        "dataset": "RoboMIND V1",
        "robot_type": "franka_3rgb",
        "instruction_raw": "putthe blue cube up on the purple cube",
        "human_review": [
          "Grasp the blue cube from above using the robot gripper.",
          "Lift the blue cube vertically off the white table surface.",
          "Move the blue cube horizontally to the left, positioning it directly above the pink cube.",
          "Lower the blue cube to place it securely on top of the pink cube.",
          "Release the blue cube and retract the gripper upwards."
        ]
      },
      {
        "sample_id": "robomindv1-chili_peppers_are_placed_on_a_ceramic_plate-136",
        "dataset": "RoboMIND V1",
        "robot_type": "franka_3rgb",
        "instruction_raw": "Chili peppers are placed on a ceramic plate",
        "human_review": [
          "The right arm grasp the green pepper on the right of the table .Move the green chili pepper held by the right gripper horizontally to the left towards the brown square plate.",
          "Open the gripper to release the chili pepper, leaving it lying flat on the plate.",
          "Retract the robotic arm upwards and away from the plate."
        ]
      },
      {
        "sample_id": "robomindv1-put_the_steamed_buns_on_a_ceramic_plate-93",
        "dataset": "RoboMIND V1",
        "robot_type": "franka_3rgb",
        "instruction_raw": "Put the steamed buns on a ceramic plate",
        "human_review": [
          "Move the black gripper from the center towards the steamed bun place it on closer side of right edge of the table.",
          "Grasp the steamed bun from above, positioning the fingers around its sides.",
          "Lift the steamed bun vertically and transport it slightly downwards and to the right towards the brown ceramic plate.",
          "Lower the steamed bun onto the surface of the ceramic plate.",
          "Release the grip on the steamed bun and retract the arm upwards away from the plate."
        ]
      },
      {
        "sample_id": "robomindv1-241022_side_pull_close_drawer_1-122",
        "dataset": "RoboMIND V1",
        "robot_type": "franka_3rgb",
        "instruction_raw": "Close the upper drawer from the right side.",
        "human_review": [
          "Move the robotic arm down from above towards the open drawer panel situated behind the white tray.",
          "Push the top edge of the vertical drawer panel from the right forward to close it flat against the surface.",
          "Move the robotic arm upwards to retract from the closed drawer."
        ]
      },
      {
        "sample_id": "robomindv1-place_plate_table_241211_12-100",
        "dataset": "RoboMIND V1",
        "robot_type": "tienkung_gello_1rgb",
        "instruction_raw": "pick plate from rack and place on table",
        "human_review": [
          "Grasp the white plate at the front of the rack from the right side using the right robot arm.",
          "Lift the white plate vertically off the wooden rack.",
          "Move the plate forward and slightly to the left over the empty table surface.",
          "Lower the plate gently onto the center of the table surface, in front left of the rack, keeping it flat.",
          "Release the grip on the plate and retract the arm."
        ]
      },
      {
        "sample_id": "robomindv1-pick_up_the_sweet_potato_from_the_table_1122-106",
        "dataset": "RoboMIND V1",
        "robot_type": "ur_1rgb",
        "instruction_raw": "pick up the sweet potato from the table",
        "human_review": [
          "Move the robotic arm towards the purple sweet potato located at the right of the table.",
          "Grasp the sweet potato from above by closing the gripper around it.",
          "Pick up the sweet potato by lifting it vertically off the table surface.",
          "Move the held sweet potato to the left towards the green vegetable."
        ]
      },
      {
        "sample_id": "robomindv1-pick_up_yellow_pepper_from_plate_copy_1734079773826-122",
        "dataset": "RoboMIND V1",
        "robot_type": "ur_1rgb",
        "instruction_raw": "pick up the yellow pepper from the plate",
        "human_review": [
          "Grasp the yellow pepper resting on the beige plate from the left side.",
          "Pick up the yellow pepper by lifting it vertically off the plate.",
          "Move the yellow pepper horizontally to the left towards the orange object."
        ]
      },
      {
        "sample_id": "robomindv1-pick_up_red_pepper_from_plate-75",
        "dataset": "RoboMIND V1",
        "robot_type": "ur_1rgb",
        "instruction_raw": "pick up the red pepper from the plate",
        "human_review": [
          "Approach the red pepper on the beige plate from the upper left and close the gripper to grasp it.",
          "Pick up the red pepper by lifting it vertically upwards from the plate.",
          "Move the red pepper backward and to the left, positioning it above and to the back of the yellow pepper."
        ]
      }
    ]
  },
  {
    "name": "RoboMIND V2",
    "samples": [
      {
        "sample_id": "robomindv2-add_sauce_to_pink_cup_with_both_arms-158",
        "dataset": "RoboMIND V2",
        "robot_type": "franka",
        "instruction_raw": "add sauce to pink cup with both arms",
        "human_review": [
          "Grasp the purple cup with left gripper located on the left side of the table from above.",
          "Lift the purple cup and transport it to the center of the table.",
          "Place the purple cup upright onto the digital scale. Release the left gripper and retract the right gripper upwards.",
          "Grasp the blue-capped bottle with right gripper located on the right side of the table.",
          "Move the blue bottle to position it directly above the purple cup.",
          "Tilt the blue bottle downwards towards the cup opening to simulate pouring sauce.",
          "Move the blue bottle away and place it back on the right side of the table. Release the right gripper and retract the right gripper upwards."
        ]
      },
      {
        "sample_id": "robomindv2-attach_green_and_red_cubes_to_black_cube-121",
        "dataset": "RoboMIND V2",
        "robot_type": "franka",
        "instruction_raw": "attach green and red cubes to black cube",
        "human_review": [
          "Grasp the green cube on the far left and the blue cube on the far right simultaneously from above using the two upper robotic arms.",
          "The right arm tries two times to grasp the blue cube.",
          "Lift both cubes off the gray table surface.",
          "Move both arms towards the black cube located at the center while the right arm rotating the gripper to move that.",
          "Place the green cube immediately to the left of the black cube and the blue cube immediately to the right of the black cube.",
          "Release the grip on both cubes, leave them aligned in a row with the black cube.",
          "Retract the arms upwards and away from the workspace."
        ]
      },
      {
        "sample_id": "robomindv2-assemble_nut_and_screw_with_arms_on_table-281",
        "dataset": "RoboMIND V2",
        "robot_type": "franka",
        "instruction_raw": "assemble nut and screw with arms on table",
        "human_review": [
          "Move the  left robotic arm towards the orange square nut located near the center of the blue mat.",
          "The right robotic arm grips the orange bolt from above, moves it to the left, then places it at the center of the blue mat and releases.",
          "Grasp the orange nut from above using the left robotic arm's black gripper.",
          "Lift the nut and translate it horizontally to the right using the left robotic arm.",
          "Place the nut down onto the bolt, release the grip, and retract the left robotic arm backward."
        ]
      },
      {
        "sample_id": "robomindv2-left_arm_holds_basket_right_arm_returns_cookies-10",
        "dataset": "RoboMIND V2",
        "robot_type": "agilex_mobile",
        "instruction_raw": "left arm holds basket right arm returns cookies",
        "human_review": [
          "Grasp the handle of the blue basket on the clear container with the left arm.",
          "Move the blue basket forward along the aisle using the left arm until it is positioned in front of the shelf section containing yellow drink bottles.",
          "Lower the blue basket a bit.",
          "While the left arm holds the basket steady, reaches in with the right arm and grasps the Chocofello cookie box inside.",
          "Lift the cookie box out of the basket vertically with the right arm.",
          "Move the cookie box to the shelf and place it upright to the right of the yellow drink bottles.",
          "Release the gripper and retract the right arm."
        ]
      },
      {
        "sample_id": "robomindv2-open_drawer_and_place_block_inside_with_arms-187",
        "dataset": "RoboMIND V2",
        "robot_type": "franka",
        "instruction_raw": "open drawer and place block inside with arms",
        "human_review": [
          "Use the top-left robot arm to grasp the handle of the blue drawer from above.",
          "Pull the drawer open to reveal the interior of the box.",
          "Move the top-right robot arm towards the small blue block located on the right side of the table.",
          "Grasp the blue block from above with the right arm's gripper.",
          "Lift the block and transport it backward and to the left, positioning it over the open drawer.",
          "Lower the block into the drawer and release the grip to place it inside."
        ]
      },
      {
        "sample_id": "robomindv2-pour_fried_egg_into_plate_with_right_arm-39",
        "dataset": "RoboMIND V2",
        "robot_type": "agilex",
        "instruction_raw": "pour fried egg into plate with right arm",
        "human_review": [
          "Grasp the right rim of the white plate  from above with right arm.",
          "Pick up and hover the plate in the center of the stovetop.",
          "Hold the plate steady with the right arm while the fried egg is poured with left arm from the frying pan on the left.",
          "Place the frying pan on the left side of stove with left arm. Release the left arm and retract the left arm.",
          "Pick up the plate with the fried egg from the right rim with right arm.",
          "Place the plate back down on the stovetop surface and release the grip, retract the arm upwards."
        ]
      },
      {
        "sample_id": "robomindv2-grab_stapler_and_paper_to_desk_for_stapling-1",
        "dataset": "RoboMIND V2",
        "robot_type": "agilex_mobile",
        "instruction_raw": "grab stapler and paper to desk for stapling",
        "human_review": [
          "Move the left robotic arm to grasp the black stapler from the left side towards the wooden desk surface. Move the right robotic arm to grasp the white paper on the table from the right side",
          "Both robotic arms turn left together.",
          "Place the stapler on the left side of the desk, orienting it diagonally, and release the grip.",
          "Move the right robotic arm holding the white paper from the right side towards the desk surface.",
          "Stay grasping the paper flat adjacent to the right side of the stapler with right arm and move the paper to insert into left stapler.",
          "Press the stapler to staple the paper with left arm.",
          "Retract both robotic arms upwards and away from the placed objects."
        ]
      },
      {
        "sample_id": "robomindv2-place_pink_and_blue_markers_in_matching_cups-293",
        "dataset": "RoboMIND V2",
        "robot_type": "franka",
        "instruction_raw": "place pink and blue markers in matching cups",
        "human_review": [
          "Grasp the purple marker on the left and the orange marker on the right from above using the respective robot grippers.",
          "Lift both markers vertically off the blue table surface.",
          "Move the left arm carrying the purple marker towards the purple cup and the right arm carrying the orange marker towards the orange cup.",
          "Lower and insert the markers into their respective cups.",
          "Release the grip on the markers inside the cups and retract both arms upwards away from the table."
        ]
      }
    ]
  },
  {
    "name": "DROID",
    "samples": [
      {
        "sample_id": "droid_robointer-87",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the brown box on the table",
        "human_review": [
          "Lowers the gripper from above towards the small open brown box situated at the bottom right of the table, aligning the fingers with its side lid of the box to grasp it.",
          "Moves to the right to close it, then pushes downwards to fully close it.",
          "During the push, the box is caused displacement.",
          "Retract the arm."
        ]
      },
      {
        "sample_id": "droid_robointer-209",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the green block from the table",
        "human_review": [
          "Descends from the upper right to position the gripper directly above the small green block located to the right front of the black bowl, then closes fingers to grasp the object.",
          "Transfers the grasped green block horizontally to the left back till the center above of the black bowl.",
          "Lowers the green block vertically into the lower inner rim of the black bowl, releases it to rest at the bottom, and retracts the arm upwards away from the table."
        ]
      },
      {
        "sample_id": "droid_robointer-208",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up a packaging bag from the desktop",
        "human_review": [
          "Lowers the gripper from above to grasp the packaging bag closest to the blue object lying on the black countertop.",
          "Moves the grasped packaging bag forwards and to the left to position it directly above the white bowl.",
          "Opens the gripper to release the packaging bag inside the white bowl.",
          "Retract the arm slightly."
        ]
      },
      {
        "sample_id": "droid_robointer-22",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the soft pineapple from the table",
        "human_review": [
          "Descends from above and front to grasp above the side of the yellow soft pineapple situated between the watermelon slice and the orange basket, then lifts it vertically off the table.",
          "Translates the held yellow soft pineapple to the left and lowers it towards the table surface on the right of the light blue toaster.",
          "Repeatedly places the yellow soft pineapple on the table surface immediately to the right of the light blue toaster, then releases the grip, during the process, the paw touches the orange basket, causing the orange basket to move, and retracts vertically upward."
        ]
      },
      {
        "sample_id": "droid_robointer-237",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the white rope from the table",
        "human_review": [
          "Approaches the white rope coiled on the table from the left, grasps a segment, and lifts it vertically upwards off the surface.",
          "Moves the grasped white rope horizontally to the right and positions it directly above the blue box's opening for placement.",
          "Lowers the white rope vertically into the blue box, opens the gripper to release it inside, and retracts the arm upward and to the left."
        ]
      },
      {
        "sample_id": "droid_robointer-391",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the white mug on the table",
        "human_review": [
          "Approach the white mug from the upper right background, lower the black gripper vertically from above, and close fingers around the top rim to grasp it.",
          "Rotate the white mug clockwise .",
          "Slide the white mug across the white table surface, moving it from the close foreground towards the far background.",
          "Lower the white mug to the upper right section of the table, open the black gripper to release it upright on the surface, and retract upwards."
        ]
      },
      {
        "sample_id": "droid_robointer-324",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the black object from the table",
        "human_review": [
          "Approaches the black object on the right side of the white table from above and grasps its midsection with the gripper.",
          "Lifts the black object completely off the white table and translates it diagonally rightwards and forwards.",
          "Lowers the black object onto the white table surface, on the right of the yellow object, then releases the grasp and retracts the arm."
        ]
      },
      {
        "sample_id": "droid_robointer-185",
        "dataset": "DROID",
        "robot_type": "franka_robotiq",
        "instruction_raw": "pick up the thing in the green bowl",
        "human_review": [
          "Approach the white container on the right side of the shelf from above, lower the gripper inside to grasp the brown object from the green bowl, and lift it vertically.",
          "During the grasp process, the white container and the green bowl was moved .",
          "Move the brown object downwards and backward, position it directly over the round white cup situated next to the yellow ball, and lower inside to release.",
          "Lift vertically upwards the gripper and retract backwards to the left."
        ]
      }
    ]
  },
  {
    "name": "RT-1",
    "samples": [
      {
        "sample_id": "rt1-RT-1-40405",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move coke can near green rice chip bag",
        "human_review": [
          "Grasp the red coke can on the right side of the table from above.",
          "Lift the can vertically to clear the table surface.",
          "Move the can backward and to the left towards the green rice chip bag.",
          "Place the can upright on the table on the right of the green rice chip bag."
        ]
      },
      {
        "sample_id": "rt1-RT-1-68920",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "pick 7up can from top shelf of fridge",
        "human_review": [
          "Move the robotic arm towards the top shelf, aligning with the white bottle in the third basket from the left.",
          "Grasp the white bottle by its body from the front.",
          "Lift the bottle vertically out of the fridge shelf.",
          "Move the bottle downwards and slightly left towards the plastic bin below."
        ]
      },
      {
        "sample_id": "rt1-RT-1-29100",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "pick 7up can from middle shelf of fridge",
        "human_review": [
          "Move the robotic arm forward and downward towards the top shelf of the open fridge.",
          "Align the open gripper with the second white 7up can from the left on the top wire rack.",
          "Grasp the can firmly around its cylindrical body from the front.",
          "Retract the arm slightly backwards to dislodge and pull the can from the rack."
        ]
      },
      {
        "sample_id": "rt1-RT-1-56182",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move green can near green rice chip bag",
        "human_review": [
          "Grasp the green soda can positioned on the right side of the table from the front-right side.",
          "Pick up the green can by lifting it vertically off the table surface.",
          "Move the can backward and to the left across the table towards the green rice chip bag.",
          "Place the can upright on the table surface at the right of the green rice chip bag.",
          "Release the grip on the can and retract the arm rightward slightly."
        ]
      },
      {
        "sample_id": "rt1-RT-1-84977",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move green jalapeno chip bag near 7up can",
        "human_review": [
          "Grasp the green jalapeno chip bag on its center from the right side.",
          "Move the bag forward and slightly right across the table surface towards the 7up can located in the background.",
          "Release the bag to the front right of the 7up can, leaving it lying flat on the table."
        ]
      },
      {
        "sample_id": "rt1-RT-1-68100",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move green can near green jalapeno chip bag",
        "human_review": [
          "Grasp the green can lying on the right side of the table from above.",
          "Lift the green can and move it backward and to the left towards the green chip bag.",
          "Place the green can back right of  the green chip bag, lying on its side.",
          "Release the green can and retract  the arm upwards."
        ]
      },
      {
        "sample_id": "rt1-RT-1-17194",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move rxbar blueberry near green jalapeno chip bag",
        "human_review": [
          "Grasp the rxbar blueberry located on the front-right side of the table from above using the gripper by its middle front-back edge.",
          "Lift the rxbar slightly off the table surface.",
          "Move the rxbar horizontally to the left towards the green jalapeno chip bag.",
          "Place the rxbar flat on top of the green jalapeno chip bag, leaning against on its right side, causing the green chip bag to shake slightly.",
          "Release the rxbar."
        ]
      },
      {
        "sample_id": "rt1-RT-1-11166",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move green jalapeno chip bag near orange can",
        "human_review": [
          "Grasp the green jalapeno chip bag from the right side using the gripper fingers.",
          "Lift the bag vertically off the table surface.",
          "Move the bag slightly backward and to the left, then forward towards the back left corner where the orange can is positioned.",
          "Place the bag down on the table surface in front of the orange can.",
          "Release the grip on the bag and retract the arm slightly."
        ]
      }
    ]
  },
  {
    "name": "BC-Z",
    "samples": [
      {
        "sample_id": "bc_z-BC_Z-15037",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Grasp the blue sponge above the ceramic cup from above",
          "Lift the sponge off the wooden board.",
          "Move the sponge to the right and right .",
          "Lower the sponge into the ceramic cup and release the grip."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-2494",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic bowl",
        "human_review": [
          "Move the arm from the center area backward and to the left to approach the white sponge.",
          "Grasp the white sponge from above using the gripper fingers.",
          "Lift the sponge off the table surface.",
          "Move the sponge forward and to the right, positioning it over the ceramic bowl."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-9322",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the ceramic cup in the ceramic bowl",
        "human_review": [
          "Grasp the white ceramic cup located to the left of the green bowl from above.",
          "Lift the cup vertically upward to clear the table surface.",
          "Move the cup to the right to align it over the green bowl.",
          "Lower the cup carefully into the center of the green bowl.",
          "Release the grip to leave the cup resting inside the bowl."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-38560",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "move the arm in a circular motion",
        "human_review": [
          "Move the robotic arm to hover above the wooden table, aligned with the clear plastic cup.",
          "Move the end-effector down and to the left, approaching the plastic cup closely.",
          "Sweep the arm up and to the right, tracing a circular arc away from the cup.",
          "Move the arm back down and to the left to complete the circular loop.",
          "Repeat the circular motion sequence multiple times without grasping or displacing the cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-5534",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "drag the ceramic bowl in a circle",
        "human_review": [
          "Drag the bowl  to the right across the table surface.",
          "Try turning it clockwise about 2 times",
          "The bowl touched the surface of the table .",
          "Drag the bowl counterclockwise about 2 times"
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-31301",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the bottle in the ceramic bowl",
        "human_review": [
          "Grasp the white bottle lying horizontally on the table near the blue sponge by closing the gripper around its mid-section from above.",
          "Pick up the bottle by lifting it vertically off the wooden table surface, during the grasping the battle, touching the dark object and colorful object.",
          "Move the bottle horizontally to the left, translating it from the center of the table towards the orange ceramic bowl.",
          "Place the bottle into the orange ceramic bowl by lowering it, the bowl is moving,touching the object and moving until it rests inside the bowl."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-12825",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the ceramic cup over the eraser",
        "human_review": [
          "Grasp the upside-down white ceramic cup on the left side of the table from above.",
          "Lift the cup vertically.",
          "Move the cup horizontally to the right towards the black marker.",
          "Place the upside-down cup over the black marker so that the marker cannot be seen."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-5611",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the pepper in the ceramic bowl",
        "human_review": [
          "Grasp the red pepper lying on the table from above.",
          "Lift the pepper vertically off the table surface.",
          "Move the pepper  to the upper-right towards the ceramic bowl.",
          "Lower the pepper into the ceramic bowl."
        ]
      }
    ]
  },
  {
    "name": "Galaxea",
    "samples": [
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-73",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The left arm lowers toward the floor, approaches the dark cloth from above, grasps it with its gripper, and lifts it upward and moves backward slightly while the right arm remains idle.",
          "The robot moves leftward slightly.",
          "The right arm approaches the front-left edge of the carpet from above, positions its gripper over the corner, and repeatedly grasps it firmly to prepare for lifting.",
          "The left arm, holding a gray towel, performs a wiping motion on the wooden floor by dragging the towel in short back-and-forth strokes across the surface near the base of the right arm, then lifts the towel and moves it to the left and backward slightly.",
          "The right arm drags the lifted front-left edge of the carpet downward and to the left across the wooden floor, releases it, presses it down by its front left side and retracts away.",
          "Left arm lowers the towel from above, releases it onto the wooden floor to the front left of the carpet and retracts, leaving the towel lying flat.",
          "The robot leans backward and ascends, returns to its initial standby position."
        ]
      },
      {
        "sample_id": "galaxea-Open_And_Close_The_Nightstand_To_Place_Items_20250802_012-10",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "open and close the nightstand to place items",
        "human_review": [
          "The left arm approaches the nightstand drawer from the front, attaches to the top surface with its gripper from above, and drags it backward toward itself until fully extended.",
          "Left arm approaches the white air conditioner remote from above, grasps it near its center using a top-down grip, lifts it vertically approximately 5 cm, then moves backward and downward and rightward to place it flat inside the open drawer.",
          "Left arm pushes the open drawer of the nightstand closed by applying force to the front edge of the drawer, moving it inward approximately 30 cm until fully shut.",
          "Both arms retract upward and backward approximately 30 cm from the nightstand area."
        ]
      },
      {
        "sample_id": "galaxea-Pick_And_Place_Items_On_The_Bread_Shelf_20250701_003-610",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "pick and place items on the bread shelf",
        "human_review": [
          "The right arm approaches the white snack bag on the right side of the second shelf from above, grasps its front right side using its gripper repeatedly, lifts it slightly upward, and then moves it out of frame backward and to the right.",
          "Right arm holds the white packaged item in the air and moves it slightly leftward and forward, then places it back onto the second shelf from above in a lying flat orientation, to the right of the left white items.",
          "Release the gripper, then retract the right arm away."
        ]
      },
      {
        "sample_id": "galaxea-Retrieving_And_Placing_Items_Inside_The_TV_Cabinet_20250805_012-9",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "retrieving and placing items inside the tv cabinet",
        "human_review": [
          "The left arm approaches behind the left edge of the closed left drawer, and pulls outward to fully open the drawer.",
          "The right arm approaches the white remote control from above, grasps it near its center using a top-down grip, lifts it vertically, then moves it backward and diagonally downward-left into the open drawer, releasing it to lie flat next to the black remote.",
          "Right arm pushes the left drawer closed by contacting its front edge and moving forward until flush with the cabinet frame.",
          "The left arm approaches behind the top edge of the closed left drawer, and pulls outward to fully open the drawer.",
          "The right arm approaches the white remote control from above, grasps it near its center using a top-down grip, lifts it vertically out of the drawer, moves it diagonally forward-right over the table surface, and places it flat on the table with its buttons facing upward.",
          "The right arm pushes the left drawer closed by contacting its front edge and moving forward until fully shut."
        ]
      },
      {
        "sample_id": "galaxea-Take_Out_The_Laundry_From_The_Washing_Machine20250618_001-40",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "take out the laundry from the washing machine20250618",
        "human_review": [
          "Left arm approaches the left washing machine door from the front, contacts the handle with its open gripper, and pulls the door open outward to the left, then uses its closed gripper to push the top edge of the door to open it further.",
          "The right arm grasps a piece of denim clothing from inside the washing machine drum and lifts it upward, moving it toward the laundry basket positioned in front of the machine, then releases it flat into the laundry basket.",
          "Left arm closes the washing machine door by pushing it from the left side toward the right with closed gripper, rotating it counterclockwise around its hinge until fully sealed."
        ]
      },
      {
        "sample_id": "galaxea-Turn_On_And_Off_Central_Air_Conditioning_System_20250623_002-95",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "turn on and off central air conditioning system",
        "human_review": [
          "The right arm approaches the wall-mounted air conditioning switch from the front, positions its gripper near the lower half of the device, and presses the rightmost button to activate it.",
          "The right arm approaches the second button from the right and presses it for three times to adjust the temperature setting from 21.5°C to 23°C before retracting slightly.",
          "The right arm approaches the air conditioning control panel from the front-right, positions its gripper over the power button area, and presses the rightmost button to turn off the system."
        ]
      },
      {
        "sample_id": "galaxea-Turn_On_And_Turn_Off_The_Air_Conditioner_20250724_010-16",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "turn on and turn off the air conditioner",
        "human_review": [
          "Left arm approaches the Hitachi air conditioner control panel from the left side, positioning its gripper near the lower-left circular button to press it.",
          "The left arm approaches the Hitachi air conditioner control panel from the front-left, using its gripper to press the temperature increase button located on the right side of the panel, raising the set temperature from 20°C to 22°C.",
          "Left arm retarcts to the original resting position.",
          "Left arm approaches the Hitachi air conditioner control panel from the left, positions its gripper near the power button on the lower-left of the display, presses it to turn off the air conditioner, then retracts backwards and downwards."
        ]
      },
      {
        "sample_id": "galaxea-Use_The_Drawer_To_Store_The_Hair_Dryer20250625_002-53",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "use the drawer to store the hair dryer20250625",
        "human_review": [
          "The right arm approaches the gap of the bottom drawer from the right side, grasps it with the gripper, and pulls it outward to fully open the drawer.",
          "The right arm grasps the white hair dryer on the countertop from above, lifts it vertically, moves it downward and slightly to the left, then places it horizontally into the open drawer to the right of the box, with the nozzle facing toward the back-left corner.",
          "The right arm grasps the front edge of the bottom drawer from above and pushes it inward with a smooth linear motion until fully closed, aligning flush with the cabinet frame.",
          "The right arm approaches the gap of the bottom drawer from the front, grasps it with the gripper, and pulls it outward to open the drawer.",
          "The right arm approaches the hair dryer from above, grasps it by its handle, lifts it vertically out of the drawer, then moves it forward and places it back on the right side of the sink area, maintaining an upright orientation.",
          "The right arm applies force to the front edge of the bottom sink drawer, pushing it inward until fully aligned and closed with the cabinet frame."
        ]
      }
    ]
  },
  {
    "name": "RH20T",
    "samples": [
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-55095",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the photo frame from the table",
        "human_review": [
          "Pick up the wooden photo frame by grasping the front left corner repeatedly from above, lifting it upward off the table and rotating it slightly counter-clockwise by 45 degrees.",
          "Move the wooden photo frame backward and to the left above the black table,",
          "Lower the wooden photo frame onto the black stand until the bottom edge rests on the stand's support lip on the front left of the black table.",
          "Release the gripper to leave the wooden photo frame tilted upright on the photo frame stand."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-63942",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the tissue paper from the table",
        "human_review": [
          "Lowers its gripper from above to grasp the sides edge of the white tissue pack, then drags the object backward and to the left across the table surface, during the movement the tissue pack rotates clockwise by around 90 degrees.",
          "Lifts the grasped white tissue pack vertically, translates it to the left, and places it flat on the table surface directly to the right of the metal wire holder.",
          "Grasps the top surface of the white tissue pack from above, lifts it vertically off the table, and places it onto the metal wire holder; releases the gripper and retracts the arm upward."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-17538",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "press the switch of the first power strip",
        "human_review": [
          "Press the small white switch located on the upper-right green and brown section of the colorful board by moving the end-effector vertically downward from above.",
          "Try repeatedly to press the buttons of the small white switch in sequence from the back to the front by lowering the end-effector of the gripper.",
          "Retract the gripper upward off the small white switch."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-59347",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the glass cup from the countertop",
        "human_review": [
          "Grasps the clear glass cup standing on the top tier of the yellow stand on the left, with the gripper approaching from above to secure the cup body.",
          "Lifts the secured clear glass cup from the stand and transfers it towards the wooden stand grasped by human hand.",
          "Lowers the inverted clear glass cup grasped by the base down to the top circular shelf of the wooden stand, while a human hand stabilizes the stand on the right, leaving the inverted glass hanging on the the left side of the top shelf of the wooden stand after release; retracts the arm upward."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-54904",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the object from the black box",
        "human_review": [
          "Picks up the big wooden block from the black box on the left from above.",
          "Moves the wooden block from the black box on the left to the position above the center of the light blue box on the right.",
          "Lowers the wooden block vertically from above into the light blue box on the right, placing it onto the other blocks inside, then releases the grip and retracts upward."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-38843",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the plate from the green table",
        "human_review": [
          "Descend vertically from above to align the gripper with the center of the white plate resting at the upper right of the wooden stand, making contact to initiate the pick-up.",
          "Lift the white plate from above, then move backward towards the dish rack.",
          "Release the white plate onto the dish rack, ensuring it rests flat, then retract the gripper vertically upwards away from the object.",
          "Grasp the right rim of the white plate from the right side, rotate it 90 degrees counterclockwise to an upright position, then insert it vertically downward into the dish rack slot.",
          "Release the gripper and retract the arm upward."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-42781",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the power cord from the table",
        "human_review": [
          "Approaches the black plug at the front left of the white power strip from above, grasps the plug head, and lifts it vertically off the table surface and pick up the power cord.",
          "Maneuvers the black plug held in the gripper towards the white power strip and positions it above the leftmost socket.",
          "Lowers the black plug held in the gripper vertically, aligning the prongs with the leftmost socket on the white power strip, and pushes down firmly to fully seat the plug.",
          "Retract the arm upwards."
        ]
      },
      {
        "sample_id": "rh20t_robointer-RH20T-RoboInter-59357",
        "dataset": "RH20T",
        "robot_type": "rh20t",
        "instruction_raw": "pick up the glass cup on the table",
        "human_review": [
          "Repeatedly grasps the upside-down glass cup's bootom rim from above and lifts the glass cup off the white surface.",
          "Moves the gripper with the glass cup forward and to the left.",
          "Aligns the gripper to the top circular tier of the wooden stand on the back left and place the glass cup onto the top circular tier of the wooden stand by lowering it from above while grasping the bottom sides.",
          "Releases the glass cup to rest upside down on the tier and retract the arm upward."
        ]
      }
    ]
  },
  {
    "name": "RoboCoin",
    "samples": [
      {
        "sample_id": "robocoin-AgiBot-g1_picks_up_battery_b-292",
        "dataset": "RoboCoin",
        "robot_type": "ruantong_a2d",
        "instruction_raw": "using a robotic arm to pick up battery.",
        "human_review": [
          "Right arm grasps and lifts the grey power supply with bundled wires from the second grid from the back in the middle of the cardboard box compartment using a top-down grip and transfers it to the right.",
          "Right arm places the power supply on the back left of the transparent box and releases the object once positioned, during the movement causing other grey power to move.",
          "Retract the arm."
        ]
      },
      {
        "sample_id": "robocoin-R1_Lite_move_the_position_of_the_black_marker-16",
        "dataset": "RoboCoin",
        "robot_type": "galaxea_r1_lite",
        "instruction_raw": "put the black marker in the designated position.",
        "human_review": [
          "The scene remains static with no robot arms visible; the white marker lies horizontally on the back side of the table, and all other objects remain undisturbed in their initial positions.",
          "Left arm reaches from the left side towards the white marker on the back of the table, positioning the gripper from above.",
          "Grasp the marker but failed, the marker moves forward slightly.",
          "Try repeatedly to close around the marker's midsection to secure a grasp.",
          "Left arm moves backward and to the left, places the marker pen on the table to the left of the banana, using the left gripper to position it horizontally.",
          "Left arm releases the marker, the marker moves leftward slightly by touching with the banana and retracts upward and away from the table to its resting position.",
          "The workspace remains static with no robot arms visible, confirming the marker remains undisturbed in its designated position."
        ]
      },
      {
        "sample_id": "robocoin-Cobot_Magic_twist_bottle_cap-364",
        "dataset": "RoboCoin",
        "robot_type": "agilex_cobot_decoupled_magic",
        "instruction_raw": "loosen the cap of the green tea bottle.",
        "human_review": [
          "Left arm approaches the upright Peach Oolong Tea bottle from the left side and grasps its mid-section, closing the gripper fingers around the body to secure it.",
          "Left arm lifts the Peach Oolong Tea bottle vertically off the table surface to adjust its position for cap manipulation.",
          "Left arm stabilizes the bottle upright while the right arm positions its gripper above the white bottle cap.",
          "Right arm places the white bottle cap on the table to the right of the bottle, while the left arm holds the bottle upright, right arm turn the bottle cap counterclockwise to open it.",
          "Left arm places the Peach Oolong Tea bottle back onto the table surface and opens its gripper to release.",
          "Both arms retract from the workspace, with the left arm moving leftward away from the bottle and the right arm moving rightward and upward away from the cap, leaving both objects stationary on the table."
        ]
      },
      {
        "sample_id": "robocoin-Cobot_Magic_twist_bottle_cap-710",
        "dataset": "RoboCoin",
        "robot_type": "agilex_cobot_decoupled_magic",
        "instruction_raw": "tighten the cap of the yili changqing bottle.",
        "human_review": [
          "Left arm places the white bottle upright on the table, retracts slightly, and returns to secure a steady hold on the bottle body.",
          "Right arm grasps the white bottle cap from above and rotates it to unscrew it, while the left arm maintains the hold to stabilize the bottle.",
          "Right arm releases the white bottle cap on the table to the right of the bottle and retracts upward and to the left away from the workspace.",
          "Left arm releases the white bottle onto the table and begins retracting upward.",
          "Left arm completes retraction to the left and exits the frame away from the bottle and cap."
        ]
      },
      {
        "sample_id": "robocoin-RMC-AIDA-L_fold_towel-19",
        "dataset": "RoboCoin",
        "robot_type": "realman_rmc_aidal",
        "instruction_raw": "take out a white towel and unfold it.",
        "human_review": [
          "Right arm extends from the right and holds the upper-right position of the towel stationary to stabilize it, while the left arm approaches from the left and grasps the bottom-left corner of the towel.",
          "Left arm pulls the bottom-left corner of the folded towel diagonally downward and leftward to unfold the fabric.",
          "Both arms release the towel and retract outward to their resting positions, leaving the fully unfolded towel lying flat on the white table."
        ]
      },
      {
        "sample_id": "robocoin-Cobot_Magic_pour_drink-954",
        "dataset": "RoboCoin",
        "robot_type": "agilex_cobot_decoupled_magic",
        "instruction_raw": "fill the paper cup completely with red wine.",
        "human_review": [
          "Both arms remain stationary above the workspace, leaving the collection of mugs, cups, and beverage bottles undisturbed on the white table.",
          "Left arm extends from the left side to grasp the grey cup situated at the front-left, closing its gripper around the handle and side of the cup, and lifts it up.",
          "Right arm grasps the green Sprite bottle at the neck from a top-down approach, securing the object while it remains upright on the table, and lifts it up.",
          "Right arm tilts the green sprite bottle to the left to pour liquid into the grey cup, while the left arm lifts and holds the cup steady underneath.",
          "Left arm places the grey cup upright on the white table surface in the front-left area, positioning it slightly forward of the black mug and to the left of the central cluster of bottles.",
          "Right arm places the green Sprite bottle upright on the table to the right of the white mug, releasing the neck and retracting upward.",
          "Both arms retract upward and backward away from the workspace, leaving the dark grey cup and green Sprite bottle standing upright on the table."
        ]
      },
      {
        "sample_id": "robocoin-RMC-AIDA-L_organise_the_document_bag-451",
        "dataset": "RoboCoin",
        "robot_type": "realman_rmc_aidal",
        "instruction_raw": "open the red document bag with right hand.",
        "human_review": [
          "The right arm grasp the bag the right side, left arm at the left end and right arm at the right end, and lift the bag slightly off the white table surface, the left arm grasp the zipper to pull the right to left to close the bag.",
          "Both arms place the transparent plastic bag flat on the white table surface, releasing it centrally with the red zipper strip aligned horizontally at the bottom.",
          "The both arms arm retracts upward and to the left away from the placed bag."
        ]
      },
      {
        "sample_id": "robocoin-RMC-AIDA-L_organise_the_document_bag-253",
        "dataset": "RoboCoin",
        "robot_type": "realman_rmc_aidal",
        "instruction_raw": "open the red document bag with left hand.",
        "human_review": [
          "Left arm grasps the bottom-left corner of the red zipper seal from above, then lifts the bag slightly off the table surface.",
          "Right arm grasps the red zipper track on the transparent plastic bag from the right and pulls upward to close it, while the left arm grasps the bag body from the left.",
          "Right arm places the transparent plastic bag with the red zipper flat on the white table surface and releases it.",
          "Both arms retract upward and outward away from the central workspace to their resting positions."
        ]
      }
    ]
  },
  {
    "name": "BC-Z (Rotation)",
    "samples": [
      {
        "sample_id": "bc_z-BC_Z-20457",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place brush in paper cup",
        "human_review": [
          "Move the robot arm from the right side of the table towards the left side where the brush and cup are located.",
          "Grasp the handle of the brush lying on the table from above using the gripper, while rotating the brush counterclockwise by 45 degrees.",
          "Pick up the brush by lifting it vertically off the table surface.",
          "Move the brush forwards to position it directly above the white paper cup.",
          "Insert the head of the brush into the white paper cup by lowering it and releasing the grip."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-18051",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place apple in paper cup",
        "human_review": [
          "Grasp the red apple located on the right side of the table by closing the gripper from above.",
          "Pick up the apple by lifting it vertically off the wooden surface.",
          "Move the apple horizontally to the left while rotating the gripper clockwise about 90 degrees in the vertical plane, passing over the green tray towards the white paper cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-1051",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place eraser in plastic cup",
        "human_review": [
          "Grasp the eraser placed on the table next to the orange bowl from above.",
          "Lift the eraser and move it horizontally to the left across the table towards the green plastic cup.",
          "During the movement, the gripper rotates counterclockwise to make it parallel to the tabletop.",
          "Lower the eraser into the small plastic cup located at the bottom left corner and release."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-38560",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "move the arm in a circular motion",
        "human_review": [
          "Move the robotic arm to hover above the wooden table, aligned with the clear plastic cup.",
          "Move the end-effector down and to the left, approaching the plastic cup closely.",
          "Sweep the arm up and to the right, tracing a circular arc away from the cup.",
          "Move the arm back down and to the left to complete the circular loop.",
          "Repeat the circular motion sequence multiple times without grasping or displacing the cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-37882",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place brush in table surface",
        "human_review": [
          "Grasp the handle of the white brush inside the green tray from above.",
          "Lift the  white brush vertically out of the tray.",
          "Move the brush horizontally to the closer side.",
          "The gripper rotates counterclockwise by a certain angle, and places the brush obliquely on the wooden tabletop under the tray."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-19773",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place banana in tray",
        "human_review": [
          "Grasp the yellow banana located in the center of the table from above.",
          "Lift the yellow banana vertically off the table surface.",
          "During the gripping process, the gripper rotates counterclockwise by a certain angle, causing the other end of the yellow banana to touch the brown block below.",
          "Move the yellow banana horizontally backward toward the yellow tray.",
          "Lower the fruit into the yellow tray.",
          "Release the fruit by opening the gripper."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-37756",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place brush in tray",
        "human_review": [
          "Grasp the handle of the dark brush lying onto the rim of the purple bowl from the right side, causing the movement of the bowl.",
          "Lift the brush vertically to clear the table surface.",
          "Translate the brush to the left towards the green tray, while rotating it counterclockwise by 45 degrees.",
          "Lower the brush into the green tray adjacent to the white cup.",
          "Release the brush handle and retract the gripper."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-13811",
        "dataset": "BC-Z (Rotation)",
        "robot_type": "google_robot",
        "instruction_raw": "place brush in metal cup",
        "human_review": [
          "Grasp the black brush lying on the right side of the wooden board by its handle from above.",
          "Move the brush backward . Grasps the brush, rotate the brush clockwise and it move the towl to the back . Pick up the brush by lifting it vertically off the table surface.",
          "Rotate the brush counter clockwise to orient it vertically with the handle pointing downwards.",
          "Move the brush horizontally to the left towards the green tray.",
          "Place the brush into the green tray and touch the back rim of the green tray. Move the blue sponge is shake .",
          "Release the grip and the brush keep upright."
        ]
      }
    ]
  },
  {
    "name": "RDT (Batch 2)",
    "samples": [
      {
        "sample_id": "rdt-pick_power_bank-2",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Put the power bank into the bag.",
        "human_review": [
          "Right arm grasps the black power bank from above around its middle section.",
          "Right arm lifts the power bank vertically upward off the table.",
          "Left arm approaches and grasps the white plastic bag by lightly pressing on its left side.",
          "Both arms coordinate: the right arm moves the power bank horizontally toward the bag opening, while the left arm shifts the bag slightly rightward.",
          "Right arm inserts the power bank clockwise and inserts it into the bag__ opening, aligning it with the interior space.",
          "Right arm releases the power bank inside the bag and retracts upward.",
          "Left arm withdraws from the bag after confirming successful insertion."
        ]
      },
      {
        "sample_id": "rdt-place_object_on_mirror-7",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Place the orange on the center of the mirror.",
        "human_review": [
          "Left arm approaches the blue ball from the left side, moving forward along the desk surface.",
          "Left arm grasps the blue ball by its center side using the gripper.",
          "Left arm lifts the blue ball vertically upwards about 5 centimeters.",
          "Left arm moves the blue ball horizontally to the right while maintaining elevation, panning past the keyboard towards the tablet.",
          "Left arm lowers the blue ball onto the center of the tablet screen acting as a mirror.",
          "Left arm releases the grip, leaving the blue ball resting upright on the reflective surface."
        ]
      },
      {
        "sample_id": "rdt-place_phone-13",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Put the phone on top of the Rubik's Cube.",
        "human_review": [
          "Right arm approaches the black smartphone from above and slightly from the right.",
          "Right gripper closes around the bottom edge of the phone__ back surface to secure a firm grasp.",
          "Right arm lifts the phone vertically about 5 cm off the desk surface.",
          "Right arm moves horizontally to the right by approximately 10 cm, positioning the back of phone touches the top of the Rubik__ Cube.",
          "Right arm lowers the phone gently onto the Rubik cube surface, placing it flat and parallel to the keyboard, immediately to the surface of the Rubik__ Cube.",
          "Right gripper opens and retracts upward, releasing the phone without disturbing its position."
        ]
      },
      {
        "sample_id": "rdt-unwind_charging_cable-16",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Unfold the white charging cable into a straight cable.",
        "human_review": [
          "Right arm approaches the coiled white charging cable from the top right side and grasps one end of the cable loop.",
          "Then left arm approaches from the left side and the right arm passes the data cable to the left arm, with both arms working together.",
          "Both arms lift the cable slightly off the table surface while maintaining grip on opposite ends.",
          "Repeatedly both arms pull horizontally apart _ right arm moves right, left arm moves left _ to unfold and straighten the cable.",
          "Once fully extended, both arms release the straightened cable onto the table surface, laying it flat in a horizontal orientation.",
          "Both arms release their grip and retract upward, leaving the cable lying flat across the desk."
        ]
      },
      {
        "sample_id": "rdt-cover_laptop-18",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Close the lid of the gray laptop.",
        "human_review": [
          "Press the top edge of the gray laptop's lid from above using the left arm.",
          "Close the lid by rotating it downward until it meets the base of the laptop.",
          "Release the grip on the lid after ensuring it is fully closed and aligned with the base.Left arm retracts upwards and leftwards."
        ]
      },
      {
        "sample_id": "rdt-open_laptop-5",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Open the lid of the black laptop.",
        "human_review": [
          "Right arm approaches from the right side and grasps the top-right corner of the black laptop lid with its gripper.",
          "Left arm approaches from the left side and grasps the top-left corner of the black laptop lid with its gripper.",
          "Both arms simultaneously lift and push the lid upward in a synchronized motion, rotating it around the hinge until fully open at approximately 90 degrees.",
          "After release, the laptop screen activates automatically, displaying a sunset wallpaper with time '15:33' centered on screen."
        ]
      },
      {
        "sample_id": "rdt-pick_mask-6",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Put the mask into the mask box.",
        "human_review": [
          "Right arm grasps the packaged black face mask lying flat on the table from above, using its gripper to pinch the center of the package.",
          "Right arm lifts the mask vertically upward approximately 15 cm off the table surface.",
          "Right arm moves horizontally leftward toward the open-top mask box positioned centrally on the desk.",
          "Left arm grasps the top of the mask box to keep it stable.",
          "Right arm angles the mask upright and inserts it into the opening of the mask box, aligning it with the interior cavity.",
          "Right arm releases the mask inside the box, allowing it to settle upright against the inner wall.",
          "Right arm retracts upward and to the right, exiting the frame."
        ]
      },
      {
        "sample_id": "rdt-put_mouse_on_pad-2",
        "dataset": "RDT",
        "robot_type": "aloha",
        "instruction_raw": "Place the black mouse on the black mouse pad.",
        "human_review": [
          "Right arm approaches the black mouse from above and slightly to the right, positioning its gripper around the sides of the mouse.",
          "Right arm grasps the black mouse firmly by its upper body, ensuring secure contact without slipping.",
          "Right arm lifts the mouse vertically upward approximately 10 cm off the desk surface.",
          "Right arm moves horizontally leftward across the desk, transporting the mouse toward the black mouse pad located in the front-left side of the desk (closer to the camera).",
          "Right arm lowers the mouse gently onto the black mouse pad, close to the front-right of the mouse pad, aligning it flat and upright for optimal use.",
          "Right arm releases the mouse completely and retracts upward and backward away from the workspace."
        ]
      }
    ]
  }
];
