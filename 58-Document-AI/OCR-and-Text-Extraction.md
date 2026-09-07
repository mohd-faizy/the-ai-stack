# OCR & Text Extraction

> Deep learning text detectors, optical character recognizers, and multilingual text extraction pipelines.

## 🎯 What to Learn

- The two-stage OCR pipeline: Text Detection (DBNet, CRAFT) -> Text Recognition (CRNN, SVTR)
- PaddleOCR: Practical, ultra-lightweight, and state-of-the-art OCR toolkit supporting 80+ languages
- Surya (VikParuchuri): Modern multilingual OCR, layout analysis, and reading order detector based on transformers
- EasyOCR (JaidedAI): Ready-to-use Python OCR library supporting 80+ languages with PyTorch backend
- Tesseract OCR: The classic Google-maintained open-source OCR engine using LSTM neural networks
- Image preprocessing for OCR: Deskewing, adaptive thresholding, and contrast normalization

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)
  - Type: OCR Toolkit Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: The most robust, production-proven multilingual OCR toolkit in open source, delivering exceptional accuracy on blurry, rotated, and distorted real-world text.

### 🎓 Courses

- [Coursera: Deep Learning for Computer Vision](https://www.coursera.org/) — Covers CNNs, sequence modeling with RNNs/transformers, and CTC loss functions.

### ▶️ YouTube — English

- [Nicholas Renotte: Video Guides & Tutorials](https://www.youtube.com/@NicholasRenotte)
  - Channel: Nicholas Renotte
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Hands-on walkthrough installing PaddleOCR and building real-time text extraction on images and video.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Practical Computer Vision by Roy Shilkrot and David Millán Escrivá (Packt)](https://www.packtpub.com/) — Covers image thresholding, contour detection, and text recognition.

### 💻 GitHub / Implementations

- [Tesseract](https://github.com/tesseract-ocr/tesseract) — Open-source OCR engine.
- [PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR) — Practical multilingual OCR.
- [EasyOCR](https://github.com/JaidedAI/EasyOCR) — Ready-to-use OCR.
- [Surya](https://github.com/datalab-to/surya) — OCR, layout detection, table recognition.
- [docTR](https://github.com/mindee/doctr) — Deep learning document text recognition.

## 📄 Foundational Papers

- [Real-time Scene Text Detection with Differentiable Binarization (DBNet)](https://arxiv.org/abs/1911.08947) — Introduced differentiable binarization, revolutionizing high-speed text boundary detection.

### 🧪 Practice

- [Surya Online Hugging Face Demo](https://huggingface.co/spaces/vikp/surya_ocr) — Upload scanned documents or photos and inspect bounding boxes and text extraction.

### 🛠️ Projects

- [Automated Invoice & Receipt Parser](https://github.com/PaddlePaddle/PaddleOCR) — Build an end-to-end Python pipeline that detects text from photographed receipts with PaddleOCR and extracts total amounts using regex.

## 🧭 Recommended Learning Path

1. Understand the two-stage OCR pipeline: Text boundary detection vs character classification.
2. Preprocess degraded images (Grayscale -> Gaussian Blur -> Otsu Binarization) using OpenCV.
3. Extract text from multilingual documents with PaddleOCR.
4. Explore Surya for Transformer-based document layout and reading order detection.
5. Evaluate OCR accuracy using Character Error Rate (CER) and Word Error Rate (WER).

## ⭐ Top 3 Resources

1. PaddleOCR (PaddlePaddle / Baidu)
2. Surya (Vik Paruchuri / Transformer OCR)
3. EasyOCR (Jaided AI)

