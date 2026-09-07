# Video Generation Models & Frameworks

> Generative video models synthesize temporally consistent, high-definition video sequences from text prompts, starting images, and camera trajectory controls.

## 🎯 What to Learn

- Spatiotemporal architectures: 3D VAEs for video compression and 3D DiT architectures
- Temporal self-attention vs spatial self-attention factorization
- AnimateDiff: injecting temporal motion modeling modules into pretrained 2D image diffusion models
- Open-source text-to-video foundation models: CogVideoX (THUDM), Open-Sora (ColossalAI), and Mochi-1
- Video conditioning: Image-to-Video (I2V), video continuation, camera motion LoRA, and inpainting
- Computational requirements, GPU memory optimization, and frame interpolation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [CogVideoX by THUDM / Zhipu AI](https://github.com/THUDM/CogVideo)
  - Type: Foundation Model & Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: CogVideoX is a top-tier open-source video generation model family, featuring expert 3D VAE spatiotemporal compression and dual-stream transformers delivering cinematic temporal consistency.

### 📖 Documentation & References

- [CogVideoX Hugging Face Documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/cogvideox) — Official guide for running CogVideoX text-to-video and image-to-video in Diffusers.
- [Open-Sora Documentation (Colossal-AI)](https://github.com/hpcaitech/Open-Sora) — Open-source initiative democratizing large-scale video generation models and training pipelines.

### 🎓 Courses

- [Full Stack Deep Learning: Generative Video & Multimodal AI](https://fullstackdeeplearning.com/) — Industry overview of generative video architectures and inference deployment.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Overview & Testing
  - Level: Beginner
  - Why: Comprehensive demonstration of text-to-video and image-to-video generation quality and local setup.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Generative Deep Learning (David Foster) — Chapter 8: Diffusion and Video Synthesis](https://www.oreilly.com/library/view/generative-deep-learning/9781098134174/) — Covers temporal architectures and generative video modeling.

### 💻 GitHub / Implementations

- [Wan 2.1](https://github.com/Wan-Video/Wan2.1) — Comprehensive open video generation model family with 14B and 1.3B parameters.
- [HunyuanVideo](https://github.com/Tencent-Hunyuan/HunyuanVideo) — 13B parameter foundation video generation model by Tencent.
- [CogVideoX](https://github.com/zai-org/CogVideo) — Text-to-video foundation diffusion transformer by Tsinghua & Zhipu AI.
- [Open-Sora](https://github.com/hpcaitech/Open-Sora) — Democratic and efficient reproduction of Sora video generation.
- [Open-Sora-Plan](https://github.com/PKU-YuanGroup/Open-Sora-Plan) — Open-source reproduction of large-scale text-to-video pipelines.
- [Mochi 1](https://github.com/genmoai/mochi) — Open 10B parameter video foundation model by Genmo.
- [LTX-Video](https://github.com/Lightricks/LTX-Video) — Real-time high-fidelity video generation model by Lightricks.
- [AnimateDiff](https://github.com/guoyww/AnimateDiff) — Animate personalized text-to-image diffusion models without tuning.
- [Stable Video Diffusion (SVD)](https://github.com/Stability-AI/generative-models) — High-resolution image-to-video diffusion model.
- [VideoCrafter](https://github.com/AILab-CVC/VideoCrafter) — Open platform for high-quality video generation and editing.
- [Latte](https://github.com/Vchitect/Latte) — Latent diffusion transformer for video generation.

### 🧪 Practice

- [CogVideoX Space on Hugging Face](https://huggingface.co/spaces/THUDM/CogVideoX-5B-Space) — Interactive demo testing prompt adherence and physical motion dynamics.

### 🛠️ Projects

- [Automated Cinematic Video Generation Pipeline](https://github.com/THUDM/CogVideo) — Build an automated pipeline generating 6-second video clips from LLM storyboards using CogVideoX.

## 🧭 Recommended Learning Path

1. Understand the computational challenge of video: why a 5-second video contains 150+ frames.
2. Study 3D VAEs that compress video both spatially (8x) and temporally (4x).
3. Explore AnimateDiff motion adapters plugged into 2D Stable Diffusion.
4. Deep dive into CogVideoX's 3D RoPE (Rotary Position Embeddings) across space and time.
5. Deploy quantized video inference using Diffusers and CPU offloading on consumer GPUs.

## ⭐ Top 3 Resources

1. [CogVideoX (THUDM)](https://github.com/THUDM/CogVideo) — The most capable, open-source video generation model family available.
2. [AnimateDiff](https://github.com/guoyww/AnimateDiff) — Pioneering motion adapter bringing seamless animation to any 2D diffusion checkpoint.
3. [Open-Sora (Colossal-AI)](https://github.com/hpcaitech/Open-Sora) — Leading community open-source reproduction of large-scale video transformer architectures.

