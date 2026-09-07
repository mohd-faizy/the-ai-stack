# Diffusion & Flow Matching Foundation Models

> Foundation visual generative models based on latent score matching, diffusion stochastic differential equations, and rectified flow matching.

## 🎯 What to Learn

- Continuous-time diffusion: Denoising Diffusion Probabilistic Models (DDPM) vs Score-Based Generative Models (SGM)
- Rectified Flow Matching: straight-line trajectory generation between noise and data distributions
- FLUX.1 architecture (Black Forest Labs): 12B parameter multimodal flow transformer with rotary position embeddings
- Stable Diffusion 3 (SD3): Multimodal Diffusion Transformer (MMDiT) with separate text and image streams
- Text comprehension and typography rendering in foundation diffusion models
- Evaluation metrics: Fréchet Inception Distance (FID), CLIP score, and ImageReward

## 📚 Best Learning Resources

### 🥇 Best Overall

- [FLUX.1 by Black Forest Labs](https://github.com/black-forest-labs/flux)
  - Type: Foundation Model & Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: FLUX.1 represents the pinnacle of open-weights image generation, delivering state-of-the-art visual quality, prompt adherence, and photorealistic typography via rectified flow transformers.

### 📖 Documentation & References

- [FLUX.1 GitHub Repository](https://github.com/black-forest-labs/flux) — Official codebase and inference scripts for FLUX.1 [schnell] and [dev].
- [Hugging Face Flow Matching Guide](https://huggingface.co/docs/diffusers/main/en/using-diffusers/flow_matching) — Theoretical and practical guide to flow matching schedulers.

### 🎓 Courses

- [Stanford CS236: Deep Generative Models (Prof. Stefano Ermon)](https://deepgenerativemodels.github.io/) — Rigorous graduate course covering variational inference, score-based models, and flow matching.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Mathematical breakdown of continuous normalizing flows and why straight paths between noise and images speed up generation.
- [Umar Jamil: Video Guides & Tutorials](https://www.youtube.com/@umarjamilai)
  - Channel: Umar Jamil
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Intermediate to Advanced
  - Why: Step-by-step review of the 12B MMDiT architecture, rotary embeddings, and rectified flow sampling.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Understanding Deep Learning by Simon J.D. Prince — Chapter 18: Diffusion Models](https://udlbook.github.io/udlbook/) — Free online textbook with crystal-clear mathematical diagrams of diffusion and flow.

### 💻 GitHub / Implementations

- [FLUX.1](https://github.com/black-forest-labs/flux) — 12B parameter rectified flow transformer by Black Forest Labs (Schnell & Dev).
- [Stable Diffusion 3.5](https://github.com/Stability-AI/sd3.5) — Multimodal diffusion transformer (MMDiT) with state-of-the-art image quality.
- [SDXL](https://github.com/Stability-AI/generative-models) — Stable Diffusion XL flagship open-weights latent diffusion model.
- [Stable Diffusion](https://github.com/CompVis/stable-diffusion) — Original latent text-to-image diffusion architecture.
- [PixArt-sigma](https://github.com/PixArt-alpha/PixArt-sigma) — 4K text-to-image diffusion transformer with weak-to-strong training.
- [AuraFlow](https://huggingface.co/fal/AuraFlow) — Fully open-source 6.8B parameter rectified flow text-to-image model.
- [Sana](https://github.com/NVlabs/Sana) — Efficient 4K high-resolution image synthesis with linear attention by NVIDIA.
- [DeepFloyd IF](https://github.com/deep-floyd/IF) — Cascaded pixel-space text-to-image diffusion model with deep language comprehension.
- [Kandinsky 3](https://github.com/ai-forever/Kandinsky-3) — Large-scale multilingual text-to-image generative model.
- [Latent Consistency Models (LCM)](https://github.com/luosiallen/latent-consistency-model) — High-resolution image synthesis in 2-4 inference steps.
- [Consistency Models](https://github.com/openai/consistency_models) — Fast generation without adversarial training or iterative sampling by OpenAI.

### 🧪 Practice

- [FLUX.1 Demo on Hugging Face Spaces](https://huggingface.co/spaces/black-forest-labs/FLUX.1-schnell) — Interactive playground testing 4-step rectified flow image generation.

### 🛠️ Projects

- [Local Photorealistic Typography Engine with FLUX.1](https://github.com/black-forest-labs/flux) — Deploy FLUX.1 [schnell] with 8-bit quantization on a local consumer GPU for instant graphic design asset creation.

## 🧭 Recommended Learning Path

1. Master the mathematical intuition of DDPM: adding Gaussian noise until data becomes pure noise.
2. Understand score-based modeling and how neural networks estimate the gradient of the log probability density.
3. Study Rectified Flow: understand why linear interpolation between noise and data requires fewer sampling steps.
4. Inspect FLUX.1 and MMDiT architecture: multimodal self-attention over concatenated text and image tokens.
5. Implement FP8/NF4 quantized inference to run 12B parameter diffusion models on 12GB-16GB VRAM.

## ⭐ Top 3 Resources

1. [FLUX.1 (Black Forest Labs)](https://github.com/black-forest-labs/flux) — The state-of-the-art open-weights image generation foundation model family.
2. [Flow Matching for Generative Modeling (Lipman et al.)](https://arxiv.org/abs/2210.02747) — The seminal research paper introducing rectified flow matching.
3. [Stanford CS236 (Stefano Ermon)](https://deepgenerativemodels.github.io/) — The premier academic graduate course on deep generative mathematics.

