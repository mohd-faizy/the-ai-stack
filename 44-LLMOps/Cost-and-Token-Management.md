# Cost & Token Management

> API proxies, routing gateways, semantic caching, and token budget management systems that reduce operational expenses and prevent rate limits.

## 🎯 What to Learn

- LiteLLM: Universal proxy calling 100+ LLMs using OpenAI format with load balancing, failovers, and budget controls
- OpenRouter: Unified routing API providing access to dozens of models with competitive pricing and fallbacks
- Semantic caching: Using vector databases (Redis, GPTCache) to cache semantic queries and eliminate redundant LLM calls
- Dynamic model cascading: Routing simple queries to cheap models (GPT-4o mini, Haiku) and hard queries to frontier models
- Token budget tracking: Enforcing user-level and team-level spending limits with automated key revocation
- Managing rate limits: Exponential backoff, jitter, and automatic provider failover

## 📚 Best Learning Resources

### 🥇 Best Overall

- [LiteLLM (BerriAI)](https://github.com/BerriAI/litellm)
  - Type: LLM Gateway & Proxy
  - Language: English
  - Level: Beginner
  - Why recommended: The definitive open-source LLM proxy and SDK, allowing developers to call OpenAI, Anthropic, Bedrock, Vertex, and Ollama using standard OpenAI input/output formatting with built-in load balancing and cost tracking.

### 🎓 Courses

- [DeepLearning.AI: Building Systems with the ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Covers token usage optimization, cost calculation, and prompt minimization.

### ▶️ YouTube — English

- [Prompt Engineering / BerriAI: Video Guides & Tutorials](https://www.youtube.com/@PromptEngineering)
  - Channel: Prompt Engineering / BerriAI
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Complete walkthrough setting up LiteLLM Proxy in Docker to manage API keys, track team spend, and set fallbacks.

### ▶️ YouTube — Hindi / Hinglish

- [MLOps & LLMOps Pipeline Architecture in Hindi](https://www.youtube.com/playlist?list=PLZoTAELRMXVOjS7KXQK3DAj7ER6LT2fEO)
  - Channel: Krish Naik
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Intermediate
  - Why: Hands-on production deployment, monitoring, and lifecycle management for models in Hindi.


### 📚 Books

- [Cloud FinOps by J.R. Storment and Mike Fuller (O'Reilly)](https://www.oreilly.com/library/view/cloud-finops-2nd/9781098151904/) — Principles of collaborative cloud financial management applicable to AI infrastructure.

### 💻 GitHub / Implementations

- [LiteLLM](https://github.com/BerriAI/litellm) — Call 100+ LLM APIs in OpenAI format.
- [OpenRouter](https://github.com/OpenRouterTeam) — Unified API for multiple LLMs.
- [AI Gateway](https://github.com/Portkey-AI/gateway) — Blazing fast AI gateway by Portkey.
- [Martian](https://github.com/withmartian/routerbench) — Intelligent LLM routing.

### 🧪 Practice

- [Deploy LiteLLM Proxy Locally](https://docs.litellm.ai/docs/proxy/quick_start) — Launch LiteLLM Proxy in Docker and test multi-model routing in 5 minutes.

### 🛠️ Projects

- [Enterprise Multi-Model Gateway](https://github.com/BerriAI/litellm) — Deploy LiteLLM with PostgreSQL to issue virtual API keys with team-specific monthly token budgets and automated failovers.

## 🧭 Recommended Learning Path

1. Understand LLM billing: Input tokens vs Output tokens, and reasoning tokens.
2. Integrate LiteLLM Python SDK to unify provider API calls.
3. Deploy LiteLLM Proxy to load balance across multiple OpenAI/Anthropic keys.
4. Implement semantic caching with Redis to achieve 30-50% cost reductions on repetitive queries.
5. Configure fallback chains: Primary model -> Secondary model -> Local model.

## ⭐ Top 3 Resources

1. LiteLLM (BerriAI)
2. OpenRouter (Unified LLM API Marketplace)
3. GPTCache (Semantic Caching Library)

