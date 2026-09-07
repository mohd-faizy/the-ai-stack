# LLM Provider SDKs

> Official client software development kits for major foundation model API providers across Python, TypeScript, and Go.

## 🎯 What to Learn

- Official SDK ecosystems: `openai`, `anthropic`, `google-genai`, `mistralai`, `cohere`, and `groq`
- Streaming tokens via async iterators: Handling chunks, deltas, and usage metadata
- Function and tool calling conventions: Passing JSON schemas and handling tool call arguments
- Handling network errors: Automatic retries, rate limits (HTTP 429), and connection timeouts
- Structured outputs: Using Pydantic models with `client.beta.chat.completions.parse()`
- Groq LPU acceleration: Accessing open-weights models at 500+ tokens per second via Groq SDK

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OpenAI Python & TypeScript SDK](https://github.com/openai/openai-python)
  - Type: Industry Client Standard
  - Language: Python / TypeScript
  - Level: Beginner
  - Why recommended: The de-facto standard API format copied by nearly every AI inference provider (vLLM, Ollama, Groq, Together, DeepSeek), featuring strict type annotations and built-in async support.

### 🎓 Courses

- [DeepLearning.AI: Building Systems with the ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Hands-on instruction on using official client SDKs for real-world applications.

### ▶️ YouTube — English

- [Prompt Engineering / Dave Ebbelaar: Video Guides & Tutorials](https://www.youtube.com/@PromptEngineering)
  - Channel: Prompt Engineering / Dave Ebbelaar
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough of asynchronous streaming, Pydantic structured parsing, and tool execution.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Developing Apps with GPT-4 and ChatGPT by Olivier Caelen and Marie-Alice Blete (O'Reilly)](https://www.oreilly.com/library/view/developing-apps-with/9781098152475/) — Comprehensive guide to writing production code against LLM APIs.

### 💻 GitHub / Implementations

- [OpenAI Python](https://github.com/openai/openai-python) — Official OpenAI SDK.
- [Anthropic SDK](https://github.com/anthropics/anthropic-sdk-python) — Official Anthropic SDK.
- [Google GenAI SDK](https://github.com/googleapis/python-genai) — Gemini API SDK.
- [Hugging Face Hub](https://github.com/huggingface/huggingface_hub) — Hub API client.
- [Cohere SDK](https://github.com/cohere-ai/cohere-python) — Cohere API SDK.
- [Mistral Client](https://github.com/mistralai/client-python) — Mistral API SDK.
- [Together AI](https://github.com/togethercomputer/together-python) — Together AI SDK.
- [Groq](https://github.com/groq/groq-python) — Groq API SDK.
- [Replicate](https://github.com/replicate/replicate-python) — Replicate API SDK.

### 🧪 Practice

- [OpenAI Quickstart Script](https://github.com/openai/openai-python#usage) — Run your first streaming chat completion script in 5 lines of Python.

### 🛠️ Projects

- [Multi-Model Fallback Client](https://github.com/openai/openai-python) — Write a resilient wrapper that queries Claude 3.5 Sonnet first, automatically falling back to GPT-4o on rate limit exceptions.

## 🧭 Recommended Learning Path

1. Understand the OpenAI `/v1/chat/completions` request and response JSON schema.
2. Write asynchronous streaming calls with `AsyncOpenAI` in Python.
3. Enforce guaranteed JSON outputs using Pydantic schemas.
4. Explore the Anthropic SDK to implement prompt caching.
5. Use Groq's SDK for ultra-fast (500 tok/sec) conversational execution.

## ⭐ Top 3 Resources

1. OpenAI Python SDK
2. Anthropic Python SDK
3. Groq Python SDK

