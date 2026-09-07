# Red Teaming & Jailbreaking

> Methodologies, automated frameworks, and vulnerability research to discover exploits, bypass safety filters, and probe generative AI models for critical security flaws.

## 🎯 What to Learn

- Jailbreaking taxonomies: Prefix injection, hypothetical roleplay, Base64 encoding, and cipher attacks
- Adversarial suffix attacks: GCG (Greedy Coordinate Gradient) and automated token optimization
- Automated red-teaming frameworks: Garak and Microsoft PyRIT (Python Risk Identification Toolkit)
- Multi-turn persuasion and psychological manipulation attacks
- Multimodal jailbreaks: Typographic attacks and adversarial image perturbations
- Defense-in-depth strategies and adversarial training mitigations

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Garak: LLM Vulnerability Scanner](https://github.com/leondz/garak)
  - Type: Vulnerability Scanner
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading open-source LLM vulnerability scanner, checking for prompt injection, jailbreaks, data leakage, and toxicity.

### 🎓 Courses

- [DeepLearning.AI: Red Teaming LLM Applications](https://www.deeplearning.ai/short-courses/red-teaming-llm-applications/) — Learn to systematically discover vulnerabilities and test LLM systems before production release.

### ▶️ YouTube — English

- [RSA Conference / Microsoft Security: Video Guides & Tutorials](https://www.youtube.com/@MicrosoftDeveloper)
  - Channel: RSA Conference / Microsoft Security
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: Practical enterprise guide to automated vulnerability scanning and jailbreak mitigations.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Adversarial Machine Learning by Anthony D. Joseph et al. (Cambridge)](https://www.cambridge.org/core/books/adversarial-machine-learning/29E40AC02A197D875FDC7A902A9BC4EA) — Comprehensive academic foundation on adversarial attacks against machine learning algorithms.

### 💻 GitHub / Implementations

- [Garak](https://github.com/NVIDIA/garak) — LLM vulnerability scanner.
- [PyRIT](https://github.com/Azure/PyRIT) — Python risk identification tool for AI.
- [Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai) — AI safety evaluation framework.
- [ART](https://github.com/Trusted-AI/adversarial-robustness-toolbox) — Adversarial robustness toolkit.
- [JailbreakBench](https://github.com/JailbreakBench/jailbreakbench) — Benchmark for jailbreak attacks.
- [HarmBench](https://github.com/centerforaisafety/HarmBench) — Standardized evaluation of automated red teaming.

## 📄 Foundational Papers

- [Universal and Transferable Adversarial Attacks on Aligned Language Models](https://arxiv.org/abs/2307.15043) — Introduces GCG attacks, proving that gradient-based search produces tokens that trigger universal jailbreaks.
- [Jailbroken: How Does LLM Safety Training Fail?](https://arxiv.org/abs/2307.02483) — Comprehensive taxonomy of jailbreaking mechanisms and failure modes in safety alignment.

### 🧪 Practice

- [Garak Quickstart Scan](https://github.com/leondz/garak) — Run a full vulnerability assessment against an Ollama or OpenAI endpoint in your terminal.

### 🛠️ Projects

- [Build an Automated Red Teaming CI Pipeline](https://github.com/Azure/PyRIT) — Integrate Microsoft PyRIT into GitHub Actions to probe model changes for regression in safety boundaries.

## 🧭 Recommended Learning Path

1. Understand threat models for LLMs and generative systems.
2. Experiment with manual jailbreak archetypes (cipher, roleplay, hypothetical scenarios).
3. Run automated vulnerability scanning with Garak on local LLMs.
4. Study gradient-based attacks (GCG) and black-box optimization (PAIR, TAP).
5. Design layered defenses: System prompt engineering, moderation models, and output guards.

## ⭐ Top 3 Resources

1. Garak (LLM vulnerability scanner)
2. Microsoft PyRIT (AI Red Teaming Toolkit)
3. JailbreakBench (Open-source benchmark)

