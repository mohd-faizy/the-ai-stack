# Agent Evaluation

> Benchmarks and sandboxed environments to evaluate autonomous AI agents across code generation, tool usage, multi-step planning, and web navigation.

## 🎯 What to Learn

- SWE-bench: Evaluating software engineering agents on real-world GitHub issues
- Interactive environment benchmarks: WebArena, GAIA, and Tau-bench
- Multi-step task execution verification and execution sandboxing (Docker, E2B)
- Tool invocation accuracy and JSON parameter validation
- Measuring trajectory efficiency: Step count, token expenditure, and error recovery loops
- Benchmark contamination detection and dynamic test case generation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [SWE-bench](https://github.com/princeton-nlp/SWE-bench)
  - Type: Benchmark & Evaluation Suite
  - Language: English
  - Level: Advanced
  - Why recommended: The gold standard benchmark evaluating language models on resolving end-to-end GitHub pull requests and unit tests from real-world open-source repositories.

### 🎓 Courses

- [DeepLearning.AI: Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) — Includes lessons on instrumenting and testing agent collaboration and goal accomplishment.

### ▶️ YouTube — English

- [Yannic Kilcher / AI Breakdown: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / AI Breakdown
  - Language: English
  - Type: Video
  - Level: Advanced
  - Why: Technical breakdown of SWE-bench evaluation methodology, test patches, and sandboxed Docker execution.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Reinforcement Learning: An Introduction by Sutton and Barto](http://incompleteideas.net/book/the-book-2nd.html) — Foundational concepts for evaluating goal-directed agents and environmental reward functions.

### 💻 GitHub / Implementations

- [AgentBench](https://github.com/THUDM/AgentBench) — Comprehensive benchmark for LLM agents.
- [SWE-bench](https://github.com/SWE-bench/SWE-bench) — Real-world software engineering benchmark.
- [GAIA](https://huggingface.co/datasets/gaia-benchmark/GAIA) — General AI assistant benchmark.
- [Tau-bench](https://github.com/sierra-research/tau-bench) — Benchmark for tool-agent-user interaction.
- [WebArena](https://github.com/web-arena-x/webarena) — Realistic web environment for agents.
- [MLE-bench](https://github.com/openai/mle-bench) — Machine learning engineering benchmark.

## 📄 Foundational Papers

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) — Introduces the seminal software engineering benchmark with 2,294 real software issues.
- [GAIA: A Benchmark for General AI Assistants](https://arxiv.org/abs/2311.12983) — Introduces questions that are simple for humans to solve using common tools but notoriously difficult for current LLMs.

### 🧪 Practice

- [SWE-bench Verified Leaderboard](https://www.swebench.com/) — Analyze how top coding agents (Devin, SWE-agent, Codex) score on resolving software bugs.

### 🛠️ Projects

- [Build a Sandboxed Agent Test Harness](https://github.com/princeton-nlp/SWE-agent) — Run SWE-agent in Docker to test autonomous issue resolution against SWE-bench Lite.

## 🧭 Recommended Learning Path

1. Understand passive question answering vs active interactive execution benchmarks.
2. Explore SWE-bench execution harnesses and Docker test verification.
3. Study web browsing agent evaluation on WebArena.
4. Implement step-by-step trajectory logging and token cost tracking.
5. Benchmark your custom agents against SWE-bench Lite.

## ⭐ Top 3 Resources

1. SWE-bench (Princeton NLP)
2. GAIA Benchmark (Hugging Face / Meta)
3. WebArena (Carnegie Mellon University)

