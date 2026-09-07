# 44 - LLMOps

> Operational engineering, observability, tracing, automated testing, and token cost management tailored for large language model applications.

## 🌐 Overview & Architectural Importance

Traditional MLOps focuses on tabular datasets and regression models. LLMOps addresses the non-deterministic, multi-step, prompt-driven nature of foundation models—tracing complex agent graphs, evaluating hallucinations, managing rate limits, and orchestrating token budgets.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Observability & Tracing**](Observability-and-Tracing.md) — Langfuse, Arize Phoenix, OpenLLMetry, Lunary, OpenLIT, and execution graph tracing.
* [**Evaluation & Testing**](Evaluation-and-Testing.md) — LangSmith, Promptfoo, DeepEval, Opik, Giskard, and automated CI test suites.
* [**Cost & Token Management**](Cost-and-Token-Management.md) — LiteLLM, OpenRouter, AI Gateway, load balancing, caching, and token budget management.

## 🧭 Recommended Study Sequence

1. **Distributed Tracing**: Instrumenting multi-step LLM chains and agents with OpenTelemetry and Langfuse.
2. **Prompt & Output Evaluation**: Automated regression testing with Promptfoo before deployment.
3. **Cost & Latency Management**: Multiplexing API providers, caching with Redis, and fallback routing with LiteLLM.
4. **Quality Monitoring**: Tracking drift, latency percentiles, and hallucination scores in production.
5. **Guardrail Integration**: Connecting real-time security and PII filters to the LLMOps pipeline.

## 🗝️ Foundational Prerequisites

- OpenTelemetry standards (traces, spans, baggage).
- Prompt engineering and LLM-as-a-judge protocols.
- API gateways, reverse proxies, and token budgeting.

---

[← Back to Main Repository](../README.md)
