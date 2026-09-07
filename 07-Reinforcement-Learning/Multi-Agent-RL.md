# Multi-Agent RL

> Multi-Agent Reinforcement Learning (MARL) studies systems where multiple autonomous agents learn concurrent policies in shared cooperative, competitive, or mixed environments.

## 🎯 What to Learn

- Game theoretic foundations: Nash equilibria, Pareto optimality, and Markov games
- Cooperative vs competitive vs zero-sum multi-agent settings
- Non-stationarity problem: why independent Q-learning fails when other agents are updating simultaneously
- Centralized Training with Decentralized Execution (CTDE) paradigm
- Value factorization: VDN (Value-Decomposition Networks) and QMIX (monotonic value factorization)
- Multi-Agent Actor-Critic: MADDPG (Multi-Agent Deep Deterministic Policy Gradient) and MAPPO
- Multi-agent simulation platforms: PettingZoo and StarCraft Multi-Agent Challenge (SMAC)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PettingZoo: Multi-Agent Reinforcement Learning (Farama Foundation)](https://pettingzoo.farama.org/)
  - Type: Environment Suite & API Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: PettingZoo is the multi-agent standard equivalent to Gymnasium, providing uniform APIs for cooperative and adversarial multi-agent games.

### 📖 Documentation & References

- [PettingZoo Documentation](https://pettingzoo.farama.org/) — Official guides for multi-agent games (Atari, Butterfly, Classic, MPE).
- [Ray RLlib Multi-Agent Guide](https://docs.ray.io/en/latest/rllib/rllib-env.html#multi-agent-and-hierarchical) — Production guide for scaling multi-agent training across distributed clusters.

### 🎓 Courses

- [Multi-Agent Reinforcement Learning: Foundations and Modern Approaches (Albrecht, Christianos, Schäfer)](https://www.marl-book.com/) — Free comprehensive academic textbook and online curriculum on modern MARL.

### ▶️ YouTube — English

- [DeepMind: Video Guides & Tutorials](https://www.youtube.com/@DeepMind)
  - Channel: DeepMind
  - Language: English
  - Type: Lecture
  - Level: Intermediate to Advanced
  - Why: Technical explanation of Centralized Training with Decentralized Execution (CTDE) and value factorizations.

### ▶️ YouTube — Hindi / Hinglish

- [Reinforcement Learning Crash Course in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbMK0_fdp0DZHZKm4Q1slAB)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh explains MDP, Bellman equations, Q-learning, and policy gradients in Hinglish.


### 📚 Books

- [Multi-Agent Reinforcement Learning: Foundations and Modern Approaches](https://www.marl-book.com/) — Free open textbook covering game theory, deep MARL, and coordination.

### 💻 GitHub / Implementations

- [PettingZoo](https://github.com/Farama-Foundation/PettingZoo) — Multi-agent RL API.
- [OpenSpiel](https://github.com/google-deepmind/open_spiel) — Multi-agent game theory framework.
- [MARLlib](https://github.com/Replicable-MARL/MARLlib) — Multi-agent RL library.
- [EPyMARL](https://github.com/uoe-agents/epymarl) — Extended multi-agent RL algorithms.

### 🧪 Practice

- [StarCraft Multi-Agent Challenge (SMAC)](https://github.com/oxwhirl/smac) — The gold-standard benchmark for cooperative multi-agent unit micro-management.

### 🛠️ Projects

- [Cooperative Multi-Drone Pursuit-Evasion Simulator](https://pettingzoo.farama.org/) — Train a team of predator drones using QMIX to surround and capture evading prey in PettingZoo.

## 🧭 Recommended Learning Path

1. Understand normal-form games, payoff matrices, and Nash equilibria.
2. Explore why independent learning suffers from non-stationarity in multi-agent environments.
3. Master Centralized Training with Decentralized Execution (CTDE).
4. Implement QMIX, ensuring the joint Q-value is monotonic with respect to individual agent Q-values.
5. Deploy MAPPO (Multi-Agent PPO) on the StarCraft Multi-Agent Challenge (SMAC).

## ⭐ Top 3 Resources

1. [PettingZoo (Farama Foundation)](https://pettingzoo.farama.org/) — The standard multi-agent simulation API for reinforcement learning.
2. [MARL Textbook (Albrecht et al.)](https://www.marl-book.com/) — The definitive, modern comprehensive textbook on multi-agent RL.
3. [QMIX Paper (Rashid et al.)](https://arxiv.org/abs/1803.11485) — The landmark paper on monotonic value factorization in cooperative MARL.

