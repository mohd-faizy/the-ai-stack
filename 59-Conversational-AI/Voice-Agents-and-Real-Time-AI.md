# Voice Agents & Real-Time AI

> Ultra-low-latency real-time voice architectures, WebRTC audio streaming, Voice Activity Detection (VAD), and turn-taking orchestration.

## 🎯 What to Learn

- The real-time voice pipeline: Audio Input -> Voice Activity Detection (Silero VAD) -> Streaming STT (Deepgram/Whisper) -> LLM -> Streaming TTS (Cartesia/ElevenLabs) -> Audio Output
- LiveKit Agents: Modern WebRTC framework for building real-time voice and multimodal AI agents with sub-500ms latency
- Pipecat: Open-source Python framework for real-time voice and multimodal conversational agents with pluggable backends
- Turn-taking and interruptibility: Allowing users to interrupt the AI naturally during speech generation
- Latency budgeting: Achieving human-like conversational cadence (< 500ms response latency)
- WebRTC audio transport: Handling jitter buffers, packet loss, and acoustic echo cancellation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LiveKit Agents](https://github.com/livekit/agents)
  - Type: Real-Time Voice Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The premier open-source WebRTC platform for building ultra-low-latency real-time voice and vision agents, powering production voice applications with sub-500ms latency and native interruptibility.

### 🎓 Courses

- [DeepLearning.AI: Building Real-Time Voice Agents](https://www.deeplearning.ai/short-courses/) — Hands-on course covering voice pipeline components, latency optimization, and WebRTC streaming.

### ▶️ YouTube — English

- [LiveKit / Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: LiveKit / Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Complete walkthrough building a human-like voice assistant that responds in under 400ms and handles user interruptions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [WebRTC: APIs and RTCWEB Protocols of the HTML5 Real-Time Web by Alan B. Johnston](https://www.digitalpreservation.gov/) — Foundational guide on WebRTC peer connections, audio codecs (Opus), and real-time streaming.

### 💻 GitHub / Implementations

- [LiveKit Agents](https://github.com/livekit/agents) — Build real-time multimodal AI agents.
- [Pipecat](https://github.com/pipecat-ai/pipecat) — Framework for real-time voice and multimodal AI.
- [Vocode](https://github.com/vocodedev/vocode-core) — Open-source voice agent infrastructure.
- [Retell AI](https://github.com/RetellAI) — Build conversational voice AI.
- [bolna](https://github.com/bolna-ai/bolna) — Production-ready voice AI agents.

### 🧪 Practice

- [LiveKit Agent Playground](https://agents-playground.livekit.io/) — Test live voice agents with custom system prompts, low latency, and real-time interruption in your browser.

### 🛠️ Projects

- [Sub-500ms AI Customer Support Phone Agent](https://github.com/livekit/agents) — Build a real-time voice agent using LiveKit and Deepgram that answers incoming phone calls, checks order statuses via tool calling, and speaks naturally.

## 🧭 Recommended Learning Path

1. Understand the latency breakdown of voice: Audio capture -> VAD -> STT -> LLM first token -> TTS first chunk -> Audio playback.
2. Learn Voice Activity Detection (Silero VAD) to detect when a human stops speaking.
3. Build a streaming pipeline with LiveKit Agents or Pipecat.
4. Implement user interruption handling: Immediately canceling active TTS audio streams when human speech is detected.
5. Connect telephony providers via SIP to enable inbound and outbound AI phone calls.

## ⭐ Top 3 Resources

1. LiveKit Agents (WebRTC Real-Time Voice Standard)
2. Pipecat (Daily.co Python Voice Framework)
3. Silero VAD (Voice Activity Detection)

