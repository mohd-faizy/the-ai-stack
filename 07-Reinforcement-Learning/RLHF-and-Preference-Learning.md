# RLHF & Preference Learning

> Reinforcement Learning from Human Feedback (RLHF) and direct preference learning align generative foundation models to human intent, truthfulness, and safety.

## 🎯 What to Learn

- The 3-stage alignment pipeline: Supervised Fine-Tuning (SFT) → Reward Modeling (RM) → Policy Optimization (PPO)
- Reward Model formulation: Bradley-Terry preference probability model on pair comparisons (chosen vs rejected)
- PPO for language models: token-level action spaces, KL-divergence penalties to prevent policy drift, and value networks
- Direct Preference Optimization (DPO): eliminating reward models by optimizing policy probabilities directly from closed-form solutions
- Modern preference learning variants: KTO (Kahneman-Tversky Optimization), ORPO, and SimPO
- Self-rewarding language models and reinforcement learning with verifiable rewards (RLVR) for reasoning (e.g. DeepSeek-R1)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [TRL - Transformer Reinforcement Learning (Hugging Face)](https://github.com/huggingface/trl)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: TRL is the leading open-source library for post-training foundation models, providing full-stack implementations of SFT, Reward Modeling, PPO, DPO, and Online DPO.

### 📖 Documentation & References

- [Hugging Face TRL Documentation](https://huggingface.co/docs/trl/index) — Exhaustive tutorials on training with SFTTrainer, DPOTrainer, and PPOTrainer.
- [DeepSpeed-Chat](https://github.com/microsoft/DeepSpeed/tree/master/blogs/deepspeed-chat) — Full-scale end-to-end RLHF pipeline powered by DeepSpeed ZeRO engines.

### 🎓 Courses

- [DeepLearning.AI: Reinforcement Learning from Human Feedback (RLHF)](https://www.deeplearning.ai/short-courses/reinforcement-learning-from-human-feedback/) — Taught by Nikita Namjoshi, covering reward models, PPO fine-tuning, and evaluating LLMs.

### ▶️ YouTube — English

- [RLHF: Reinforcement Learning from Human Feedback Explained](https://www.youtube.com/watch?v=2MBJOuVq380)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: In-depth review of OpenAI's seminal InstructGPT paper explaining why SFT alone fails to align models.
- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Mathematical Derivation
  - Level: Advanced
  - Why: Step-by-step mathematical derivation showing how DPO reparameterizes the RL objective to bypass the reward model.

### ▶️ YouTube — Hindi / Hinglish

- [Reinforcement Learning Crash Course in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvbMK0_fdp0DZHZKm4Q1slAB)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh explains MDP, Bellman equations, Q-learning, and policy gradients in Hinglish.


### 📚 Books

- [Training Language Models to Follow Instructions (Ouyang et al. - InstructGPT Paper)](https://arxiv.org/abs/2203.02155) — The foundational research paper that created ChatGPT and defined modern RLHF alignment.

### 💻 GitHub / Implementations

- [TRL](https://github.com/huggingface/trl) — Transformer reinforcement learning for RLHF, DPO, and more.
- [OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) — Scalable RLHF framework.
- [DeepSpeed-Chat](https://github.com/deepspeedai/DeepSpeed) — Full RLHF pipeline for large models.
- [OAIF](https://github.com/tatsu-lab/alpaca_eval) — Online AI feedback evaluation.
- [RewardBench](https://github.com/allenai/reward-bench) — Benchmark for reward models.

### 🧪 Practice

- [Anthropic HH-RLHF Dataset](https://huggingface.co/datasets/Anthropic/hh-rlhf) — Human preference dataset on model helpfulness and harmlessness.

### 🛠️ Projects

- [Align a 7B LLM with Direct Preference Optimization (DPO)](https://huggingface.co/docs/trl/main/en/dpo_trainer) — Fine-tune a Llama-3 or Mistral base model using TRL's DPOTrainer on chosen/rejected pairs.

## 🧭 Recommended Learning Path

1. Understand why supervised fine-tuning (SFT) suffers from exposure bias and reward alignment gaps.
2. Study Bradley-Terry preference modeling and train a pair-wise Reward Model.
3. Implement PPO on language models with KL-penalty against reference policy weights.
4. Study DPO (Direct Preference Optimization) and understand the mathematical substitution of the implicit reward.
5. Explore reasoning alignment: Reinforcement Learning with Verifiable Rewards (RLVR / DeepSeek-R1 style) using math and code execution checks.

## ⭐ Top 3 Resources

1. [Hugging Face TRL](https://github.com/huggingface/trl) — The gold-standard library for modern SFT, DPO, and PPO alignment.
2. [Direct Preference Optimization Paper (Rafailov et al.)](https://arxiv.org/abs/2305.18290) — The seminal breakthrough simplifying LLM alignment without reinforcement learning instability.
3. [InstructGPT Paper (OpenAI)](https://arxiv.org/abs/2203.02155) — The foundational architecture that proved human feedback alignment powers frontier LLMs.

