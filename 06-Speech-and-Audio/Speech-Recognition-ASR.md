# Speech Recognition (ASR)

> Automatic Speech Recognition (ASR) translates spoken acoustic audio signals into readable digital text across diverse accents, noise environments, and languages.

## 🎯 What to Learn

- Acoustic features: 80-channel log Mel-spectrograms from raw 16kHz audio waveforms
- ASR paradigms: Connectionist Temporal Classification (CTC) vs Transducer (RNN-T) vs Attention Seq2Seq
- OpenAI Whisper architecture: encoder-decoder transformer trained on 680,000 hours of weakly supervised web audio
- Inference acceleration: faster-whisper (CTranslate2) and whisper.cpp for real-time edge transcription
- Timestamp alignment: cross-attention weights and dynamic time warping (DTW) for word-level timestamps
- Voice Activity Detection (VAD): Silero VAD for segmenting continuous audio streams
- Evaluation metrics: Word Error Rate (WER) and Character Error Rate (CER)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OpenAI Whisper & faster-whisper](https://github.com/openai/whisper)
  - Type: Foundation Model & Engine
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: Whisper is the watershed foundation model for speech recognition, providing human-level zero-shot robustness across 99 languages, with faster-whisper delivering 4x faster execution.

### 📖 Documentation & References

- [Whisper Official Documentation](https://github.com/openai/whisper) — The official codebase and weights release from OpenAI.
- [faster-whisper GitHub](https://github.com/SYSTRAN/faster-whisper) — Reimplementation of Whisper using CTranslate2, delivering up to 4x speedup with less memory.
- [Hugging Face Audio Course: Automatic Speech Recognition](https://huggingface.co/learn/audio-course/chapter5/introduction) — Comprehensive free tutorial on fine-tuning Whisper and Wav2Vec2.

### 🎓 Courses

- [The Hugging Face Audio Course](https://huggingface.co/learn/audio-course/) — The premier free, comprehensive course covering audio processing, ASR, TTS, and classification.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical breakdown of Whisper's training dataset, multitask tokens, and zero-shot robustness.
- [freeCodeCamp.org: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: freeCodeCamp.org
  - Language: English
  - Type: Project Tutorial
  - Level: Beginner to Intermediate
  - Why: Builds a complete streaming voice transcription pipeline with microphone input and Silero VAD.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Speech and Language Processing (Jurafsky & Martin) — Chapter 16: Automatic Speech Recognition](https://web.stanford.edu/~jurafsky/slp3/) — Covers the mathematical foundations of acoustic modeling, Mel filterbanks, and CTC.

### 💻 GitHub / Implementations

- [Whisper](https://github.com/openai/whisper) — Robust automatic speech recognition by OpenAI.
- [faster-whisper](https://github.com/SYSTRAN/faster-whisper) — CTranslate2-powered Whisper inference.
- [Whisper.cpp](https://github.com/ggml-org/whisper.cpp) — Efficient Whisper in C/C++.
- [NeMo](https://github.com/NVIDIA/NeMo) — NVIDIA's conversational AI toolkit for ASR, NLU, and TTS.
- [Vosk](https://github.com/alphacep/vosk-api) — Offline speech recognition API.
- [WeNet](https://github.com/wenet-e2e/wenet) — Production-ready end-to-end speech recognition.
- [FunASR](https://github.com/modelscope/FunASR) — Fundamental end-to-end speech recognition toolkit.
- [SpeechBrain](https://github.com/speechbrain/speechbrain) — All-in-one speech processing toolkit.
- [wav2vec 2.0](https://github.com/facebookresearch/fairseq) — Self-supervised speech representations.
- [Kaldi](https://github.com/kaldi-asr/kaldi) — Legendary speech recognition toolkit.

### 🧪 Practice

- [LibriSpeech ASR Benchmark](https://www.openslr.org/12) — The classic 1,000-hour benchmark for training and testing speech recognition models.

### 🛠️ Projects

- [Real-Time Meeting Transcriber with Word Timestamps](https://github.com/SYSTRAN/faster-whisper) — Build a low-latency live audio streaming transcriber generating SRT subtitles with word-level accuracy.

## 🧭 Recommended Learning Path

1. Understand digital audio sampling: sample rates (16kHz vs 44.1kHz) and bit depth.
2. Compute Mel-frequency spectrograms using the Short-Time Fourier Transform (STFT).
3. Deploy Whisper locally using `faster-whisper` on GPU and CPU.
4. Integrate Silero VAD to segment audio streams and eliminate hallucinations during silence.
5. Fine-tune Whisper on an accented or domain-specific dataset (medical/technical) using Hugging Face PEFT/LoRA.

## ⭐ Top 3 Resources

1. [faster-whisper](https://github.com/SYSTRAN/faster-whisper) — The fastest, most resource-efficient open-source Whisper inference engine.
2. [Hugging Face Audio Course](https://huggingface.co/learn/audio-course/) — The definitive hands-on audio and speech engineering curriculum.
3. [OpenAI Whisper Paper (Radford et al.)](https://arxiv.org/abs/2212.04356) — The seminal research paper on robust zero-shot multi-task speech recognition.

