# Speech & Voice Generation

> Speech and voice generation systems synthesize human speech with natural prosody, emotional inflection, and zero-shot voice cloning from brief audio references.

## 🎯 What to Learn

- Text-to-Speech (TTS) paradigms: Autoregressive codec modeling vs. Flow Matching / Diffusion (F5-TTS)
- Zero-shot voice cloning: extracting speaker embeddings from 3-second audio prompts
- State-of-the-art open models: Parler-TTS, Fish-Speech, Chatterbox, Bark, XTTS-v2
- Cross-lingual voice transfer and accent preservation
- Audio evaluation: Word Error Rate (WER), Speaker Similarity (SIM), and MOS

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Parler-TTS: High-Quality Controllable Speech Synthesis (Hugging Face)](https://github.com/huggingface/parler-tts)
  - Type: Open-Source Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: Parler-TTS is Hugging Face's open-source reproduction of natural, expressive speech synthesis, offering full natural language control over speaker tone, cadence, room acoustics, and emotions.

### 📖 Documentation & References

- [Parler-TTS Documentation](https://huggingface.co/docs/parler-tts/index) — Usage guides, prompt recipes, and inference optimization for Parler-TTS.
- [Coqui TTS Documentation](https://github.com/coqui-ai/TTS) — Deep learning toolkit for Text-to-Speech with pre-trained models in 20+ languages.
- [Fish Speech Documentation](https://speech.fish.audio/) — Open-source multilingual voice cloning and speech synthesis architecture.

### 🎓 Courses

- [Hugging Face Audio Course: Text-to-Speech](https://huggingface.co/learn/audio-course/chapter6/introduction) — Comprehensive free course on speech synthesis, acoustic models, and neural vocoders.

### ▶️ YouTube — English

- [Hugging Face: Video Guides & Tutorials](https://www.youtube.com/@HuggingFace)
  - Channel: Hugging Face
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Walkthrough of prompting Parler-TTS with descriptive audio instructions ('A female speaker speaks slowly in a quiet room').

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Speech and Language Processing](https://web.stanford.edu/~jurafsky/slp3/) — Jurafsky and Martin definitive textbook covering phonetic representations, acoustic features, and speech synthesis.

### 💻 GitHub / Implementations

- [huggingface/parler-tts](https://github.com/huggingface/parler-tts) — Inference and training library for high-quality, controllable text-to-speech models.
- [coqui-ai/TTS](https://github.com/coqui-ai/TTS) — A deep learning toolkit for Text-to-Speech, battle-tested in research and production.
- [fishaudio/fish-speech](https://github.com/fishaudio/fish-speech) — SOTA Open Source Multilingual TTS / Voice Clone based on VQ-GAN and Llama.

## 📄 Foundational Papers

- [Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers (VALL-E)](https://arxiv.org/abs/2301.02111) — Wang et al. (Microsoft Research 2023) seminal paper establishing in-context learning for zero-shot voice cloning.

### 🧪 Practice

- [Parler-TTS Playground](https://huggingface.co/spaces/parler-tts/parler_tts) — Experiment with custom voice descriptors and text generation in Hugging Face Spaces.

### 🛠️ Projects

- [Zero-Shot Audiobook Narrator with Emotion Control](https://github.com/huggingface/parler-tts) — Build a Python pipeline that parses book chapters, analyzes character emotion with an LLM, and synthesizes expressive dialogue.

## 🧭 Recommended Learning Path

1. Study the evolution of TTS: Concatenative -> Tacotron (spectrograms) -> Neural Codec Language Models (VALL-E).
2. Understand vocoders (HiFi-GAN) that convert compressed acoustic tokens back into high-fidelity audio waveforms.
3. Generate natural speech using Parler-TTS in Python using Hugging Face Transformers.
4. Perform zero-shot voice cloning from a 5-second reference clip using XTTS-v2 or Fish-Speech.
5. Benchmark speech latency for real-time conversational agent deployment.

## ⭐ Top 3 Resources

1. Parler-TTS (Hugging Face)
2. Coqui TTS (coqui-ai)
3. Hugging Face Audio Course (TTS Unit)

