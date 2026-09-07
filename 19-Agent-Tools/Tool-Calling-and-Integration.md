# Tool Calling & Integration

> Tool Calling connects foundation models to external functions, web APIs, and system services via structured JSON schemas and automated schema binding.

## 🎯 What to Learn

- OpenAI and Anthropic structured function-calling specifications
- Pydantic type-validated tool schemas in Python
- Universal tool integration platforms: Composio, Toolhouse, and Gorilla
- Error handling, schema validation failures, and automatic retry prompts
- Toolformer: Language models teaching themselves when and which APIs to call

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Composio: Tooling Infrastructure for AI Agents](https://composio.dev/)
  - Type: Official Platform & SDK
  - Language: English
  - Level: Intermediate
  - Why recommended: Composio provides 250+ pre-built, authenticated tool integrations (GitHub, Slack, Jira, Gmail) for LangChain, CrewAI, AutoGen, and custom Python agents.

### 📖 Documentation & References

- [Composio Documentation](https://docs.composio.dev/) — Guides on integrating authenticated SaaS tools and action spaces into AI agents.
- [Gorilla OpenFunctions Documentation](https://gorilla.cs.berkeley.edu/) — Berkeley research and models specialized in calling thousands of real-world APIs.
- [PydanticAI Function Tools](https://ai.pydantic.dev/tools/) — Type-safe tool definition using native Python functions and Pydantic models.

### 🎓 Courses

- [Functions, Tools and Agents with LangChain (DeepLearning.AI)](https://www.deeplearning.ai/short-courses/functions-tools-agents-langchain/) — Taught by Harrison Chase on function calling and structured outputs.

### ▶️ YouTube — English

- [Composio: Video Guides & Tutorials](https://www.youtube.com/@Composio)
  - Channel: Composio
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Practical walkthrough connecting LangGraph agents to GitHub and Gmail with automated OAuth.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [API Design Patterns](https://www.manning.com/books/api-design-patterns) — JJ Geewax guide to designing robust, predictable REST and RPC interfaces for programmatic consumption.

### 💻 GitHub / Implementations

- [ComposioHQ/composio](https://github.com/ComposioHQ/composio) — Composio powers 250+ tools for AI agents and LLMs to interact with external apps.
- [ShishirPatil/gorilla](https://github.com/ShishirPatil/gorilla) — An open-source repository for Gorilla: An API store for LLMs by UC Berkeley.

## 📄 Foundational Papers

- [Toolformer: Language Models Can Teach Themselves to Use Tools](https://arxiv.org/abs/2302.04761) — Schick et al. (Meta AI 2023) seminal paper demonstrating self-supervised learning of API calls.
- [Gorilla: Large Language Model Connected with Massive APIs](https://arxiv.org/abs/2305.15334) — Patil et al. (UC Berkeley 2023) introducing retrieval-aware fine-tuning for API calling.

### 🧪 Practice

- [Gorilla API Calling Benchmarks](https://gorilla.cs.berkeley.edu/leaderboard.html) — Explore how models perform on complex, nested API arguments and REST schemas.

### 🛠️ Projects

- [Automated GitHub Issue Triager & PR Generator](https://docs.composio.dev/) — Build an agent using Composio tools that reads new GitHub issues, searches code, writes fixes, and creates pull requests.

## 🧭 Recommended Learning Path

1. Learn JSON Schema basics and how LLMs generate arguments conforming to strict schemas.
2. Implement a custom tool in Python and register it with an OpenAI or Anthropic model.
3. Handle validation errors gracefully by returning error strings back into the context window.
4. Use Composio to handle OAuth2 authentication for third-party platforms (Slack, Notion).
5. Evaluate function-calling accuracy using Gorilla benchmarks.

## ⭐ Top 3 Resources

1. Composio (composio.dev)
2. Gorilla (UC Berkeley)
3. Toolformer Paper (Meta AI)

