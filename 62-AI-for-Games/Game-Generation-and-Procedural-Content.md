# Game Generation & Procedural Content

> Procedural level generation, autonomous open-world curriculum learning, and LLM-powered embodied exploration in complex gaming environments.

## 🎯 What to Learn

- Procedural Content Generation (PCG): Generating infinite game levels, maps, dungeons, and assets programmatically
- Voyager (MineDojo): The first lifelong learning agent powered by GPT-4 that plays Minecraft autonomously without human intervention
- MineDojo: Massive open-world environment benchmark with thousands of Minecraft tasks and web-scale human gameplay data
- Procgen Benchmark (OpenAI): 16 procedurally generated 2D arcade environments designed to measure RL generalization
- Skill libraries: Auto-generating and storing verified code skills (functions) in vector databases for lifelong learning
- Prompt-guided procedural generation: Using diffusion models and LLMs to generate 3D game assets and tilemaps

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Voyager (MineDojo)](https://github.com/MineDojo/Voyager)
  - Type: Lifelong Learning Game Agent
  - Language: English
  - Level: Advanced
  - Why recommended: A landmark open-source project demonstrating that an LLM paired with an automated curriculum, iterative code generation, and a skill library can master complex open-world games like Minecraft.

### 🎓 Courses

- [Stanford CS224R: Deep Reinforcement Learning](https://cs224r.stanford.edu/) — Covers generalization, curriculum learning, and embodied foundation models.

### ▶️ YouTube — English

- [Yannic Kilcher / Jim Fan: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / Jim Fan
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Dr. Jim Fan (lead author) explains how Voyager generates executable JavaScript skills and climbs the Minecraft tech tree.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Procedural Content Generation in Games by Noor Shaker, Julian Togelius, and Mark J. Nelson (Springer)](https://link.springer.com/book/10.1007/978-3-319-42714-0) — The definitive academic textbook on search-based, grammar-based, and cellular automata PCG.

### 💻 GitHub / Implementations

- [Procgen](https://github.com/openai/procgen) — Procedurally generated RL environments.
- [MineDojo](https://github.com/MineDojo/MineDojo) — Minecraft-based research environment.
- [Voyager](https://github.com/MineDojo/Voyager) — Lifelong learning agent in Minecraft.
- [GVGAI](https://github.com/GAIGResearch/GVGAI) — General video game AI framework.

## 📄 Foundational Papers

- [Voyager: An Open-Ended Embodied Agent with Large Language Models](https://arxiv.org/abs/2305.16291) — Wang et al. landmark paper introducing the skill library, automated curriculum, and self-improving code synthesis.
- [MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge](https://arxiv.org/abs/2206.01334) — Fan et al. NeurIPS Outstanding Paper introducing the internet-scale open-world gaming benchmark.

### 🧪 Practice

- [MineDojo Starter Tasks](https://github.com/MineDojo/MineDojo) — Run a simple Python script to spawn a Minecraft environment and control an agent.

### 🛠️ Projects

- [Autonomous Minecraft Mining Agent with Voyager](https://github.com/MineDojo/Voyager) — Deploy Voyager to explore a local Minecraft world, generate mining skills in JavaScript, and craft iron tools autonomously.

## 🧭 Recommended Learning Path

1. Understand why traditional RL fails in open-ended games (sparse rewards, infinite horizons).
2. Study Voyager's architecture: Automated Curriculum -> Code Generation -> Self-Verification -> Skill Library.
3. Learn how skills are stored as executable JavaScript functions and indexed with vector embeddings.
4. Explore OpenAI Procgen to understand how procedural generation tests RL generalization.
5. Build a procedural dungeon generation script using cellular automata or wave function collapse.

## ⭐ Top 3 Resources

1. Voyager (MineDojo / Jim Fan et al.)
2. MineDojo (Open-World Gaming Benchmark)
3. Procedural Content Generation in Games (Springer Book)

