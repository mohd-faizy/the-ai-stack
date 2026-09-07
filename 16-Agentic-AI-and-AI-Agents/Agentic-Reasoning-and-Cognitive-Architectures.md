# Agentic Reasoning & Cognitive Architectures

> Agentic reasoning architectures govern how foundation models deliberate, plan multi-step trajectories, self-reflect on intermediate failures, and explore search trees to solve complex problems.

## 🎯 What to Learn

- Test-time compute scaling and reinforcement learning for reasoning (DeepSeek R1, OpenAI o1/o3)
- ReAct, Reflexion, and Self-Discover prompting paradigms
- Tree of Thoughts (ToT) and Monte Carlo Tree Search (MCTS) with language models
- Process Reward Models (PRMs) vs. Outcome Reward Models (ORMs)
- Self-correction, hallucination verification, and back-tracking strategies

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DeepSeek-R1 Technical Report & Open-R1](https://github.com/deepseek-ai/DeepSeek-R1)
  - Type: Seminal Research & Implementation
  - Language: English
  - Level: Advanced
  - Why recommended: DeepSeek-R1 demonstrated that large-scale reinforcement learning without supervised warm-up incentivizes emergent chain-of-thought reasoning, reflection, and self-verification.

### 📖 Documentation & References

- [Open-R1 Repository (Hugging Face)](https://github.com/huggingface/open-r1) — Hugging Face's open initiative to replicate and open-source DeepSeek-R1 training pipelines.
- [DeepSeek-R1 Documentation](https://github.com/deepseek-ai/DeepSeek-R1) — Official repository, prompt instructions, and architecture overview of DeepSeek-R1.

### 🎓 Courses

- [Reasoning and Planning with LLMs (Stanford CS 224N Guest Lectures)](https://web.stanford.edu/class/cs224n/) — Stanford lectures covering chain-of-thought, search algorithms, and test-time reasoning.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Deep dive into cold-start data, GRPO reinforcement learning, and emergent reasoning behavior.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Thinking, Fast and Slow (Cognitive Inspiration)](https://us.macmillan.com/books/9780374533557/thinkingfastandslow) — Daniel Kahneman's exploration of System 1 (fast, intuitive) and System 2 (slow, deliberative) reasoning.

### 💻 GitHub / Implementations

- [deepseek-ai/DeepSeek-R1](https://github.com/deepseek-ai/DeepSeek-R1) — Incentivizing reasoning capability in LLMs via reinforcement learning.
- [huggingface/open-r1](https://github.com/huggingface/open-r1) — Fully open reproduction of DeepSeek-R1 by Hugging Face.
- [princeton-nlp/tree-of-thought-llm](https://github.com/princeton-nlp/tree-of-thought-llm) — Official implementation of Tree of Thoughts deliberate problem solving.

## 📄 Foundational Papers

- [DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning](https://arxiv.org/abs/2501.12948) — DeepSeek-AI (2025) breakthrough demonstrating pure RL emergence of reasoning behaviors.
- [Tree of Thoughts: Deliberate Problem Solving with Large Language Models](https://arxiv.org/abs/2305.10601) — Yao et al. (NeurIPS 2023) introducing exploration over coherent units of thought via search algorithms.
- [Reflexion: Language Agents with Verbal Reinforcement Learning](https://arxiv.org/abs/2303.11366) — Shinn et al. (NeurIPS 2023) framework teaching agents to self-reflect and learn from trial errors.

### 🧪 Practice

- [Open-R1 Training Notebooks](https://github.com/huggingface/open-r1) — Hands-on recipes for training small reasoning models with GRPO on math and code.

### 🛠️ Projects

- [MCTS Reasoning Engine for Complex Math](https://github.com/princeton-nlp/tree-of-thought-llm) — Implement Monte Carlo Tree Search where an LLM generates candidate steps and a process verifier scores them.

## 🧭 Recommended Learning Path

1. Study standard Chain-of-Thought (CoT) prompting and its limitations on non-linear problems.
2. Implement the ReAct pattern manually using raw API calls to inspect thought/action sequences.
3. Build a Reflexion loop where failed execution triggers an explicit critique prompt.
4. Implement Tree of Thoughts (ToT) using breadth-first search and self-evaluation heuristics.
5. Explore Group Relative Policy Optimization (GRPO) to train reasoning models on verifiable benchmarks.

## ⭐ Top 3 Resources

1. DeepSeek-R1 (deepseek-ai)
2. Open-R1 (Hugging Face)
3. Tree of Thoughts (Yao et al.)

