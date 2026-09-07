# 07 - Reinforcement Learning

> Sequential decision making, Markov Decision Processes (MDP), policy gradients, model-based RL, RLHF for foundation model alignment, and multi-agent coordination.

## 🌐 Overview & Architectural Importance

Reinforcement Learning (RL) is the science of optimal decision-making under uncertainty. By rewarding agents for goal attainment through trial-and-error environment interaction, RL has mastered complex games (AlphaGo, Dota), enabled robotic locomotion, and critically powers post-training alignment (RLHF, DPO, PPO) for modern frontier Large Language Models.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**RL Frameworks**](RL-Frameworks.md) — Stable-Baselines3, CleanRL, Ray RLlib, and clean baseline implementations of modern RL algorithms.
* [**Environments**](Environments.md) — Simulation sandboxes, Gymnasium (Farama Foundation), PettingZoo, Isaac Gym, and MuJoCo physics.
* [**RLHF & Preference Learning**](RLHF-and-Preference-Learning.md) — Reinforcement Learning from Human Feedback (PPO, DPO, KTO, TRL) for alignment and reasoning models.
* [**Imitation Learning**](Imitation-Learning.md) — Behavioral Cloning (BC), Inverse RL, GAIL, and learning from expert demonstration trajectories.
* [**Multi-Agent RL**](Multi-Agent-RL.md) — Cooperative and competitive game theory, QMIX, MADDPG, and multi-agent decentralized execution.

## 🧭 Recommended Study Sequence

1. **MDP Foundations**: States, actions, rewards, discount factor (gamma), Bellman equations, and value iteration.
2. **Value-Based Methods**: Q-Learning, Deep Q-Networks (DQN), replay buffers, and target networks.
3. **Policy Gradients**: REINFORCE algorithm, Actor-Critic methods, and Proximal Policy Optimization (PPO).
4. **Physics & Simulation**: Gymnasium, MuJoCo continuous control, and GPU-accelerated environments (Isaac Gym).
5. **Post-Training Alignment (RLHF)**: Reward modeling, PPO alignment of LLMs, and Direct Preference Optimization (DPO).

## 🗝️ Foundational Prerequisites

- Probability, expectation, conditional distributions, and Markov properties.
- PyTorch neural network training loops and autograd mechanics.
- Basic game theory and dynamical systems intuition.

---

[← Back to Main Repository](../README.md)
