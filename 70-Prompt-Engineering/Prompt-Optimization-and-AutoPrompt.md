# Prompt Optimization & AutoPrompt

> Algorithmic prompt optimizers, textual backpropagation, and evolutionary prompt search that tune instructions automatically without manual tweaking.

## 🎯 What to Learn

- The prompt optimization problem: Manual prompt engineering is labor-intensive, brittle, and model-specific
- DSPy Teleprompters (MIPROv2, BootstrapFewShot): Automatically selecting few-shot demonstrations and rewriting instructions to maximize validation metrics
- TextGrad: Automatic differentiation via text, using LLM feedback as 'textual gradients' to optimize prompts and code
- OPRO (Optimization by PROmpting - Google DeepMind): Using LLMs as black-box optimizers for mathematical and prompt optimization
- Automatic Prompt Engineer (APE): Generating and scoring candidate prompts using natural language program synthesis
- Defining robust metric functions (exact match, LLM-as-a-judge, semantic similarity) to guide optimization loops

## 📚 Best Learning Resources

### 🥇 Best Overall

- [DSPy (Stanford NLP)](https://github.com/stanfordnlp/dspy)
  - Type: Algorithmic Prompt Compiler
  - Language: English
  - Level: Intermediate
  - Why recommended: The state-of-the-art framework that compiles declarative language model modules into optimized instructions and few-shot exemplars, consistently beating expert human prompt engineers.

### 🎓 Courses

- [Stanford CS224U: Natural Language Understanding](https://web.stanford.edu/class/cs224u/) — Christopher Potts course featuring in-depth modules on DSPy and prompt optimization.

### ▶️ YouTube — English

- [Yannic Kilcher / Stanford: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / Stanford
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Technical breakdown of computing gradients in natural language to optimize system prompts and molecular code.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Prompt Engineering for Generative AI by James Phoenix and Mike Taylor](https://www.oreilly.com/library/view/prompt-engineering-for/9781098153427/) — Chapters covering automated prompt search, Bayesian optimization, and evolutionary prompting.

### 💻 GitHub / Implementations

- [DSPy](https://github.com/stanfordnlp/dspy) — Automatic prompt optimization.
- [TextGrad](https://github.com/zou-group/textgrad) — Optimization through text feedback gradients.
- [OPRO](https://github.com/google-deepmind/opro) — Optimization by prompting by DeepMind.
- [EvoPrompt](https://github.com/beeevita/EvoPrompt) — Evolutionary prompt optimization.
- [APE](https://github.com/keirp/automatic_prompt_engineer) — Automatic prompt engineering.

## 📄 Foundational Papers

- [DSPy: Compiling Declarative Language Model Calls into State-of-the-Art Pipelines](https://arxiv.org/abs/2310.03714) — Khattab et al. landmark paper introducing the programming model and compiler for foundation models.
- [TextGrad: Automatic 'Gradient'-Based Optimization of LLM Prompts and Code](https://arxiv.org/abs/2406.07496) — Yuksekgonul et al. paper introducing textual backpropagation using natural language loss feedback.

### 🧪 Practice

- [DSPy Optimizer Colab Walkthrough](https://dspy-docs.vercel.app/docs/quick-start/minimal-example) — Compile a prompt module with `BootstrapFewShotWithRandomSearch` on GSM8k in 15 minutes.

### 🛠️ Projects

- [Automated System Prompt Optimization Pipeline](https://github.com/stanfordnlp/dspy) — Take a mediocre 60% accuracy prompt on a classification task and compile it with DSPy MIPROv2 to achieve >85% accuracy without writing prompt text.

## 🧭 Recommended Learning Path

1. Understand why manual prompt engineering fails across model version updates.
2. Define a training dataset of 50 input-output examples and a clear metric function.
3. Wrap your task in a DSPy module (`dspy.Predict` or `dspy.ChainOfThought`).
4. Run `dspy.MIPROv2` or `BootstrapFewShot` to compile optimized instructions automatically.
5. Explore TextGrad to optimize multi-agent pipelines with text-based gradients.

## ⭐ Top 3 Resources

1. DSPy (Stanford NLP)
2. TextGrad (Automatic Textual Differentiation)
3. MIPROv2 Prompt Compiler

