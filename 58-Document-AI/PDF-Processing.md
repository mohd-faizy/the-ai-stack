# PDF Processing

> Low-level PDF manipulation libraries, text extractors, page visualizers, and programmatic PDF manipulation toolkits.

## 🎯 What to Learn

- The internal anatomy of PDF files: Objects, page trees, content streams, fonts, and bounding box coordinates
- PyMuPDF (fitz): Ultra-fast C-backed Python library for rendering, searching, and manipulating PDFs
- pdfplumber: Visual debugging and detailed inspection of words, lines, curves, and table borders
- pypdf: Pure-Python library for merging, splitting, encrypting, and rotating PDF files
- pdf2image: Converting PDF pages into high-resolution Pillow/OpenCV images for computer vision
- Extracting text with precise character-level coordinates (`x0, top, x1, bottom`)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyMuPDF (MuPDF)](https://github.com/pymupdf/PyMuPDF)
  - Type: PDF Library Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The fastest, most versatile Python library for PDF processing, offering 10-20x speedups over pure-Python tools for text extraction, page rendering, and redaction.

### 🎓 Courses

- [Automate the Boring Stuff with Python by Al Sweigart (Chapter: Working with PDF Documents)](https://automatetheboringstuff.com/2e/chapter15/) — The definitive practical guide to programmatic PDF processing in Python.

### ▶️ YouTube — English

- [Python Simplified / PyData: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: Python Simplified / PyData
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough comparing PyMuPDF, pdfplumber, and pypdf for text and table extraction.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [PDF Explained by John Whitington (O'Reilly)](https://www.oreilly.com/library/view/pdf-explained/9781449321581/) — The essential guide to understanding the internal data structures, streams, and syntax of PDF files.

### 💻 GitHub / Implementations

- [PyMuPDF](https://github.com/pymupdf/PyMuPDF) — High-performance PDF/document processing.
- [pdfplumber](https://github.com/jsvine/pdfplumber) — Detailed PDF information extraction.
- [PyPDF](https://github.com/py-pdf/pypdf) — Pure Python PDF library.
- [pdf2image](https://github.com/Belval/pdf2image) — Convert PDFs to PIL image objects.

### 🧪 Practice

- [PyMuPDF Interactive Quickstart](https://pymupdf.readthedocs.io/en/latest/tutorial.html) — Open a document, extract text, and render page 1 as a PNG in 5 lines of Python.

### 🛠️ Projects

- [High-Speed PDF Search and Redaction CLI](https://github.com/pymupdf/PyMuPDF) — Build a Python CLI that searches thousands of PDF documents for sensitive patterns (SSNs, credit cards) and irreversibly redacts them.

## 🧭 Recommended Learning Path

1. Understand how PDFs represent text (arbitrary drawing commands rather than reflowable paragraphs).
2. Use PyMuPDF to extract text and render high-resolution raster images.
3. Use pdfplumber visual debugging to inspect explicit table lines and bounding boxes.
4. Manipulate documents with pypdf: Merging, splitting, and rotating pages.
5. Build a document pre-processing pipeline for downstream OCR and RAG models.

## ⭐ Top 3 Resources

1. PyMuPDF (MuPDF)
2. pdfplumber (Visual table & character extraction)
3. Automate the Boring Stuff with Python (Book Chapter)

