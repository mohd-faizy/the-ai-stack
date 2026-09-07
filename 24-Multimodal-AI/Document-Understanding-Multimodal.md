# Document Understanding (Multimodal)

> Document understanding models process complex visually-rich documents (PDFs, invoices, receipts, financial filings, scientific papers), extracting structured text, tables, and mathematical formulas while preserving spatial hierarchy.

## 🎯 What to Learn

- Vision-based document retrieval: ColPali (vision language models as dense retrievers)
- End-to-end OCR-free document parsing (Nougat, Donut)
- Layout-aware text and visual transformers (LayoutLMv3, Pix2Struct)
- Document conversion tools: Marker (PDF to clean Markdown) and Surya (multilingual OCR)
- Table extraction and mathematical formula reconstruction

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ColPali: Efficient Document Retrieval with Vision Language Models](https://github.com/illuin-tech/colpali)
  - Type: Seminal Architecture & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: ColPali replaces brittle OCR-and-chunk RAG pipelines by indexing full document page screenshots directly using multi-vector vision-language representations (ColBERT + PaliGemma).

### 📖 Documentation & References

- [ColPali Documentation](https://github.com/illuin-tech/colpali) — Architecture, indexing scripts, and retrieval benchmarks for visually rich documents.
- [Nougat Documentation (Meta AI)](https://github.com/facebookresearch/nougat) — Neural Optical Understanding for Academic Documents (converting scientific PDFs to LaTeX).
- [Marker Documentation](https://github.com/VikParuchuri/marker) — Fast, accurate pipeline converting complex PDFs to clean, formatted Markdown.

### 🎓 Courses

- [Document AI and Vision-Language RAG (DeepLearning.AI)](https://www.deeplearning.ai/) — Course covering document parsing, table extraction, and multimodal retrieval.

### ▶️ YouTube — English

- [AI Research Summaries: Video Guides & Tutorials (AI Research Summaries)](https://www.youtube.com/results?search_query=AI%20Research%20Summaries%20AI%20Research%20Summaries%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: AI Research Summaries
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical explanation of how vision language models eliminate complex OCR pipelines in enterprise RAG.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Computer Vision: Algorithms and Applications](https://szeliski.org/Book/) — Richard Szeliski foundational text covering image segmentation, layout analysis, and feature matching.

### 💻 GitHub / Implementations

- [illuin-tech/colpali](https://github.com/illuin-tech/colpali) — ColPali: Efficient Document Retrieval with Vision Language Models.
- [facebookresearch/nougat](https://github.com/facebookresearch/nougat) — Academic document PDF to markdown parser using Swin Transformer and mBART.
- [VikParuchuri/marker](https://github.com/VikParuchuri/marker) — Convert PDF to markdown quickly with high accuracy.

## 📄 Foundational Papers

- [ColPali: Efficient Document Retrieval with Vision Language Models](https://arxiv.org/abs/2407.01449) — Faysse et al. (2024) breakthrough paper demonstrating superior retrieval of visually rich documents via VLM multi-vector embeddings.
- [Nougat: Neural Optical Understanding for Academic Documents](https://arxiv.org/abs/2308.13418) — Blecher et al. (Meta AI 2023) introducing end-to-end PDF-to-Markdown generation.

### 🧪 Practice

- [ColPali Demo on Hugging Face Spaces](https://huggingface.co/spaces/illuin-tech/ColPali-demo) — Upload complex corporate slide decks or papers and query them visually with natural language.

### 🛠️ Projects

- [Zero-OCR Financial Document RAG Pipeline](https://github.com/illuin-tech/colpali) — Index 100 pages of corporate 10-K filings as screenshots with ColPali and retrieve balance sheet tables without OCR chunking errors.

## 🧭 Recommended Learning Path

1. Analyze why traditional text extraction (PyPDF, pdfplumber) fails on multi-column layouts and tables.
2. Convert academic papers into clean Markdown using Marker.
3. Study the ColPali architecture: late interaction (ColBERT) applied to visual patches from PaliGemma.
4. Index a set of financial slides using ColPali and evaluate retrieval accuracy against standard BM25.
5. Integrate ColPali with Qwen2-VL for full-page question answering without intermediate OCR.

## ⭐ Top 3 Resources

1. ColPali (illuin-tech/colpali)
2. Marker (VikParuchuri/marker)
3. Nougat (Meta AI)

