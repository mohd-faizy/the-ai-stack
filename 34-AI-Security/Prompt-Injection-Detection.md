# Prompt Injection Detection

> Techniques, specialized classifier models, and heuristic defenses to identify and neutralize direct and indirect prompt injection attempts in real-time.

## 🎯 What to Learn

- Mechanisms of prompt injection: Direct goal hijacking, delimiter escaping, and system prompt override
- Indirect prompt injection via external data sources (web search, documents, vector databases)
- Heuristic defenses: XML tagging, delimiter isolation, and strict input schema verification
- Classifier-based defenses: Lakera Guard, Rebuff, and fine-tuned DeBERTa detectors
- Dual-LLM and privilege-isolated architectures: Segregating untrusted data processing from privileged actions
- Canary tokens and honeypot prompts to detect system prompt exfiltration

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Rebuff: Prompt Injection Detector](https://github.com/protectai/rebuff)
  - Type: Detection Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: Pioneering multi-layered prompt injection detection framework combining heuristics, LLM fine-tuned classifiers, vector database heuristics, and canary tokens.

### 🎓 Courses

- [DeepLearning.AI: Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/) — Hands-on experience testing for and defending against prompt injection attacks.

### ▶️ YouTube — English

- [Computerphile: Video Guides & Tutorials](https://www.youtube.com/@Computerphile)
  - Channel: Computerphile
  - Language: English
  - Type: Video
  - Level: Beginner
  - Why: Clear, intuitive visual demonstration of why prompt injection is fundamentally hard to solve.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Threat Modeling: Designing for Security by Adam Shostack (Wiley)](https://shostack.org/books/threat-modeling-book) — Foundational guide on systematic threat modeling applicable to LLM input/output boundaries.

### 💻 GitHub / Implementations

- [Rebuff](https://github.com/protectai/rebuff) — Self-hardening prompt injection detector.
- [LakeraGuard](https://github.com/lakeraai) — Prompt injection protection.
- [LLM Guard](https://github.com/protectai/llm-guard) — Input/output scanning and sanitization.

## 📄 Foundational Papers

- [Prompt Injection Attacks against Large Language Models](https://arxiv.org/abs/2306.05499) — First formal academic exploration and taxonomy of direct and indirect prompt injection attacks.

### 🧪 Practice

- [Gandalf by Lakera](https://gandalf.lakera.ai/) — Gamified interactive challenge where players attempt to bypass progressive levels of prompt injection defense.

### 🛠️ Projects

- [Canary Token Injection Defense](https://github.com/protectai/rebuff) — Build a middleware that injects secret UUID canaries into prompts and aborts execution if the canary is leaked.

## 🧭 Recommended Learning Path

1. Play through Gandalf by Lakera to experience attack vectors first-hand.
2. Understand why string concatenation of prompts with untrusted data is dangerous.
3. Implement XML tag isolation and structured system prompt guidelines.
4. Deploy Rebuff or Lakera Guard as a pre-execution verification layer.
5. Design an execution architecture that isolates tool permissions from untrusted inputs.

## ⭐ Top 3 Resources

1. Simon Willison's Prompt Injection Research Archive
2. Rebuff (Protect AI)
3. Gandalf by Lakera (Interactive practice game)

