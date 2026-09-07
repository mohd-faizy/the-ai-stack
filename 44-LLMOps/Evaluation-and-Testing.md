# Evaluation & Testing

> Continuous testing frameworks, prompt regression harnesses, and automated grading pipelines to safeguard LLM quality before production releases.

## 🎯 What to Learn

- The LLM testing pyramid: Unit tests (assertions/regex) -> Component tests (RAG retrieval) -> System tests (LLM-as-a-judge)
- Promptfoo: Fast, CLI-driven testing framework for prompt engineering, model grading, and security scanning
- LangSmith (LangChain): Comprehensive evaluation, test dataset curation, and automated backtesting suite
- DeepEval by Confident AI: Unit testing framework for LLMs with G-Eval, hallucination metrics, and CI/CD integration
- Writing deterministic assertions for non-deterministic models: Semantic similarity, JSON schema validation, and constraint checking
- Running prompt regression suites in GitHub Actions pull requests

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Promptfoo](https://github.com/promptfoo/promptfoo)
  - Type: Testing & Evaluation Tool
  - Language: English
  - Level: Beginner
  - Why recommended: The fastest, most practical CLI tool for testing prompts, models, and RAG pipelines with deterministic assertions, LLM-as-a-judge, and red-teaming.

### 🎓 Courses

- [DeepLearning.AI: Automated Testing for LLMs](https://www.deeplearning.ai/short-courses/) — Practical training on writing regression tests and evaluation harnesses for LLM applications.

### ▶️ YouTube — English

- [Promptfoo / AI Jason: Video Guides & Tutorials](https://www.youtube.com/@AIJason)
  - Channel: Promptfoo / AI Jason
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Visual walkthrough showing how to test prompts against edge cases and run evaluations in GitHub Actions.

### ▶️ YouTube — Hindi / Hinglish

- [MLOps & LLMOps Pipeline Architecture in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVOjS7KXQK3DAj7ER6LT2fEO)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on production deployment, monitoring, and lifecycle management for models in Hindi.


### 📚 Books

- [Testing Machine Learning Systems by Jeremy Jordan](https://www.oreilly.com/) — Practical guide to automated testing strategies for probabilistic software systems.

### 💻 GitHub / Implementations

- [LangSmith](https://github.com/langchain-ai/langsmith-sdk) — LLM application development platform.
- [Promptfoo](https://github.com/promptfoo/promptfoo) — LLM evaluation and red teaming.
- [DeepEval](https://github.com/confident-ai/deepeval) — Unit testing framework for LLMs.
- [Opik](https://github.com/comet-ml/opik) — Open-source LLM evaluation platform.
- [Giskard](https://github.com/Giskard-AI/giskard) — Testing framework for ML and LLM models.
- [Continuous Eval](https://github.com/relari-ai/continuous-eval) — Evaluation pipeline for RAG.

### 🧪 Practice

- [Promptfoo CLI Quickstart](https://www.promptfoo.dev/docs/getting-started/) — Run `npx promptfoo@latest init` and execute your first prompt test suite in 3 minutes.

### 🛠️ Projects

- [Continuous Prompt Regression Gate in GitHub Actions](https://github.com/promptfoo/promptfoo) — Configure Promptfoo in GitHub Actions to test 50 edge cases on every prompt change, failing the PR if accuracy drops.

## 🧭 Recommended Learning Path

1. Understand why manual eyeballing of LLM responses fails as applications scale.
2. Write deterministic assertions: `contains`, `is-json`, `matches-regex` using Promptfoo.
3. Implement model-graded assertions: `llm-rubric` and semantic similarity.
4. Build a golden dataset of challenging customer queries.
5. Integrate automated test runs into your CI/CD pipeline.

## ⭐ Top 3 Resources

1. Promptfoo (CLI prompt testing & red-teaming)
2. LangSmith (LangChain evaluation platform)
3. DeepEval (Pytest-style LLM testing)

