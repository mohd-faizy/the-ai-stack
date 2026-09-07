# World Model Architectures

> World Model architectures learn compact, latent representations of complex environments, allowing agents to dream imagined futures and learn optimal policies entirely inside simulation.

## 🎯 What to Learn

- The canonical World Model architecture: V (Vision VAE) + M (Memory RNN/Transformer) + C (Controller)
- DreamerV3: Mastering diverse domains (Atari, Minecraft) with fixed hyperparameters via discrete world models
- Diffusion-based world models: DIAMOND and GameNGen (simulating DOOM in real time at 20 FPS)
- Generative interactive simulations: Google Genie and Wayve GAIA-1 for autonomous driving
- Imagination-based policy optimization inside latent state dynamics

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DreamerV3: Mastering Diverse Domains through World Models (Danijar Hafner)](https://danijar.com/project/dreamerv3/)
  - Type: Seminal Project & Reference
  - Language: English
  - Level: Advanced
  - Why recommended: DreamerV3 by Danijar Hafner is the premier open-source world model algorithm, successfully mastering continuous robotics, discrete video games, and Minecraft diamond mining without human data.

### 📖 Documentation & References

- [DreamerV3 Documentation & Code](https://github.com/danijar/dreamerv3) — Official JAX and PyTorch implementations of DreamerV3.
- [DIAMOND Documentation](https://github.com/eloialonso/diamond) — Diffusion for World Modeling: Visual reinforcement learning inside a diffusion world model.
- [GameNGen Research Portal](https://gamengen.github.io/) — Google Research simulating complex game engines (DOOM) entirely via neural diffusion.

### 🎓 Courses

- [Model-Based Reinforcement Learning (UC Berkeley CS 285)](https://rail.eecs.berkeley.edu/deeprlcourse/) — Sergey Levine's graduate course covering dynamics models, planning, and world models.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Deep dive into discrete latent world models, actor-critic learning in imagination, and robustness.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html) — Sutton and Barto classic text covering planning, Dyna architectures, and model-based learning.

### 💻 GitHub / Implementations

- [danijar/dreamerv3](https://github.com/danijar/dreamerv3) — Mastering Diverse Domains through World Models in JAX and PyTorch.
- [eloialonso/diamond](https://github.com/eloialonso/diamond) — Diffusion for World Modeling: A Diffusion Model-Based Agent.

## 📄 Foundational Papers

- [World Models](https://arxiv.org/abs/1803.10122) — Ha and Schmidhuber (NeurIPS 2018) seminal paper introducing training agents entirely inside their own hallucinated dreams.
- [Mastering Diverse Domains through World Models (DreamerV3)](https://arxiv.org/abs/2301.04104) — Hafner et al. (Nature 2023) breakthrough showing a single algorithm mastering 100+ tasks without tuning.
- [Diffusion Models are Real-Time Game Engines (GameNGen)](https://arxiv.org/abs/2408.14837) — Valevski et al. (Google Research 2024) simulating DOOM in real time at 20 FPS with diffusion.

### 🧪 Practice

- [DreamerV3 CartPole & Atari Recipes](https://github.com/danijar/dreamerv3#quickstart) — Train a world model agent on Gym environments and inspect imagined latent rollouts.

### 🛠️ Projects

- [Neural Video Game Simulator in Imagination](https://github.com/eloialonso/diamond) — Train a diffusion world model on player action traces and render an interactive virtual world where actions produce continuous next frames.

## 🧭 Recommended Learning Path

1. Read Ha & Schmidhuber's original 2018 'World Models' paper.
2. Study the Recurrent State-Space Model (RSSM) combining deterministic and stochastic latent states.
3. Understand why learning in imagination eliminates sample-inefficiency on physical robots.
4. Deploy DreamerV3 on a Gymnasium benchmark to observe imagination rollouts.
5. Explore diffusion-based world models (DIAMOND, GameNGen) for high-fidelity visual simulation.

## ⭐ Top 3 Resources

1. DreamerV3 (Danijar Hafner)
2. World Models Seminal Paper (Ha & Schmidhuber)
3. GameNGen (Google Research)

