# OCR

> Optical Character Recognition (OCR) and document AI detect, extract, and parse text and layout structures from unstructured images and scanned documents.

## 🎯 What to Learn

- Two-stage OCR pipelines: text detection (where is the text?) and text recognition (what does it say?)
- Text detection architectures: DBNet (Real-time Scene Text Detection with Differentiable Binarization) and EAST
- Text recognition architectures: CRNN (Convolutional Recurrent Neural Network) + CTC Loss, and Vision-Encoder-Decoders
- Document layout analysis: parsing tables, headers, columns, and figures
- Multilingual OCR, curved scene text, and handwritten text recognition (HTR)
- Modern Vision-Language OCR foundation models: Nougat, Donut, and GOT-OCR

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PaddleOCR Documentation & Model Zoo](https://github.com/PaddlePaddle/PaddleOCR)
  - Type: Framework & Model Zoo
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: PaddleOCR is the most accurate, ultra-lightweight open-source OCR system supporting 80+ languages, table extraction, and layout parsing.

### 📖 Documentation & References

- [PaddleOCR Docs](https://paddlepaddle.github.io/PaddleOCR/) — Comprehensive guide for multilingual OCR, DBNet text detection, and mobile deployment.
- [Tesseract OCR Documentation](https://tesseract-ocr.github.io/) — The legendary open-source OCR engine maintained by Google.
- [EasyOCR Documentation](https://www.jaided.ai/easyocr/) — Ready-to-use OCR with 80+ supported languages and Python PyTorch bindings.

### 🎓 Courses

- [Document AI & OCR with Deep Learning (DeepLearning.AI Short Course)](https://www.deeplearning.ai/short-courses/) — Practical techniques for extracting structured JSON from invoices, receipts, and forms.

### ▶️ YouTube — English

- [Nicolai Nielsen - Computer Vision: Video Guides & Tutorials (Nicolai Nielsen - Computer Vision)](https://www.youtube.com/results?search_query=Nicolai%20Nielsen%20-%20Computer%20Vision%20Nicolai%20Nielsen%20-%20Computer%20Vision%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Nicolai Nielsen - Computer Vision
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Hands-on setup, custom model fine-tuning, and inference on real-world receipt documents.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Building Computer Vision Applications with OpenCV and Deep Learning](https://link.springer.com/book/10.1007/978-1-4842-5786-9) — Covers document scanning, perspective correction, and text extraction.

### 💻 GitHub / Implementations

- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) — Multilingual OCR toolkit.
- [Tesseract](https://github.com/tesseract-ocr/tesseract) — Open-source OCR engine.
- [EasyOCR](https://github.com/JaidedAI/EasyOCR) — Ready-to-use OCR with 80+ languages.
- [docTR](https://github.com/mindee/doctr) — Document text recognition.
- [Surya](https://github.com/datalab-to/surya) — Document OCR in 90+ languages.
- [TrOCR](https://github.com/microsoft/unilm) — Transformer-based OCR.

### 🧪 Practice

- [ICDAR Robust Reading Competitions](https://rrc.cvc.uab.es/) — The gold-standard benchmarks for scene text detection and recognition.

### 🛠️ Projects

- [Automated Invoice Parser & Structured JSON Extractor](https://github.com/PaddlePaddle/PaddleOCR) — Build an end-to-end pipeline reading PDF/image invoices, extracting line items into structured CSV/JSON.

## 🧭 Recommended Learning Path

1. Understand classical binarization (Otsu thresholding) and morphological text filtering.
2. Explore DBNet (Differentiable Binarization) for arbitrary-shaped text detection.
3. Study CRNN (CNN + BiLSTM + CTC Loss) for transcribing text lines into character sequences.
4. Deploy PaddleOCR for multilingual document and table extraction.
5. Fine-tune end-to-end Vision-Language document models (Nougat / Donut) for direct Markdown/LaTeX generation.

## ⭐ Top 3 Resources

1. [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) — The most accurate, feature-rich, and versatile open-source OCR framework.
2. [EasyOCR](https://github.com/JaidedAI/EasyOCR) — Simplest Pythonic API for out-of-the-box multilingual text extraction.
3. [Nougat (Meta AI)](https://github.com/facebookresearch/nougat) — Groundbreaking neural model for parsing academic PDFs and scientific math into clean Markdown.

