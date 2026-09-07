# Semantic Search

> Semantic search understands the conceptual intent and contextual meaning behind search queries, bridging the gap between exact keywords and semantic meaning.

## 🎯 What to Learn

- Dense vector search vs Learned sparse representations vs Late interaction
- ColBERT (Contextualized Late Interaction over BERT): token-level embeddings and the MaxSim operator
- SPLADE (Sparse Lexical and Expansion Model): learned sparse term expansions in vocabulary space
- Hybrid Search: combining BM25 keyword matching with dense vectors using Reciprocal Rank Fusion (RRF)
- Fast late-interaction engines: ColBERTv2 and Stanford PLAID for sub-10ms search
- Evaluation metrics: Mean Reciprocal Rank (MRR@10) and Normalized Discounted Cumulative Gain (NDCG@10)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ColBERT & ColBERTv2 by Stanford NLP (Khattab & Zaharia)](https://github.com/stanford-futuredata/ColBERT)
  - Type: Framework & Research Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: ColBERT introduced late interaction, maintaining token-level representations and computing fine-grained token similarities (MaxSim) to deliver state-of-the-art retrieval accuracy with millisecond latency.

### 📖 Documentation & References

- [Stanford ColBERT Documentation](https://github.com/stanford-futuredata/ColBERT) — Official implementation of ColBERT and PLAID (Performance-optimized Late Interaction for Asymmetric Information Distribution).
- [RAGatouille Documentation](https://github.com/bclavie/RAGatouille) — Library making advanced ColBERT late-interaction models effortless to use with 3 lines of code.

### 🎓 Courses

- [Stanford CS224U: Natural Language Understanding - Information Retrieval](https://web.stanford.edu/class/cs224u/) — Graduate lectures covering dense retrieval, late interaction, and semantic search.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate to Advanced
  - Why: Clear mathematical walkthrough of why compressing an entire document into a single vector loses detail, and how MaxSim preserves token precision.
- [Prompt Engineering: Video Guides & Tutorials](https://www.youtube.com/@PromptEngineering)
  - Channel: Prompt Engineering
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Hands-on guide indexing documents and querying with ColBERT in Python.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT (Khattab & Zaharia)](https://arxiv.org/abs/2004.12832) — The seminal SIGIR paper that introduced the late interaction paradigm.

### 💻 GitHub / Implementations

- [txtai](https://github.com/neuml/txtai) — All-in-one semantic search and RAG platform.
- [Sentence Transformers](https://github.com/UKPLab/sentence-transformers) — Semantic similarity models.
- [ColBERT](https://github.com/stanford-futuredata/ColBERT) — Efficient passage search via late interaction.
- [Cohere Rerank](https://github.com/cohere-ai) — Neural reranking models.

### 🧪 Practice

- [RAGatouille Colab Notebook](https://github.com/bclavie/RAGatouille) — Interactive playground indexing Wikipedia articles and querying with ColBERT.

### 🛠️ Projects

- [Production Hybrid Search Engine with Reciprocal Rank Fusion (RRF)](https://qdrant.tech/articles/hybrid-search/) — Build a search pipeline in Qdrant combining BM25 sparse vectors and dense sentence embeddings fused via RRF.

## 🧭 Recommended Learning Path

1. Understand the trade-off between single-vector dense retrieval (fast, but loses granular detail) and cross-encoders (accurate, but too slow for full corpus search).
2. Study ColBERT's late interaction: each query token computes maximum dot-product similarity against document tokens (`MaxSim`).
3. Implement ColBERT easily in Python using the `RAGatouille` library.
4. Explore SPLADE (Sparse Lexical and Expansion Model): mapping documents into expanded vocabulary weight vectors.
5. Deploy Reciprocal Rank Fusion (RRF) to merge keyword results with semantic vector results.

## ⭐ Top 3 Resources

1. [ColBERTv2 (Stanford NLP)](https://github.com/stanford-futuredata/ColBERT) — The gold-standard late-interaction model combining token-level precision with fast retrieval.
2. [RAGatouille](https://github.com/bclavie/RAGatouille) — The easiest and most developer-friendly way to integrate ColBERT into RAG pipelines.
3. [SPLADE (Naver Labs)](https://github.com/naver/splade) — Pioneering learned sparse representation model bridging lexical search and neural embeddings.

