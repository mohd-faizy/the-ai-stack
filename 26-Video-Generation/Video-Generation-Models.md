# Video Generation Models

> Video Generation Models synthesize temporally coherent, physically consistent video sequences from text prompts or reference initial frames using 3D spatio-temporal transformers and flow matching.

## 🎯 What to Learn

- Spatio-temporal architectures: 3D VAEs and 3D DiT (Diffusion Transformers)
- Temporal attention mechanisms, rotary position embeddings (3D RoPE), and cross-frame attention
- Leading open video models: HunyuanVideo (Tencent), CogVideoX, Mochi 1, LTX-Video, Open-Sora
- Flow matching and continuous-time formulations for video synthesis
- Hardware requirements, VRAM optimization, and video latent caching

## 📚 Best Learning Resources

### 🥇 Best Overall

- [HunyuanVideo: A Systematic Framework for Large Video Generative Models](https://github.com/Tencent/HunyuanVideo)
  - Type: Open-Source Foundation Model & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Tencent's HunyuanVideo is the premier open-source video foundation model (13B parameters), capable of generating high-definition, cinema-quality video with high motion fidelity and physical plausibility.

### 📖 Documentation & References

- [HunyuanVideo Documentation](https://github.com/Tencent/HunyuanVideo) — Architecture details, dual-stream transformer design, and ComfyUI integration.
- [CogVideoX Documentation (THUDM)](https://github.com/THUDM/CogVideo) — Open-source text-to-video and image-to-video models with 3D causal VAE.
- [Open-Sora Documentation](https://github.com/hpcaitech/Open-Sora) — Efficient video generation platform replicating OpenAI Sora architectures.

### 🎓 Courses

- [Deep Learning for Video Processing (Stanford CS 231N)](https://cs231n.stanford.edu/) — Stanford lectures on optical flow, 3D convolutions, and spatio-temporal video modeling.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Model Review
  - Level: Intermediate to Advanced
  - Why: Technical breakdown of 3D VAE compression, dual-stream video transformers, and motion consistency.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Computer Vision: Models, Learning, and Inference](http://www.computervisionmodels.com/) — Simon Prince comprehensive text on probabilistic temporal modeling and optical flow.

### 💻 GitHub / Implementations

- [Tencent/HunyuanVideo](https://github.com/Tencent/HunyuanVideo) — HunyuanVideo: A Systematic Framework for Large Video Generative Models.
- [THUDM/CogVideo](https://github.com/THUDM/CogVideo) — Text-to-video and Image-to-video model series by Tsinghua University.
- [hpcaitech/Open-Sora](https://github.com/hpcaitech/Open-Sora) — Open-Sora: Democratizing Efficient Video Production for All.

## 📄 Foundational Papers

- [HunyuanVideo: A Systematic Framework for Large Video Generative Models](https://arxiv.org/abs/2412.03603) — Tencent (2024) comprehensive report detailing 3D causal VAE and dual-stream spatio-temporal transformers.
- [Photorealistic Video Generation with Diffusion Models (Make-A-Video)](https://arxiv.org/abs/2209.14792) — Singer et al. (Meta AI 2022) seminal paper establishing pseudo-3D convolutions for video diffusion.

### 🧪 Practice

- [HunyuanVideo in ComfyUI](https://github.com/city96/ComfyUI-GGUF) — Run quantized GGUF versions of HunyuanVideo on consumer GPUs inside ComfyUI.

### 🛠️ Projects

- [Automated Text-to-B-Roll Video Generator](https://github.com/Tencent/HunyuanVideo) — Build a script that accepts video essay script paragraphs, generates 5-second cinematic B-roll clips with HunyuanVideo, and stitches them into an edit.

## 🧭 Recommended Learning Path

1. Understand the challenge of video generation: spatial resolution * temporal frames * 24fps = massive computational demand.
2. Study 3D VAE compression: compressing both spatial height/width and temporal time frames into compact latent grids.
3. Explore 3D RoPE (Rotary Position Embeddings) across X, Y, and T dimensions.
4. Deploy HunyuanVideo or CogVideoX in ComfyUI with FP8 or GGUF quantization.
5. Evaluate motion smoothness, temporal consistency, and physical collision plausibility.

## ⭐ Top 3 Resources

1. HunyuanVideo (Tencent)
2. CogVideoX (THUDM)
3. Open-Sora (hpcaitech)

