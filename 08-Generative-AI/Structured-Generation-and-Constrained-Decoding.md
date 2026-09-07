# Structured Generation & Constrained Decoding

> Structured generation and constrained decoding force language model token outputs to adhere strictly to predefined schemas (JSON, Pydantic, regex, CFG grammars) with mathematical guarantees.

## 🎯 What to Learn

- The problem of JSON parsing errors, hallucinations, and markdown wrapping in LLM outputs
- Constrained decoding mechanics: masking invalid token logits at every autoregressive sampling step
- Finite State Machines (FSM) for regular expression enforcement
- Context-Free Grammars (CFG) and pushdown automata for arbitrary grammar validation (JSON, SQL, Python)
- Framework comparisons: Outlines (FSM-based logits masking), Guidance, and Instructor (Pydantic validation + retries)
- Performance implications: why logit masking incurs zero LLM inference retry latency
- Native structured outputs: OpenAI Structured Outputs (`json_schema` with strict=True) and vLLM guided decoding

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Outlines: Structured Text Generation (dottxt)](https://github.com/dottxt-ai/outlines)
  - Type: Library & Documentation
  - Language: English
  - Level: Intermediate
  - Why recommended: Outlines pioneered compile-time Finite State Machine (FSM) construction over model vocabularies, guaranteeing 100% valid JSON, regex, and Pydantic outputs with zero retry latency.

### 📖 Documentation & References

- [Outlines Documentation](https://dottxt-ai.github.io/outlines/) — Comprehensive documentation covering regex constraints, Pydantic schemas, and vLLM integration.
- [Instructor Documentation](https://python.useinstructor.com/) — Structured data extraction library built on top of Pydantic for OpenAI, Anthropic, and local LLMs.
- [Guidance Documentation (Microsoft)](https://github.com/guidance-ai/guidance) — A language for controlling large language models with interleaved generation, selection, and constraints.

### 🎓 Courses

- [DeepLearning.AI: Structured Generation with Outlines](https://www.deeplearning.ai/short-courses/) — Hands-on tutorial building robust agentic pipelines using constrained generation.

### ▶️ YouTube — English

- [dottxt: Video Guides & Tutorials (dottxt)](https://www.youtube.com/results?search_query=dottxt%20dottxt%3A%20Video%20Guides%20%26%20Tutorials)
  - Channel: dottxt
  - Language: English
  - Type: Architecture Deep Dive
  - Level: Intermediate
  - Why: Visual explanation of how Outlines indexes tokenizer vocabularies into regex state machines to mask invalid logits.

### ▶️ YouTube — Hindi / Hinglish

- [Generative AI using LangChain in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Practical Hindi course on generative AI, prompt engineering, chains, and LLM application development.


### 📚 Books

- [Efficient Guided Generation for Large Language Models (Willard & Louf)](https://arxiv.org/abs/2307.09702) — The foundational research paper introducing FSM-guided vocabulary indexing.

### 💻 GitHub / Implementations

- [Outlines](https://github.com/dottxt-ai/outlines) — Fast and reliable structured text generation via finite-state machines.
- [Instructor](https://github.com/567-labs/instructor) — Structured outputs with LLMs powered by Pydantic and type validations.
- [Guidance](https://github.com/guidance-ai/guidance) — Constrained language model generation and interleaved control logic.
- [LMQL](https://github.com/eth-sri/lmql) — Programming language and query syntax for constrained LLM interactions.
- [Jsonformer](https://github.com/1rgs/jsonformer) — Constrained JSON decoding for language models.
- [XGrammar](https://github.com/mlc-ai/xgrammar) — High-performance context-free grammar-guided decoding engine.
- [BAML](https://github.com/BoundaryML/baml) — Domain-specific language for structured prompt engineering and LLM extraction.

### 🧪 Practice

- [Instructor Interactive Cookbooks](https://python.useinstructor.com/examples/) — Code recipes for table extraction, classification, and recursive schema parsing.

### 🛠️ Projects

- [Deterministic SQL Query Generator with Grammar Constraints](https://github.com/dottxt-ai/outlines) — Build an LLM text-to-SQL API that enforces valid SQL syntax using context-free grammars, making syntax errors impossible.

## 🧭 Recommended Learning Path

1. Understand why naive prompting ('respond only in JSON') fails unpredictably in production.
2. Study logit masking: modifying logits before softmax so disallowed tokens receive -infinity.
3. Convert a Pydantic schema into a JSON Schema and compile it into an Outlines FSM.
4. Deploy Outlines with vLLM for high-throughput constrained serving.
5. Compare Outlines (logit masking) against Instructor (Pydantic validation with automated corrective retries).

## ⭐ Top 3 Resources

1. [Outlines](https://github.com/dottxt-ai/outlines) — The gold-standard library for deterministic, zero-latency constrained decoding.
2. [Instructor](https://github.com/jxnl/instructor) — The most developer-friendly Pydantic data extraction library for production LLMs.
3. [Guidance (Microsoft)](https://github.com/guidance-ai/guidance) — Powerful grammar-based framework for interleaved prompt generation and control.

