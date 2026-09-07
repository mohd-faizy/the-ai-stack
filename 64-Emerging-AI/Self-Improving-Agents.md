# Self-Improving Agents

> Autonomous software engineering agents, iterative self-refinement loops, and execution-guided feedback mechanisms that improve task resolution over time.

## 🎯 What to Learn

- The self-refinement loop: Plan -> Execute in Sandbox -> Observe Error -> Reflect -> Patch Code
- OpenHands (formerly OpenDevin): Leading open-source platform for AI software developers capable of writing code, running commands, and browsing the web
- SWE-agent (Princeton NLP): Turning language models into software engineering agents that resolve GitHub issues autonomously
- Language Agent Tree Search (LATS): Combining Monte Carlo Tree Search with language model value reflection for decision-making
- Execution sandboxing: Running agent bash commands and code safely inside ephemeral Docker containers (E2B, Docker)
- Automated unit test generation as verifiable feedback for agent self-improvement

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OpenHands (All-Hands AI)](https://github.com/All-Hands-AI/OpenHands)
  - Type: Autonomous Software Agent Platform
  - Language: English
  - Level: Intermediate
  - Why recommended: The leading open-source platform for autonomous AI software engineers, featuring sandboxed Docker execution, web browsing, terminal control, and top-tier SWE-bench performance.

### 🎓 Courses

- [DeepLearning.AI: Building Agentic RAG and Autonomous Agents](https://www.deeplearning.ai/short-courses/) — Covers reflection patterns, tool use, and multi-step self-correction loops.

### ▶️ YouTube — English

- [Matthew Berman / All-Hands AI: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman / All-Hands AI
  - Language: English
  - Type: Walkthrough
  - Level: Intermediate
  - Why: Complete demonstration running OpenHands in Docker, pointing it at a GitHub repository, and watching it resolve bugs autonomously.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Designing Autonomous AI Agents by Harrison Chase and Chip Huyen](https://www.oreilly.com/) — Architectural blueprint for stateful agents, environment feedback, and self-correction loops.

### 💻 GitHub / Implementations

- [OpenHands](https://github.com/OpenHands/OpenHands) — Agents that write and improve their own code.
- [SWE-agent](https://github.com/SWE-agent/SWE-agent) — Agents that solve real GitHub issues.
- [Voyager](https://github.com/MineDojo/Voyager) — LLM-powered lifelong learning agent.
- [LATS](https://github.com/lapisrocks/LanguageAgentTreeSearch) — Language agent tree search.

## 📄 Foundational Papers

- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793) — Yang et al. landmark Princeton paper introducing the Agent-Computer Interface (ACI) tailored for code editing.
- [Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models (LATS)](https://arxiv.org/abs/2310.04406) — Zhou et al. paper combining MCTS, reflection, and external environmental rewards.

### 🧪 Practice

- [OpenHands Docker Quickstart](https://docs.all-hands.ai/modules/usage/installation) — Launch OpenHands in one command: `docker run -it -p 3000:3000 ghcr.io/all-hands-ai/openhands:main`.

### 🛠️ Projects

- [Autonomous Bug Resolver with SWE-agent](https://github.com/princeton-nlp/SWE-agent) — Point SWE-agent at an open issue in a Python repository and let it locate the bug, write a reproduction test, and submit a Git commit.

## 🧭 Recommended Learning Path

1. Understand the limitations of single-pass code generation (missing runtime context).
2. Learn the Agent-Computer Interface (ACI): File search, line viewing, and editing commands.
3. Deploy OpenHands locally with Docker to experience autonomous software development.
4. Study how self-correction loops use pytest error outputs to guide the next iteration.
5. Benchmark custom agent setups against SWE-bench Lite.

## ⭐ Top 3 Resources

1. OpenHands (All-Hands AI)
2. SWE-agent (Princeton NLP)
3. Language Agent Tree Search (LATS Paper)

