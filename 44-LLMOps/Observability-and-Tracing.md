# Observability & Tracing

> Distributed tracing, telemetry collection, and execution graph visualization platforms designed to debug and monitor complex LLM and agent applications.

## 🎯 What to Learn

- OpenTelemetry (OTel) standards for Generative AI: Traces, spans, and token metadata
- Langfuse: Open-source LLM engineering platform for tracing, evaluations, prompt management, and metrics
- Arize Phoenix: Open-source AI observability library with OpenInference tracing and embedding visualizations
- OpenLLMetry (Traceloop): OpenTelemetry-based auto-instrumentation for LangChain, LlamaIndex, OpenAI, and Anthropic
- Debugging agent execution loops: Visualizing tool calls, intermediate reasoning steps, and latency bottlenecks
- Tracking user feedback, thumbs up/down, and tying user sessions to trace IDs

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Langfuse](https://github.com/langfuse/langfuse)
  - Type: LLMOps Platform
  - Language: English
  - Level: Beginner
  - Why recommended: The leading open-source LLM observability platform, offering beautiful tracing, evaluation pipelines, prompt versioning, and cost tracking with self-hosting support.

### 🎓 Courses

- [DeepLearning.AI: Evaluating and Debugging Generative AI](https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/) — Hands-on course covering LLM tracing, debugging, and continuous improvement.

### ▶️ YouTube — English

- [Langfuse / Prompt Engineering: Video Guides & Tutorials](https://www.youtube.com/@langfuse)
  - Channel: Langfuse / Prompt Engineering
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear guide to adding tracing to an agentic application, inspecting nested tool calls, and tracking token costs.

### ▶️ YouTube — Hindi / Hinglish

- [MLOps & LLMOps Pipeline Architecture in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVOjS7KXQK3DAj7ER6LT2fEO)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on production deployment, monitoring, and lifecycle management for models in Hindi.


### 📚 Books

- [Cloud Native Observability by Ted Young (O'Reilly)](https://www.oreilly.com/) — Foundations of distributed tracing, metrics, and OpenTelemetry instrumentation.

### 💻 GitHub / Implementations

- [Langfuse](https://github.com/langfuse/langfuse) — Open-source LLM engineering platform.
- [Arize Phoenix](https://github.com/Arize-ai/phoenix) — ML and LLM observability.
- [OpenLLMetry](https://github.com/traceloop/openllmetry) — OpenTelemetry-native LLM observability.
- [Lunary](https://github.com/lunary-ai/lunary-py) — Production toolkit for LLM apps.
- [OpenLIT](https://github.com/openlit/openlit) — OpenTelemetry-native observability for GenAI.
- [Helicone](https://github.com/Helicone/helicone) — Open-source LLM observability platform.

### 🧪 Practice

- [Langfuse Cloud Free Tier](https://cloud.langfuse.com/) — Sign up and trace your first LLM API call with 2 lines of Python code.

### 🛠️ Projects

- [Instrument Multi-Agent System with Langfuse](https://github.com/langfuse/langfuse) — Trace an autonomous CrewAI or LangGraph agent, logging every sub-agent prompt, tool call, and token expenditure.

## 🧭 Recommended Learning Path

1. Understand why traditional APM tools fail for LLMs (non-deterministic text outputs, token counts, reasoning chains).
2. Instrument an LLM API call using Langfuse Python SDK.
3. Trace multi-step RAG pipelines: Query rewrite -> Vector search -> Synthesis.
4. Track production token costs per user, per model, and per feature.
5. Set up automated alert thresholds for latency spikes and high hallucination scores.

## ⭐ Top 3 Resources

1. Langfuse (Open-source LLMOps & Tracing)
2. Arize Phoenix (OpenInference Observability)
3. OpenLLMetry (OpenTelemetry standard for GenAI)

