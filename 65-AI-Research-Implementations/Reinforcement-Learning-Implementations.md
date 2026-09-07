# Reinforcement Learning Implementations

> Single-file, transparent, and reproducible implementations of core deep reinforcement learning algorithms.

## 🎯 What to Learn

- CleanRL: High-quality, single-file implementations of deep reinforcement learning algorithms (PPO, DQN, SAC, DDPG) with PyTorch
- OpenAI Spinning Up: High-quality educational resources, clear explanations, and reference code for modern deep RL
- Stable-Baselines3 (SB3): Reliable, production-ready implementations of reinforcement learning algorithms
- Proximal Policy Optimization (PPO): Clipped surrogate objective, Generalized Advantage Estimation (GAE), and value loss
- Soft Actor-Critic (SAC): Off-policy actor-critic with maximum entropy reinforcement learning
- Logging telemetry, tracking episodic returns, and benchmarking RL algorithms across Atari and MuJoCo

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CleanRL](https://github.com/vwxyzjn/cleanrl)
  - Type: Single-File RL Implementations
  - Language: English
  - Level: Intermediate
  - Why recommended: The cleanest, most readable reinforcement learning library in the world, featuring self-contained single-file implementations with zero nested abstractions and verified benchmark parity.

### 🎓 Courses

- [Hugging Face Deep Reinforcement Learning Course](https://huggingface.co/learn/deep-rl-course/unit0/introduction) — Free, highly practical course from Q-learning to PPO and robotic simulation.

### ▶️ YouTube — English

- [Costa Huang / CleanRL: Video Guides & Tutorials (Costa Huang / CleanRL)](https://www.youtube.com/results?search_query=Costa%20Huang%20%2F%20CleanRL%20Costa%20Huang%20%2F%20CleanRL%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Costa Huang / CleanRL
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Costa Huang (creator of CleanRL) systematically reveals the hidden implementation tricks required to make PPO actually work.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Reinforcement Learning: An Introduction by Richard S. Sutton and Andrew G. Barto](http://incompleteideas.net/book/the-book-2nd.html) — The foundational textbook covering dynamic programming, temporal difference learning, and policy gradients.

### 💻 GitHub / Implementations

- [CleanRL](https://github.com/vwxyzjn/cleanrl) — Single-file RL implementations.
- [Spinning Up](https://github.com/openai/spinningup) — Deep RL educational resource by OpenAI.
- [rl-baselines3-zoo](https://github.com/DLR-RM/rl-baselines3-zoo) — Training framework using SB3.

## 📄 Foundational Papers

- [Proximal Policy Optimization Algorithms (PPO)](https://arxiv.org/abs/1707.06347) — Schulman et al. landmark paper introducing the clipped surrogate objective.
- [Soft Actor-Critic: Off-Policy Maximum Entropy Deep Reinforcement Learning with a Stochastic Actor](https://arxiv.org/abs/1801.01290) — Haarnoja et al. paper establishing the standard off-policy continuous control algorithm.

### 🧪 Practice

- [CleanRL PPO Atari Script](https://github.com/vwxyzjn/cleanrl/blob/master/cleanrl/ppo_atari.py) — Run a complete, self-contained 300-line PPO script that learns to play Pong from raw pixels.

### 🛠️ Projects

- [Train a Continuous Control Bipedal Walker with CleanRL SAC](https://github.com/vwxyzjn/cleanrl) — Train a Soft Actor-Critic agent on the Gymnasium BipedalWalker-v3 environment and log performance curves to Weights & Biases.

## 🧭 Recommended Learning Path

1. Study Markov Decision Processes (MDPs): States, actions, transitions, and discount factors.
2. Work through OpenAI Spinning Up key papers and derivations.
3. Read `cleanrl/ppo.py` line-by-line to understand GAE advantage computation and clipped surrogate loss.
4. Train a PPO agent on CartPole and evaluate learning curves.
5. Learn the maximum entropy RL objective and implement Soft Actor-Critic (SAC).

## ⭐ Top 3 Resources

1. CleanRL (Costa Huang)
2. OpenAI Spinning Up (Educational Guide)
3. Hugging Face Deep RL Course

