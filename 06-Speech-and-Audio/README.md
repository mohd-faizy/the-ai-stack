# 06 - Speech & Audio

> Acoustic signal processing, Automatic Speech Recognition (ASR), Text-to-Speech (TTS), voice cloning, audio generation, and speaker identification.

## 🌐 Overview & Architectural Importance

Speech is the primary, most natural modality of human communication. Modern neural speech architectures have transitioned from complex multi-stage phonetic pipelines to unified end-to-end foundation models—enabling human-parity speech-to-text transcription, expressive zero-shot voice cloning, and real-time conversational AI audio agents.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Speech Recognition (ASR)**](Speech-Recognition-ASR.md) — End-to-end ASR, OpenAI Whisper, faster-whisper, CTC loss, and Word Error Rate (WER) optimization.
* [**Text-to-Speech (TTS)**](Text-to-Speech-TTS.md) — Neural speech synthesis, Coqui TTS, XTTS, Piper, ChatTTS, and expressive acoustic modeling.
* [**Voice Cloning & Conversion**](Voice-Cloning-and-Conversion.md) — Zero-shot voice cloning, RVC (Retrieval-based Voice Conversion), and speaker timbre transfer.
* [**Audio Processing & Analysis**](Audio-Processing-and-Analysis.md) — Digital signal processing, Librosa, torchaudio, STFT, mel-spectrograms, and audio feature extraction.
* [**Speaker Recognition & Diarization**](Speaker-Recognition-and-Diarization.md) — Speaker diarization ('who spoke when'), speaker embeddings (x-vectors), and pyannote-audio.

## 🧭 Recommended Study Sequence

1. **Acoustic Signal Processing**: Sampling rates, Fourier Transform (FFT, STFT), and Mel-scale filterbanks.
2. **Audio Representations**: Waveforms, spectrograms, and neural audio codecs (EnCodec, DAC).
3. **Speech-to-Text (ASR)**: OpenAI Whisper architecture, CTC vs Sequence-to-Sequence decoding, and word error rates.
4. **Text-to-Speech (TTS)**: Acoustic models, diffusion/flow matching TTS, and vocoders (HiFi-GAN).
5. **Conversational Voice Pipelines**: Integrating ASR, LLM, and streaming low-latency TTS.

## 🗝️ Foundational Prerequisites

- Digital signal processing basics (frequency, amplitude, Nyquist theorem).
- PyTorch tensor operations on multi-channel audio waveforms.
- Basic understanding of convolutional and transformer architectures.

---

[← Back to Main Repository](../README.md)
