# 32 - AI Evaluation

> Systematic methodologies, benchmark datasets, and automated test harnesses to assess foundation model capability, reliability, safety, and reasoning.

## 🌐 Overview & Architectural Importance

Without rigorous evaluation, foundation model improvements are anecdotal. AI Evaluation spans academic benchmarks (MMLU, GSM8k), agentic task execution (SWE-bench), retrieval quality (Ragas), and LLM-as-a-judge protocols that determine production deployment readiness.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**LLM Evaluation**](LLM-Evaluation.md) — lm-evaluation-harness, HELM, Chatbot Arena, MMLU, HumanEval, and automated LLM-as-a-judge frameworks.
* [**RAG Evaluation**](RAG-Evaluation.md) — Ragas, DeepEval, TruLens, context precision, context recall, faithfulness, and answer relevance.
* [**Agent Evaluation**](Agent-Evaluation.md) — SWE-bench, GAIA, Tau-bench, WebArena, multi-turn reasoning, tool invocation, and task completion verification.
* [**Vision Evaluation**](Vision-Evaluation.md) — MMBench, MathVista, MMMU, COCO, and multimodal benchmark suites.
* [**Safety Evaluation**](Safety-Evaluation.md) — HarmBench, ToxiGen, Inspect AI, jailbreak vulnerability testing, and bias quantification.

## 🧭 Recommended Study Sequence

1. **Ground Truth Benchmarking**: Standardized multiple-choice and exact-match test suites (MMLU, GSM8K, ARC, HellaSwag).
2. **LLM-as-a-Judge**: Pairwise win-rate testing, MT-Bench protocols, and judge position/length bias mitigations.
3. **RAG Triad Metrics**: Context relevance, groundedness/faithfulness, and answer relevance.
4. **Execution-Based Evaluation**: Unit tests for code models (HumanEval, SWE-bench) and state verification for agents.
5. **Continuous CI/CD Evals**: Integrating automated regression eval suites into model promotion pipelines.

## 🗝️ Foundational Prerequisites

- Statistical significance testing and bootstrap confidence intervals.
- Prompt engineering and zero-shot/few-shot benchmark formats.
- Python testing frameworks and API orchestration.

---

[← Back to Main Repository](../README.md)
