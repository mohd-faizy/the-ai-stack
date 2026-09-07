# Planning & Task Decomposition

> Hierarchical planning frameworks, goal decomposition architectures, and environmental affordance grounding for complex autonomous tasks.

## 🎯 What to Learn

- Task decomposition: Breaking vague high-level objectives ('Plan a trip to Japan') into ordered, executable subgoals
- Google SayCan: Grounding language models in physical robotic affordances using value functions
- Language Agent Tree Search (LATS): Combining Monte Carlo Tree Search, external execution, and reflection for planning
- Voyager (MineDojo): Lifelong learning agent with an automated curriculum that iteratively proposes, tests, and saves skills
- ToolLLM: Large-scale platform for training language models to master 16,000+ real-world REST APIs through tree search
- Replanning and backtracking when sub-tasks fail in dynamic environments

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Language Agent Tree Search (LATS)](https://github.com/lats-team/LATS)
  - Type: Agent Planning Architecture
  - Language: English
  - Level: Advanced
  - Why recommended: A powerful general planning framework that unifies reasoning, acting, and planning using Monte Carlo Tree Search, external execution feedback, and self-reflection.

### 🎓 Courses

- [DeepLearning.AI: Multi AI Agent Systems with crewAI](https://www.deeplearning.ai/short-courses/multi-ai-agent-systems-with-crewai/) — Covers hierarchical task decomposition and agent delegation.

### ▶️ YouTube — English

- [Yannic Kilcher / AI Research: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / AI Research
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Technical explanation of how MCTS enables agents to explore alternative action paths and backtrack from failures.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Automated Planning and Acting by Malik Ghallab, Dana Nau, Paolo Traverso (Cambridge)](https://www.cambridge.org/core/books/automated-planning-and-acting/0A1B07A9A16ED12F3D9C137119B9B88E) — The definitive academic textbook on classical planning, state-space search, and hierarchical task networks.

### 💻 GitHub / Implementations

- [SayCan](https://github.com/google-research/google-research) — Grounded language for robot planning.
- [Voyager](https://github.com/MineDojo/Voyager) — LLM-based lifelong learning and planning agent.
- [HuggingGPT](https://github.com/microsoft/JARVIS) — Task planning with LLMs and expert models.
- [ToolLLM](https://github.com/OpenBMB/ToolBench) — Facilitating tool-use planning.
- [LATS](https://github.com/lapisrocks/LanguageAgentTreeSearch) — Language agent tree search for planning.

## 📄 Foundational Papers

- [Do As I Can, Not As I Say: Grounding Language in Robotic Affordances (SayCan)](https://arxiv.org/abs/2204.01691) — Ahn et al. Google paper establishing grounded planning with learned value functions.
- [Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models](https://arxiv.org/abs/2310.04406) — Zhou et al. paper introducing LATS.

### 🧪 Practice

- [LangGraph Plan-and-Execute Tutorial](https://langchain-ai.github.io/langgraph/tutorials/plan-and-execute/plan-and-execute/) — Build an agent in LangGraph that creates an explicit multi-step plan, executes it step-by-step, and replans on error.

### 🛠️ Projects

- [Autonomous Travel Planning Agent with Backtracking](https://github.com/lats-team/LATS) — Build an agent that books flights, hotels, and itineraries, using tree search to find valid solutions when constraints conflict.

## 🧭 Recommended Learning Path

1. Understand classical planning concepts: Initial state, Goal state, Actions, and Preconditions.
2. Study the Plan-and-Solve prompting pattern vs naive single-step generation.
3. Explore Google SayCan to understand how physical affordances constrain language plans.
4. Implement Language Agent Tree Search (LATS) for multi-step reasoning tasks.
5. Incorporate dynamic replanning loops to recover when external APIs fail.

## ⭐ Top 3 Resources

1. Language Agent Tree Search (LATS)
2. Google SayCan (Affordance-Grounded Planning)
3. Automated Planning and Acting (Cambridge University Press)

