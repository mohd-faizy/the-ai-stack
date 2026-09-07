# Physics Simulation

> Differentiable and GPU-accelerated physics engines simulate rigid body contact mechanics, fluid dynamics, and soft robotics at millions of steps per second to train physical AI agents.

## 🎯 What to Learn

- Differentiable physics engines and analytical gradients through simulation
- GPU-parallel simulation: Google Brax, Genesis, and NVIDIA PhysX
- MuJoCo contact dynamics and convex optimization formulations
- Taichi: High-performance parallel programming for physical simulations in Python
- Sim-to-real transfer and domain randomization strategies

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Genesis: A Generative Physics Engine for Robotics and AI](https://genesis-embodied-ai.github.io/)
  - Type: Universal Physics Engine & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Genesis is a unified, fully differentiable, GPU-accelerated physics platform capable of simulating rigid bodies, articulated robots, fluids, and soft deformable materials at unprecedented speed.

### 📖 Documentation & References

- [Genesis Documentation](https://genesis-world.readthedocs.io/) — Installation, entity loading, robot kinematics, and GPU simulation guides.
- [Google Brax Documentation](https://brax.readthedocs.io/) — Differentiable physics engine written in JAX, running millions of parallel steps on GPU/TPU.
- [Taichi Lang Documentation](https://docs.taichi-lang.org/) — Productive, high-performance parallel computing language for graphics and physical simulation.

### 🎓 Courses

- [Physics-Based Simulation (SIGGRAPH Course)](https://www.cs.cmu.edu/~baraff/sigcourse/) — David Baraff legendary Carnegie Mellon course on rigid body simulation, contact, and constraints.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Demonstration of Genesis simulating robotic manipulation, fluid splashing, and cloth deformation at GPU speeds.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Physics-Based Animation](https://www.routledge.com/Physics-Based-Animation/Erleben-Sporring-Henriksen-Dohlmann/p/book/9781568814728) — Erleben et al. comprehensive text on numerical integration, collision detection, and penalty methods.

### 💻 GitHub / Implementations

- [Genesis-Embodied-AI/Genesis](https://github.com/Genesis-Embodied-AI/Genesis) — A generative, fully differentiable, GPU-accelerated physics engine for robotics and physical AI.
- [google/brax](https://github.com/google/brax) — Massively parallel physics engine in JAX designed for large-scale reinforcement learning.
- [taichi-dev/taichi](https://github.com/taichi-dev/taichi) — Productive, portable, and performant programming language for physics simulation.

## 📄 Foundational Papers

- [Brax - A Differentiable Physics Engine for Large Scale Robot Learning](https://arxiv.org/abs/2106.13281) — Freeman et al. (Google Brain 2021) demonstrating order-of-magnitude RL speedups with JAX simulation.

### 🧪 Practice

- [Genesis Quickstart Notebooks](https://github.com/Genesis-Embodied-AI/Genesis/tree/main/examples) — Simulate robotic arms grasping objects and fluid pouring in 30 lines of Python.

### 🛠️ Projects

- [Massively Parallel Quadruped Locomotion Policy](https://github.com/google/brax) — Train a quadruped robot to sprint across uneven terrain in 10 minutes on a single GPU using Brax's parallel environment rollouts.

## 🧭 Recommended Learning Path

1. Learn numerical integration: Explicit Euler vs. Semi-Implicit Euler vs. Runge-Kutta.
2. Study impulse-based contact solvers and Linear Complementarity Problems (LCP).
3. Set up Google Brax or Genesis and run 4,096 parallel environments on a single GPU.
4. Train a humanoid locomotion policy using PPO without CPU-GPU bottlenecking.
5. Explore differentiable physics for trajectory optimization using exact analytical gradients.

## ⭐ Top 3 Resources

1. Genesis (Genesis-Embodied-AI)
2. Google Brax (google/brax)
3. Taichi Lang (taichi-dev/taichi)

