# Agent Evaluation, Benchmarks & Leaderboards

> Agent evaluation benchmarks measure autonomous task completion, multi-step tool reliability, and real-world environment navigation against rigorously verified test beds.

## 🎯 What to Learn

- SWE-bench (Software Engineering Benchmark): resolving real-world GitHub issues
- GAIA (General AI Assistants): multi-modal, tool-assisted complex reasoning benchmark
- WebArena and WorkArena: end-to-end web browser task completion
- OSWorld: desktop operating system interaction evaluation
- Pass@1, Pass@k, and cost-per-successful-task efficiency metrics

## 📚 Best Learning Resources

### 🥇 Best Overall

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://www.swebench.com/)
  - Type: Gold Standard Benchmark
  - Language: English
  - Level: Advanced
  - Why recommended: SWE-bench (Princeton University) is the global benchmark for autonomous coding agents, evaluating models on 2,294 real-world software engineering issues from popular Python repositories.

### 📖 Documentation & References

- [SWE-bench Documentation & Leaderboard](https://www.swebench.com/) — Leaderboards, benchmark splits (Full, Lite, Verified), and Dockerized evaluation harness.
- [GAIA Benchmark Leaderboard](https://huggingface.co/spaces/gaia-benchmark/leaderboard) — General AI Assistants benchmark requiring complex reasoning, multimodal perception, and tool use.
- [WebArena Documentation](https://webarena.dev/) — Realistic web environment for evaluating autonomous web browsing agents.

### 🎓 Courses

- [Evaluating AI Agents (Hugging Face Agents Course Unit 4)](https://huggingface.co/learn/agents-course/unit4/introduction) — Comprehensive tutorial on agent benchmarking, evaluation metrics, and error analysis.

### ▶️ YouTube — English

- [Princeton NLP: Video Guides & Tutorials (Princeton NLP)](https://www.youtube.com/results?search_query=Princeton%20NLP%20Princeton%20NLP%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Princeton NLP
  - Language: English
  - Type: Lecture / Talk
  - Level: Advanced
  - Why: Carlos E. Jimenez presents how SWE-bench evaluates agent code modifications against ground truth unit tests.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Evaluating Machine Learning Models](https://www.oreilly.com/) — Principles of test set design, leakage prevention, and benchmark statistical significance.

### 💻 GitHub / Implementations

- [princeton-nlp/SWE-bench](https://github.com/princeton-nlp/SWE-bench) — Evaluating Language Models on real-world software engineering problems.
- [web-arena-x/webarena](https://github.com/web-arena-x/webarena) — A realistic web environment for building and evaluating autonomous agents.
- [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) — Benchmarking multimodal agents on open-ended OS tasks across Ubuntu, Windows, and macOS.

## 📄 Foundational Papers

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) — Jimenez et al. (ICLR 2024 Oral) introducing the definitive real-world software engineering benchmark.
- [GAIA: A Benchmark for General AI Assistants](https://arxiv.org/abs/2311.12983) — Mialon et al. (Meta AI, Hugging Face, AutoGPT) benchmark measuring tool use, multimodal reasoning, and web browsing.

### 🧪 Practice

- [SWE-bench Lite Evaluation Run](https://github.com/princeton-nlp/SWE-bench) — Run your custom agent against the 300 curated SWE-bench Lite problems inside Docker.

### 🛠️ Projects

- [Continuous Agent Benchmark Harness](https://github.com/princeton-nlp/SWE-bench) — Set up an automated GitHub Action that runs SWE-bench Lite tests whenever your agent's prompt or architecture changes.

## 🧭 Recommended Learning Path

1. Learn why multiple-choice LLM benchmarks (MMLU) fail to reflect agentic capability.
2. Study the test harness architecture of SWE-bench: applying git patches and running pytest.
3. Explore GAIA's 3-level task hierarchy requiring web browsing, audio processing, and spreadsheet calculation.
4. Run an agent evaluation in Docker using the official SWE-bench evaluation runner.
5. Analyze failure modes: context window saturation, syntax errors, and wrong file modifications.

## ⭐ Top 3 Resources

1. SWE-bench (Princeton NLP)
2. GAIA (Meta / Hugging Face)
3. WebArena (Carnegie Mellon University)

