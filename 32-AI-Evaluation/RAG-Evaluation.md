# RAG Evaluation

> Frameworks, metrics, and automated synthetic evaluation pipelines to evaluate retrieval-augmented generation pipelines across retrieval accuracy and generation quality.

## 🎯 What to Learn

- The RAG Triad: Context Relevance, Groundedness (Faithfulness), and Answer Relevance
- Retrieval metrics: Context Precision, Context Recall, Mean Reciprocal Rank (MRR), and NDCG
- Generation metrics: Hallucination detection, semantic similarity, and conciseness
- Synthetic test data generation with Evol-Instruct and Ragas
- Component-level vs end-to-end evaluation of RAG architectures
- Ragas, DeepEval, TruLens, and ARES frameworks

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Ragas: Evaluation Framework for RAG](https://github.com/explodinggradients/ragas)
  - Type: Evaluation Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading production framework for quantifying retrieval precision, context recall, faithfulness, and answer relevancy.

### 🎓 Courses

- [DeepLearning.AI: Building and Evaluating Advanced RAG Applications](https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/) — Hands-on course with TruLens co-founder on tracking context relevance, groundedness, and answer relevance.

### ▶️ YouTube — English

- [How to Evaluate RAG Applications (Ragas, TruLens, DeepEval)](https://www.youtube.com/watch?v=2TJxpyO3ei4)
  - Channel: FreeCodeCamp / Weights & Biases
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Comprehensive walkthrough of computing context precision, recall, and faithfulness for production RAG.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Designing Machine Learning Systems by Chip Huyen (O'Reilly)](https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/) — Chapter on evaluation pipelines, distribution shift, and data quality monitoring.

### 💻 GitHub / Implementations

- [Ragas](https://github.com/explodinggradients/ragas) — Evaluation framework for RAG.
- [DeepEval](https://github.com/confident-ai/deepeval) — LLM evaluation framework.
- [TruLens](https://github.com/truera/trulens) — Evaluation and tracking for LLM apps.
- [ARES](https://github.com/stanford-futuredata/ARES) — Automated RAG evaluation system.

## 📄 Foundational Papers

- [Ragas: Automated Evaluation of Retrieval Augmented Generation](https://arxiv.org/abs/2309.15217) — Introduces reference-free evaluation metrics for context relevance, faithfulness, and answer relevance.

### 🧪 Practice

- [Ragas Quickstart Tutorial](https://docs.ragas.io/en/stable/getstarted/) — Evaluate an existing retrieval pipeline in 10 lines of Python code.

### 🛠️ Projects

- [Continuous RAG Evaluation Pipeline](https://github.com/explodinggradients/ragas) — Generate synthetic test queries from enterprise documentation and compute automated pass/fail scorecards in GitHub Actions.

## 🧭 Recommended Learning Path

1. Understand the dual failure modes of RAG: retrieval failure vs generator hallucination.
2. Compute retrieval metrics: MRR, NDCG@k, context precision, and recall.
3. Calculate faithfulness using LLM-as-a-judge claim extraction and verification.
4. Generate synthetic evaluation datasets using evolutionary prompting.
5. Set up automated CI regression gates using DeepEval or Ragas.

## ⭐ Top 3 Resources

1. Ragas (GitHub repo & Documentation)
2. DeepEval by Confident AI (Testing framework)
3. DeepLearning.AI Building and Evaluating Advanced RAG Course

