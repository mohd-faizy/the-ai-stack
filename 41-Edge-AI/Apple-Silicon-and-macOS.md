# Apple Silicon & macOS

> Frameworks, unified memory architectures, and Metal-accelerated libraries designed to maximize AI training and inference on Apple hardware.

## 🎯 What to Learn

- Apple Silicon architecture: Unified Memory Architecture (UMA), M-series chip memory bandwidth (up to 800 GB/s), and Apple Neural Engine (ANE)
- Apple MLX: An array framework for machine learning research on Apple Silicon with PyTorch-like API and lazy evaluation
- MLX Examples: Open-source reference implementations of LLaMA, Mistral, Whisper, Stable Diffusion, and LoRA fine-tuning in MLX
- Apple Core ML & Core ML Tools: Converting PyTorch/ONNX models into `.mlpackage` for native iOS/macOS apps
- Metal Performance Shaders (MPS): Accelerating standard PyTorch workflows via `torch.device('mps')`
- Unified memory advantages: Running 70B and 120B parameter models on a single MacBook Pro without multi-GPU sharding

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Apple MLX](https://github.com/ml-explore/mlx)
  - Type: Framework for Apple Silicon
  - Language: English
  - Level: Intermediate
  - Why recommended: Apple's official machine learning framework designed specifically for Apple Silicon, featuring unified memory arrays, lazy evaluation, and multi-device compilation.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving of LLMs](https://www.deeplearning.ai/short-courses/) — Discusses local serving architectures and Apple unified memory capabilities.

### ▶️ YouTube — English

- [Matthew Berman / Lucas Beyer: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman / Lucas Beyer
  - Language: English
  - Type: Walkthrough
  - Level: Intermediate
  - Why: Clear demonstration of how MLX leverages unified memory to train and run models faster than PyTorch MPS.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Metal Programming Guide (Apple Developer Documentation)](https://developer.apple.com/metal/) — Apple's low-overhead API for GPU computation and custom compute shaders.

### 💻 GitHub / Implementations

- [MLX](https://github.com/ml-explore/mlx) — Array framework optimized for Apple silicon.
- [MLX Examples](https://github.com/ml-explore/mlx-examples) — Example models for MLX.
- [Core ML Tools](https://github.com/apple/coremltools) — Convert models to Core ML format.
- [swift-transformers](https://github.com/huggingface/swift-transformers) — Transformers for Swift.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) — Metal-optimized inference on macOS.

### 🧪 Practice

- [MLX Quickstart Guide](https://github.com/ml-explore/mlx#getting-started) — Install MLX via pip and run tensor operations in Python on your Mac in 2 minutes.

### 🛠️ Projects

- [Fine-Tune LLaMA 3 Locally with MLX LoRA](https://github.com/ml-explore/mlx-examples/tree/main/lora) — Run QLoRA fine-tuning on a MacBook Pro with Apple MLX and test generated completions.

## 🧭 Recommended Learning Path

1. Understand Apple Unified Memory Architecture (UMA) and zero-copy tensor sharing between CPU and GPU.
2. Install MLX: `pip install mlx mlx-lm`.
3. Run an open-weights model locally: `mlx_lm.generate --model mistralai/Mistral-7B-v0.1 --prompt 'Hello'`.
4. Fine-tune an adapter using `mlx-examples/lora` on local Mac hardware.
5. Export PyTorch models to Core ML using `coremltools` for integration in native Swift iOS apps.

## ⭐ Top 3 Resources

1. Apple MLX (Framework & Ecosystem)
2. MLX Examples (Reference models & fine-tuning)
3. Core ML Tools (Apple model conversion)

