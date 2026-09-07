# CLI Tools

> Command-line AI assistants, terminal pair programmers, and piping utilities that integrate foundation models directly into developer workflows.

## 🎯 What to Learn

- Aider: AI pair programming in your terminal, automatically editing code in local Git repositories and committing with clean messages
- Ollama CLI: Pulling, running, and managing local quantized models (`ollama run`, `ollama list`)
- llama.cpp CLI (`llama-cli`, `llama-server`): Ultra-fast C++ inference with GGUF models directly from the command line
- Simon Willison's `llm`: CLI tool and Python library for running prompts against local and cloud models with plugin support
- Charm `mods`: AI for the command line designed for pipelines (`ls -l | mods 'find large files'`)
- Piping command outputs directly into LLM prompts for log analysis, git diff explanations, and refactoring

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Aider](https://github.com/paul-gauthier/aider)
  - Type: AI Pair Programmer in Terminal
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier AI pair programmer in the terminal, outranking commercial copilots on SWE-bench by editing code across multiple files in local git repos and automatically writing sensible git commits.

### 🎓 Courses

- [DeepLearning.AI: Pair Programming with an AI Agent](https://www.deeplearning.ai/short-courses/) — Practical strategies for interactive code refactoring and bug fixing.

### ▶️ YouTube — English

- [Matthew Berman / Paul Gauthier: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman / Paul Gauthier
  - Language: English
  - Type: Walkthrough
  - Level: Beginner
  - Why: Paul Gauthier (creator of Aider) demonstrates repository maps, multi-file edits, and automated git commits.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Linux at the Command Line by Daniel J. Barrett (O'Reilly)](https://www.oreilly.com/library/view/efficient-linux-at/9781098113407/) — Mastering terminal pipes, redirection, and command-line agility.

### 💻 GitHub / Implementations

- [Ollama](https://github.com/ollama/ollama) — Run LLMs locally from CLI.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) — CLI for local LLM inference.
- [Aider](https://github.com/Aider-AI/aider) — AI pair programming CLI.
- [sgpt](https://github.com/tbckr/sgpt) — Command-line AI assistant.
- [llm](https://github.com/simonw/llm) — CLI for interacting with LLMs.
- [mods](https://github.com/charmbracelet/mods) — AI in the command line.

### 🧪 Practice

- [Aider Quickstart Tutorial](https://aider.chat/docs/install.html) — Install `pip install aider-chat` and run pair programming on any git repo in 2 minutes.

### 🛠️ Projects

- [Terminal AI Sysadmin Toolkit](https://github.com/charmbracelet/mods) — Write a bash utility connecting `mods` to `dmesg` and journalctl to diagnose Linux kernel and service crashes via natural language.

## 🧭 Recommended Learning Path

1. Install `ollama` and `aider` in your terminal environment.
2. Pair-program with Aider on an open-source bug, watching it edit multiple files and commit to git.
3. Install Simon Willison's `llm` CLI to query models and save reusable prompt templates.
4. Use `mods` to pipe command output directly into terminal LLMs: `cat error.log | mods 'summarize cause'`.
5. Integrate terminal CLI assistants into your automated bash scripts and git hooks.

## ⭐ Top 3 Resources

1. Aider (Paul Gauthier / Terminal Pair Programmer)
2. Ollama CLI (Local Model Management)
3. Simon Willison's llm CLI

