# Code Review & Analysis

> Code review and analysis tools blend semantic AI reasoning with static analysis (AST parsers, linters, SAST tools) to find security vulnerabilities, enforce stylistic conventions, and summarize pull requests.

## 🎯 What to Learn

- Automated PR review workflows: PR-Agent and CodeRabbit architectures
- Hybrid analysis: combining LLMs with static analyzers (Semgrep, SonarQube)
- Security vulnerability detection (SAST, secret scanning, dependency audits)
- Automated documentation and changelog generation
- Hallucination mitigation in automated code reviews

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PR-Agent (Qodo / formerly CodiumAI)](https://qodo-merge-docs.qodo.ai/)
  - Type: Official Tool & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: PR-Agent is the leading open-source tool for automated pull request review, providing line-by-line comments, security scans, test generation, and changelog generation across GitHub, GitLab, and Bitbucket.

### 📖 Documentation & References

- [PR-Agent Documentation](https://qodo-merge-docs.qodo.ai/) — Guides on commands: `/review`, `/describe`, `/improve`, and CI/CD installation.
- [Semgrep Documentation](https://semgrep.dev/docs/) — Fast, open-source static analysis engine for finding bugs and enforcing code standards.

### 🎓 Courses

- [Secure Software Development (Stanford CS 253)](https://cs253.stanford.edu/) — Stanford course on software security, vulnerability detection, and code auditing.

### ▶️ YouTube — English

- [Qodo: Video Guides & Tutorials (Qodo)](https://www.youtube.com/results?search_query=Qodo%20Qodo%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Qodo
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step tutorial configuring PR-Agent GitHub Action to automatically review pull requests.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Secure by Design](https://www.manning.com/books/secure-by-design) — Dan Bergh Johnsson et al. guide to building secure, maintainable software architectures.

### 💻 GitHub / Implementations

- [qodo-ai/pr-agent](https://github.com/qodo-ai/pr-agent) — An open-source tool for automated PR review, feedback, and suggestions.
- [semgrep/semgrep](https://github.com/semgrep/semgrep) — Fast, lightweight static analysis for many languages. Find bugs and enforce code standards.

## 📄 Foundational Papers

- [Automated Code Review Using Large Language Models: A Systematic Literature Review](https://arxiv.org/abs/2402.01602) — Survey detailing current state-of-the-art architectures, benchmarks, and challenges in AI-driven code review.

### 🧪 Practice

- [Semgrep Playground](https://semgrep.dev/playground) — Write semantic pattern rules to find security vulnerabilities in Python, Go, and JavaScript.

### 🛠️ Projects

- [Automated Pre-Merge Security & Quality Gate](https://github.com/qodo-ai/pr-agent) — Build a GitHub Actions workflow that runs Semgrep to detect CVEs and PR-Agent to evaluate code readability and edge-case handling before merge.

## 🧭 Recommended Learning Path

1. Learn the limitations of static linters vs. semantic reasoning in code analysis.
2. Deploy PR-Agent as a GitHub Action on a test repository.
3. Configure custom prompts in `.pr_agent.toml` to enforce team-specific architecture rules.
4. Integrate Semgrep rules into the review pipeline to catch SQL injection and hardcoded secrets.
5. Measure developer acceptance rate of AI review suggestions.

## ⭐ Top 3 Resources

1. PR-Agent (qodo-ai)
2. Semgrep (semgrep/semgrep)
3. Secure by Design (Bergh Johnsson et al.)

