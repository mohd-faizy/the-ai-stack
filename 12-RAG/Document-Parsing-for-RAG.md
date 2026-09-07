# Document Parsing for RAG

> Vision-based parsers, OCR engines, and document understanding toolkits that convert complex unstructured PDFs, scanned forms, charts, and tables into LLM-ready structured text.

## 🎯 What to Learn

- Why standard text extraction (PyPDF, pdfplumber) corrupts multi-column papers, tables, and forms
- Vision-first document parsing: LlamaParse, MinerU, Docling, and Marker
- Table extraction and Markdown table representation for LLMs
- Layout analysis: detecting headers, footers, captions, reading order, and bounding boxes
- Handling scanned images and noisy scans via OCR integration (Surya, Tesseract)
- Multi-modal document understanding: Nougat and Donut vision models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LlamaParse: GenAI-Native Document Parsing (LlamaIndex)](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/)
  - Type: Cloud API & Parsing Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: LlamaParse by LlamaIndex is designed specifically for RAG, parsing complex multi-column PDFs, financial tables, and figures into clean, structured Markdown that LLMs can query without hallucination.

### 📖 Documentation & References

- [LlamaParse Documentation](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/) — Comprehensive guide to parsing complex documents with visual instructions.
- [Unstructured Documentation](https://docs.unstructured.io/welcome) — Open-source ingestion and preprocessing pipeline for unstructured enterprise documents.
- [MinerU Documentation](https://github.com/opendatalab/MinerU) — A tool that converts PDFs into Markdown and JSON with high accuracy for academic papers and books.

### 🎓 Courses

- [DeepLearning.AI: Preprocessing Unstructured Data for LLM Applications](https://www.deeplearning.ai/short-courses/) — Taught by Unstructured.io, covering document layout detection, tables, and OCR.

### ▶️ YouTube — English

- [A Quick Walk-Through of LlamaParse: Simplified Document Parsing for GenAI](https://www.youtube.com/watch?v=lde8TTiDPqs)
  - Channel: LlamaIndex
  - Language: English
  - Type: Tutorial / Walkthrough
  - Level: Beginner to Intermediate
  - Why: Official demonstration of converting complex tables, charts, and multi-column PDFs into LLM-ready markdown.
- [Parsing Complex Documents for RAG with Unstructured](https://www.youtube.com/@unstructuredio)
  - Channel: Unstructured
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate
  - Why: Practical tutorials on partitioning PDFs, extracting tables, and preparing chunks for vector databases.

### ▶️ YouTube — Hindi / Hinglish

- [PDF Document Parsing for RAG in Python (Hindi)](https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh compares basic text extraction vs layout-aware parsing for RAG systems in Hinglish.

### 📚 Books

- [Document Layout Analysis and Text Recognition (Springer)](https://link.springer.com/book/10.1007/978-3-030-86337-1) — Academic reference on spatial parsing, reading order heuristics, and OCR.

### 💻 GitHub / Implementations

- [docling-project/docling](https://github.com/docling-project/docling) — Get your documents ready for GenAI. Easy, fast, and accurate document conversion.
- [datalab-to/marker](https://github.com/datalab-to/marker) — Convert PDF to markdown quickly with high accuracy.
- [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) — Open source libraries and APIs to build custom preprocessing pipelines for unstructured data.
- [opendatalab/MinerU](https://github.com/opendatalab/MinerU) — High-precision PDF document extraction tool.

## 📄 Foundational Papers

- [Docling Technical Report](https://arxiv.org/abs/2408.09869) — IBM Research (2024) comprehensive report detailing specialized layout models and table extraction for GenAI.
- [Nougat: Neural Optical Understanding for Academic Documents](https://arxiv.org/abs/2308.13418) — Blecher et al. (Meta AI 2023) visual transformer converting complex academic PDFs directly into LaTeX.

### 🧪 Practice

- [LlamaParse Getting Started](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/) — Parse your first multi-column PDF or financial report using the Python SDK in 5 lines of code.

### 🛠️ Projects

- [Financial Statement Table Extractor & Q&A](https://docs.llamaindex.ai/en/stable/llama_cloud/llama_parse/) — Parse messy multi-page financial statements with nested tables into structured Markdown and query them with zero table alignment errors.

## 🧭 Recommended Learning Path

1. Analyze failure cases of traditional PyPDF extraction: text interleaved across multi-column pages, destroyed tables, lost superscripts.
2. Understand Vision-Based Layout Analysis: models identify bounding boxes for titles, paragraphs, tables, and images.
3. Parse documents with Docling or Marker locally, extracting clean, semantic Markdown.
4. Use LlamaParse with natural language parsing instructions to handle bespoke table layouts.
5. Evaluate downstream RAG accuracy on complex documents using parsed Markdown vs. raw OCR text.

## ⭐ Top 3 Resources

1. LlamaParse (LlamaIndex)
2. Docling (docling-project/docling)
3. Marker (datalab-to/marker)

