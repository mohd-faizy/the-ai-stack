# Tool & Function Calling Standards

> Tool and function calling standards formalize the syntax, schema validation rules, and error return formats that enable models to reliably invoke structured software APIs.

## 🎯 What to Learn

- JSON Schema specifications (Draft 7 / 2020-12) for tool argument definition
- OpenAI Tools API: `tools` array, `tool_choice`, and parallel tool calling
- Anthropic Tool Use API: input schema constraints and prompt caching with tools
- Gorilla OpenFunctions and ToolBench evaluation standards
- Structured outputs and constrained decoding for zero-error schema adherence

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OpenAI Function Calling Guide](https://platform.openai.com/docs/guides/function-calling)
  - Type: Official Guide & Specification
  - Language: English
  - Level: Intermediate
  - Why recommended: OpenAI established the ubiquitous industry standard for function calling, providing strict mode schema validation, parallel tool execution, and JSON Schema compatibility.

### 📖 Documentation & References

- [OpenAI Function Calling Docs](https://platform.openai.com/docs/guides/function-calling) — Complete guide on function calling, strict mode, and parallel tool calling.
- [Anthropic Tool Use Docs](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — Official guide to defining and handling tools with Claude 3.5 Sonnet.
- [Gorilla OpenFunctions](https://gorilla.cs.berkeley.edu/) — Berkeley research on standardized function calling for open-source models.

### 🎓 Courses

- [Building Systems with the ChatGPT API (DeepLearning.AI)](https://www.deeplearning.ai/) — Foundational short course covering function calling and structured outputs.

### ▶️ YouTube — English

- [LangChain: Video Guides & Tutorials](https://www.youtube.com/@LangChain)
  - Channel: LangChain
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Deep dive into strict JSON schema validation, tool definitions, and parallel execution.

### ▶️ YouTube — Hindi / Hinglish

- [Model Context Protocol (MCP) in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_Rmva_oZ9F4ayUu9qcWgF7Fyc0)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Comprehensive explanation of MCP client-server architecture, tool exposure, and resources.


### 📚 Books

- [JSON Schema in Action](https://www.manning.com/) — Comprehensive guide to defining, validating, and structuring complex JSON schemas.

### 💻 GitHub / Implementations

- [ShishirPatil/gorilla](https://github.com/ShishirPatil/gorilla) — Open-source Gorilla models and benchmarks for API and function calling.
- [OpenBMB/ToolBench](https://github.com/OpenBMB/ToolBench) — Large-scale benchmark and instruction dataset for tool-use and function-calling.

## 📄 Foundational Papers

- [Gorilla: Large Language Model Connected with Massive APIs](https://arxiv.org/abs/2305.15334) — Patil et al. (UC Berkeley 2023) seminal paper on function calling across thousands of APIs.
- [ToolBench: An Open Platform for Training and Evaluating LLMs for Tool Use](https://arxiv.org/abs/2307.16789) — Qin et al. (2023) evaluating 16,000+ real-world REST APIs across multi-step execution.

### 🧪 Practice

- [OpenAI Playground (Function Calling Mode)](https://platform.openai.com/playground) — Interactively define JSON schemas and test model tool calls in the browser.

### 🛠️ Projects

- [Strict Schema Financial Transaction Validator](https://platform.openai.com/docs/guides/function-calling) — Build an API router that uses strict JSON schema mode to guarantee that monetary transfers and account IDs are never malformed.

## 🧭 Recommended Learning Path

1. Master JSON Schema: types, required properties, enums, and description strings.
2. Configure an API request with `tools` and `tool_choice='auto'` vs `tool_choice='required'`.
3. Enable OpenAI Strict Mode (`strict: true`) to ensure 100% adherence to defined schemas.
4. Implement parallel tool execution: parse multiple tool calls from a single model response and execute them concurrently.
5. Evaluate function-calling reliability on edge cases with ToolBench.

## ⭐ Top 3 Resources

1. OpenAI Function Calling Guide
2. Anthropic Tool Use Guide
3. Gorilla (UC Berkeley)

