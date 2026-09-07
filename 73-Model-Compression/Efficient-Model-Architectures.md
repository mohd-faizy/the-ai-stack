# Efficient Model Architectures

> Compact foundation models, mobile architectures, and small language models (SLMs) designed to deliver maximum capability per parameter.

## 🎯 What to Learn

- The Small Language Model (SLM) revolution: 1B - 4B parameter models matching previous generation 70B models
- Hugging Face SmolLM & SmolLM2: Compact open models (135M, 360M, 1.7B) trained on meticulously curated synthetic datasets
- Microsoft Phi-3/Phi-4: High-quality educational data curation driving high reasoning density
- TinyLlama: Open-source project pre-training a 1.1B parameter LLaMA model on 3 trillion tokens
- Mobile computer vision architectures: MobileNetV3, MobileNetV4, and EfficientNet utilizing depthwise separable convolutions
- Architectural optimizations for efficiency: Grouped-Query Attention (GQA), SwiGLU, and deep-narrow scaling

## 📚 Best Learning Resources

### 🥇 Best Overall

- [SmolLM2 (Hugging Face)](https://github.com/huggingface/smollm)
  - Type: Compact Foundation Model Family
  - Language: English
  - Level: Intermediate
  - Why recommended: Hugging Face's premier open family of compact foundation models (135M, 360M, 1.7B), trained on curated synthetic data (FineWeb-Edu, Cosmopedia v2) to run smoothly on edge devices and in browsers.

### 🎓 Courses

- [MIT 6.5940: TinyML and Efficient Deep Learning Computing](https://efficientml.ai/) — Covers compact architecture design, neural architecture search, and mobile deployment.

### ▶️ YouTube — English

- [Matthew Berman / Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman / Hugging Face
  - Language: English
  - Type: Review
  - Level: Beginner
  - Why: Walkthrough of running SmolLM2 locally on mobile and laptops, benchmarking reasoning and memory footprint.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Efficient Deep Learning by Marion Le Borgne (O'Reilly)](https://www.oreilly.com/library/view/efficient-deep-learning/9781098105464/) — Chapters covering depthwise separable convolutions, inverted residuals, and efficient transformer design.

### 💻 GitHub / Implementations

- [MobileNet](https://github.com/tensorflow/models) — Efficient mobile vision models.
- [EfficientNet](https://github.com/tensorflow/tpu) — Scalable efficient neural networks.
- [TinyLlama](https://github.com/jzhang38/TinyLlama) — Small Llama model trained on 3T tokens.
- [Phi](https://github.com/microsoft/phi-3cookbook) — Compact but powerful small language models.
- [SmolLM](https://github.com/huggingface/smollm) — Family of small language models.
- [Gemma](https://github.com/google-deepmind/gemma) — Lightweight open models by Google.

## 📄 Foundational Papers

- [MobileNets: Efficient Convolutional Neural Networks for Mobile Vision Applications](https://arxiv.org/abs/1704.04861) — Howard et al. landmark Google paper introducing depthwise separable convolutions.
- [Textbooks Are All You Need (Phi-1)](https://arxiv.org/abs/2306.11644) — Gunst et al. landmark Microsoft paper proving that high-quality synthetic data allows compact models to punch far above their weight.

### 🧪 Practice

- [Run SmolLM in Web Browser via WebGPU](https://huggingface.co/spaces/HuggingFaceTB/SmolLM2-1.7B-Instruct-WebGPU) — Interact with SmolLM2 running 100% client-side inside your browser via WebGPU with zero server API calls.

### 🛠️ Projects

- [On-Device Offline Edge Assistant with SmolLM](https://github.com/huggingface/smollm) — Deploy SmolLM2-360M on a Raspberry Pi or mobile phone using llama.cpp or ExecuTorch for offline natural language search.

## 🧭 Recommended Learning Path

1. Understand why model scale alone is inefficient for edge devices.
2. Explore depthwise separable convolutions and inverted residual blocks in MobileNet.
3. Study the 'textbook quality' synthetic data hypothesis behind Microsoft Phi and SmolLM.
4. Run SmolLM2 locally in the browser via WebAssembly/WebGPU.
5. Deploy quantized compact models to low-power edge hardware.

## ⭐ Top 3 Resources

1. SmolLM2 (Hugging Face)
2. Microsoft Phi Model Family
3. TinyLlama (Pre-training at scale)

