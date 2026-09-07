# RAG Frameworks

> Full-stack development frameworks that streamline document loading, chunking, vector indexing, query routing, retrieval, and response synthesis.

## 🎯 What to Learn

- The Naive RAG architectural flow: Ingestion → Chunking → Embedding → Indexing → Retrieval → Generation
- LlamaIndex architecture: Document stores, Vector Stores, Index abstractions, Query Engines, and Chat Engines
- Haystack (deepset): Production-ready directed acyclic graph (DAG) pipelines for composable retrieval
- LangChain RAG abstractions: Document loaders, vector store retrievers, and LCEL (LangChain Expression Language)
- Hybrid search pipelines combining BM25 keyword matching with dense semantic vector search
- Query routing: dynamically directing user questions to specialized vector indexes, SQL databases, or web search tools

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LlamaIndex Documentation & Ecosystem](https://docs.llamaindex.ai/en/stable/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: LlamaIndex is the premier data framework designed specifically for connecting custom data sources to large language models, offering the most advanced retrieval primitives in the industry.

### 📖 Documentation & References

- [LlamaIndex Official Guide](https://docs.llamaindex.ai/en/stable/) — The definitive guide for building simple to advanced multi-agent RAG architectures.
- [Haystack Documentation (deepset)](https://docs.haystack.deepset.ai/docs/intro) — Modular, production-ready framework for building search and RAG pipelines.
- [LangChain RAG Tutorial](https://python.langchain.com/docs/tutorials/rag/) — Official tutorial on building Question-Answering systems with LangChain and vector stores.

### 🎓 Courses

- [DeepLearning.AI: Building Agentic RAG with LlamaIndex](https://www.deeplearning.ai/short-courses/building-agentic-rag-with-llamaindex/) — Taught by Jerry Liu (CEO of LlamaIndex), covering router query engines and multi-document agents.

### ▶️ YouTube — English

- [RAG From Scratch Playlist](https://www.youtube.com/playlist?list=PLfaIDF989eSTCT4E2i4N_Rsm_m3pXpZgW)
  - Channel: LangChain
  - Language: English
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Lance Martin breaks down indexing, retrieval, routing, and query transformations from first principles.
- [LlamaIndex Official Video Guides & Architecture](https://www.youtube.com/@LlamaIndex)
  - Channel: LlamaIndex
  - Language: English
  - Type: Channel / Tutorials
  - Level: Beginner to Intermediate
  - Why: Official walkthroughs by the LlamaIndex team covering document loaders, indexes, query engines, and agentic workflows.

### ▶️ YouTube — Hindi / Hinglish

- [CampusX: Complete RAG Playlist](https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh covers document parsing, embedding generation, vector databases, and LlamaIndex/LangChain in Hinglish.
- [Krish Naik: Complete RAG Playlist](https://www.youtube.com/playlist?list=PLZoTAELRMXVM8Pf4U67L4UuDRgV4TNX9D)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive Hindi hands-on projects building Q&A bots and document retrieval applications.

### 📚 Books

- [Retrieval-Augmented Generation for Large Language Models: A Survey (Gao et al.)](https://arxiv.org/abs/2312.10997) — The definitive academic survey categorizing Naive RAG, Advanced RAG, and Modular RAG.

### 💻 GitHub / Implementations

- [LlamaIndex](https://github.com/run-llama/llama_index) — Data framework for LLM applications.
- [Haystack](https://github.com/deepset-ai/haystack) — AI application framework for RAG.
- [RAGFlow](https://github.com/infiniflow/ragflow) — Deep document understanding RAG engine.
- [LangChain](https://github.com/langchain-ai/langchain) — Building applications with LLMs through composability.

### 🧪 Practice

- [LlamaIndex Starter Tutorials](https://docs.llamaindex.ai/en/stable/getting_started/starter_example/) — 5-line starter script loading local text files and answering queries.

### 🛠️ Projects

- [Enterprise Multi-Document Financial Research Assistant](https://docs.llamaindex.ai/en/stable/use_cases/q_and_a/) — Build an agentic RAG system that routes queries between 10-K filings, earnings call transcripts, and live stock APIs.

## 🧭 Recommended Learning Path

1. Understand why naive prompting fails for enterprise data: hallucination, stale knowledge, and token limits.
2. Build a baseline RAG pipeline in LlamaIndex: load PDFs, create `VectorStoreIndex`, and query with `as_query_engine()`.
3. Implement hybrid search: combining BM25 keyword frequency with dense vector cosine distance.
4. Incorporate reranking models (Cohere Rerank or BGE-Reranker) to score retrieved chunks.
5. Deploy an Agentic RAG architecture where an LLM agent plans multi-step retrieval sub-queries.

## ⭐ Top 3 Resources

1. LlamaIndex (docs.llamaindex.ai)
2. Haystack by deepset (haystack.deepset.ai)
3. LangChain RAG From Scratch (github.com/langchain-ai/rag-from-scratch)

