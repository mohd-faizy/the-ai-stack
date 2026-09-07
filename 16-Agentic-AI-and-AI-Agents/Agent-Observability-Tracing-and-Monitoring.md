# Agent Observability, Tracing & Monitoring

> Agent observability tools capture detailed execution traces, tool call latencies, token consumption, and intermediate reasoning steps to debug, optimize, and monitor autonomous systems in production.

## 🎯 What to Learn

- OpenTelemetry standards for AI: OpenInference and OpenLLMetry specifications
- Step-level trace visualization: parent-child spans for nested agent loops
- Token usage tracking, latency breakdowns, and cost attribution per user session
- Online evaluation metrics and user feedback logging (Langfuse, Arize Phoenix)
- AgentOps and Helicone for production agent fleet telemetry

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Langfuse: Open Source LLM Engineering Platform](https://langfuse.com/)
  - Type: Official Platform & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Langfuse is the leading open-source observability platform for agents and LLMs, offering detailed trace trees, prompt versioning, user cost tracking, and automated evaluation metrics.

### 📖 Documentation & References

- [Langfuse Documentation](https://langfuse.com/docs) — Comprehensive guides to tracing LangGraph, CrewAI, OpenAI SDK, and custom agent loops.
- [Arize Phoenix Documentation](https://docs.arize.com/phoenix) — Open-source AI observability platform with native OpenInference tracing and eval.
- [AgentOps Documentation](https://docs.agentops.ai/) — Specialized observability and testing platform built specifically for autonomous agents.

### 🎓 Courses

- [LLM Observability and Evaluation (DeepLearning.AI)](https://www.deeplearning.ai/) — Course on tracking, evaluating, and monitoring production LLM and agent applications.

### ▶️ YouTube — English

- [Langfuse: Video Guides & Tutorials](https://www.youtube.com/@langfuse)
  - Channel: Langfuse
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step tutorial instrumenting LangGraph agents, analyzing spans, and scoring outputs.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Distributed Tracing in Practice](https://www.oreilly.com/library/view/distributed-tracing-in/9781492056638/) — O'Reilly guide on OpenTelemetry, span hierarchies, and production microservice observability.

### 💻 GitHub / Implementations

- [langfuse/langfuse](https://github.com/langfuse/langfuse) — Open source LLM engineering platform: Tracing, Observability, Metrics, Evals.
- [Arize-ai/phoenix](https://github.com/Arize-ai/phoenix) — AI observability platform for LLM evaluation, tracing, and dataset curation.
- [AgentOps-AI/agentops](https://github.com/AgentOps-AI/agentops) — Python SDK for AI agent monitoring, replay, and cost tracking.

## 📄 Foundational Papers

- [Dapper, a Large-Scale Distributed Systems Tracing Infrastructure](https://research.google/pubs/pub36356/) — Sigelman et al. (Google Research 2010) foundational paper establishing modern span-based distributed tracing.

### 🧪 Practice

- [Langfuse Self-Hosted Quickstart](https://langfuse.com/docs/deployment/local) — Run Langfuse locally via Docker Compose and stream real-time traces from your agent.

### 🛠️ Projects

- [Enterprise Agent Telemetry & Cost Dashboard](https://langfuse.com/docs/integrations/langchain) — Instrument a LangGraph multi-agent team with Langfuse, tracking token spend per department and flagging failed tool calls.

## 🧭 Recommended Learning Path

1. Understand the difference between traditional log scraping and hierarchical span tracing.
2. Instrument an agent script using the `@observe()` decorator or OpenInference auto-instrumentation.
3. Inspect a multi-turn agent trace in the Langfuse UI: root trace -> model call -> tool span -> feedback.
4. Configure automated LLM-as-a-judge evaluations to score agent reasoning traces for hallucinations.
5. Set up alerting thresholds on unexpected token spikes or tool timeout rates.

## ⭐ Top 3 Resources

1. Langfuse (langfuse.com)
2. Arize Phoenix (arize.com/phoenix)
3. AgentOps (agentops.ai)

