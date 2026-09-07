# AI Testing & Quality

> Automated test generation, property-based testing, fuzzing, and benchmark harnesses that verify software correctness and AI agent task resolution.

## 🎯 What to Learn

- The testing hierarchy: Unit testing (Pytest), property-based testing (Hypothesis), and metamorphic testing
- Hypothesis: Advanced property-based testing library in Python generating edge-case counterexamples automatically
- Pynguin: Automated unit test generation framework for Python using genetic algorithms and search heuristics
- SWE-bench: Benchmark evaluating AI agents on resolving real-world GitHub issues with unit test validation
- Mutation testing: Measuring test suite quality by intentionally injecting bugs into source code
- Promptfoo: Automated testing and security evaluations for LLM prompts and agent behaviors

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hypothesis](https://github.com/HypothesisWorks/hypothesis)
  - Type: Property-Based Testing Library
  - Language: English
  - Level: Intermediate
  - Why recommended: The gold-standard property-based testing library for Python that systematically generates edge-case inputs to uncover corner-case bugs traditional unit tests miss.

### 🎓 Courses

- [Test-Driven Development with Python (TDD on TestDriven.io)](https://testdriven.io/) — Practical courses on writing resilient test suites, Docker testing, and CI/CD pipelines.

### ▶️ YouTube — English

- [PyData / David R. MacIver: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: PyData / David R. MacIver
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: David MacIver (creator of Hypothesis) demonstrates how property-based testing finds subtle, rare bugs automatically.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Python Testing with pytest by Brian Okken (Pragmatic Bookshelf)](https://pragprog.com/titles/bopytest2/python-testing-with-pytest-second-edition/) — The definitive guide to writing effective, scalable test suites in Python.

### 💻 GitHub / Implementations

- [SWE-bench](https://github.com/SWE-bench/SWE-bench) — Real-world software engineering benchmark.
- [Promptfoo](https://github.com/promptfoo/promptfoo) — LLM testing and evaluation.
- [Pytest](https://github.com/pytest-dev/pytest) — Python testing framework.
- [Hypothesis](https://github.com/HypothesisWorks/hypothesis) — Property-based testing.
- [Pynguin](https://github.com/se2p/pynguin) — Automatic Python unit test generation.

## 📄 Foundational Papers

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) — Jimenez et al. landmark paper introducing the definitive execution-based software engineering benchmark.

### 🧪 Practice

- [Hypothesis Quickstart Tutorial](https://hypothesis.readthedocs.io/en/latest/quickstart.html) — Write your first property-based test with `@given` in 10 minutes.

### 🛠️ Projects

- [Automated Bug-Hunting Agent with Hypothesis](https://github.com/HypothesisWorks/hypothesis) — Build a script that parses Python function signatures with Tree-sitter and auto-generates Hypothesis property tests.

## 🧭 Recommended Learning Path

1. Master Pytest fundamentals: Test discovery, fixtures, and assertions.
2. Understand property-based testing: Testing invariant properties across thousands of random inputs.
3. Use Hypothesis `@given(st.text(), st.integers())` to discover shrinking edge cases.
4. Explore SWE-bench evaluation methodology and sandboxed Docker test execution.
5. Integrate automated test runs into GitHub Actions.

## ⭐ Top 3 Resources

1. Hypothesis (Property-based testing standard)
2. Pytest (Python unit testing foundation)
3. SWE-bench (Software Engineering AI Benchmark)

