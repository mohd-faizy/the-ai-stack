# RL Frameworks

> Reinforcement learning frameworks provide robust, battle-tested implementations of on-policy and off-policy algorithms for research and production.

## 🎯 What to Learn

- Markov Decision Processes (MDP): (S, A, P, R, gamma) tuples and Bellman optimality equations
- Model-free vs Model-based RL paradigms
- Value-based algorithms: Deep Q-Networks (DQN), Double DQN, Dueling DQN, and Prioritized Replay
- Policy-based algorithms: REINFORCE, Advantage Actor-Critic (A2C), and Proximal Policy Optimization (PPO)
- Continuous control algorithms: Soft Actor-Critic (SAC) and Twin Delayed DDPG (TD3)
- CleanRL single-file implementations vs Stable-Baselines3 modular object-oriented design
- Scalable distributed RL across clusters with Ray RLlib

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CleanRL: High-Quality Single-File Implementations of Deep RL Algorithms](https://github.com/vwxyzjn/cleanrl)
  - Type: Repository & Documentation
  - Language: English
  - Level: Intermediate
  - Why recommended: CleanRL provides self-contained, single-file implementations of algorithms (PPO, DQN, SAC) with zero abstraction layers, making it the finest codebase for truly understanding RL code.

### 📖 Documentation & References

- [Stable-Baselines3 Documentation](https://stable-baselines3.readthedocs.io/en/master/) — The standard, reliable PyTorch implementation of reinforcement learning algorithms.
- [Ray RLlib Documentation](https://docs.ray.io/en/latest/rllib/index.html) — Industry-grade distributed reinforcement learning library scaling to massive clusters.
- [Spinning Up in Deep RL by OpenAI](https://spinningup.openai.com/) — OpenAI's educational resource for learning deep reinforcement learning.

### 🎓 Courses

- [Berkeley CS285: Deep Reinforcement Learning (Prof. Sergey Levine)](http://rail.eecs.berkeley.edu/deeprlcourse/) — The world's most thorough graduate university course on modern deep RL.
- [David Silver's Reinforcement Learning Course (DeepMind / UCL)](https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ) — The definitive foundational lecture series on MDPs, Bellman equations, and dynamic programming.

### ▶️ YouTube — English

- [David Silver's RL Lecture Series](https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ)
  - Channel: DeepMind
  - Language: English
  - Type: Course
  - Level: Beginner to Intermediate
  - Why: Master MDPs, value iteration, Q-learning, and policy gradients directly from DeepMind's lead researcher.
- [Proximal Policy Optimization (PPO) Explained](https://www.youtube.com/watch?v=5P7I-xPq8u8)
  - Channel: Arxiv Insights
  - Language: English
  - Type: Explainer
  - Level: Intermediate
  - Why: Clear intuitive breakdown of clipped surrogate objective functions and trust regions.

### ▶️ YouTube — Hindi / Hinglish

- [Reinforcement Learning Crash Course in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbMK0_fdp0DZHZKm4Q1slAB)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh explains MDP, Bellman equations, Q-learning, and policy gradients in Hinglish.


### 📚 Books

- [Reinforcement Learning: An Introduction (2nd Edition) by Richard S. Sutton and Andrew G. Barto](http://incompleteideas.net/book/the-book-2nd.html) — The undisputed bible of reinforcement learning, freely available from the authors.

### 💻 GitHub / Implementations

- [Stable-Baselines3](https://github.com/DLR-RM/stable-baselines3) — Reliable RL algorithm implementations.
- [CleanRL](https://github.com/vwxyzjn/cleanrl) — High-quality single-file RL implementations.
- [Ray RLlib](https://github.com/ray-project/ray) — Scalable reinforcement learning library.
- [TorchRL](https://github.com/pytorch/rl) — RL library for PyTorch.
- [Tianshou](https://github.com/thu-ml/tianshou) — Elegant RL framework.
- [d3rlpy](https://github.com/takuseno/d3rlpy) — Offline deep reinforcement learning.
- [Dopamine](https://github.com/google/dopamine) — RL research framework by Google.
- [Acme](https://github.com/google-deepmind/acme) — Distributed RL by DeepMind.
- [rlax](https://github.com/google-deepmind/rlax) — RL building blocks in JAX.

### 🧪 Practice

- [Gymnasium LunarLander & CartPole](https://gymnasium.farama.org/environments/box2d/lunar_lander/) — The classic introductory benchmarking sandboxes for training DQN and PPO agents.

### 🛠️ Projects

- [Train an Autonomous Lunar Lander Agent with PPO](https://stable-baselines3.readthedocs.io/) — Train a continuous control agent using Stable-Baselines3 and record evaluation videos.

## 🧭 Recommended Learning Path

1. Study Sutton & Barto Chapters 1-4: states, actions, rewards, returns, and Bellman equations.
2. Implement tabular Q-Learning on FrozenLake, understanding epsilon-greedy exploration.
3. Build Deep Q-Networks (DQN) with replay buffers and target network updates.
4. Derive the Policy Gradient theorem and implement REINFORCE in PyTorch.
5. Study PPO clipped surrogate objective functions and train an agent using CleanRL or Stable-Baselines3.

## ⭐ Top 3 Resources

1. [Sutton & Barto's RL Textbook](http://incompleteideas.net/book/the-book-2nd.html) — The quintessential foundational text on reinforcement learning.
2. [Berkeley CS285 (Sergey Levine)](http://rail.eecs.berkeley.edu/deeprlcourse/) — The finest modern graduate course on deep reinforcement learning.
3. [CleanRL](https://github.com/vwxyzjn/cleanrl) — The cleanest, most readable single-file implementations of deep RL algorithms.

