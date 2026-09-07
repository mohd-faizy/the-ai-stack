# Generative Model Frameworks & Toolkits

> Core software frameworks and modular execution graphs for building, experimenting with, and deploying diffusion and generative media pipelines.

## 🎯 What to Learn

- Hugging Face Diffusers architecture: schedulers, pipelines, and model components
- ComfyUI modular node-based execution graphs and memory management
- Noise schedulers: DDIM, Euler Ancestral, DPM-Solver++, and FlowMatchEuler
- Model quantization and memory optimizations: FlashAttention, xFormers, and CPU offloading
- LoRA (Low-Rank Adaptation) loading, merging, and inference acceleration
- Text-to-image, image-to-image, inpainting, and depth-conditioned inference pipelines

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face Diffusers Documentation & Library](https://huggingface.co/docs/diffusers/index)
  - Type: Framework & Documentation
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: Diffusers is the industry-standard toolbox for state-of-the-art pretrained diffusion models, providing modular components for PyTorch developers.

### 📖 Documentation & References

- [Diffusers Official Guide](https://huggingface.co/docs/diffusers/index) — Tutorials on running FLUX, Stable Diffusion, schedulers, and LoRA training.
- [ComfyUI Official Manual](https://docs.comfy.org/) — The definitive guide to node-based generative AI workflow engineering.

### 🎓 Courses

- [Hugging Face Diffusion Models Class](https://github.com/huggingface/diffusion-models-class) — Free comprehensive course teaching diffusion theory, math, and code from scratch.

### ▶️ YouTube — English

- [How Diffusion Models Work (DeepLearning.AI)](https://www.youtube.com/watch?v=1CIpzeNxIhU)
  - Channel: DeepLearning.AI
  - Language: English
  - Type: Course
  - Level: Intermediate
  - Why: Sharon Zhou walks through noise schedules, UNets, and sampling algorithms.
- [Matt3o: Video Guides & Tutorials (Matt3o)](https://www.youtube.com/results?search_query=Matt3o%20Matt3o%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Matt3o
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Clear walkthrough of VAE, CLIP, UNet/DiT model loading and custom latent workflows.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Generative Deep Learning (2nd Edition) by David Foster (O'Reilly)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — The premier practical guide covering VAEs, GANs, Diffusion models, and Transformers.

### 💻 GitHub / Implementations

- [Hugging Face Diffusers](https://github.com/huggingface/diffusers) — State-of-the-art diffusion models for image, audio, and video synthesis.
- [ComfyUI](https://github.com/Comfy-Org/ComfyUI) — Modular, node-based generative AI workflow engine and interface.
- [AUTOMATIC1111 WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) — Most popular web interface for Stable Diffusion.
- [SD WebUI Forge](https://github.com/lllyasviel/stable-diffusion-webui-forge) — High-performance backend engine for Stable Diffusion WebUI.
- [Fooocus](https://github.com/lllyasviel/Fooocus) — Minimalist, Midjourney-style image generation platform with automated prompting.
- [InvokeAI](https://github.com/invoke-ai/InvokeAI) — Professional creative studio for latent diffusion image generation.
- [AudioCraft](https://github.com/facebookresearch/audiocraft) — Generative audio and music deep learning framework by Meta.
- [Generative Models (Stability AI)](https://github.com/Stability-AI/generative-models) — Generative model reference implementations by Stability AI.

### 🧪 Practice

- [Hugging Face Diffusers Colab Notebooks](https://github.com/huggingface/diffusers/tree/main/examples) — Official runnable notebooks training DreamBooth, LoRA, and conditional diffusion.

### 🛠️ Projects

- [Production ComfyUI API Microservice](https://github.com/Comfy-Org/ComfyUI) — Expose a headless ComfyUI workflow via WebSocket API for sub-second image generation.

## 🧭 Recommended Learning Path

1. Understand the three pillars of a latent diffusion pipeline: Text Encoder, Latent Denoising Backbone, and VAE Decoder.
2. Explore Diffusers pipelines (`AutoPipelineForText2Image`) and customize schedulers.
3. Build a custom visual workflow in ComfyUI connecting CLIP text prompts, KSampler, and VAE Decode.
4. Fine-tune a LoRA model on a custom character/style dataset.
5. Optimize inference using `torch.compile` and INT8/FP8 weights.

## ⭐ Top 3 Resources

1. [Hugging Face Diffusers](https://huggingface.co/docs/diffusers/index) — The premier Python library for diffusion research and production.
2. [ComfyUI](https://github.com/Comfy-Org/ComfyUI) — The most powerful, modular node-based generative AI workflow engine.
3. [Generative Deep Learning (David Foster)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — The definitive textbook on modern generative AI architectures.

