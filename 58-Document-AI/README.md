# 58 - Document AI

> Optical character recognition (OCR), document layout parsing, multimodal vision transformers, and PDF conversion engines.

## 🌐 Overview & Architectural Importance

Most of the world's knowledge is trapped in unstructured documents—complex multi-column PDFs, financial balance sheets, and handwritten contracts. Document AI engines (Docling, Marker, Surya, PaddleOCR) convert visual pixels and PDF byte streams into clean, structured Markdown suitable for RAG and LLM reasoning.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**OCR & Text Extraction**](OCR-and-Text-Extraction.md) — Tesseract, PaddleOCR, EasyOCR, Surya, docTR, and deep optical character recognition.
* [**Document Understanding & Conversion**](Document-Understanding-and-Conversion.md) — Docling, Marker, Unstructured, Nougat, Donut, LayoutParser, Table Transformer, and PDF-to-Markdown conversion.
* [**PDF Processing**](PDF-Processing.md) — PyMuPDF, pdfplumber, pypdf, pdf2image, and programmatic PDF manipulation.

## 🧭 Recommended Study Sequence

1. **Text Detection & Recognition**: Text line detection and character recognition with PaddleOCR and Surya.
2. **Vision Transformers for Documents**: End-to-end PDF-to-Markdown parsing with Nougat and Docling.
3. **Table Extraction**: Parsing nested tables into structured Pandas/JSON with Table Transformer and pdfplumber.
4. **Document Layout Analysis**: Segmenting titles, paragraphs, figures, and headers with LayoutParser.
5. **Multimodal Document RAG**: Integrating parsed Markdown and table structures into vector databases.

## 🗝️ Foundational Prerequisites

- Image processing fundamentals (binarization, deskewing, contours).
- PDF internal specifications (text streams, fonts, vector paths).
- Computer vision architectures: Convolutional networks, Vision Transformers, and CTC loss.

---

[← Back to Main Repository](../README.md)
