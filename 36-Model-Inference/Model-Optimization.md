# Model Optimization

> Graph compilers, intermediate representations (IR), kernel fusion, and hardware accelerators that optimize neural network inference speeds.

## 🎯 What to Learn

- Open Neural Network Exchange (ONNX): Standard format for cross-framework model interchange
- ONNX Runtime: Cross-platform, high-performance engine for AI models on CPUs, GPUs, and NPUs
- NVIDIA TensorRT: High-performance deep learning inference optimizer and runtime for NVIDIA GPUs
- Graph optimizations: Constant folding, layer fusion, dead code elimination, and memory planning
- Intel OpenVINO: Optimizing and deploying AI inference across Intel CPUs, integrated GPUs, and NPUs
- Apache TVM: End-to-end deep learning compiler stack generating optimized machine code for diverse backends

## 📚 Best Learning Resources

### 🥇 Best Overall

- [ONNX Runtime (Microsoft)](https://github.com/microsoft/onnxruntime)
  - Type: Inference Compiler & Engine
  - Language: English
  - Level: Intermediate
  - Why recommended: The cross-platform, high-performance inference engine powering billions of daily AI inferences across Windows, Azure, Office, and hardware targets.

### 🎓 Courses

- [DeepLearning.AI: Quantization and Model Optimization](https://www.deeplearning.ai/short-courses/) — Covers graph compilation, operator fusion, and precision reductions.

### ▶️ YouTube — English

- [NVIDIA / Microsoft Developer: Video Guides & Tutorials](https://www.youtube.com/@NVIDIADeveloper)
  - Channel: NVIDIA / Microsoft Developer
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Practical walkthrough showing 5x speedups exporting PyTorch models to ONNX and compiling with TensorRT.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Deep Learning Systems by Tianqi Chen & Zico Kolter](https://dlsyscourse.org/) — The definitive open-source university textbook on deep learning compilers, automatic differentiation, and hardware execution.

### 💻 GitHub / Implementations

- [ONNX Runtime](https://github.com/microsoft/onnxruntime) — Cross-platform inference optimization.
- [TensorRT](https://github.com/NVIDIA/TensorRT) — NVIDIA deep learning inference optimizer.
- [OpenVINO](https://github.com/openvinotoolkit/openvino) — Deep learning inference by Intel.
- [TVM](https://github.com/apache/tvm) — End-to-end deep learning compiler.
- [NCNN](https://github.com/Tencent/ncnn) — High-performance neural network inference framework.
- [MNN](https://github.com/alibaba/MNN) — Lightweight deep neural network inference engine.

## 📄 Foundational Papers

- [TVM: An Automated End-to-End Optimizing Compiler for Deep Learning](https://arxiv.org/abs/1802.04799) — Landmark paper by Tianqi Chen et al. on automated tensor graph optimization and code generation.

### 🧪 Practice

- [ONNX Model Zoo](https://github.com/onnx/models) — Explore pre-trained, optimized ONNX models across vision, speech, and NLP.

### 🛠️ Projects

- [PyTorch to TensorRT Acceleration Pipeline](https://github.com/NVIDIA/TensorRT) — Export a vision transformer to ONNX, apply FP16 precision calibration in TensorRT, and benchmark 4x latency reduction.

## 🧭 Recommended Learning Path

1. Understand why naive Python PyTorch execution suffers from GIL and kernel launch overheads.
2. Export PyTorch models to ONNX using `torch.onnx.export`.
3. Run inference with ONNX Runtime using CPU and CUDA Execution Providers.
4. Compile ONNX models to TensorRT execution plans for maximum GPU throughput.
5. Benchmark throughput, memory footprints, and latency profiles using Netron and Triton Perf Analyzer.

## ⭐ Top 3 Resources

1. ONNX Runtime (Microsoft)
2. NVIDIA TensorRT (Hardware-optimized inference engine)
3. Deep Learning Systems Course (CMU / Tianqi Chen & Zico Kolter)

