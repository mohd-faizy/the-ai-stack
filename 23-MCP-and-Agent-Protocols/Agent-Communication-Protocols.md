# Agent Communication Protocols

> Agent communication protocols define open standards for inter-agent message passing, task negotiation, intent alignment, and decentralized multi-agent collaboration.

## 🎯 What to Learn

- FIPA-ACL (Agent Communication Language) historical foundations: speech act theory, performatives
- Agent Protocol (AI Engineer Foundation standard): REST API for interacting with agents
- Agent-to-Agent (A2A) message formats, envelope schemas, and capability discovery
- Multi-agent negotiation, consensus voting, and decentralized auction mechanisms
- OpenAPI and JSON-RPC standards for inter-system interoperability

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Agent Protocol (AI Engineer Foundation)](https://agentprotocol.ai/)
  - Type: Open Industry Standard & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Agent Protocol is a standardized communication interface developed by the AI Engineer Foundation, enabling any client, benchmark, or agent runner to interact with any autonomous agent uniformly.

### 📖 Documentation & References

- [Agent Protocol Documentation](https://agentprotocol.ai/docs) — OpenAPI specification for steps, tasks, artifacts, and agent communication.
- [FIPA-ACL Specification (IEEE)](http://www.fipa.org/repository/aclspecs.html) — Historical IEEE standard for inter-agent communication and speech act performatives.

### 🎓 Courses

- [Distributed AI & Multi-Agent Communication (MIT OpenCourseWare)](https://ocw.mit.edu/) — Academic lectures on protocol design, contract nets, and inter-agent coordination.

### ▶️ YouTube — English

- [AI Engineer Foundation: Video Guides & Tutorials (AI Engineer Foundation)](https://www.youtube.com/results?search_query=AI%20Engineer%20Foundation%20AI%20Engineer%20Foundation%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: AI Engineer Foundation
  - Language: English
  - Type: Conference Talk
  - Level: Intermediate
  - Why: Overview of why standardized APIs are required to decouple agent development from UI and evaluation harnesses.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Multi-Agent Systems](http://www.masfoundations.org/) — Shoham and Leyton-Brown standard textbook covering communication languages and game-theoretic protocols.

### 💻 GitHub / Implementations

- [AI-Engineer-Foundation/agent-protocol](https://github.com/AI-Engineer-Foundation/agent-protocol) — A common interface for AI agents. Open communication standard.

## 📄 Foundational Papers

- [FIPA Communicative Act Library Specification](http://www.fipa.org/specs/fipa00037/SC00037J.html) — Seminal standard defining inform, request, propose, and agree performatives in multi-agent systems.

### 🧪 Practice

- [Agent Protocol Python Client](https://github.com/AI-Engineer-Foundation/agent-protocol/tree/main/packages/client) — Interact with any Agent Protocol-compliant agent using Python or TypeScript clients.

### 🛠️ Projects

- [Cross-Framework Agent Bridge](https://agentprotocol.ai/) — Wrap a LangGraph agent and an AutoGen agent in Agent Protocol REST wrappers and orchestrate a joint problem-solving pipeline.

## 🧭 Recommended Learning Path

1. Learn speech act theory: locutionary, illocutionary, and perlocutionary acts.
2. Study the Agent Protocol REST API schema: `/ap/v1/agent/tasks` and `/steps`.
3. Wrap a custom Python agent with the `agent-protocol` library.
4. Connect your agent to external benchmark runners (e.g. AutoGPT benchmarks) without changing core code.
5. Implement decentralized message brokering between agents using NATS or RabbitMQ.

## ⭐ Top 3 Resources

1. Agent Protocol (agentprotocol.ai)
2. FIPA-ACL Standard (IEEE Computer Society)
3. Multi-Agent Systems (Shoham & Leyton-Brown)

