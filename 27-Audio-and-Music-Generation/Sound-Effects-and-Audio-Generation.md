# Sound Effects & Audio Generation

> Sound effects and environmental audio generation models synthesize realistic foley effects, ambient soundscapes, and acoustic textures conditioned on text descriptions.

## 🎯 What to Learn

- Latent diffusion for general audio (AudioLDM, AudioLDM 2)
- Meta AudioCraft / AudioGen for sound effect synthesis
- CLAP (Contrastive Language-Audio Pretraining) for zero-shot audio classification and retrieval
- Temporal alignment of sound effects to video tracks
- Multi-channel spatial audio and reverberation modeling

## 📚 Best Learning Resources

### 🥇 Best Overall

- [AudioLDM 2: Learning Speech, Music and Sound Generation with Latent Diffusion](https://github.com/haoheliu/AudioLDM2)
  - Type: Seminal Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: AudioLDM 2 (University of Surrey) is the leading open research framework for generating sound effects, ambient audio, and music using latent diffusion models conditioned on AudioMAE and GPT-2 representations.

### 📖 Documentation & References

- [AudioLDM 2 Documentation](https://haoheliu.github.io/audioldm2-full/) — Audio samples, architecture details, and Hugging Face Diffusers integration.
- [AudioGen Documentation (Meta AI)](https://facebookresearch.github.io/audiocraft/api_docs/audiocraft/models/audiogen.html) — Meta's autoregressive sound effect generation model.

### 🎓 Courses

- [Audio Generation & Processing (Stanford CCRMA)](https://ccrma.stanford.edu/) — Stanford Center for Computer Research in Music and Acoustics lectures on digital sound synthesis.

### ▶️ YouTube — English

- [Two Minute Papers: Video Guides & Tutorials](https://www.youtube.com/@TwoMinutePapers)
  - Channel: Two Minute Papers
  - Language: English
  - Type: Overview
  - Level: Beginner to Intermediate
  - Why: Demonstration of generating diverse realistic environmental sounds: rain, dog barking, footsteps, and explosions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [The Sound Effects Bible: How to Create and Record Hollywood Style Sound Effects](https://www.amazon.com/Sound-Effects-Bible-Hollywood-Audio/dp/1932907483) — Ric Viers guide to foley artistry, acoustic design, and environmental sound composition.

### 💻 GitHub / Implementations

- [haoheliu/AudioLDM2](https://github.com/haoheliu/AudioLDM2) — AudioLDM 2: Learning Speech, Music and Sound Generation with Audio Language-Audio Pretraining.
- [facebookresearch/audiocraft](https://github.com/facebookresearch/audiocraft) — AudioCraft includes AudioGen for text-conditioned sound effect generation.

## 📄 Foundational Papers

- [AudioLDM: Text-to-Audio Generation with Latent Diffusion Models](https://arxiv.org/abs/2301.12503) — Liu et al. (ICML 2023) seminal paper introducing latent diffusion for universal sound generation.
- [AudioGen: Textually Guided Audio Generation](https://arxiv.org/abs/2209.15352) — Kreuk et al. (Meta AI 2022) pioneering autoregressive sound synthesis.

### 🧪 Practice

- [AudioLDM 2 Diffusers Pipeline](https://huggingface.co/docs/diffusers/api/pipelines/audioldm2) — Run sound effect generation directly in Python using Diffusers `AudioLDM2Pipeline`.

### 🛠️ Projects

- [Automated Foley Sound Designer for Silent Video](https://github.com/haoheliu/AudioLDM2) — Build an automated foley pipeline that detects actions in video frames (e.g. footsteps, door slam) and generates synchronized sound effects.

## 🧭 Recommended Learning Path

1. Learn the difference between tonal musical signals and non-stationary stochastic sound effects.
2. Study CLAP (Contrastive Language-Audio Pretraining) embeddings that align natural language with sound clips.
3. Generate environmental sound effects using `diffusers.AudioLDM2Pipeline` in 10 lines of Python.
4. Adjust audio length, negative prompts, and guidance scale to refine acoustic clarity.
5. Synthesize custom foley tracks for video games and film production.

## ⭐ Top 3 Resources

1. AudioLDM 2 (haoheliu/AudioLDM2)
2. Meta AudioGen (facebookresearch/audiocraft)
3. Hugging Face Diffusers Audio Pipelines

