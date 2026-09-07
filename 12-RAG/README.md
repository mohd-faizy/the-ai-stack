# 12 - Retrieval-Augmented Generation

> Grounding Large Language Models with external authoritative knowledge bases, dynamic document retrieval, multi-hop reasoning, and factual verification.

## 🌐 Overview & Architectural Importance

Retrieval-Augmented Generation (RAG) is the enterprise backbone of modern AI systems. By dynamically retrieving relevant, up-to-date domain documents and injecting them into the LLM context window at query time, RAG eliminates parametric hallucinations, bypasses costly re-training, and provides verifiable citation trails for enterprise decision-making.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**RAG Frameworks**](RAG-Frameworks.md) — LlamaIndex, LangChain, Haystack, and modular orchestrators for building production retrieval pipelines.
* [**Advanced RAG Techniques**](Advanced-RAG-Techniques.md) — HyDE, Parent Document Retrieval, Contextual Retrieval, Cross-Encoder reranking, and multi-query expansion.
* [**Graph RAG**](Graph-RAG.md) — Microsoft GraphRAG, knowledge graph integration, community summaries, and global thematic reasoning.
* [**RAG Evaluation**](RAG-Evaluation.md) — Ragas, TruLens, ARES, and evaluating the RAG Triad: Context Relevance, Groundedness, and Answer Relevance.
* [**Document Parsing for RAG**](Document-Parsing-for-RAG.md) — LlamaParse, Unstructured, MinerU, and converting complex PDFs, tables, and charts into LLM-ready text.

## 🧭 Recommended Study Sequence

1. **Naive RAG Pipeline**: Ingestion, chunking, embedding, vector database indexing, top-k retrieval, and synthesis.
2. **Retrieval Precision & Recall**: Hybrid search (BM25 keyword + dense vector) and Cross-Encoder re-ranking.
3. **Advanced Retrieval Patterns**: Sentence-window retrieval, auto-merging parent retrievers, and HyDE (Hypothetical Document Embeddings).
4. **Graph-Enhanced Retrieval**: Combining vector search with Knowledge Graphs (Microsoft GraphRAG) for global cross-document queries.
5. **RAG Triad Evaluation**: Measuring faithfulness and answer relevance using automated synthetic test sets with Ragas.

## 🗝️ Foundational Prerequisites

- Dense vector embeddings and similarity search fundamentals.
- Prompt engineering and context window management.
- Document parsing and data preprocessing in Python.

---

[← Back to Main Repository](../README.md)
