# Advanced RAG Techniques

> Advanced retrieval strategies that address the failure modes of naive RAG through query transformation, hierarchical chunking, contextual retrieval, and two-stage reranking.

## 🎯 What to Learn

- Query transformation: Multi-Query, Step-Back Prompting, and Sub-Question Decomposition
- Hypothetical Document Embeddings (HyDE): Generating synthetic answers to search the embedding space
- Hierarchical and multi-representation chunking: Sentence-window retrieval and Parent Document Retrievers
- Anthropic Contextual Retrieval: Prepending document-level and chunk-level context before embedding
- Two-stage retrieval: Fast bi-encoder dense retrieval followed by precise cross-encoder reranking (Cohere, BGE)
- Corrective RAG (CRAG) and Self-RAG: Reflection loops that evaluate retrieved document quality

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Anthropic: Contextual Retrieval Architecture](https://www.anthropic.com/news/contextual-retrieval)
  - Type: Methodology & Guide
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Anthropic's Contextual Retrieval combines chunk-specific explanatory context with BM25 and dense embeddings to reduce failed retrievals by up to 49%.

### 📖 Documentation & References

- [LlamaIndex Production RAG Guide](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/) — Techniques for improving retrieval accuracy, latency, and context quality.
- [Cohere Rerank Documentation](https://docs.cohere.com/docs/reranking) — Guide on integrating cross-encoder reranking to re-order top-k retrieved documents.

### 🎓 Courses

- [DeepLearning.AI: Advanced Retrieval for AI with Chroma](https://www.deeplearning.ai/short-courses/) — Taught by Anton Troynikov, covering query expansion, cross-encoders, and embedding adaptation.

### ▶️ YouTube — English

- [Advanced RAG: Query Transformations, Multi-Query & Routing](https://www.youtube.com/playlist?list=PLfaIDF989eSTCT4E2i4N_Rsm_m3pXpZgW)
  - Channel: LangChain
  - Language: English
  - Type: Playlist
  - Level: Intermediate
  - Why: Lance Martin demonstrates HyDE, multi-query expansion, and re-ranking in Python from scratch.
- [LlamaIndex Production RAG & Optimization](https://www.youtube.com/@LlamaIndex)
  - Channel: LlamaIndex
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate to Advanced
  - Why: Deep dive into auto-merging retrievers, sentence window retrieval, and recursive index lookups.

### ▶️ YouTube — Hindi / Hinglish

- [Advanced RAG Techniques in Python (Hindi)](https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Nitish Singh covers HyDE, Parent Document Retrievers, and Cross-Encoders in thorough Hinglish lectures.

### 📚 Books

- [Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE Paper by Gao et al.)](https://arxiv.org/abs/2212.10496) — The landmark paper introducing Hypothetical Document Embeddings.

### 💻 GitHub / Implementations

- [mohd-faizy/RAG-Design-Patterns](https://github.com/mohd-faizy/RAG-Design-Patterns) — Modular implementations of advanced retrieval strategies: HyDE, parent-document chunking, cross-encoder reranking, and self-reflective loops.
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — Document-centric RAG with deep parsing.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — Advanced retrieval strategies (sub-question, recursive, etc.).
- [parthsarthi03/raptor](https://github.com/parthsarthi03/raptor) — Recursive abstractive processing for tree-organized retrieval.

## 📄 Foundational Papers

- [Precise Zero-Shot Dense Retrieval without Relevance Labels (HyDE)](https://arxiv.org/abs/2212.10496) — Gao et al. (2022) introducing hypothetical document generation to bridge vocabulary mismatch.
- [Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection](https://arxiv.org/abs/2310.11511) — Asai et al. (ICLR 2024) training language models to critique their own retrieval and generation dynamically.

### 🧪 Practice

- [LlamaIndex Production RAG Recipes](https://docs.llamaindex.ai/en/stable/optimizing/production_rag/) — Code examples for sentence window retrieval and auto-merging retrievers.

### 🛠️ Projects

- [Advanced Query Expansion & Cross-Encoder Reranker](https://github.com/mohd-faizy/RAG-Design-Patterns) — Production pipeline combining multi-query generation with BGE / Cohere reranking for ultra-high precision passage retrieval.
- [Contextual Hybrid Financial Search Engine](https://www.anthropic.com/news/contextual-retrieval) — Implement Anthropic Contextual Retrieval with Cohere Rerank to query multi-page corporate balance sheets with zero lost context.

## 🧭 Recommended Learning Path

1. Analyze chunk size trade-offs: small chunks capture precise semantics; large chunks preserve surrounding context.
2. Implement Parent Document Retrieval: embed small sentence chunks for search, but return the full parent paragraph to the LLM.
3. Add HyDE to your query pipeline: prompt an LLM to generate an imaginary answer and search using that embedding.
4. Add a cross-encoder re-ranking stage (Cohere Rerank or BGE-Reranker-Large) to re-order candidate passages.
5. Deploy Anthropic Contextual Retrieval prepending document summaries to every chunk.

## ⭐ Top 3 Resources

1. Anthropic Contextual Retrieval
2. LlamaIndex Advanced Production RAG
3. Cohere Re-ranking (docs.cohere.com)

