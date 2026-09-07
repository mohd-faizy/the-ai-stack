# Simulation Frameworks

> Simulation Frameworks provide fast, rigid-body physics engines and sensor rendering pipelines that allow reinforcement learning agents and autonomous robots to experience millions of hours of interaction safely in software.

## 🎯 What to Learn

- Rigid body dynamics, contact mechanics, and collision detection
- MuJoCo (Multi-Joint dynamics with Contact) modeling and XML specification
- NVIDIA Isaac Sim and GPU-accelerated simulation (PhysX, Omniverse)
- Hardware-accelerated simulations in JAX (Brax, Genesis)
- Sim-to-real transfer techniques and Domain Randomization (DR)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [MuJoCo Documentation (Google DeepMind)](https://mujoco.readthedocs.io/)
  - Type: Official Engine & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: MuJoCo (acquired and open-sourced by Google DeepMind) is the premier physics engine for robotics research, biomechanics, and reinforcement learning benchmarks.

### 📖 Documentation & References

- [MuJoCo Documentation](https://mujoco.readthedocs.io/) — Comprehensive guide to kinematics, sensors, actuators, and Python bindings.
- [NVIDIA Isaac Sim Docs](https://docs.omniverse.nvidia.com/isaacsim/latest/index.html) — Robotics simulation application and synthetic data generation tool built on Omniverse.
- [CARLA Simulator Docs](https://carla.readthedocs.io/) — Open-source autonomous driving simulator built on Unreal Engine.

### 🎓 Courses

- [Robotics Simulation & Sim-to-Real (Stanford CS 237A)](https://web.stanford.edu/class/cs237a/) — Stanford course on physical robot dynamics, numerical simulation, and control.

### ▶️ YouTube — English

- [Google DeepMind: Video Guides & Tutorials](https://www.youtube.com/@DeepMind)
  - Channel: Google DeepMind
  - Language: English
  - Type: Lecture / Talk
  - Level: Intermediate
  - Why: Overview of MuJoCo's physics engine architecture, contact solver, and Python integration.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Modern Robotics: Mechanics, Planning, and Control](http://modernrobotics.org/) — Kevin Lynch and Frank Park foundational textbook on kinematics and dynamics.

### 💻 GitHub / Implementations

- [google-deepmind/mujoco](https://github.com/google-deepmind/mujoco) — Multi-Joint dynamics with Contact physics engine by DeepMind.
- [google/brax](https://github.com/google/brax) — Differentiable, GPU-accelerated rigid body physics simulation in JAX.
- [carla-simulator/carla](https://github.com/carla-simulator/carla) — Open-source simulator for autonomous driving research.

## 📄 Foundational Papers

- [MuJoCo: A physics engine for model-based control](https://ieeexplore.ieee.org/document/6386109) — Todorov, Erez, and Tassa (IROS 2012) seminal paper introducing MuJoCo's convex contact formulation.
- [Brax - A Differentiable Physics Engine for Large Scale Rigorous Robot Learning](https://arxiv.org/abs/2106.13281) — Freeman et al. (Google Brain 2021) introducing JAX-based parallel physics simulation.

### 🧪 Practice

- [MuJoCo Python Quickstart](https://github.com/google-deepmind/mujoco/blob/main/python/mujoco/tutorial.ipynb) — Interactive tutorial on creating bodies, rendering cameras, and running RL control loops.

### 🛠️ Projects

- [Bipedal Locomotion Simulation & Sim-to-Real Transfer](https://github.com/google-deepmind/mujoco) — Train a simulated bipedal robot to walk over uneven terrain with domain randomization, ready for transfer to physical hardware.

## 🧭 Recommended Learning Path

1. Learn basic physics simulation concepts: integration methods (Euler, Runge-Kutta) and contact constraints.
2. Build a multi-link pendulum robot model in MuJoCo using XML syntax.
3. Interface MuJoCo with Gymnasium to train a robotic control policy via PPO.
4. Implement Domain Randomization (varying mass, friction, and sensor noise) to bridge the reality gap.
5. Explore Isaac Sim or Brax to scale environment rollouts to tens of thousands of parallel steps on GPU.

## ⭐ Top 3 Resources

1. MuJoCo (Google DeepMind)
2. NVIDIA Isaac Sim
3. Modern Robotics (Lynch & Park)

