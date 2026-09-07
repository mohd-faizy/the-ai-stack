# AI Alignment

> Techniques and algorithms to steer AI model behavior, values, and outputs toward human preferences, helpfulness, honesty, and harmlessness.

## 🎯 What to Learn

- The standard alignment pipeline: Pretraining -> SFT -> Preference Modeling -> Policy Optimization
- Reinforcement Learning from Human Feedback (RLHF) with PPO
- Direct Preference Optimization (DPO) and its mathematical derivation eliminating explicit reward models
- Kahneman-Tversky Optimization (KTO) and Identity Preference Optimization (IPO)
- Constitutional AI and Reinforcement Learning from AI Feedback (RLAIF)
- The alignment tax: Balancing helpfulness with avoiding over-refusal and capability regression

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TRL (Transformer Reinforcement Learning - Hugging Face)](https://github.com/huggingface/trl)
  - Type: Alignment Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The definitive open-source library for training language models with SFT, DPO, PPO, and GRPO.

### 🎓 Courses

- [DeepLearning.AI: Reinforcement Learning from Human Feedback](https://www.deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/) — Taught by Google Brain / DeepLearning.AI engineers on reward modeling and PPO training.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Tutorial
  - Level: Advanced
  - Why: Rigorous mathematical breakdown of why DPO replaces PPO by expressing the reward implicitly via policy logits.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Human Compatible by Stuart Russell](https://people.eecs.berkeley.edu/~russell/hc.html) — Seminal philosophical and technical exploration of value alignment and objective specification.

### 💻 GitHub / Implementations

- [TRL](https://github.com/huggingface/trl) — Transformer RL for RLHF, DPO, PPO, and more.
- [Alignment Handbook](https://github.com/huggingface/alignment-handbook) — Robust recipes for aligning LLMs.
- [Anthropic RLHF](https://github.com/anthropics) — Constitutional AI and RLHF research.
- [Safe-RLHF](https://github.com/PKU-Alignment/safe-rlhf) — Safe reinforcement learning from human feedback.
- [AlpacaFarm](https://github.com/tatsu-lab/alpaca_farm) — Simulation framework for RLHF methods.

## 📄 Foundational Papers

- [Direct Preference Optimization: Your Language Model is Secretly a Reward Model](https://arxiv.org/abs/2305.18290) — Introduced DPO, revolutionizing LLM alignment by optimizing policy directly without a separate reward model.
- [Constitutional AI: Harmlessness from AI Feedback (Anthropic)](https://arxiv.org/abs/2212.08073) — Pioneered automated self-correction using principles and constitution-guided AI critique.

### 🧪 Practice

- [Hugging Face Alignment Handbook Recipes](https://github.com/huggingface/alignment-handbook) — Train a DPO adapter on Google Colab or local GPUs using recipes provided.

### 🛠️ Projects

- [Align an Open LLM with DPO](https://github.com/huggingface/trl/tree/main/examples/scripts) — Take a base 3B parameter model and fine-tune it with DPO on the UltraFeedback dataset using TRL.

## 🧭 Recommended Learning Path

1. Understand the limitations of Supervised Fine-Tuning (SFT).
2. Learn Bradley-Terry preference modeling and pairwise loss functions.
3. Study RLHF with PPO: Value head, generalized advantage estimation, and KL divergence penalty.
4. Implement DPO using Hugging Face TRL on a small model.
5. Experiment with Constitutional AI self-critique workflows.

## ⭐ Top 3 Resources

1. TRL (Hugging Face Library)
2. The Alignment Handbook (Hugging Face)
3. Direct Preference Optimization (Seminal Paper by Rafailov et al.)

