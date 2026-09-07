# Voice Cloning & Conversion

> Voice cloning and voice conversion transfer the unique vocal timbre, pitch, and acoustic identity of a target speaker to arbitrary synthetic speech or existing audio.

## 🎯 What to Learn

- Zero-shot voice cloning vs fine-tuned voice adaptation
- Disentangling speech representations: separating content (what is said) from speaker identity (who says it)
- Speaker embeddings: d-vectors, x-vectors, and neural speaker encoders
- Retrieval-based Voice Conversion (RVC): index-based feature retrieval and pitch extraction (Harvest, Crepe, RMVPE)
- Zero-shot cross-lingual voice cloning with XTTS and OpenVoice
- Acoustic watermarking and deepfake voice detection safeguards

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Retrieval-based Voice Conversion (RVC)](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI)
  - Type: Repository & WebUI
  - Language: English
  - Level: Intermediate
  - Why recommended: RVC is the dominant open-source voice conversion system, using top-feature retrieval and HuBERT embeddings to prevent timbre leakage and produce studio-quality vocal clones.

### 📖 Documentation & References

- [RVC Project Documentation](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) — The definitive guide to training custom voice models and real-time voice changing.
- [OpenVoice Documentation (MyShell)](https://github.com/myshell-ai/OpenVoice) — Instant voice cloning library with flexible control over voice styles and emotion.

### 🎓 Courses

- [Hugging Face Audio Course: Speaker Embeddings & Verification](https://huggingface.co/learn/audio-course/chapter4/introduction) — Deep dive into speaker verification and timbre extraction.

### ▶️ YouTube — English

- [Jarod's Journey: Video Guides & Tutorials (Jarod's Journey)](https://www.youtube.com/results?search_query=Jarod's%20Journey%20Jarod's%20Journey%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: Jarod's Journey
  - Language: English
  - Type: Tutorial
  - Level: Beginner to Intermediate
  - Why: Clear practical guide on dataset cleanup, epoch training, pitch algorithm selection, and index creation.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Voice Conversion: A Review (Sisman et al., IEEE)](https://ieeexplore.ieee.org/document/9248666) — Seminal academic survey detailing spectral mapping, vocoders, and deep learning voice transfer.

### 💻 GitHub / Implementations

- [RVC](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) — Retrieval-based voice conversion.
- [so-vits-svc](https://github.com/svc-develop-team/so-vits-svc) — Singing voice conversion.
- [OpenVoice](https://github.com/myshell-ai/OpenVoice) — Instant voice cloning by MyShell.
- [FreeVC](https://github.com/OlaWod/FreeVC) — Text-free one-shot voice conversion.

### 🧪 Practice

- [VCTK Multi-Speaker Corpus](https://datashare.ed.ac.uk/handle/10283/3443) — 109 English speakers with various accents used for benchmarking voice cloning algorithms.

### 🛠️ Projects

- [Real-Time AI Voice Changer for Streaming](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) — Deploy an RVC pipeline converting microphone input to a target voice with sub-200ms latency.

## 🧭 Recommended Learning Path

1. Understand how self-supervised speech representations (HuBERT, WavLM) isolate phonetics from timbre.
2. Extract pitch contours (F0) using modern estimators like RMVPE (Robust Model for Vocal Pitch Estimation).
3. Train a custom voice model in RVC using 10 minutes of clean, dry vocal recordings.
4. Perform cross-lingual zero-shot voice cloning with OpenVoice / XTTS.
5. Implement deepfake voice detection using acoustic artifact classifiers.

## ⭐ Top 3 Resources

1. [RVC (Retrieval-based Voice Conversion)](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) — The most popular, high-fidelity voice conversion technology in the open-source world.
2. [OpenVoice (MyShell)](https://github.com/myshell-ai/OpenVoice) — Breakthrough zero-shot voice cloning with granular tone and emotion control.
3. [XTTS (Coqui)](https://github.com/coqui-ai/TTS) — Exceptional multi-lingual zero-shot speech synthesis from short audio clips.

