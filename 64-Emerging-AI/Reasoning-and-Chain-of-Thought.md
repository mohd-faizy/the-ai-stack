# Reasoning & Chain-of-Thought

> Inference-time compute scaling, test-time search, reinforcement learning with verifiable rewards (RLVR), and foundation reasoning models.

## 🎯 What to Learn

- Test-time compute scaling: The new scaling paradigm where more tokens spent thinking at inference time yields higher accuracy on complex math and coding
- DeepSeek-R1: Landmark frontier open-weights reasoning model trained with large-scale RL (GRPO) without initial supervised fine-tuning
- Open-R1 (Hugging Face): Community initiative to fully reproduce the training recipe of DeepSeek-R1 (data, SFT, GRPO, distillation)
- Group Relative Policy Optimization (GRPO): Memory-efficient RL algorithm eliminating the critic/value model by normalizing rewards across group samples
- Incentivizing self-correction, verification, and backtracking in chain-of-thought `<think>` traces
- Distilling reasoning capabilities from massive 671B MoE reasoning models into compact 1.5B - 14B dense models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSeek-R1 & Open-R1](https://github.com/deepseek-ai/DeepSeek-R1)
  - Type: Reasoning Foundation Model
  - Language: English
  - Level: Advanced
  - Why recommended: The revolutionary open-weights frontier model that demonstrated that large-scale reinforcement learning over verifiable reasoning tokens achieves performance rivaling OpenAI o1, accompanied by Hugging Face's open reproduction recipe (Open-R1).

### 🎓 Courses

- [Stanford CS25: Transformers United (Reasoning Lecture)](https://web.stanford.edu/class/cs25/) — Lectures on test-time search, chain-of-thought reasoning, and verifiers.

### ▶️ YouTube — English

- [Umar Jamil / Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Umar Jamil / Yannic Kilcher
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Rigorous mathematical breakdown of Group Relative Policy Optimization (GRPO) and how R1-Zero developed reasoning behaviors organically.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Reinforcement Learning: An Introduction by Sutton and Barto](http://incompleteideas.net/book/the-book-2nd.html) — The foundational mathematical text on policy gradients, advantage estimation, and value functions.

### 💻 GitHub / Implementations

- [Open-R1](https://github.com/huggingface/open-r1) — Open reproduction of DeepSeek R1.
- [DeepSeek R1](https://github.com/deepseek-ai/DeepSeek-R1) — Reasoning model by DeepSeek.
- [Sky-T1](https://github.com/NovaSky-AI/SkyThought) — Open reasoning model training.
- [s1](https://github.com/simplescaling/s1) — Simple test-time scaling for reasoning.
- [Marco-o1](https://github.com/AIDC-AI/Marco-o1) — Reasoning with open LLMs.
- [Bespoke-Minicheck](https://github.com/Liyan06/MiniCheck) — Fact-checking reasoning.

## 📄 Foundational Papers

- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) — Landmark paper introducing DeepSeek-R1-Zero and R1, proving pure RL unlocks emergent reasoning and self-reflection.
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) — Wei et al. landmark paper discovering that intermediate reasoning steps dramatically improve multi-step problem solving.

### 🧪 Practice

- [Run DeepSeek-R1 Distill Locally with Ollama](https://ollama.com/library/deepseek-r1) — Run `ollama run deepseek-r1:8b` and inspect real-time thinking traces in your terminal.

### 🛠️ Projects

- [Train a Reasoning Model with TRL and GRPO](https://github.com/huggingface/open-r1) — Fine-tune a 1.5B base model on GSM8K using TRL's `GRPOTrainer` with verifiable Python execution rewards.

## 🧭 Recommended Learning Path

1. Understand pre-training compute scaling vs test-time compute scaling.
2. Explore the difference between PPO (requires critic model) and GRPO (uses group baseline).
3. Run DeepSeek-R1 locally and analyze the structure of `<think>` reflection tokens.
4. Train a toy reasoning model with Hugging Face TRL and GRPO using verifiable mathematical rewards.
5. Evaluate reasoning models on AIME, MATH-500, and Codeforces benchmarks.

## ⭐ Top 3 Resources

1. DeepSeek-R1 (Landmark Reasoning Model)
2. Open-R1 (Hugging Face Open Reproduction)
3. TRL GRPOTrainer (Hugging Face)

