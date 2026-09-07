# Text-to-Speech (TTS)

> Neural Text-to-Speech (TTS) synthesizes natural, expressive, and human-sounding acoustic speech waveforms from written text inputs.

## 🎯 What to Learn

- TTS architecture components: text normalization, acoustic model (text-to-spectrogram), and neural vocoder (spectrogram-to-waveform)
- Neural vocoders: HiFi-GAN, WaveGlow, and BigVGAN
- Fast, lightweight edge TTS: Piper (VITS-based) for sub-second CPU speech synthesis
- Advanced multi-speaker & expressive models: Coqui XTTS, ChatTTS, and Kokoro
- Flow matching and diffusion architectures for natural human prosody and conversational pauses
- Streaming audio generation: low first-packet latency architectures for conversational voice agents

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Coqui TTS & XTTS](https://github.com/coqui-ai/TTS)
  - Type: Framework & Model Library
  - Language: English
  - Level: Intermediate
  - Why recommended: Coqui TTS is the legendary open-source speech synthesis toolkit, supporting over 20 languages and high-quality zero-shot voice cloning with XTTS.

### 📖 Documentation & References

- [Coqui TTS Documentation](https://tts.readthedocs.io/en/latest/) — Comprehensive documentation covering FastSpeech, VITS, XTTS, and custom voice training.
- [Piper TTS Documentation](https://github.com/rhasspy/piper) — Ultra-fast, local neural text to speech system optimized for Raspberry Pi and low-end hardware.
- [ChatTTS GitHub](https://github.com/2noise/ChatTTS) — Conversational TTS model specifically trained for natural human dialogue, laughs, and interjections.

### 🎓 Courses

- [Hugging Face Audio Course - Chapter 6: Text-to-Speech](https://huggingface.co/learn/audio-course/chapter6/introduction) — Hands-on guide to training and fine-tuning neural TTS models.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Review of ChatTTS showcasing human-like pauses, breathing sounds, and conversational intonations.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Speech and Language Processing (Jurafsky & Martin) — Chapter 18: Text-to-Speech](https://web.stanford.edu/~jurafsky/slp3/) — Detailed academic explanation of grapheme-to-phoneme conversion, prosody, and vocoders.

### 💻 GitHub / Implementations

- [Coqui TTS](https://github.com/coqui-ai/TTS) — Deep learning text-to-speech toolkit.
- [Piper](https://github.com/rhasspy/piper) — Fast local neural TTS engine.
- [ESPnet](https://github.com/espnet/espnet) — End-to-end speech processing toolkit.
- [VITS](https://github.com/jaywalnut310/vits) — Conditional variational autoencoder with adversarial learning for TTS.
- [Tortoise TTS](https://github.com/neonbjb/tortoise-tts) — Multi-voice text-to-speech system.
- [StyleTTS 2](https://github.com/yl4579/StyleTTS2) — Human-level TTS with style diffusion.
- [MeloTTS](https://github.com/myshell-ai/MeloTTS) — High-quality multilingual TTS.
- [F5-TTS](https://github.com/SWivid/F5-TTS) — Fairytaler that Fakes Fluent and Faithful speech.
- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) — Few-shot voice cloning and TTS.

### 🧪 Practice

- [LJSpeech Dataset](https://keithito.com/LJ-Speech-Dataset/) — The standard single-speaker English benchmark dataset for training TTS models.

### 🛠️ Projects

- [Sub-100ms Streaming Voice Agent](https://github.com/rhasspy/piper) — Connect Piper TTS to an LLM stream to generate real-time audio responses with low first-packet latency.

## 🧭 Recommended Learning Path

1. Understand the two-stage TTS paradigm: acoustic feature generation followed by vocoding.
2. Explore neural vocoders: why HiFi-GAN produces realistic waveforms without metallic artifacts.
3. Synthesize real-time local speech with Piper TTS on CPU.
4. Generate expressive conversational speech with ChatTTS using inline laughter and pause tags.
5. Fine-tune a VITS model on a custom voice recording dataset.

## ⭐ Top 3 Resources

1. [Coqui TTS / XTTS](https://github.com/coqui-ai/TTS) — The most flexible and widely used open-source neural speech synthesis library.
2. [Piper](https://github.com/rhasspy/piper) — The fastest, most lightweight local neural TTS for real-time edge computing.
3. [ChatTTS](https://github.com/2noise/ChatTTS) — Breakthrough model for expressive, conversational multi-speaker dialogue synthesis.

