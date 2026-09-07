# Audio, Speech & Music Generation

> Generative audio systems synthesize full-fidelity music compositions, sound effects, and realistic ambient acoustic environments from text prompts.

## 🎯 What to Learn

- Neural audio compression codecs: EnCodec, DAC (Descript Audio Codec), and RVQ (Residual Vector Quantization)
- Autoregressive audio language modeling (MusicGen, AudioGen) over discrete acoustic tokens
- Continuous diffusion models for audio: Stable Audio Open and AudioCraft
- Conditioning on musical attributes: BPM, key signatures, chords, and text descriptions
- Stereo audio generation, multi-track instrumentation, and variable-length sampling
- Evaluation metrics: Fréchet Audio Distance (FAD), KL-divergence, and qualitative musicality

## 📚 Best Learning Resources

### 🥇 Best Overall

- [AudioCraft & MusicGen by Meta AI Research](https://github.com/facebookresearch/audiocraft)
  - Type: Framework & Pretrained Models
  - Language: English
  - Level: Intermediate
  - Why recommended: AudioCraft is the premier open-source library for generative audio and music, containing MusicGen, AudioGen, and EnCodec with state-of-the-art controllability.

### 📖 Documentation & References

- [AudioCraft Official Documentation](https://github.com/facebookresearch/audiocraft) — Guides and recipes for generating high-quality music and sound effects.
- [Stable Audio Open Documentation](https://github.com/Stability-AI/stable-audio-tools) — Stability AI's open-weights latent diffusion model for sound effects and music generation.

### 🎓 Courses

- [The Hugging Face Audio Course - Chapter 7: Audio Generation](https://huggingface.co/learn/audio-course/chapter7/introduction) — Comprehensive tutorial on generating music and audio with MusicGen and Diffusers.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Technical breakdown of Residual Vector Quantization (RVQ) codebooks and interleaved autoregressive decoding.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Music and Computers by Phil Burk et al.](https://music.columbia.edu/cmc/musicandcomputers/) — Foundational online textbook on digital audio synthesis, waveforms, and harmonics.

### 💻 GitHub / Implementations

- [AudioCraft / MusicGen](https://github.com/facebookresearch/audiocraft) — Controllable text-to-music generation by Meta.
- [Stable Audio Open](https://github.com/Stability-AI/stable-audio-tools) — Audio generation open foundation model for samples and sound design.
- [Bark](https://github.com/suno-ai/bark) — Transformer-based expressive text-to-audio and speech synthesis by Suno.
- [ChatTTS](https://github.com/2noise/ChatTTS) — Conversational text-to-speech model optimized for dialogue, prosody, and laughter.
- [CosyVoice](https://github.com/QwenAudio/CosyVoice) — Multilingual large voice generation model by Alibaba.
- [F5-TTS](https://github.com/SWivid/F5-TTS) — Fairytaler that Fakes Fluent and Faithful speech via flow matching.
- [Fish Speech](https://github.com/fishaudio/fish-speech) — Zero-shot multilingual text-to-speech model with expressive cloning.
- [MeloTTS](https://github.com/myshell-ai/MeloTTS) — High-quality multi-lingual text-to-speech library by MyShell.
- [GPT-SoVITS](https://github.com/RVC-Boss/GPT-SoVITS) — Few-shot cross-lingual voice cloning and synthesis.
- [Retrieval-based Voice Conversion (RVC)](https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI) — Low-latency voice conversion and singing voice synthesis.
- [WhisperSpeech](https://github.com/WhisperSpeech/WhisperSpeech) — Open text-to-speech system built by inverting Whisper.

### 🧪 Practice

- [MusicGen Space on Hugging Face](https://huggingface.co/spaces/facebook/MusicGen) — Interactive playground generating 30-second music samples from text and melody prompts.

### 🛠️ Projects

- [Automated Soundtrack Generator for Video Games](https://github.com/facebookresearch/audiocraft) — Build an API that accepts game level moods and generates looping, dynamic background music.

## 🧭 Recommended Learning Path

1. Understand how Neural Audio Codecs (EnCodec) compress 44.1kHz audio into discrete token streams using RVQ.
2. Explore autoregressive codebook prediction patterns (delay pattern, parallel pattern) in MusicGen.
3. Compare discrete autoregressive token modeling against continuous diffusion in Stable Audio.
4. Condition music generation on text descriptions, reference audio melodies, and BPM tempos.
5. Deploy MusicGen locally using Hugging Face Transformers for offline track creation.

## ⭐ Top 3 Resources

1. [AudioCraft / MusicGen (Meta AI)](https://github.com/facebookresearch/audiocraft) — The gold-standard open-source foundation model for generative music.
2. [Stable Audio Open (Stability AI)](https://github.com/Stability-AI/stable-audio-tools) — State-of-the-art latent diffusion model for variable-length stereo sound effects and music.
3. [EnCodec Paper (Défossez et al.)](https://arxiv.org/abs/2210.13438) — The seminal paper establishing high-fidelity neural audio compression via residual quantization.

