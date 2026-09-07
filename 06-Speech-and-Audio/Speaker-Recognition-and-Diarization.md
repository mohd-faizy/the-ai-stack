# Speaker Recognition & Diarization

> Speaker recognition identifies individual voices, while speaker diarization solves the problem of 'who spoke when' in multi-speaker audio recordings.

## 🎯 What to Learn

- Speaker identification (1:N matching) vs Speaker verification (1:1 biometric matching)
- Speaker embedding architectures: x-vectors, ECAPA-TDNN, and ResNet-based speaker models
- Speaker diarization pipeline: Voice Activity Detection (VAD) → Segmentation → Embedding Extraction → Clustering
- Clustering algorithms for diarization: Agglomerative Hierarchical Clustering (AHC) and Spectral Clustering
- End-to-End Neural Diarization (EEND) and multi-speaker overlapping speech detection
- pyannote.audio framework: pretrained neural pipelines for diarization and speaker counting
- Evaluation metrics: Diarization Error Rate (DER) and Equal Error Rate (EER)

## 📚 Best Learning Resources

### 🥇 Best Overall

- [pyannote.audio: Neural Building Blocks for Speaker Diarization](https://github.com/pyannote/pyannote-audio)
  - Type: Framework & Pretrained Pipeline
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: pyannote.audio is the state-of-the-art open-source toolkit in PyTorch for speaker diarization, consistently winning international benchmarks.

### 📖 Documentation & References

- [pyannote.audio Documentation & Tutorials](https://github.com/pyannote/pyannote-audio) — Official guides on applying speaker diarization pipelines with Hugging Face integration.
- [SpeechBrain Speaker Recognition Tutorial](https://speechbrain.github.io/) — All-in-one conversational speech toolkit supporting ECAPA-TDNN speaker verification.

### 🎓 Courses

- [Hugging Face Audio Course - Chapter 4: Speaker Diarization](https://huggingface.co/learn/audio-course/chapter4/introduction) — Step-by-step tutorial running and fine-tuning pyannote.audio pipelines.

### ▶️ YouTube — English

- [Venelin Valkov: Video Guides & Tutorials](https://www.youtube.com/@venelin_valkov)
  - Channel: Venelin Valkov
  - Language: English
  - Type: Project Tutorial
  - Level: Intermediate
  - Why: Combines Whisper transcription with pyannote diarization to output colored speaker-labeled meeting transcripts.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Speaker Recognition by Homayoon Beigi](https://link.springer.com/book/10.1007/978-0-387-76592-1) — Comprehensive textbook on voice biometrics, acoustic features, and mathematical modeling.

### 💻 GitHub / Implementations

- [pyannote-audio](https://github.com/pyannote/pyannote-audio) — Speaker diarization and verification.
- [SpeechBrain](https://github.com/speechbrain/speechbrain) — Speaker recognition and diarization.
- [Resemblyzer](https://github.com/resemble-ai/Resemblyzer) — Speaker embedding extraction.
- [ECAPA-TDNN](https://github.com/speechbrain/speechbrain) — State-of-the-art speaker verification.

### 🧪 Practice

- [VoxCeleb Benchmark](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/) — Large-scale speaker identification dataset extracted from YouTube interviews.

### 🛠️ Projects

- [Automated Meeting Minutes Generator with Speaker Labels](https://github.com/pyannote/pyannote-audio) — Process multi-speaker Zoom recordings, separating dialogue into distinct speakers with Whisper transcripts.

## 🧭 Recommended Learning Path

1. Understand the difference between speaker verification (biometrics) and diarization ('who spoke when').
2. Study ECAPA-TDNN architectures and how cosine distance between speaker embeddings measures voice similarity.
3. Run pyannote.audio on multi-person podcast audio to extract speaker turns.
4. Align diarization time boundaries with Whisper word-level timestamps.
5. Calculate Diarization Error Rate (DER) comprising false alarms, missed speech, and speaker confusion.

## ⭐ Top 3 Resources

1. [pyannote.audio](https://github.com/pyannote/pyannote-audio) — The state-of-the-art open-source library for speaker diarization.
2. [SpeechBrain](https://speechbrain.github.io/) — Exhaustive PyTorch speech toolkit with exceptional speaker recognition support.
3. [VoxCeleb Dataset & Benchmark](https://www.robots.ox.ac.uk/~vgg/data/voxceleb/) — The premier global benchmark for evaluating speaker verification models.

