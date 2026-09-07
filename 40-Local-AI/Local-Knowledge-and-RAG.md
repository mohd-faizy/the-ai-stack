# Local Knowledge & RAG

> Privacy-first, offline retrieval systems that allow users to search, query, and chat with personal documents without sending data to third-party clouds.

## 🎯 What to Learn

- Architecture of 100% offline RAG: Local document loaders -> Local chunking -> Local embeddings -> Local vector DB -> Local LLM
- PrivateGPT: 100% private, offline question-answering on enterprise documents using LangChain and llama.cpp
- Khoj: Personal AI second brain with local search, calendar integration, and desktop agents
- Quivr & DocsGPT: Knowledge base platforms for chatting with PDFs, markdown files, and codebases
- Local embedding models: Nomic Embed, BGE-large, and MiniLM running via Ollama or ONNX
- Local vector stores: Chroma, DuckDB, LanceDB, and SQLite-vss

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PrivateGPT](https://github.com/zylon-ai/private-gpt)
  - Type: Offline RAG Solution
  - Language: English
  - Level: Intermediate
  - Why recommended: Production-ready, 100% offline knowledge base system providing both a Gradio UI and an enterprise REST API to query local documents with zero data leaks.

### 🎓 Courses

- [DeepLearning.AI: Building Systems with the ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Covers document retrieval and conversational memory concepts.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Full installation and document ingestion walkthrough using local models and vector storage.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Designing Data-Intensive Applications by Martin Kleppmann (O'Reilly)](https://dataintensive.net/) — Essential architectural principles on indexing, retrieval, and storage engines.

### 💻 GitHub / Implementations

- [PrivateGPT](https://github.com/zylon-ai/private-gpt) — Private document interaction.
- [Khoj](https://github.com/khoj-ai/khoj) — Self-hosted AI second brain.
- [Quivr](https://github.com/QuivrHQ/quivr) — Personal productivity AI assistant.
- [DocsGPT](https://github.com/arc53/DocsGPT) — AI-powered documentation assistant.

### 🧪 Practice

- [PrivateGPT Ingestion Guide](https://docs.privategpt.dev/manual/ingestion/ingesting-files) — Ingest a folder of PDFs and run semantic queries from your terminal.

### 🛠️ Projects

- [Personal Second Brain with Khoj](https://github.com/khoj-ai/khoj) — Set up Khoj connected to your personal Obsidian vault to search and summarize notes locally.

## 🧭 Recommended Learning Path

1. Understand the privacy constraints of enterprise documents.
2. Install local embedding models (e.g. `ollama pull nomic-embed-text`).
3. Deploy PrivateGPT with local LLM and embedding backends.
4. Ingest complex documents (PDFs, Markdown, Word) and examine chunking strategies.
5. Evaluate retrieval quality and generation latency on local hardware.

## ⭐ Top 3 Resources

1. PrivateGPT (Enterprise-ready offline RAG)
2. Khoj (Personal AI second brain)
3. Nomic Embed Text (High-performance local embedding model)

