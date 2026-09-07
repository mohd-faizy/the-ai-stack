# 34 - AI Security

> Securing AI and machine learning infrastructure against cyberattacks, prompt injections, model extraction, data poisoning, and adversarial evasion.

## 🌐 Overview & Architectural Importance

As LLMs are integrated into business workflows with autonomous agency, database access, and email execution, they become primary attack surfaces. AI Security bridges traditional cybersecurity with machine learning vulnerability research (OWASP Top 10 for LLMs).

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**LLM Security**](LLM-Security.md) — OWASP Top 10 for LLMs, threat modeling, Garak, LLM Guard, Vigil, and defense-in-depth.
* [**Adversarial Machine Learning**](Adversarial-Machine-Learning.md) — Adversarial Robustness Toolbox (ART), CleverHans, Foolbox, evasion attacks, and data poisoning.
* [**Prompt Injection Detection**](Prompt-Injection-Detection.md) — Rebuff, Lakera Guard, direct/indirect prompt injection defenses, and dual-LLM architectures.

## 🧭 Recommended Study Sequence

1. **Threat Modeling**: Mapping the OWASP Top 10 for LLM Applications (Injection, Insecure Output, Model Theft).
2. **Prompt Injection Defenses**: Direct attacks, indirect injections in RAG, and privilege separation.
3. **Adversarial Robustness**: Gradient attacks (FGSM, PGD), evasion, and certified robustness techniques.
4. **Data Poisoning & Supply Chain**: Detecting corrupted training tokens and compromised Hugging Face checkpoints.
5. **Runtime SecOps**: Continuous behavioral telemetry, anomaly detection, and automated honeypots.

## 🗝️ Foundational Prerequisites

- Traditional application security (OWASP, SQLi, XSS, SSRF).
- Neural network loss functions, gradients, and optimization.
- Python API security and network monitoring.

---

[← Back to Main Repository](../README.md)
