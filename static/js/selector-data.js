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
        "sample_id": "rt1-RT-1-34586",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "pick 7up can from top shelf of fridge",
        "human_review": [
          "Move the robotic arm towards the left side of the topmost fridge shelf where the 7up cans are located.",
          "Position the open gripper in front of the leftmost 7up can on the shelf.",
          "Grasp the 7up can firmly by its cylindrical body from the front.",
          "Pull the can backward and slightly upward towards the edge of the shelf to begin extraction."
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
        "sample_id": "rt1-RT-1-20675",
        "dataset": "RT-1",
        "robot_type": "google_robot",
        "instruction_raw": "move green jalapeno chip bag near 7up can",
        "human_review": [
          "Grasp the green jalapeno chip bag on its right edge, approaching from the right side.",
          "Move the bag backward and to the left across the table surface towards the 7up can.",
          "Release the bag, pushing the 7up can slightly backward so the bag rests back of the 7up can, then release the grip and retract the arm upwards."
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
        "sample_id": "bc_z-BC_Z-29616",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Move the gripper with the held white sponge slightly backward and to the right towards the white cup located on the right side of the table.",
          "Align the held white sponge with the mouth of the white cup, touching the left rim of the cup and causing it to oscillates a bit during the process.",
          "Lower the gripper to let the bottom of the sponge be at the center of the cup.",
          "Release the grip to drop the sponge into the cup and retract the arm slightly."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-23556",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Grasp the blue sponge located to the right of the white bottle from the right side.",
          "Lift the sponge vertically off the table surface.",
          "Move the sponge horizontally to the left towards the white cup.",
          "Place the sponge inside the white cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-30407",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Move the forward towards the blue sponge located at the further side of the table.",
          "Grasp the blue sponge from above using the gripper fingers.",
          "Pick up the sponge by lifting it off the table surface.",
          "Move the sponge backward, positioning it over the beige cup.",
          "Place the sponge into the cup by lowering it down inside the cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-35548",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Move the arm towards the white sponge located at the back-right edge of the table and grab it by its lower half from the right side using gripper.",
          "Lift the sponge slightly and move it diagonally backwards to the left towards the white cup.",
          "Align the sponge above the ceramic cup and lower it.",
          "Release the sponge, dropping the sponge into the cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-24434",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Move the robotic arm horizontally from the right side towards the white sponge located on the far left of the table.",
          "Grasp the blue sponge from above using the gripper, ensuring a secure hold on its body.",
          "Lift the blue sponge vertically upwards, clearing it from the table surface.",
          "Move the sponge to backward and the right ."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-6222",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Grasp the blue sponge located behind the green bowl, approaching from above and slightly to the right.",
          "Lift the sponge vertically upwards to clear the table surface.",
          "Move the sponge horizontally to the left towards the white cup."
        ]
      },
      {
        "sample_id": "bc_z-BC_Z-22410",
        "dataset": "BC-Z",
        "robot_type": "google_robot",
        "instruction_raw": "place the white sponge in the ceramic cup",
        "human_review": [
          "Lower the robotic arm and grasp the black sponge located to the front right of the cup by its upper part from above.",
          "Pick up the black sponge by lifting it vertically off the wooden table.",
          "Move the black sponge diagonally forward to the left towards the white cup.",
          "Position the blue sponge over the ceramic cup",
          "Release the grip, letting it drop into the ceramic cup."
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
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-85",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The left arm lowers toward the floor, approaches the white crumpled towel from above and slightly to the left, grasps it with its gripper.",
          "The right arm approaches the left edge of the gray carpet from below, uses its gripper to grasp the front left corner, and lifts it upward and slightly to the right, exposing the wooden floor underneath.",
          "The left arm, holding a white towel in its gripper, performs a back-and-forth wiping motion on the wooden floor near the base of the sofa about five times, moving approximately 20 cm horizontally while maintaining light downward pressure.",
          "The right arm lowers the bottom-left corner of the carpet it is holding, places it back to its original position, and presses it twice to smooth the carpet, then the right arm retracts.",
          "The left arm lowers the white towel from above and releases it onto the wooden floor to the left of the rug's front left corner, then the left arm retracts.",
          "The robot retracts from the carpet area toward its initial position above the floor, with no active manipulation or contact occurring during this motion."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-66",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The left arm lowers from above and grasps the edge of a dark cloth lying on the wooden floor near the wall, then lifts it upward.",
          "The right arm approaches the left edge of the carpet from the right side, grasps the corner with its gripper, and begins to lift it diagonally upward and to the right, partially folding the carpet over itself.",
          "The left arm, holding a gray cloth, performs a back-and-forth wiping motion on the wooden floor to the left of the stationary right arm.",
          "The right arm grasps the lifted corner of the carpet from above, drags it downward and to the left across the wooden floor to flatten it back into place, then releases the corner once the carpet lies flat.",
          "The left arm lowers the towel from above and releases it onto the wooden floor to the left of the rug, leaving it lying flat.",
          "The right arm retracts backward and upward, moving away from the carpet edge to return to its initial standby position near the wall socket."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-90",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The left arm lowers toward the floor, approaches a yellow cloth from above near the edge of the rug, grasps it with its gripper, and lifts it upward.",
          "The right arm approaches the left edge of the carpet from above, grasps it with its gripper, grasps repeatedly and lifts the corner upward to expose the wooden floor beneath.",
          "Left arm drags the towel in a diagonal back-and-forth motion across the floor, moving approximately 20 cm to wipe the surface.",
          "The right arm lowers its gripper from above to grasp the lifted edge of the beige carpet, then drags it downward and leftward across the wooden floor to lay it flat, covering the previously exposed area.",
          "The left arm lowers the black-and-yellow cloth from above and releases it onto the wooden floor, positioning it flat just to the left of the rug's edge near the sofa base, then retracts upwards."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-1",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The right arm approaches the yellow cloth lying on the wooden floor to the right of the carpet from above, grasps it with its gripper, and lifts it vertically upward.",
          "The left arm approaches the right edge of the carpet from the side, grasps the corner with its gripper, pulls it slightly to the left, lifts the cloth upward, exposing the wooden floor beneath.",
          "The right arm, holding a yellow cloth, performs a wiping motion on the wooden floor by moving in circles near the edge of the carpet.",
          "Left arm drags the left edge of the gray carpet from right to left across the wooden floor, flattening it back into its original position.",
          "The right arm lowers the yellow cloth from above onto the wooden floor, positioning it to the right of the carpet edge near a white cabinet, and releases it so that it lies flat on the surface.",
          "The robot remains stationary with both arms idle, maintaining its current position without any visible movement or interaction."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-55",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "Left arm approaches the right edge of the carpet from above, grasps it with its gripper, and begins lifting the corner upward to expose the wooden floor beneath.",
          "The right arm approaches the orange towel from above, grasps it with its gripper, and lifts it upward while moving slightly to the left.",
          "The right arm, holding the orange towel, slid it back and forth in a wiping motion across the floor directly beneath it.",
          "The right arm lowers the orange towel from above and releases it onto the wooden floor to the right of the rolled carpet, leaving the cloth lying flat.",
          "Left arm presses the lifted edge of the carpet downward from above, smoothing it flat against the wooden floor with a slight forward drag to restore its original position.",
          "Retract both arms and close the gripper."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-31",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "The right arm approaches the yellow towel lying on the wooden floor from above, grasps it with its gripper, and lifts it upward.",
          "Left arm approaches the bottom-right corner of the white carpet from above, grasps it with its gripper, and begins lifting upward and leftward to expose the wooden floor beneath.",
          "The right arm moves the yellow towel towards the floor underneath the lifted carpet, drags it across the wooden floor in a back-and-forth motion to wipe the surface near the edge of the rug, and then lifts the towel away.",
          "Left arm releases the rug onto the floor and presses the carpet from above.",
          "Right arm places the yellow towel onto the wooden floor by lowering it from above and releasing it flat near the center-right of the visible area."
        ]
      },
      {
        "sample_id": "galaxea-Lift_up_the_carpet_and_wipe_the_floor_20250625_002-59",
        "dataset": "Galaxea",
        "robot_type": "r1lite",
        "instruction_raw": "lift up the carpet and wipe the floor",
        "human_review": [
          "Left arm approaches the bottom right edge of the light gray carpet from above, grasps the corner with its gripper, and lifts it upward and slightly to the left, exposing the wooden floor beneath.",
          "The right arm approaches the yellow towel from above, grasps it with its gripper, and lifts it vertically upward to clear the wooden floor surface.",
          "The right arm, holding a yellow cloth, performs a back-and-forth wiping motion on the wooden floor below the gray carpet, moving approximately 10 cm left and right while maintaining light downward pressure.",
          "Right arm moves the yellow towel rightward and lowers it from above and releases it crumpled on the wooden floor, positioning it near the right edge of the frame while retracting its gripper upward after placement.",
          "Left arm releases the gray carpet from its lifted edge toward the right, laying it flat over the wooden floor to restore coverage.",
          "The right arm moves backward approximately 30 cm along the wooden floor toward its starting position near the white cabinet."
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
  }
];
