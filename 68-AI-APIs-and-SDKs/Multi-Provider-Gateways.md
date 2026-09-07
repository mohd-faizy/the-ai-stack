# Multi-Provider Gateways

> Reverse proxies, unified routing APIs, load balancers, and observability gateways that manage access across dozens of foundation model providers.

## 🎯 What to Learn

- The multi-provider routing challenge: Provider outages, differing API schemas, rate limits, and variable pricing
- LiteLLM: Universal proxy calling 100+ LLMs using OpenAI format with load balancing, failovers, and budget controls
- OpenRouter: Global unified routing marketplace providing single-API access to frontier and open-weights models
- Cloudflare AI Gateway & Portkey: Edge AI gateways providing caching, rate limiting, and observability
- Helicone: Open-source developer gateway tracking latency, cost, and usage with one line of code change
- Implementing semantic caching and automatic retries across alternative providers

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LiteLLM](https://github.com/BerriAI/litellm)
  - Type: Multi-Provider Proxy Standard
  - Language: English
  - Level: Beginner
  - Why recommended: The leading open-source proxy and client SDK that unifies over 100 LLMs behind a standardized OpenAI interface with built-in load balancing, failovers, and spend tracking.

### 🎓 Courses

- [DeepLearning.AI: Efficient Serving and Cost Management](https://www.deeplearning.ai/short-courses/) — Covers model routing, caching, and multi-provider enterprise architectures.

### ▶️ YouTube — English

- [Prompt Engineering / BerriAI: Video Guides & Tutorials](https://www.youtube.com/@PromptEngineering)
  - Channel: Prompt Engineering / BerriAI
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Step-by-step walkthrough deploying LiteLLM Proxy in Docker, setting up fallbacks, and tracking user token spend.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Cloud FinOps by J.R. Storment and Mike Fuller (O'Reilly)](https://www.oreilly.com/library/view/cloud-finops-2nd/9781098151904/) — Foundational strategies for monitoring, allocating, and optimizing cloud compute and AI spend.

### 💻 GitHub / Implementations

- [LiteLLM](https://github.com/BerriAI/litellm) — Call 100+ LLMs with one interface.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Fast and reliable AI gateway.
- [Helicone](https://github.com/Helicone/helicone) — Open-source LLM observability and proxy.
- [OpenRouter](https://github.com/OpenRouterTeam) — Unified LLM routing.
- [LlamaIndex Router](https://github.com/run-llama/llama_index) — Multi-LLM routing.

### 🧪 Practice

- [LiteLLM Python Quickstart](https://github.com/BerriAI/litellm#quick-start) — Call Anthropic, Bedrock, and Gemini using `completion(model='...', messages=[...])` in 3 lines of Python.

### 🛠️ Projects

- [High-Availability Enterprise LLM Gateway](https://github.com/BerriAI/litellm) — Deploy a LiteLLM Proxy with Redis caching, issuing virtual API keys to internal teams with strict monthly spending limits.

## 🧭 Recommended Learning Path

1. Understand why vendor lock-in to a single LLM provider poses severe operational risks.
2. Use the LiteLLM Python SDK to unify API calls across providers.
3. Deploy LiteLLM Proxy with Docker to manage team-level keys and rate limits.
4. Configure fallback chains: Primary model -> Secondary model -> Local model.
5. Implement semantic caching with Redis to reduce redundant API calls.

## ⭐ Top 3 Resources

1. LiteLLM (Open-Source Multi-Provider Proxy)
2. OpenRouter (Unified Model Marketplace)
3. Helicone (Observability Gateway)

