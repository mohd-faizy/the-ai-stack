# Diffusion & Image Models

> Diffusion and image foundation models generate high-fidelity images by iteratively reversing a thermodynamic noise process in pixel or latent space.

## 🎯 What to Learn

- Denoising Diffusion Probabilistic Models (DDPM) and score-based generative models
- Latent Diffusion Models (LDMs) and the Stable Diffusion architecture
- Diffusion Transformers (DiT): Replacing U-Net backbones with Transformer blocks (FLUX.1, SD3)
- Flow matching and Rectified Flow formulations for faster convergence
- Open-weights foundation models: FLUX.1 (Black Forest Labs), SDXL, Playground v2.5

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Hugging Face Diffusers: State-of-the-art Diffusion Models](https://huggingface.co/docs/diffusers/)
  - Type: Official Library & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Diffusers is the industry-standard Python library for training, fine-tuning, and inferencing diffusion models across vision, audio, and video modalities.

### 📖 Documentation & References

- [Hugging Face Diffusers Documentation](https://huggingface.co/docs/diffusers/) — Comprehensive guides to pipelines, schedulers, LoRA, and memory optimization.
- [FLUX.1 by Black Forest Labs](https://github.com/black-forest-labs/flux) — Official repository of FLUX.1 12B parameter rectified-flow transformer models.

### 🎓 Courses

- [Practical Deep Learning for Coders: Part 2 (fast.ai)](https://course.fast.ai/) — Jeremy Howard's world-renowned course building Stable Diffusion from scratch in PyTorch.

### ▶️ YouTube — English

- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Tutorial
  - Level: Intermediate to Advanced
  - Why: Exhaustive derivation of the forward noise process, reverse denoising, and U-Net code walkthrough.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Generative Deep Learning (2nd Edition)](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — David Foster essential O'Reilly guide covering VAEs, GANs, Diffusion Models, and Transformers.

### 💻 GitHub / Implementations

- [huggingface/diffusers](https://github.com/huggingface/diffusers) — State-of-the-art diffusion models for image and audio generation in PyTorch.
- [black-forest-labs/flux](https://github.com/black-forest-labs/flux) — Official repo for FLUX.1 models by Black Forest Labs.

## 📄 Foundational Papers

- [High-Resolution Image Synthesis with Latent Diffusion Models](https://arxiv.org/abs/2112.10752) — Rombach, Blattmann, Lorenz, Esser, and Ommer (CVPR 2022) seminal paper introducing Stable Diffusion.
- [Scalable Diffusion Models with Transformers (DiT)](https://arxiv.org/abs/2212.09748) — Peebles and Xie (ICCV 2023) foundational paper replacing U-Nets with Transformer backbones.

### 🧪 Practice

- [Diffusers Colab Notebooks](https://huggingface.co/docs/diffusers/tutorials/tutorial_overview) — Interactive notebooks running text-to-image, inpainting, and LoRA fine-tuning.

### 🛠️ Projects

- [High-Throughput FLUX.1 Image Generation Service](https://huggingface.co/docs/diffusers/) — Deploy a FastAPI service running FLUX.1 Schnell with 4-step generation and FP8 quantization for production use.

## 🧭 Recommended Learning Path

1. Learn the mathematical foundations of forward and reverse diffusion processes.
2. Understand Latent Diffusion: compressing pixel space into latent space using a VAE.
3. Study text conditioning via cross-attention with CLIP / T5 text encoders.
4. Transition to Diffusion Transformers (DiT) and Rectified Flow matching in FLUX.1.
5. Deploy a generation pipeline using Hugging Face Diffusers with FlashAttention and FP8 precision.

## ⭐ Top 3 Resources

1. Hugging Face Diffusers
2. FLUX.1 (Black Forest Labs)
3. fast.ai: From Deep Learning Foundations to Stable Diffusion

