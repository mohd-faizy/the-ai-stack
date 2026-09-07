# Memory Frameworks & Systems

> Memory frameworks provide scalable storage, retrieval, and updating layers that enable language agents to retain user preferences, past interactions, and episodic experiences across sessions.

## 🎯 What to Learn

- Episodic, semantic, and procedural memory distinctions in AI agents
- Mem0: Universal memory layer for personalized AI and production agents
- Letta (formerly MemGPT): Tiered memory architecture with paging between working and archival storage
- Memory extraction algorithms: fact extraction, entity updates, and memory consolidation
- Conflict resolution and stale memory pruning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Letta (formerly MemGPT): State Management and Memory for AI Agents](https://www.letta.com/)
  - Type: Official Platform & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Letta (MemGPT, developed at UC Berkeley) pioneered operating-system-inspired hierarchical memory management for LLMs, allowing agents to edit, recall, and page memory dynamically.

### 📖 Documentation & References

- [Letta Documentation](https://docs.letta.com/) — Comprehensive guides on agent state, memory editing tools, and archival storage.
- [Mem0 Documentation](https://docs.mem0.ai/) — The memory layer for personalized AI apps and developer agents.
- [Zep Documentation](https://help.getzep.com/) — Fast, scalable memory platform for conversational AI and agent assistants.

### 🎓 Courses

- [LLM Memory and State Management (DeepLearning.AI)](https://www.deeplearning.ai/) — Tutorial on building personalized assistants with long-term memory.

### ▶️ YouTube — English

- [UC Berkeley / AI Research: Video Guides & Tutorials](https://www.youtube.com/@UCBerkeley)
  - Channel: UC Berkeley / AI Research
  - Language: English
  - Type: Lecture / Talk
  - Level: Intermediate
  - Why: Charles Packer explains how hierarchical memory paging allows LLMs to retain infinite conversational history.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Human Memory and Knowledge Representation](https://link.springer.com/) — Cognitive science foundations for semantic, working, and episodic memory structures.

### 💻 GitHub / Implementations

- [letta-ai/letta](https://github.com/letta-ai/letta) — Letta (formerly MemGPT) is a framework for creating stateful LLM services with long-term memory.
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — The memory layer for Personalized AI.
- [getzep/zep](https://github.com/getzep/zep) — Fast, scalable building blocks for LLM apps with long-term memory.

## 📄 Foundational Papers

- [MemGPT: Towards LLMs as Operating Systems](https://arxiv.org/abs/2310.08560) — Packer et al. (UC Berkeley 2023) seminal paper introducing virtual context management and tiered memory paging.

### 🧪 Practice

- [Letta Quickstart Tutorial](https://docs.letta.com/quickstart) — Run a local Letta agent and inspect how memory updates as you reveal personal facts.

### 🛠️ Projects

- [Personalized Executive Assistant with Long-Term Memory](https://github.com/mem0ai/mem0) — Build an assistant that remembers user preferences, meeting constraints, and historical projects across weeks of interaction.

## 🧭 Recommended Learning Path

1. Learn the cognitive science distinction between working memory, episodic memory, and semantic memory.
2. Implement a naive memory store using vector embeddings and understand its limitations with temporal facts.
3. Deploy Mem0 to extract atomic user facts from conversational turns automatically.
4. Explore Letta's function-calling memory tools: `core_memory_append` and `conversation_search`.
5. Build a memory consolidation worker that merges redundant facts and deletes outdated records.

## ⭐ Top 3 Resources

1. Letta / MemGPT (letta-ai/letta)
2. Mem0 (mem0ai/mem0)
3. MemGPT Paper (Packer et al.)

