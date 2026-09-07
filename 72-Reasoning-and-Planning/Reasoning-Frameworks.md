# Reasoning Frameworks

> Frontier open reasoning models, test-time search frameworks, and reinforcement learning algorithms designed to elicit self-reflection and backtracking.

## 🎯 What to Learn

- DeepSeek-R1: Frontier open-weights reasoning model using Group Relative Policy Optimization (GRPO) to discover reasoning traces
- Open-R1 (Hugging Face): Open-source initiative to replicate the entire data, training, and distillation pipeline of DeepSeek-R1
- Marco-o1 (Alibaba): Open reasoning model combining MCTS with fine-grained reflection tokens for complex decision-making
- Test-time compute scaling: Allocating more compute during inference to generate longer, self-correcting thought processes
- Reward modeling for reasoning: Rule-based verifiable rewards (Python execution, math answers) vs LLM judges
- Distillation of reasoning traces: Transferring reflection capabilities into compact, efficient student models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSeek-R1 & Open-R1](https://github.com/deepseek-ai/DeepSeek-R1)
  - Type: Reasoning Model Standard
  - Language: English
  - Level: Advanced
  - Why recommended: The definitive open-source breakthrough in reasoning models, proving that pure reinforcement learning incentivizes reflection, error-correction, and long-horizon planning.

### 🎓 Courses

- [Stanford CS25: Transformers United (Reasoning Frontiers)](https://web.stanford.edu/class/cs25/) — Lectures on test-time search and reasoning model architectures.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Visual breakdown of the GRPO objective function, reward computation, and emergent self-correction behaviors.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Thinking, Fast and Slow by Daniel Kahneman](https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow) — The cognitive science foundation for System 1 (fast, intuitive) vs System 2 (slow, deliberate) reasoning.

### 💻 GitHub / Implementations

- [Open-R1](https://github.com/huggingface/open-r1) — Open reasoning model research.
- [DeepSeek R1](https://github.com/deepseek-ai/DeepSeek-R1) — Open reasoning model.
- [Marco-o1](https://github.com/AIDC-AI/Marco-o1) — Open reasoning with chain-of-thought.
- [ReasonGraph](https://github.com/TencentCloudADP/youtu-graphrag) — Graph-based reasoning.

## 📄 Foundational Papers

- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) — The historic paper demonstrating pure RL-driven reasoning.

### 🧪 Practice

- [Run DeepSeek-R1 Distill in Ollama](https://ollama.com/library/deepseek-r1) — Run `ollama run deepseek-r1:14b` and inspect reasoning tokens step-by-step.

### 🛠️ Projects

- [Train a Reasoning Model with TRL GRPOTrainer](https://github.com/huggingface/open-r1) — Train a 1.5B base model on math reasoning using TRL's GRPO with automated exact-match verification rewards.

## 🧭 Recommended Learning Path

1. Understand the difference between System 1 autoregression and System 2 deliberate search.
2. Explore how test-time compute scaling trades latency for reasoning accuracy.
3. Study Group Relative Policy Optimization (GRPO) and why it eliminates the value model.
4. Train a small reasoning model on GSM8k with Hugging Face Open-R1.
5. Evaluate reasoning models on AIME and MATH-500 benchmarks.

## ⭐ Top 3 Resources

1. DeepSeek-R1 (Landmark Reasoning Model)
2. Open-R1 (Hugging Face Open Reproduction)
3. Umar Jamil's DeepSeek-R1 Mathematical Breakdown

