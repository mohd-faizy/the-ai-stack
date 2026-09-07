# Knowledge Synthesis

> Multi-document synthesis frameworks, evidence aggregation systems, fact verification pipelines, and structured insight extraction.

## 🎯 What to Learn

- Multi-document summarization: Combining disparate, overlapping, and contradictory source texts into coherent narratives
- Claim extraction and verification: Breaking documents into atomic claims and cross-verifying each claim across sources
- Stanford STORM & PaperQA architectures: Grounding every generated paragraph with verbatim quotation evidence
- Resolving factual conflicts: Handling contradictory information and expressing calibrated epistemic uncertainty
- Information synthesis algorithms: Tree summarization, map-reduce summarization, and rolling context update
- Evaluating synthesis quality: ROUGE, QAGS (Question Answering and Generation for Summarization), and LLM faithfulness scoring

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PaperQA (Future House)](https://github.com/Future-House/paper-qa)
  - Type: Evidence-Grounded Synthesis Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: The gold standard for multi-document synthesis over technical literature, parsing PDFs, generating evidence summaries, and producing answers backed by exact page-level citations.

### 🎓 Courses

- [DeepLearning.AI: LangChain for LLM Application Development](https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/) — Covers Map-Reduce and Refine chains for document summarization and synthesis.

### ▶️ YouTube — English

- [Harrison Chase / LangChain: Video Guides & Tutorials](https://www.youtube.com/@LangChain)
  - Channel: Harrison Chase / LangChain
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Harrison Chase explains Map-Reduce, Stuff, and Refine methods for synthesizing hundreds of documents.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Information Extraction: A Multidisciplinary Approach by Frédérik Bilhaut et al.](https://link.springer.com/book/10.1007/978-3-642-28569-1) — Academic foundation on extracting entities, relationships, and synthesizing multi-source knowledge.

### 💻 GitHub / Implementations

- [STORM](https://github.com/stanford-oval/storm) — Knowledge synthesis from web research.
- [PaperQA](https://github.com/Future-House/paper-qa) — Research paper question answering.
- [Semantic Scholar API](https://github.com/allenai/s2-folks) — Programmatic access to scientific literature.

## 📄 Foundational Papers

- [Assisting in Writing Wikipedia-like Articles from Scratch with Large Language Models (STORM)](https://arxiv.org/abs/2402.14207) — Demonstrated that multi-perspective dialogue yields richer knowledge synthesis than direct prompting.

### 🧪 Practice

- [PaperQA Interactive Script](https://github.com/Future-House/paper-qa#quickstart) — Run evidence-backed QA across a folder of scientific PDFs in 5 lines of Python.

### 🛠️ Projects

- [Automated Fact-Checking & Synthesis Engine](https://github.com/Future-House/paper-qa) — Build a system that extracts key claims from a controversial news topic, searches academic literature via Semantic Scholar, and generates a balanced synthesis matrix.

## 🧭 Recommended Learning Path

1. Understand summarization paradigms: Stuff (single prompt), Map-Reduce (parallel), and Refine (sequential).
2. Learn atomic claim extraction and verification.
3. Index technical papers with PaperQA and inspect evidence citation scores.
4. Design systems that explicitly highlight contradictions and uncertainties across sources.
5. Evaluate synthesis outputs using automated faithfulness metrics (Ragas, TruLens).

## ⭐ Top 3 Resources

1. PaperQA (Future House)
2. Stanford STORM (Multi-Perspective Synthesis)
3. Semantic Scholar API

