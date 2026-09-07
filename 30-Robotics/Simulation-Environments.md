# Simulation Environments

> Robotic simulation environments simulate realistic physics, tactile collisions, and photorealistic sensor rendering to train manipulation and locomotion policies at scale.

## 🎯 What to Learn

- DeepMind MuJoCo: Fast, accurate contact physics for continuous control and biomechanics
- NVIDIA Isaac Sim: GPU-accelerated ray tracing, PhysX physics, and synthetic data generation
- Robosuite & ManiSkill: Standardized manipulation benchmark environments for robot arms
- SAPIEN: Partnet-Mobility simulation for articulated object interaction (doors, drawers)
- Domain Randomization (DR): Randomizing textures, friction, mass, and lighting to cross the reality gap

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MuJoCo Documentation (Google DeepMind)](https://mujoco.readthedocs.io/)
  - Type: Official Simulator & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: MuJoCo (Multi-Joint dynamics with Contact) is the gold standard physics engine for robotics research, offering exceptional numerical stability, speed, and analytical contact formulations.

### 📖 Documentation & References

- [MuJoCo Documentation](https://mujoco.readthedocs.io/) — Complete guide to MuJoCo physics, MJCF XML models, and Python bindings.
- [NVIDIA Isaac Sim Documentation](https://docs.omniverse.nvidia.com/isaacsim/latest/index.html) — Robotics simulation application built on NVIDIA Omniverse.
- [ManiSkill Documentation](https://maniskill.readthedocs.io/) — GPU-accelerated benchmark environment for articulated and general manipulation.

### 🎓 Courses

- [Robotics Simulation & Sim-to-Real (Stanford CS 237A)](https://web.stanford.edu/class/cs237a/) — Stanford course on physical robot dynamics, numerical simulation, and sim-to-real transfer.

### ▶️ YouTube — English

- [Google DeepMind: Video Guides & Tutorials](https://www.youtube.com/@DeepMind)
  - Channel: Google DeepMind
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Clear introduction to building MJCF robot models, adding actuators, and stepping simulations in Python.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Modern Robotics: Mechanics, Planning, and Control](http://modernrobotics.org/) — Kevin Lynch and Frank Park definitive text on forward/inverse kinematics and dynamics.

### 💻 GitHub / Implementations

- [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) — Multi-Joint dynamics with Contact. A general purpose physics engine.
- [haosulab/ManiSkill](https://github.com/haosulab/ManiSkill) — SOTA Open-Source SAPIEN & Isaac Sim manipulation benchmark.
- [ARISE-Initiative/robosuite](https://github.com/ARISE-Initiative/robosuite) — A modular simulation framework for robot learning powered by MuJoCo.

## 📄 Foundational Papers

- [MuJoCo: A physics engine for model-based control](https://ieeexplore.ieee.org/document/6386109) — Todorov, Erez, and Tassa (IROS 2012) seminal paper introducing MuJoCo's convex contact formulation.
- [Closing the Sim-to-Real Loop: Adapting Simulation via Policy Gradients](https://arxiv.org/abs/1810.05687) — Chebotar et al. (RSS 2019) foundational methodology for sim-to-real domain randomization.

### 🧪 Practice

- [MuJoCo Python Tutorial Notebook](https://github.com/google-deepmind/mujoco/blob/main/python/mujoco/tutorial.ipynb) — Hands-on interactive notebook creating joints, bodies, and running RL control loops.

### 🛠️ Projects

- [Sim-to-Real Franka Emika Peg-in-Hole Assembly](https://github.com/haosulab/ManiSkill) — Train a precision peg insertion policy in ManiSkill with domain randomization and evaluate zero-shot transfer.

## 🧭 Recommended Learning Path

1. Understand rigid body equations of motion: mass matrices, Coriolis forces, and joint constraints.
2. Model a Franka Emika Panda robotic arm using MuJoCo MJCF XML format.
3. Interface the simulator with Gymnasium to create a standard `env.step(action)` RL loop.
4. Implement Domain Randomization: randomize link masses, joint damping, and surface friction coefficients.
5. Evaluate trained policies under visual sensor noise to measure sim-to-real robustness.

## ⭐ Top 3 Resources

1. MuJoCo (Google DeepMind)
2. NVIDIA Isaac Sim
3. ManiSkill (haosulab/ManiSkill)

