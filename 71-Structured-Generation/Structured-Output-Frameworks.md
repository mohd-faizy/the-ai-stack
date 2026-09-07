# Structured Output Frameworks

> Developer frameworks that force language models to produce guaranteed valid JSON, Pydantic objects, and structured data with zero parsing failures.

## 🎯 What to Learn

- The structured output problem: LLMs generating invalid JSON syntax, missing keys, or hallucinatory fields
- Outlines (.dottxt): High-performance library using Finite State Machines to enforce regex and JSON schemas on open models
- Instructor (Jason Liu): Production Python library wrapping OpenAI, Anthropic, and Gemini with Pydantic structured output parsing and automated retries
- Guidance (Microsoft): Interleaved generation and control library using token-level constraints and templating
- Marvin (Prefect): Self-documenting framework turning LLMs into pure Python functions with typed outputs
- LMQL (Language Model Query Language): SQL-like declarative programming language for language models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Instructor (Jason Liu)](https://github.com/jxnl/instructor)
  - Type: Structured Output Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The most popular, battle-tested Python library for structured data extraction, providing clean Pydantic integration, automated retry logic on validation errors, and universal LLM provider support.

### 🎓 Courses

- [DeepLearning.AI: Functions, Tools and Agents with LangChain](https://www.deeplearning.ai/short-courses/) — Covers structured output generation and schema-driven tool calling.

### ▶️ YouTube — English

- [Jason Liu / Weights & Biases: Video Guides & Tutorials](https://www.youtube.com/@WeightsBiases)
  - Channel: Jason Liu / Weights & Biases
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Jason Liu (creator of Instructor) explains validation hooks, error auto-healing, and Pydantic extraction patterns.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Robust Python by Patrick Viafore](https://www.oreilly.com/library/view/robust-python/9781098100650/) — Foundational guide on type systems, validation, and schemas.

### 💻 GitHub / Implementations

- [Outlines](https://github.com/dottxt-ai/outlines) — Structured generation for LLMs.
- [Guidance](https://github.com/guidance-ai/guidance) — Control language model generation.
- [LM Format Enforcer](https://github.com/noamgat/lm-format-enforcer) — Enforce output formats.
- [Instructor](https://github.com/567-labs/instructor) — Structured outputs with LLMs and Pydantic.
- [Marvin](https://github.com/PrefectHQ/marvin) — Build AI applications with structured types.
- [LMQL](https://github.com/eth-sri/lmql) — Query language for language models.

### 🧪 Practice

- [Instructor Interactive Quickstart](https://python.useinstructor.com/hub/quickstart/) — Extract structured user profiles from raw text with Pydantic in 10 lines of Python.

### 🛠️ Projects

- [Medical Record Information Extractor with Instructor](https://python.useinstructor.com/) — Build a pipeline that parses messy patient history notes and outputs strict Pydantic medical objects with automated validation rules.

## 🧭 Recommended Learning Path

1. Understand why prompting 'Return only valid JSON' fails unpredictably at scale.
2. Use Instructor with Pydantic to extract typed data with automated self-healing retries.
3. Explore Outlines for open-weights models to enforce regex and JSON with zero latency overhead.
4. Implement streaming partial JSON parsing for real-time frontend updates.
5. Incorporate custom Pydantic validators (`@field_validator`) to check business logic constraints.

## ⭐ Top 3 Resources

1. Instructor (Jason Liu / Pydantic Standard)
2. Outlines (.dottxt / FSM Constrained Decoding)
3. Guidance (Microsoft)

