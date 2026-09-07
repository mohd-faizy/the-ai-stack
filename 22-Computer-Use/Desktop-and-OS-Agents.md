# Desktop & OS Agents

> Desktop and OS agents control graphical operating systems through multimodal vision models that interpret desktop screenshots, localize interface buttons, and dispatch OS-level mouse and keyboard events.

## 🎯 What to Learn

- Anthropic Computer Use API and tool definition (`computer`, `bash`, `str_replace_editor`)
- Coordinate prediction: mapping pixel locations on dynamic screen resolutions
- PyAutoGUI and OS-level input dispatching on Ubuntu, Windows, and macOS
- UI grounding models: Show-UI, UI-TARS, and SeeAct
- Safety guardrails: preventing unintended destructive OS commands

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Anthropic Computer Use Guide & Reference Implementation](https://docs.anthropic.com/en/docs/build-with-claude/computer-use)
  - Type: Official API Guide & Reference
  - Language: English
  - Level: Advanced
  - Why recommended: Anthropic pioneered native computer use capabilities in Claude 3.5 Sonnet, providing official Dockerized desktop environments and coordinate-action protocols.

### 📖 Documentation & References

- [Anthropic Computer Use Guide](https://docs.anthropic.com/en/docs/build-with-claude/computer-use) — Comprehensive documentation on configuring computer tools, coordinate scaling, and safety.
- [Self-Operating Computer (SOC) Docs](https://github.com/OthersideAI/self-operating-computer) — Framework to let multimodal models operate mouse and keyboard on local OS.
- [UI-TARS Documentation](https://github.com/bytedance/UI-TARS) — ByteDance's state-of-the-art native GUI agent model for operating systems.

### 🎓 Courses

- [GUI and Desktop Agents (Stanford CS 224N)](https://web.stanford.edu/class/cs224n/) — Lectures on visual grounding, interface understanding, and agent control.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Demo / Tutorial
  - Level: Intermediate
  - Why: Hands-on walkthrough testing Claude 3.5 Sonnet operating desktop software and filling forms in Docker.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Automate the Boring Stuff with Python](https://automatetheboringstuff.com/) — Al Sweigart classic guide covering GUI automation with PyAutoGUI and operating system control.

### 💻 GitHub / Implementations

- [anthropics/anthropic-quickstarts](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) — Reference implementation of Computer Use with Claude in a Docker container.
- [OthersideAI/self-operating-computer](https://github.com/OthersideAI/self-operating-computer) — A framework to enable multimodal models to operate a computer.
- [bytedance/UI-TARS](https://github.com/bytedance/UI-TARS) — An open-source native GUI agent model for computer use.

## 📄 Foundational Papers

- [OSWorld: Benchmarking Multimodal Agents on Open-Ended Desktop Tasks](https://arxiv.org/abs/2404.07972) — Xie et al. (2024) comprehensive evaluation benchmark across Ubuntu, Windows, and macOS.
- [UI-TARS: An Open-Source Native GUI Agent Model](https://arxiv.org/abs/2501.12326) — ByteDance (2025) specialized vision-language model trained natively for GUI interaction.

### 🧪 Practice

- [Anthropic Computer Use Docker Demo](https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo) — Run a sandboxed virtual desktop in Docker and watch Claude interact with Firefox and LibreOffice.

### 🛠️ Projects

- [Autonomous Spreadsheet Processor](https://github.com/anthropics/anthropic-quickstarts) — Deploy a desktop agent that opens local Excel / LibreOffice, formats messy columns, computes sums, and saves PDF exports.

## 🧭 Recommended Learning Path

1. Understand coordinate systems: how normalized coordinate predictions translate to actual screen resolutions.
2. Deploy the official Anthropic Computer Use Docker container.
3. Implement basic mouse actions (click, move, drag) and keyboard typing with PyAutoGUI.
4. Study failure modes: sub-pixel inaccuracies, scrolling misalignments, and modal popups.
5. Implement human intervention triggers when agents attempt sensitive system-level actions.

## ⭐ Top 3 Resources

1. Anthropic Computer Use (Anthropic)
2. OSWorld (xlang-ai/OSWorld)
3. UI-TARS (bytedance/UI-TARS)

