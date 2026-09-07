# Prompt Engineering & Context Optimization

> Systematic context construction, in-context learning strategies, and programmatic prompt compilation that maximize LLM reasoning, alignment, and reliability.

## 🎯 What to Learn

- Core prompting strategies: Zero-Shot, Few-Shot In-Context Learning (ICL), and Chain-of-Thought (CoT)
- Advanced reasoning paradigms: Least-to-Most prompting, Self-Consistency, and Tree of Thoughts (ToT)
- The limitation of manual prompt engineering: brittle string formatting and prompt drift across models
- Programmatic prompt optimization with DSPy (Declarative Self-improving Python)
- DSPy teleprompters / optimizers: BootstrapFewShot, MIPROv2, and Bayesian prompt compilation
- Context optimization: needle-in-a-haystack testing, prompt compression (LLMLingua), and KV cache optimization

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DSPy: Programming—not prompting—Foundation Models (Stanford NLP)](https://dspy.ai/)
  - Type: Framework & Documentation
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: DSPy replaces fragile manual prompt engineering with clean declarative Python modules, automatically compiling and optimizing optimal prompts and few-shot examples against a metric.

### 📖 Documentation & References

- [DSPy Official Documentation](https://dspy.ai/) — Complete guide on Signatures, Modules (`ChainOfThought`, `ReAct`), and Teleprompter optimizers.
- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering) — Official best practices covering clear instructions, reference text, and complex task decomposition.
- [Anthropic Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — Exhaustive practical tutorial on system prompts, XML tags, and prefilling.

### 🎓 Courses

- [ChatGPT Prompt Engineering for Developers (Andrew Ng & Isa Fulford)](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/) — The foundational industry micro-course on prompt engineering best practices.

### ▶️ YouTube — English

- [Omar Khattab (Stanford): Video Guides & Tutorials](https://www.youtube.com/@StanfordOnline)
  - Channel: Omar Khattab (Stanford)
  - Language: English
  - Type: Lecture & Tutorial
  - Level: Intermediate to Advanced
  - Why: DSPy lead creator Omar Khattab explains how compiling prompts mirrors compiling PyTorch neural networks.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [The Prompt Engineering Guide by DAIR.AI](https://www.promptingguide.ai/) — The definitive open-source reference website and paper catalog on prompt engineering.

### 💻 GitHub / Implementations

- [DSPy](https://github.com/stanfordnlp/dspy) — Framework for algorithmically compiling declarative language model modules.
- [Promptfoo](https://github.com/promptfoo/promptfoo) — CLI and library for evaluating LLM output quality and red teaming.
- [TextGrad](https://github.com/zou-group/textgrad) — Automatic differentiation and backpropagation via textual feedback.
- [Pezzo](https://github.com/pezzolabs/pezzo) — Cloud-native prompt management and observability platform.
- [Awesome ChatGPT Prompts](https://github.com/f/prompts.chat) — Widely referenced collection of system prompts and behavioral instructions.

### 🧪 Practice

- [LearnPrompting.org](https://learnprompting.org/) — Interactive beginner-to-advanced courses on prompt engineering with exercises.

### 🛠️ Projects

- [Self-Optimizing Multi-Hop RAG Pipeline with DSPy](https://dspy.ai/) — Build a multi-hop question answering pipeline where DSPy automatically compiles optimal retrieval prompts and few-shot exemplars.

## 🧭 Recommended Learning Path

1. Master foundational prompting: clear boundaries, delimiters (XML tags, triple backticks), and explicit output schemas.
2. Implement Chain-of-Thought (CoT) and Self-Consistency sampling for mathematical and logical queries.
3. Understand In-Context Learning (ICL) dynamics and exemplar selection sensitivity.
4. Transition from string concatenation to DSPy: define `dspy.Signature` and `dspy.Module`.
5. Run DSPy's `MIPROv2` or `BootstrapFewShotWithRandomSearch` to automatically discover prompts that score highest on validation sets.

## ⭐ Top 3 Resources

1. [DSPy (Stanford NLP)](https://dspy.ai/) — The revolutionary framework transforming prompt engineering into modular, optimizable code.
2. [Prompt Engineering Guide (DAIR.AI)](https://www.promptingguide.ai/) — The most comprehensive, constantly updated encyclopedia of prompt research.
3. [Anthropic Interactive Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — The gold-standard curriculum for mastering modern prompt design.

