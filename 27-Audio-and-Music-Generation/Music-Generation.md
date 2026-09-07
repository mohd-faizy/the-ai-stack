# Music Generation

> Music Generation models generate multi-instrumental, harmonically structured musical compositions conditioned on text descriptions, genre tags, or melody reference prompts.

## 🎯 What to Learn

- Neural audio codecs: EnCodec, DAC (Descript Audio Codec), and RVQ (Residual Vector Quantization)
- Meta AudioCraft / MusicGen architecture: Autoregressive language modeling over parallel audio codebooks
- Stable Audio: Latent diffusion for variable-length music and sound design
- Conditioning on melody, chords, BPM, and musical key
- Evaluating music generation: Fréchet Audio Distance (FAD) and CLAP score

## 📚 Best Learning Resources

### 🥇 Best Overall

- [AudioCraft / MusicGen (Meta AI Research)](https://audiocraft.metademolab.com/)
  - Type: Seminal Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: MusicGen (developed by Meta AI) is the gold standard open-source music generation model, generating coherent multi-track music from text and melody prompts using residual vector quantized tokens.

### 📖 Documentation & References

- [AudioCraft Documentation](https://facebookresearch.github.io/audiocraft/) — API reference for MusicGen, AudioGen, EnCodec, and model training.
- [Stable Audio Open Documentation](https://huggingface.co/stabilityai/stable-audio-open-1.0) — Open-weights latent diffusion model for audio and music production.

### 🎓 Courses

- [Deep Learning for Audio & Music (fast.ai)](https://course.fast.ai/) — Lectures on spectrograms, audio representations, and neural synthesis.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical breakdown of EnCodec quantization, parallel codebook interleaving, and melody conditioning.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Foundations of Music Processing](https://www.audiolabs-erlangen.de/fmp) — Meinard Müller definitive textbook on audio signal processing, harmony, tempo, and beat tracking.

### 💻 GitHub / Implementations

- [facebookresearch/audiocraft](https://github.com/facebookresearch/audiocraft) — AudioCraft: A library for audio processing and generation with deep learning (MusicGen & AudioGen).
- [Stability-AI/stable-audio-tools](https://github.com/Stability-AI/stable-audio-tools) — Generative audio tools and training code for latent diffusion audio models.

## 📄 Foundational Papers

- [Simple and Controllable Music Generation (MusicGen)](https://arxiv.org/abs/2306.05284) — Copet et al. (Meta AI 2023) seminal paper introducing parallel codebook modeling for high-quality music synthesis.

### 🧪 Practice

- [MusicGen Hugging Face Space](https://huggingface.co/spaces/facebook/MusicGen) — Generate 30-second music samples across jazz, electronic, and orchestral genres in the browser.

### 🛠️ Projects

- [Adaptive Video Game Dynamic Soundtrack Generator](https://facebookresearch.github.io/audiocraft/) — Build a service that generates looping ambient game music conditioned on player heart rate and in-game tension levels.

## 🧭 Recommended Learning Path

1. Learn how digital audio is represented: waveforms, STFT (Short-Time Fourier Transform), and Mel-spectrograms.
2. Study Residual Vector Quantization (RVQ) in neural codecs like EnCodec.
3. Generate your first track using `audiocraft.models.MusicGen` in Python.
4. Condition generation on a guiding melody whistled or played on a piano.
5. Explore Stable Audio Open to generate samples with continuous temporal conditioning.

## ⭐ Top 3 Resources

1. AudioCraft / MusicGen (Meta AI)
2. Stable Audio Tools (Stability AI)
3. Foundations of Music Processing (Meinard Müller)

