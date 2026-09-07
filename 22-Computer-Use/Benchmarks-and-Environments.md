# Benchmarks & Environments

> Desktop benchmarks and simulation environments provide reproducible, sandboxed operating systems to rigorously measure computer use agents across real-world application workflows.

## 🎯 What to Learn

- OSWorld: 369 open-ended desktop tasks on real Ubuntu environments
- WindowsAgentArena: Benchmarking agents across native Windows applications (Office, settings, games)
- AndroidWorld: Mobile operating system agent evaluation across Android apps
- Environment reset, state determinism, and reproducible sandboxes
- Ground truth reward verification (file diffs, registry checks, system states)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OSWorld: Benchmarking Multimodal Agents on Desktop Tasks](https://os-world.github.io/)
  - Type: Gold Standard Benchmark
  - Language: English
  - Level: Advanced
  - Why recommended: OSWorld is the premier academic benchmark for desktop agents, testing multimodal models on 369 complex real-world tasks across LibreOffice, VS Code, Chrome, VLC, and OS file managers.

### 📖 Documentation & References

- [OSWorld Documentation](https://os-world.github.io/) — Benchmark overview, leaderboards, and VMware / QEMU setup instructions.
- [WindowsAgentArena Docs](https://microsoft.github.io/WindowsAgentArena/) — Scalable Windows desktop environment for agent testing by Microsoft Research.
- [AndroidWorld Docs](https://github.com/google-research/android_world) — Google Research benchmark for autonomous agents operating Android devices.

### 🎓 Courses

- [Evaluating Multimodal Agents (Stanford CS 224N)](https://web.stanford.edu/class/cs224n/) — Lectures on evaluating agents across multimodal software environments.

### ▶️ YouTube — English

- [AI Research Summaries: Video Guides & Tutorials (AI Research Summaries)](https://www.youtube.com/results?search_query=AI%20Research%20Summaries%20AI%20Research%20Summaries%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: AI Research Summaries
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical explanation of OSWorld environment architecture, task design, and execution scoring.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Evaluating Machine Learning Models](https://www.oreilly.com/) — Methodology for evaluating complex, non-deterministic autonomous agent workflows.

### 💻 GitHub / Implementations

- [xlang-ai/OSWorld](https://github.com/xlang-ai/OSWorld) — OSWorld: Benchmarking Multimodal Agents on Open-Ended Tasks to Real Computer Environments.
- [microsoft/WindowsAgentArena](https://github.com/microsoft/WindowsAgentArena) — A scalable platform for evaluating multimodal agents on Windows desktop.
- [google-research/android_world](https://github.com/google-research/android_world) — AndroidWorld: A dynamic benchmarking environment for autonomous mobile agents.

## 📄 Foundational Papers

- [OSWorld: Benchmarking Multimodal Agents on Open-Ended Desktop Tasks](https://arxiv.org/abs/2404.07972) — Xie et al. (NeurIPS 2024 Oral) seminal paper establishing the desktop computer use benchmark.
- [Windows Agent Arena: Evaluating Multi-Modal OS Agents at Scale](https://arxiv.org/abs/2409.08264) — Bonatti et al. (Microsoft Research 2024) platform for large-scale Windows automation testing.

### 🧪 Practice

- [OSWorld Evaluation Harness](https://github.com/xlang-ai/OSWorld#quickstart) — Run a single OSWorld task locally to inspect VM startup, agent actions, and automated evaluation.

### 🛠️ Projects

- [Automated Desktop Benchmark Runner in QEMU](https://github.com/xlang-ai/OSWorld) — Set up a virtual machine cluster running automated OSWorld evaluations whenever agent vision models are updated.

## 🧭 Recommended Learning Path

1. Learn why synthetic toy environments fail to reflect real operating system complexity.
2. Set up a QEMU or VMware virtual machine running Ubuntu for safe agent sandboxing.
3. Run an automated task evaluation in OSWorld and inspect the evaluation rubric.
4. Explore WindowsAgentArena to test native Office and desktop applications on Windows.
5. Analyze failure modes across human vs. agent performance gaps.

## ⭐ Top 3 Resources

1. OSWorld (xlang-ai/OSWorld)
2. WindowsAgentArena (Microsoft Research)
3. AndroidWorld (Google Research)

