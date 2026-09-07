# Document Understanding & Conversion

> Vision-language document parsers, table extraction engines, and PDF-to-Markdown converters that turn unstructured documents into LLM-ready context.

## 🎯 What to Learn

- Docling (IBM Research): State-of-the-art document conversion parsing PDFs, DOCX, and PPTX into clean Markdown and JSON
- Marker (VikParuchuri): Fast pipeline converting complex academic and technical PDFs into Markdown with math equations and tables
- Unstructured: Open-source ingestion library designed specifically to preprocess and chunk unstructured files for LLM RAG
- Meta Nougat: Vision transformer neural network that reads PDF page images and outputs structured LaTeX/Markdown directly
- Table extraction: Microsoft Table Transformer (TATR) and heuristic parsers (Camelot, Tabula) for financial statements
- Layout analysis: Detecting columns, headers, footers, reading order, and embedded figure captions

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Docling (IBM Research)](https://github.com/DS4SD/docling)
  - Type: Document Conversion Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: IBM's open-source document conversion engine that parses complex multi-column PDFs, recognizes tables with high precision, and exports structured Markdown and JSON for RAG.

### 🎓 Courses

- [DeepLearning.AI: Preprocessing Unstructured Data for LLM Applications](https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/) — Taught by Unstructured.io team covering document parsing, table extraction, and chunking.

### ▶️ YouTube — English

- [Prompt Engineering / AI Jason: Video Guides & Tutorials](https://www.youtube.com/@AIJason)
  - Channel: Prompt Engineering / AI Jason
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Visual comparison showing how Docling and Marker preserve tables, headers, and formulas where standard parsers fail.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Document Analysis and Recognition by C.V. Jawahar et al. (Springer)](https://link.springer.com/book/10.1007/978-981-10-8639-7) — Comprehensive academic text on layout segmentation, table processing, and document understanding.

### 💻 GitHub / Implementations

- [Docling](https://github.com/docling-project/docling) — Converts PDFs, DOCX, etc. to Markdown/JSON.
- [Marker](https://github.com/datalab-to/marker) — Fast document to Markdown conversion.
- [Unstructured](https://github.com/Unstructured-IO/unstructured) — ETL for unstructured documents.
- [Nougat](https://github.com/facebookresearch/nougat) — Neural OCR for academic papers.
- [Donut](https://github.com/clovaai/donut) — OCR-free document understanding.
- [LayoutParser](https://github.com/Layout-Parser/layout-parser) — Document image analysis.
- [Table Transformer](https://github.com/microsoft/table-transformer) — Table detection and structure recognition.
- [Camelot](https://github.com/camelot-dev/camelot) — PDF table extraction.
- [Tabula](https://github.com/tabulapdf/tabula-java) — Extracting tables from PDFs.

## 📄 Foundational Papers

- [Nougat: Neural Optical Understanding for Academic Documents](https://arxiv.org/abs/2308.13418) — Blecher et al. landmark Meta paper establishing vision-to-markup translation for academic PDFs.

### 🧪 Practice

- [Docling Interactive Demo](https://huggingface.co/spaces/ds4sd/docling) — Upload a PDF and see real-time layout segmentation and Markdown export.

### 🛠️ Projects

- [Complex Annual Report Financial Extractor](https://github.com/DS4SD/docling) — Use Docling to convert a 100-page corporate financial PDF into Markdown, preserving nested balance sheet tables for RAG.

## 🧭 Recommended Learning Path

1. Understand why naive text extractors scramble multi-column layouts and lose table structures.
2. Convert complex technical PDFs to clean Markdown using Docling.
3. Explore Marker for mathematical formula and equation extraction into LaTeX.
4. Use Microsoft Table Transformer to extract tabular coordinates from scanned documents.
5. Build a document RAG ingestion pipeline using Docling and LangChain.

## ⭐ Top 3 Resources

1. Docling (IBM Research)
2. Marker (Vik Paruchuri)
3. Unstructured.io (RAG Preprocessing Library)

