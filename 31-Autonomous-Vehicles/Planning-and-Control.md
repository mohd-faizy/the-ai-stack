# Planning & Control

> Planning and Control algorithms calculate smooth, collision-free, dynamically feasible trajectories and command low-level actuators (steering angle, motor torque) to guide autonomous vehicles along desired paths.

## 🎯 What to Learn

- Hierarchical planning: Route planning -> Behavioral decision-making -> Motion trajectory planning
- Frenét coordinate frame representations (s-d coordinates along road reference lines)
- Model Predictive Control (MPC) and Linear Quadratic Regulators (LQR) for lateral path tracking
- Longitudinal control: PID controllers for speed tracking and distance keeping
- Benchmarking planners: nuPlan and CommonRoad evaluation suites

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CommonRoad: Composable Benchmarks for Motion Planning on Roads](https://commonroad.in.tum.de/)
  - Type: Official Benchmark & Platform
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: CommonRoad (Technical University of Munich) is the premier academic benchmark and Python platform for developing, validating, and testing motion planning algorithms in safety-critical driving scenarios.

### 📖 Documentation & References

- [CommonRoad Documentation](https://commonroad.in.tum.de/docs) — Tutorials on road network XML schemas, trajectory verification, and collision checkers.
- [nuPlan Documentation](https://www.nuscenes.org/nuplan) — World's first large-scale planning benchmark for autonomous driving by Motional.

### 🎓 Courses

- [Motion Planning for Self-Driving Cars (Univ. of Toronto / Coursera)](https://www.coursera.org/learn/motion-planning-self-driving-cars) — Comprehensive course on Frenét frames, obstacle avoidance, and Model Predictive Control.

### ▶️ YouTube — English

- [Autonomous Driving Lectures: Video Guides & Tutorials (Autonomous Driving Lectures)](https://www.youtube.com/results?search_query=Autonomous%20Driving%20Lectures%20Autonomous%20Driving%20Lectures%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Autonomous Driving Lectures
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear mathematical walkthrough of converting Cartesian coordinates to Frenét frames for trajectory sampling.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Optimal Control and Estimation](https://store.doverpublications.com/0486665798.html) — Robert Stengel classic text on Kalman filtering, linear quadratic regulators, and dynamic programming.

### 💻 GitHub / Implementations

- [CommonRoad/commonroad-search](https://github.com/CommonRoad/commonroad-search) — Motion planning algorithms (A*, lattice planners, RRT*) for autonomous vehicles in Python.
- [motional/nuplan-devkit](https://github.com/motional/nuplan-devkit) — The official devkit for the nuPlan dataset and planning benchmark.

## 📄 Foundational Papers

- [Optimal Trajectory Generation for Dynamic Street Scenarios in a Frenét Frame](https://ieeexplore.ieee.org/document/5509799) — Werling et al. (ICRA 2010) landmark paper establishing quintic polynomial sampling in Frenét frames for highway driving.
- [nuPlan: A benchmark for autonomous driving planning](https://arxiv.org/abs/2106.11810) — Caesar et al. (Motional 2021) definitive benchmark for closed-loop and open-loop motion planning.

### 🧪 Practice

- [CommonRoad Interactive Tutorials](https://commonroad.in.tum.de/tutorials) — Jupyter notebooks implementing trajectory generation and checking constraint satisfaction.

### 🛠️ Projects

- [Model Predictive Control (MPC) Path Tracker in Python](https://github.com/AtsushiSakai/PythonRobotics#model-predictive-control) — Implement a non-linear MPC controller that steers a simulated vehicle along a high-speed racing line while respecting actuator acceleration limits.

## 🧭 Recommended Learning Path

1. Understand the kinematic bicycle model: wheelbase, slip angle, and steering limits.
2. Convert road reference lines into Frenét coordinates (longitudinal distance $s$, lateral offset $d$).
3. Generate smooth trajectories using quintic (5th-order) polynomials to minimize jerk.
4. Implement a Model Predictive Controller (MPC) using CVXPY or CasADi to track the generated path.
5. Evaluate trajectory compliance and collision avoidance in CommonRoad scenarios.

## ⭐ Top 3 Resources

1. CommonRoad (TUM)
2. nuPlan Benchmark (Motional)
3. Optimal Trajectory Generation in a Frenét Frame (Werling et al.)

