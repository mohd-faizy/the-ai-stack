# 40 - Local AI

> Desktop runtimes, privacy-first user interfaces, and offline retrieval systems enabling foundation models to execute entirely on personal hardware.

## 🌐 Overview & Architectural Importance

Cloud AI APIs pose privacy risks, recurrent token costs, and internet dependencies. Local AI enables running state-of-the-art open-weights models (Llama 3, Mistral, Gemma) natively on laptops and workstations with zero data exfiltration, complete offline privacy, and zero API costs.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Local LLM Runtime**](Local-LLM-Runtime.md) — Ollama, llama.cpp, LM Studio, LocalAI, Koboldcpp, and zero-setup local inference engines.
* [**Local AI Interfaces**](Local-AI-Interfaces.md) — Open WebUI, Jan, LibreChat, LobeChat, Text Generation WebUI, and desktop chat clients.
* [**Local Knowledge & RAG**](Local-Knowledge-and-RAG.md) — PrivateGPT, Khoj, Quivr, DocsGPT, offline document search, and local vector embeddings.

## 🧭 Recommended Study Sequence

1. **Local Execution Mechanics**: CPU vs Metal/CUDA acceleration, unified memory, and GGUF quantization.
2. **CLI & Server Runtimes**: One-command model pulling and OpenAI-compatible serving with Ollama and llama.cpp.
3. **Desktop & Web GUIs**: Open WebUI, Jan, and LibreChat connecting to local model backends.
4. **Offline Document Search**: Local embedding models (BGE, Nomic) and local vector stores (Chroma, DuckDB).
5. **Hardware Sizing**: RAM/VRAM rules of thumb for 7B, 14B, 32B, and 70B models.

## 🗝️ Foundational Prerequisites

- Command line fundamentals and package managers (Homebrew, Winget, Docker).
- Hardware comprehension: Unified memory (Apple Silicon) vs dedicated VRAM (NVIDIA GPUs).
- REST APIs and OpenAI protocol compatibility (`/v1/chat/completions`).

---

[← Back to Main Repository](../README.md)
