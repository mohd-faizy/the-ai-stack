# Local LLM Runtime

> Lightweight execution runtimes, background daemons, and application packages that run quantized foundation models locally on personal computers.

## 🎯 What to Learn

- Ollama: Architecture, Modelfile specification, CLI commands (`run`, `pull`, `serve`), and REST API
- llama.cpp: Compiling from source with Metal/CUDA/Vulkan, running `llama-cli` and `llama-server`
- LM Studio: Desktop GUI for discovering, downloading, and running GGUF models with visual GPU offload controls
- LocalAI: Drop-in replacement for OpenAI API supporting LLMs, audio (Whisper), and image generation (Stable Diffusion)
- Hardware requirements: Estimating RAM/VRAM needs across 4-bit, 5-bit, and 8-bit quantized models
- Context window management and memory allocation on unified memory systems

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Ollama](https://github.com/ollama/ollama)
  - Type: Local Runtime & CLI
  - Language: English
  - Level: Beginner
  - Why recommended: The easiest, most popular tool to run open-source language models locally, packaging model weights, configurations, and GPU acceleration into a single command.

### 🎓 Courses

- [DeepLearning.AI: Open Source Models with Hugging Face](https://www.deeplearning.ai/short-courses/open-source-models-hugging-face/) — Covers local deployment and selecting appropriate model sizes for local hardware.

### ▶️ YouTube — English

- [Local AI Series](https://www.youtube.com/playlist?list=PLB71FAt4fa40)
  - Channel: Hugging Face
  - Language: English
  - Type: Course Series
  - Level: Beginner to Intermediate
  - Why: Hands-on guides to running open-weights models, local inference runtimes, and transformers on consumer hardware.
- [LLM Installations](https://www.youtube.com/playlist?list=PLVdRlinteIpZogEBWdKvJLLZer_9-UAwB)
  - Channel: Fahd Mirza
  - Language: English
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: The most comprehensive step-by-step installation guides for Ollama, vLLM, llama.cpp, LM Studio, and quantized GGUF/EXL2 models.
- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@matthew_berman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Energetic step-by-step tutorials covering Ollama installation, custom Modelfiles, and local API integration.

### ▶️ YouTube — Hindi / Hinglish

- [Complete Generativ AI And Agentic AI Playlist](https://www.youtube.com/playlist?list=PLTDARY42LDV567lWN_5BtoVGjMFKbthGu)
  - Channel: Krish Naik Hindi
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: End-to-end setup of open-source local LLMs, Ollama, LangChain, and private document Q&A in Hindi.
- [Generative AI using LangChain](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Nitish Singh guides through local model serving and vector search integrations in Hindi.


### 📚 Books

- [Local AI Engineering by Packt Publishing](https://www.packtpub.com/) — Practical guide on setting up on-premise and workstation AI runtimes.

### 💻 GitHub / Implementations

- [Ollama](https://github.com/ollama/ollama) — Get up and running with LLMs locally.
- [llama.cpp](https://github.com/ggml-org/llama.cpp) — Efficient local LLM inference engine.
- [LM Studio](https://github.com/lmstudio-ai) — Discover, download, and run local LLMs.
- [LocalAI](https://github.com/mudler/LocalAI) — Self-hosted OpenAI-compatible API.
- [Koboldcpp](https://github.com/LostRuins/koboldcpp) — Easy-to-use local LLM inference.
- [GPT4All](https://github.com/nomic-ai/gpt4all) — Run open-source LLMs anywhere.
- [PrivateGPT](https://github.com/zylon-ai/private-gpt) — Interact with documents privately.

### 🧪 Practice

- [Ollama Model Library](https://ollama.com/library) — Browse thousands of pre-configured models (Llama 3, Mistral, Qwen, DeepSeek) ready to run.

### 🛠️ Projects

- [Custom Domain Assistant Modelfile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md) — Create an Ollama Modelfile with a custom system prompt, temperature, and few-shot examples, and publish it locally.

## 🧭 Recommended Learning Path

1. Install Ollama on macOS, Linux, or Windows.
2. Run your first model: `ollama run llama3:8b`.
3. Interact with the local server via `curl http://localhost:11434/api/generate`.
4. Explore LM Studio for an intuitive graphical interface and hardware offloading sliders.
5. Build a custom agent Modelfile embedding specific instructions and persona parameters.

## ⭐ Top 3 Resources

1. Ollama (One-command local runtime)
2. llama.cpp (Core C++ inference engine)
3. LM Studio (Desktop GUI & developer server)

