# 33 - AI Safety

> Scientific disciplines and engineering systems ensuring AI systems are aligned with human intent, robust against abuse, harmless, and constrained within operational guardrails.

## 🌐 Overview & Architectural Importance

As frontier models gain agentic autonomy, code execution capabilities, and access to external tools, safety switches from an academic concern to a critical systems engineering requirement. AI Safety encompasses alignment training (RLHF/DPO), adversarial red teaming, content moderation, and real-time input/output guardrails.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Alignment**](Alignment.md) — RLHF, DPO, KTO, PPO, TRL, Anthropic Constitutional AI, and preference optimization.
* [**Red Teaming & Jailbreaking**](Red-Teaming-and-Jailbreaking.md) — Garak, PyRIT, JailbreakBench, automated red teaming, and adversarial prompt attacks.
* [**Content Safety & Moderation**](Content-Safety-and-Moderation.md) — Llama Guard, Purple Llama, Detoxify, toxicity classifiers, and safety moderation APIs.
* [**Guardrails**](Guardrails.md) — NeMo Guardrails, Guardrails AI, LLM Guard, Colang, hallucination checks, and real-time output mediation.

## 🧭 Recommended Study Sequence

1. **Preference Alignment**: SFT, Reward Modeling, and RLHF vs Direct Preference Optimization (DPO).
2. **Constitutional AI**: Self-critique, rule-based principles, and automated synthetic alignment data.
3. **Automated Red Teaming**: Scanning LLM endpoints for vulnerabilities with Garak and PyRIT.
4. **Classification & Moderation**: Lightweight classifier models (Llama Guard) filtering toxic inputs and outputs.
5. **Deterministic Guardrails**: Execution gating with NeMo Guardrails and programmable policies.

## 🗝️ Foundational Prerequisites

- Reinforcement learning fundamentals (policy gradients, reward optimization, KL divergence).
- Transformer token generation dynamics and logit biasing.
- Cybersecurity principles and threat modeling.

---

[← Back to Main Repository](../README.md)
