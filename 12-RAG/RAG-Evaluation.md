# RAG Evaluation

> Frameworks, metrics, and automated synthetic test harnesses that measure the reliability, faithfulness, context recall, and answer relevancy of retrieval-augmented systems.

## 🎯 What to Learn

- The RAG Triad: Context Relevance, Groundedness (Faithfulness), and Answer Relevance
- Ragas framework: Metrics (faithfulness, answer_relevancy, context_precision, context_recall)
- Synthetic test set generation: Using LLMs to generate diverse questions from raw document chunks automatically
- TruLens and Truera: Continuous feedback functions, hallucination detection, and tracing
- Reference-based evaluation (comparing to human ground truth) vs. Reference-free evaluation (LLM-as-a-judge)
- DeepEval and ARES: Automated RAG evaluation systems for CI/CD pipelines

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Ragas: Supercharge Your Retrieval-Augmented Generation Evaluation](https://docs.ragas.io/en/stable/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate
  - Why recommended: Ragas is the industry-standard open-source evaluation framework for RAG, providing mathematically rigorous metrics for both retrieval precision and generation faithfulness.

### 📖 Documentation & References

- [Ragas Concepts & Metrics Guide](https://docs.ragas.io/en/stable/concepts/metrics/overview/) — Deep dive into component-level metrics: faithfulness, answer relevancy, context recall, and aspect critique.
- [TruLens Documentation](https://www.trulens.org/) — Open-source library for building and evaluating LLM apps using the RAG Triad.
- [DeepEval Documentation](https://docs.confident-ai.com/) — Production evaluation suite for LLM systems, unit tests, and CI/CD pipelines.

### 🎓 Courses

- [DeepLearning.AI: Evaluating and Debugging Generative AI Models (Weights & Biases)](https://www.deeplearning.ai/short-courses/) — Techniques for automated evaluation, prompt tracking, and hallucination monitoring.

### ▶️ YouTube — English

- [Evaluating & Observability for RAG with Arize Phoenix](https://www.youtube.com/@ArizeAI)
  - Channel: Arize AI
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate
  - Why: Hands-on walkthrough setting up evaluation harnesses, tracing retrieval, and monitoring faithfulness and context recall metrics.
- [Evaluating the RAG Triad with TruLens](https://www.youtube.com/@TruLens)
  - Channel: TruLens
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate
  - Why: Visual explanation of measuring context relevance, groundedness, and answer relevance.

### ▶️ YouTube — Hindi / Hinglish

- [RAG Evaluation & Metrics in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVM8Pf4U67L4UuDRgV4TNX9D)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on Hindi implementation evaluating RAG pipelines and metrics.

### 📚 Books

- [Ragas: Automated Evaluation of Retrieval Augmented Generation (Es et al.)](https://arxiv.org/abs/2309.15217) — The foundational academic paper defining context relevance, faithfulness, and answer relevance.

### 💻 GitHub / Implementations

- [explodinggradients/ragas](https://github.com/explodinggradients/ragas) — Evaluation framework for your Retrieval Augmented Generation (RAG) pipelines.
- [confident-ai/deepeval](https://github.com/confident-ai/deepeval) — The open-source LLM evaluation framework.
- [truera/trulens](https://github.com/truera/trulens) — Evaluation and tracking for LLM applications.

## 📄 Foundational Papers

- [Ragas: Automated Evaluation of Retrieval Augmented Generation](https://arxiv.org/abs/2309.15217) — Es et al. (2023) seminal paper defining standard component-level evaluation metrics.
- [ARES: An Automated Evaluation Framework for Retrieval-Augmented Generation Systems](https://arxiv.org/abs/2311.09476) — Saad-Falcon et al. (Stanford 2023) using synthetic query generation and prediction-powered inference.

### 🧪 Practice

- [Ragas Quickstart Tutorial](https://docs.ragas.io/en/stable/getstarted/index.html) — Evaluate a toy RAG dataset with faithfulness and answer relevancy in 15 lines of Python.

### 🛠️ Projects

- [Automated CI/CD RAG Evaluation Gate](https://github.com/explodinggradients/ragas) — Build a GitHub Actions workflow that runs a 100-question Ragas test suite whenever chunking strategies or embeddings change.

## 🧭 Recommended Learning Path

1. Understand why aggregate BLEU/ROUGE metrics fail completely for evaluating generative RAG answers.
2. Master the RAG Triad: Context Relevance (is retrieval noise-free?), Faithfulness (is the answer grounded?), Answer Relevance (does it answer the prompt?).
3. Generate synthetic evaluation datasets using Ragas TestsetGenerator across multiple document types.
4. Compute quantitative scores across different embedding models and chunk sizes to pick optimal hyperparameters.
5. Integrate automated evaluation into continuous integration pipelines.

## ⭐ Top 3 Resources

1. Ragas (explodinggradients/ragas)
2. TruLens (trulens.org)
3. DeepEval (confident-ai/deepeval)

