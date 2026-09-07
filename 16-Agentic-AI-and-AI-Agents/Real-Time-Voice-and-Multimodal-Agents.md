# Real-Time Voice & Multimodal Agents

> Real-time voice and multimodal agents achieve sub-500ms conversational turn-around times, processing streaming audio, detecting voice interruptions, and synchronizing speech-to-text, LLM, and text-to-speech pipelines.

## 🎯 What to Learn

- WebRTC and WebSocket protocols for bidirectional audio streaming
- Voice Activity Detection (VAD) and turn-taking / barge-in interruption handling
- Streaming pipeline orchestration: STT (Whisper/Deepgram) -> Streaming LLM -> TTS (Cartesia/ElevenLabs)
- End-to-end multimodal audio foundation models (Mini-Omni, GPT-4o Realtime API)
- Latency profiling and jitter buffer management

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LiveKit Agents: Framework for Real-Time Multimodal AI](https://docs.livekit.io/agents/)
  - Type: Official Platform & Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: LiveKit Agents is the premier open-source infrastructure for real-time voice and video agents, handling WebRTC room management, VAD, audio codecs, and sub-300ms speech loops seamlessly.

### 📖 Documentation & References

- [LiveKit Agents Documentation](https://docs.livekit.io/agents/) — Comprehensive guides to building voice agents, function calling over audio, and WebRTC streaming.
- [Pipecat Documentation](https://docs.pipecat.ai/) — Open-source Python framework for real-time voice, multimodal, and conversational agents.
- [Vocode Documentation](https://docs.vocode.dev/) — Build voice agents that can join phone calls, Zoom meetings, and web apps.

### 🎓 Courses

- [Building Real-Time Voice Agents (LiveKit Tutorials)](https://livekit.io/) — Practical hands-on video tutorials on configuring VAD, turn-taking, and telephony.

### ▶️ YouTube — English

- [LiveKit: Video Guides & Tutorials](https://www.youtube.com/@LiveKit)
  - Channel: LiveKit
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Hands-on setup connecting Silero VAD, Deepgram STT, OpenAI LLM, and Cartesia TTS with instant interruption support.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Real-Time Communication with WebRTC](https://www.oreilly.com/) — Foundational concepts in peer-to-peer audio/video streaming, SDP signaling, and latency optimization.

### 💻 GitHub / Implementations

- [livekit/agents](https://github.com/livekit/agents) — Build real-time voice and multimodal AI applications on LiveKit.
- [pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat) — Open-source framework for voice and multimodal conversational AI.
- [OPEN-AIR-LAB/mini-omni](https://github.com/OPEN-AIR-LAB/mini-omni) — Open-source multimodal large language model that can hear, talk and think simultaneously.

## 📄 Foundational Papers

- [Mini-Omni: Language Models Can Hear, Talk and Think in Real Time](https://arxiv.org/abs/2408.16725) — Xie and Wu (2024) establishing end-to-end direct speech-to-speech modeling without discrete STT/TTS cascading.

### 🧪 Practice

- [LiveKit Agent Playground](https://agents-playground.livekit.io/) — Test real-time voice latency, interruption sensitivity, and speech synthesis directly in the browser.

### 🛠️ Projects

- [Full-Duplex Customer Support Voice Assistant](https://github.com/livekit/agents) — Deploy a voice agent that talks naturally, pauses immediately when the user speaks, queries database tools, and responds in under 400ms.

## 🧭 Recommended Learning Path

1. Learn why traditional HTTP request-response architectures fail for conversational voice.
2. Set up a local LiveKit WebRTC server and connect a Python worker agent.
3. Configure Silero VAD for accurate turn-taking detection and interruption handling.
4. Implement streaming tool calling (e.g. looking up a user account while speaking).
5. Benchmark total round-trip audio latency from user speech cessation to model voice response.

## ⭐ Top 3 Resources

1. LiveKit Agents (livekit/agents)
2. Pipecat (pipecat-ai/pipecat)
3. Mini-Omni (OPEN-AIR-LAB)

