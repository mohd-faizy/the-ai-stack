# 41 - Edge AI

> Deploying machine learning and generative models directly onto mobile phones, Apple Silicon devices, embedded microcontrollers, and IoT hardware.

## 🌐 Overview & Architectural Importance

Edge deployment brings AI capabilities directly to the point of capture—enabling real-time camera processing, zero cloud bandwidth costs, battery efficiency, and privacy. From ExecuTorch on mobile devices to MLX on Apple unified memory and TinyML on microcontrollers, Edge AI is the foundation of ubiquitous intelligence.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Mobile & Edge Deployment**](Mobile-and-Edge-Deployment.md) — ExecuTorch, TensorFlow Lite, MediaPipe, ONNX Runtime Mobile, NCNN, and mobile AI runtimes.
* [**Apple Silicon & macOS**](Apple-Silicon-and-macOS.md) — Apple MLX, Core ML Tools, swift-transformers, Metal Performance Shaders, and unified memory.
* [**Embedded AI**](Embedded-AI.md) — TensorFlow Lite Micro, Edge Impulse, TinyML, microTVM, and microcontroller inference.

## 🧭 Recommended Study Sequence

1. **Edge Hardware Constraints**: Compute capacity, thermals, battery draw, and memory footprints.
2. **Mobile Model Architectures**: MobileNet, MobileBERT, MobileVLM, and lightweight quantized SLMs.
3. **PyTorch to Mobile**: ExecuTorch compilation and hardware delegates (Apple Neural Engine, Qualcomm Hexagon).
4. **Apple Silicon Optimization**: MLX unified memory arrays and Metal Shading Language kernels.
5. **Microcontroller Deployment**: TinyML on ARM Cortex-M with under 256KB RAM using TFLite Micro.

## 🗝️ Foundational Prerequisites

- C/C++ and mobile development fundamentals (iOS Swift, Android Kotlin/Java).
- Neural network quantization (INT8, INT4 post-training quantization).
- Embedded system constraints (SRAM vs Flash storage, clock cycles).

---

[← Back to Main Repository](../README.md)
