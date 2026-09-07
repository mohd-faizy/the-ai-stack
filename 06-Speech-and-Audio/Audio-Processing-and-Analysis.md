# Audio Processing & Analysis

> Digital audio processing manipulates sound waveforms, computes time-frequency spectral representations, and extracts acoustic features for machine learning.

## 🎯 What to Learn

- Digital signal processing fundamentals: sampling theorem (Nyquist), quantization, and dynamic range
- Time-to-frequency domain transformations: Fourier Transform, Short-Time Fourier Transform (STFT)
- Acoustic representations: Linear spectrograms, Mel-spectrograms, and Chromagrams
- Feature extraction: Mel-Frequency Cepstral Coefficients (MFCC), spectral centroid, zero-crossing rate
- GPU audio processing with `torchaudio`: batch transforms, resampling, and pitch shifting
- Audio classification architectures: Audio Spectrogram Transformer (AST) and PANNs

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Librosa: Python Audio and Music Signal Processing Library](https://librosa.org/doc/latest/index.html)
  - Type: Library & Documentation
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: Librosa is the standard, indispensable Python library for music and audio analysis, providing clean routines for feature extraction, spectrogram calculation, and display.

### 📖 Documentation & References

- [Librosa Official Documentation](https://librosa.org/doc/latest/index.html) — Comprehensive reference manual for audio loading, time-frequency transforms, and feature extraction.
- [PyTorch torchaudio Documentation](https://pytorch.org/audio/stable/index.html) — GPU-accelerated audio processing, datasets, and pretrained pipelines in native PyTorch.

### 🎓 Courses

- [The Audio Signal Processing Course (Valerio Velardo - The Sound of AI)](https://www.youtube.com/playlist?list=PL-wATfeyAMNqIee7cH3q1bh4QJzQKgoHr) — The definitive video course covering Fourier analysis, STFT, and Mel-spectrograms for AI engineers.

### ▶️ YouTube — English

- [Valerio Velardo - The Sound of AI: Video Guides & Tutorials](https://www.youtube.com/@ValerioVelardoTheSoundofAI)
  - Channel: Valerio Velardo - The Sound of AI
  - Language: English
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Superb 24-video series breaking down digital audio, Fourier transforms, frames, and MFCCs with Python code.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Fundamentals of Music Processing by Meinard Müller](https://www.audiolabs-erlangen.de/resources/MIR/FMP/data/FMP_TableOfContents.html) — The definitive academic textbook with interactive Jupyter notebooks on Fourier analysis and audio processing.

### 💻 GitHub / Implementations

- [librosa](https://github.com/librosa/librosa) — Audio and music signal analysis.
- [torchaudio](https://github.com/pytorch/audio) — Audio processing for PyTorch.
- [audiocraft](https://github.com/facebookresearch/audiocraft) — Audio generation and processing by Meta.
- [Demucs](https://github.com/facebookresearch/demucs) — Music source separation.
- [Asteroid](https://github.com/asteroid-team/asteroid) — Audio source separation on steroids.
- [pyannote-audio](https://github.com/pyannote/pyannote-audio) — Speaker diarization toolkit.
- [speechbrain](https://github.com/speechbrain/speechbrain) — All-in-one conversational AI toolkit.
- [noisereduce](https://github.com/timsainb/noisereduce) — Noise reduction in Python.

### 🧪 Practice

- [ESC-50: Dataset for Environmental Sound Classification](https://github.com/karolpiczak/ESC-50) — Standard benchmark dataset with 2,000 environmental audio recordings across 50 classes.

### 🛠️ Projects

- [Environmental Sound Classifier with Audio Spectrogram Transformer](https://github.com/YuanGongND/ast) — Convert audio files to Mel-spectrograms and classify acoustic scenes using an AST transformer.

## 🧭 Recommended Learning Path

1. Understand wave physics: frequency (pitch), amplitude (loudness), and sampling rate.
2. Compute the Fast Fourier Transform (FFT) to convert 1D waveforms into frequency spectra.
3. Construct 2D Mel-spectrograms using windowed STFT and triangular Mel filterbanks.
4. Extract MFCCs and chroma features for audio fingerprinting and music genre classification.
5. Use `torchaudio` on GPU to apply real-time data augmentations: SpecAugment, pitch shifting, and time stretching.

## ⭐ Top 3 Resources

1. [Librosa](https://librosa.org/) — The gold-standard Python library for audio feature engineering and DSP.
2. [The Sound of AI (Valerio Velardo)](https://www.youtube.com/playlist?list=PL-wATfeyAMNqIee7cH3q1bh4QJzQKgoHr) — The best educational video series on audio signal processing for ML in existence.
3. [torchaudio](https://pytorch.org/audio/stable/index.html) — Production-ready GPU-accelerated audio processing for PyTorch.

