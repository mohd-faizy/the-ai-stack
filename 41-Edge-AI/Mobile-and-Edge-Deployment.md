# Mobile & Edge Deployment

> Runtimes, cross-compilation toolchains, and lightweight engines to execute neural networks on iOS, Android, and edge accelerators.

## 🎯 What to Learn

- PyTorch ExecuTorch: End-to-end framework for deploying PyTorch models to on-device edge platforms
- TensorFlow Lite (TFLite): FlatBuffer model format, hardware delegates (GPU, NPU, DSP), and interpreter
- Google MediaPipe: Ready-to-use cross-platform ML pipelines (face mesh, pose tracking, hand landmarks, gesture recognition)
- Tencent NCNN & Alibaba MNN: Highly optimized mobile inference engines with hand-crafted ARM NEON assembly
- Mobile hardware acceleration: Apple Neural Engine (ANE), Qualcomm Hexagon DSP, and MediaTek APU
- Optimizing model battery consumption, thermals, and memory allocation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [PyTorch ExecuTorch (Meta)](https://github.com/pytorch/executorch)
  - Type: Mobile & Edge Runtime
  - Language: English
  - Level: Intermediate
  - Why recommended: Meta's flagship native runtime for deploying PyTorch models across mobile devices and embedded systems, featuring hardware delegates for Apple ANE and Qualcomm NPU.

### 🎓 Courses

- [Coursera: Device-based Models with TensorFlow Lite (DeepLearning.AI)](https://www.coursera.org/) — Taught by Laurence Moroney on preparing models and building mobile Android and iOS applications.

### ▶️ YouTube — English

- [PyTorch: Video Guides & Tutorials](https://www.youtube.com/@PyTorch)
  - Channel: PyTorch
  - Language: English
  - Type: Conference Talk
  - Level: Advanced
  - Why: PyTorch engineering team explains ExecuTorch architecture, memory planning, and delegates.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Mobile Deep Learning with TensorFlow Lite, ML Kit and Flutter by Anubhav Singh (Packt)](https://www.packtpub.com/) — Step-by-step guide to mobile deployment and on-device computer vision.

### 💻 GitHub / Implementations

- [ExecuTorch](https://github.com/pytorch/executorch) — PyTorch inference on edge devices.
- [ONNX Runtime](https://github.com/microsoft/onnxruntime) — Cross-platform, cross-hardware inference.
- [TensorFlow Lite](https://github.com/tensorflow/tflite-micro) — ML for mobile and embedded devices.
- [MediaPipe](https://github.com/google-ai-edge/mediapipe) — On-device ML solutions.
- [NCNN](https://github.com/Tencent/ncnn) — High-performance neural network inference by Tencent.
- [MNN](https://github.com/alibaba/MNN) — Mobile neural network inference engine.
- [Paddle Lite](https://github.com/PaddlePaddle/Paddle-Lite) — Mobile and edge inference.
- [AI Edge Torch](https://github.com/google-ai-edge/ai-edge-torch) — PyTorch models on edge via Google.

### 🧪 Practice

- [MediaPipe Web Studio](https://mediapipe-studio.webapps.google.com/) — Interactive in-browser testing of face landmark, gesture detection, and object tracking models.

### 🛠️ Projects

- [Deploy LLaMA 3 on iOS with ExecuTorch](https://pytorch.org/executorch/stable/llm/llm-overview.html) — Export and compile a quantized 3B LLM to run natively on iPhone using Apple Core ML delegates.

## 🧭 Recommended Learning Path

1. Understand edge constraints: Memory latency, heating limits, and power budgets.
2. Explore Google MediaPipe for rapid mobile vision prototyping.
3. Export a PyTorch model via `torch.export` and inspect its computational graph.
4. Compile the graph with ExecuTorch and apply INT8 dynamic quantization.
5. Benchmark model execution on device with target hardware delegates.

## ⭐ Top 3 Resources

1. PyTorch ExecuTorch (Meta AI)
2. Google MediaPipe (Rapid on-device ML pipelines)
3. TensorFlow Lite (Industry-proven mobile runtime)

