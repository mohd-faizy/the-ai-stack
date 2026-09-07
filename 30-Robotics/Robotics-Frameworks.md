# Robotics Frameworks

> Robotics frameworks provide real-time inter-process communication, hardware device abstraction, kinematics solvers, and safety architectures for physical robot arms and mobile bases.

## 🎯 What to Learn

- ROS 2 (Robot Operating System): DDS middleware, nodes, topics, services, actions, and QoS profiles
- MoveIt 2: Motion planning, inverse kinematics (IK), collision avoidance, and trajectory execution
- Hardware abstraction: ros2_control, CAN bus, and EtherCAT communication
- Isaac ROS: Hardware-accelerated visual SLAM and perception on NVIDIA Jetson
- Micro-ROS: Running ROS 2 on microcontrollers (ESP32, STM32)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ROS 2 Documentation (Robot Operating System)](https://docs.ros.org/en/rolling/)
  - Type: Official Operating System & Docs
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: ROS 2 is the ubiquitous global standard for robotics software engineering, providing real-time deterministic communication, lifecycle node management, and massive industry adoption.

### 📖 Documentation & References

- [ROS 2 Official Documentation](https://docs.ros.org/en/rolling/) — Exhaustive tutorials on installation, concepts, CLI tools, and C++/Python client libraries.
- [MoveIt 2 Documentation](https://moveit.picknik.ai/) — The robotics manipulation framework for planning, kinematics, and control.
- [Isaac ROS Documentation](https://nvidia-isaac-ros.github.io/) — Hardware-accelerated ROS 2 packages for perception, visual odometry, and navigation.

### 🎓 Courses

- [ConstructSim: ROS 2 Basics & Navigation](https://www.theconstruct.ai/) — World-class interactive simulation platform for learning ROS 2 and robotics hands-on.

### ▶️ YouTube — English

- [Articulated Robotics: Video Guides & Tutorials (Articulated Robotics)](https://www.youtube.com/results?search_query=Articulated%20Robotics%20Articulated%20Robotics%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Articulated Robotics
  - Language: English
  - Type: Course
  - Level: Beginner to Intermediate
  - Why: The best video tutorial series explaining ROS 2 concepts, URDF robot modeling, and navigation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [A Systematic Approach to Learning Robot Programming with ROS](https://www.routledge.com/) — Wyatt Newman comprehensive textbook on kinematic modeling and motion control with ROS.

### 💻 GitHub / Implementations

- [ros2/ros2](https://github.com/ros2/ros2) — The Robot Operating System (ROS) 2 core repositories.
- [moveit/moveit2](https://github.com/moveit/moveit2) — The MoveIt 2 motion planning framework for ROS 2.

## 📄 Foundational Papers

- [Robot Operating System 2: Design, architecture, and uses in the wild](https://www.science.org/doi/10.1126/scirobotics.abm6074) — Macenski et al. (Science Robotics 2022) definitive architectural paper detailing ROS 2.

### 🧪 Practice

- [ROS 2 TurtleBot 3 Simulation](https://emanual.robotis.com/docs/en/platform/turtlebot3/simulation/) — Drive a virtual mobile robot in Gazebo and map environments using SLAM.

### 🛠️ Projects

- [Autonomous Navigation and Pick-and-Place Robot](https://moveit.picknik.ai/) — Construct a complete ROS 2 robot system that navigates using Nav2, identifies objects with an RGB-D camera, and plans pick-and-place trajectories with MoveIt 2.

## 🧭 Recommended Learning Path

1. Install ROS 2 (Humble or Jazzy) on Ubuntu.
2. Learn core ROS 2 communication concepts: publishers, subscribers, services, and action servers.
3. Create a URDF (Unified Robot Description Format) model of a 6-DOF robotic arm.
4. Use MoveIt 2 to solve inverse kinematics and generate collision-free joint trajectories.
5. Interface your ROS 2 nodes with physical servo motors via ros2_control.

## ⭐ Top 3 Resources

1. ROS 2 (ros.org)
2. MoveIt 2 (moveit.picknik.ai)
3. Articulated Robotics YouTube Channel

