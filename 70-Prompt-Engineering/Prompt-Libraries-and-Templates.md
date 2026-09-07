# Prompt Libraries & Templates

> Curated collections, modular prompt signatures, and versioned template registries that standardize natural language instructions.

## 🎯 What to Learn

- Core prompting patterns: Role prompting, Few-Shot In-Context Learning, Chain-of-Thought (CoT), and Directional Stimulus
- DSPy Signatures: Declarative specification of input/output behavior (`'question -> answer'`) decoupling intention from phrasing
- LangChain Hub: Community repository for sharing, versioning, and discovering curated prompt templates
- Prompt foo: Automated test-driven development for prompts with regression testing and benchmarking
- Awesome ChatGPT Prompts: Massive community collection of battle-tested personas, system prompts, and creative roles
- Managing prompt versioning, drift, and migration across foundation model releases

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DSPy Signatures & Modules](https://github.com/stanfordnlp/dspy)
  - Type: Programmatic Prompting Standard
  - Language: English
  - Level: Intermediate
  - Why recommended: Stanford's revolutionary framework that replaces brittle, hand-crafted prompt strings with declarative, strongly-typed signatures and optimizable modules.

### 🎓 Courses

- [DeepLearning.AI: ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — The foundational 1-hour course by Andrew Ng and Isa Fulford.

### ▶️ YouTube — English

- [Omar Khattab / Stanford NLP: Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Omar Khattab / Stanford NLP
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Omar Khattab (creator of DSPy) explains why programming with modular signatures replaces brittle string hacking.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Prompt Engineering for Generative AI by James Phoenix and Mike Taylor (O'Reilly)](https://www.oreilly.com/library/view/prompt-engineering-for/9781098153427/) — Comprehensive guide to prompt engineering architectures, evaluation, and production systems.

### 💻 GitHub / Implementations

- [Promptfoo](https://github.com/promptfoo/promptfoo) — Test, evaluate, and red-team prompts.
- [DSPy](https://github.com/stanfordnlp/dspy) — Programming foundation models instead of prompting.
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) — Curated prompt collection.
- [LangChain Hub](https://github.com/langchain-ai/langchain) — Community prompt hub.
- [PromptPerfect](https://github.com/promptslab) — Prompt optimization tools.

### 🧪 Practice

- [LearnPrompting.org Interactive Sandbox](https://learnprompting.org/) — Free interactive course and sandbox testing beginner to advanced prompting techniques.

### 🛠️ Projects

- [Versioned Prompt Registry with Promptfoo](https://www.promptfoo.dev/) — Build a CI pipeline that tests 20 candidate system prompts against 50 edge-case test queries and auto-picks the top performer.

## 🧭 Recommended Learning Path

1. Master foundational prompting patterns: Zero-shot, few-shot, and step-by-step reasoning.
2. Explore the Promptfoo CLI to write automated assertions against prompt outputs.
3. Learn DSPy declarative signatures: `class QA(dspy.Signature): question = dspy.InputField(); answer = dspy.OutputField()`.
4. Use `dspy.ChainOfThought` to automatically elicit multi-step rationales.
5. Version and manage prompt changes inside your Git repository.

## ⭐ Top 3 Resources

1. DSPy (Stanford NLP)
2. Promptfoo (Automated Prompt Testing)
3. DeepLearning.AI Prompt Engineering Course

