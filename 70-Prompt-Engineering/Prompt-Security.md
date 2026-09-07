# Prompt Security

> Defensive system prompt hardening, prompt injection defense, canary tokens, and automated red-teaming scanners.

## 🎯 What to Learn

- Prompt injection threat modeling: Direct goal hijacking, prompt leakage, and indirect injection via untrusted external context
- Rebuff: Multi-layered prompt injection detection framework combining heuristics, vector embeddings, LLM analysis, and canary tokens
- Promptfoo Red Team: Automated vulnerability scanning discovering jailbreaks, PII leakage, and brand risk
- Defensive prompt design: XML tag encapsulation, explicit delimiter isolation, and role instruction hierarchy
- Privilege separation: Segregating untrusted data processing from privileged action tools (Dual-LLM architecture)
- LLM Guard: Production security toolkit for scanning inputs and outputs in real time

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Promptfoo Red Team](https://github.com/promptfoo/promptfoo)
  - Type: Automated AI Red Teaming
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading open-source automated red-teaming tool that automatically generates hundreds of adversarial test cases to probe LLMs for prompt injection, jailbreaks, and sensitive data leakage.

### 🎓 Courses

- [DeepLearning.AI: Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/) — Hands-on course on identifying vulnerabilities and building robust defenses.

### ▶️ YouTube — English

- [Simon Willison / PyData: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: Simon Willison / PyData
  - Language: English
  - Type: Conference Talk
  - Level: Intermediate
  - Why: Simon Willison explains the fundamental security flaw of LLMs (mixing code with untrusted data) and architectural defenses.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Threat Modeling: Designing for Security by Adam Shostack](https://shostack.org/books/threat-modeling-book) — Foundational methodology for identifying attack surfaces and designing defense-in-depth.

### 💻 GitHub / Implementations

- [Rebuff](https://github.com/protectai/rebuff) — Prompt injection detection.
- [Promptfoo Red Team](https://github.com/promptfoo/promptfoo) — Red teaming for prompts.
- [LLM Guard](https://github.com/protectai/llm-guard) — Input/output scanning.

## 📄 Foundational Papers

- [Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173) — Greshake et al. landmark paper demonstrating indirect prompt injection attacks.

### 🧪 Practice

- [Lakera Gandalf Challenge](https://gandalf.lakera.ai/) — Gamified security challenge attempting to extract secret passwords across 8 levels of prompt defense.

### 🛠️ Projects

- [Automated Red-Teaming CI Scanner](https://www.promptfoo.dev/docs/red-team/quickstart/) — Set up a GitHub Actions workflow that executes 100 automated jailbreak probes against your system prompt on every pull request.

## 🧭 Recommended Learning Path

1. Play through Gandalf by Lakera to experience prompt injection attack patterns firsthand.
2. Adopt strict XML/Markdown delimiter tagging around untrusted user inputs.
3. Implement canary tokens with Rebuff to detect prompt leakage.
4. Run automated vulnerability scanning with Promptfoo Red Team.
5. Design privilege-isolated architectures separating untrusted content processing from execution.

## ⭐ Top 3 Resources

1. Promptfoo Red Team (Automated Vulnerability Scanner)
2. Simon Willison's Prompt Injection Research
3. Rebuff (Protect AI)

