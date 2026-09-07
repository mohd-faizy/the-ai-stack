# Manipulation & Grasping

> Robotic manipulation and grasping algorithms enable robots to detect stable 6-DOF grasp poses on novel 3D objects, plan dexterous finger contacts, and execute robust pick-and-place actions.

## 🎯 What to Learn

- 6-DOF Grasp Pose Detection: GraspNet, Contact-GraspNet, and AnyGrasp
- Antipodal grasps, friction cones, and force closure mathematical conditions
- Point cloud processing for grasping: PointNet++ and 3D bounding geometry
- Dexterous multi-fingered hand manipulation (Shadow Hand, Allegro Hand)
- Grasp quality metrics and real-world evaluation benchmarks

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Contact-GraspNet: 6-DoF Grasp Generation from Point Clouds (NVIDIA Research)](https://github.com/NVlabs/contact_graspnet)
  - Type: Seminal Project & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Contact-GraspNet by NVIDIA generates stable 6-DOF grasp candidates directly from raw, unsegmented point clouds in cluttered scenes without requiring known 3D CAD object models.

### 📖 Documentation & References

- [Contact-GraspNet Documentation](https://github.com/NVlabs/contact_graspnet) — Installation, pre-trained weights, and inference on RGB-D camera captures.
- [GraspNet-1Billion Documentation](https://graspnet.net/) — Large-scale benchmark and dataset for general 6-DoF robotic grasp pose detection.
- [AnyGrasp Documentation](https://github.com/graspnet/anygrasp_sdk) — Real-time, open-loop robotic grasping SDK for diverse unknown objects.

### 🎓 Courses

- [Robotic Manipulation (MIT 6.421 / Russ Tedrake)](https://manipulation.csail.mit.edu/) — Russ Tedrake's masterclass textbook and course on kinematics, grasp mechanics, and trajectory optimization.

### ▶️ YouTube — English

- [MIT OpenCourseWare: Video Guides & Tutorials](https://www.youtube.com/@mitocw)
  - Channel: MIT OpenCourseWare
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Russ Tedrake explains contact mechanics, friction cones, and grasp selection algorithms.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Robotic Manipulation: Perception, Planning, and Control](https://manipulation.csail.mit.edu/) — Russ Tedrake free online textbook providing rigorous derivations and Drake code examples.

### 💻 GitHub / Implementations

- [NVlabs/contact_graspnet](https://github.com/NVlabs/contact_graspnet) — Contact-GraspNet: 6-DoF Grasp Generation from Point Clouds.
- [graspnet/graspnet-baseline](https://github.com/graspnet/graspnet-baseline) — Official baseline model implementation for GraspNet-1Billion benchmark.

## 📄 Foundational Papers

- [Contact-GraspNet: Efficient 6-DoF Grasp Generation in Cluttered Scenes](https://arxiv.org/abs/2103.14127) — Sundermeyer et al. (ICRA 2021) seminal paper introducing contact-point parameterization for 6-DoF grasping.
- [GraspNet-1Billion: A Large-Scale Benchmark for General Object Grasping](https://arxiv.org/abs/2005.05652) — Fang et al. (CVPR 2020) landmark benchmark containing over 1 billion annotated grasps.

### 🧪 Practice

- [Drake Robotic Manipulation Online Exercises](https://manipulation.csail.mit.edu/exercises.html) — Interactive Jupyter notebooks solving kinematics, grasp selection, and trajectory optimization.

### 🛠️ Projects

- [Autonomous Cluttered Bin Picking Robot](https://github.com/NVlabs/contact_graspnet) — Connect an Intel RealSense depth camera to Contact-GraspNet, extract candidate grasps for overlapping items in a bin, and execute pick-and-place with a robot arm.

## 🧭 Recommended Learning Path

1. Learn the physics of contact: normal forces, Coulomb friction, and force closure.
2. Capture RGB-D point clouds using depth cameras (Intel RealSense, ZED).
3. Deploy Contact-GraspNet to predict 6-DOF gripper poses directly from 3D point clouds.
4. Filter predicted grasp poses against robot workspace limits using inverse kinematics (IK).
5. Execute collision-free pick-and-place trajectories using MoveIt 2 or Drake.

## ⭐ Top 3 Resources

1. Contact-GraspNet (NVIDIA Research)
2. MIT Robotic Manipulation (Russ Tedrake)
3. GraspNet-1Billion (graspnet.net)

