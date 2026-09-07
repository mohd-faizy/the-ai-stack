# Content Safety & Moderation

> Specialized safety classifier models, content moderation APIs, and filtering architectures designed to prevent harmful, toxic, or illegal inputs and outputs.

## 🎯 What to Learn

- Classification of content risks: Hate speech, harassment, self-harm, sexual violence, and CBRN hazards
- Meta Llama Guard architecture and prompt formatting for safety classification
- Purple Llama ecosystem: CyberSecEval and safety evaluation benchmarks
- Open-source text toxicity classification with Detoxify and RoBERTa classifiers
- Latency, cost, and throughput trade-offs in moderation cascades (Fast regex -> Small SLM -> Frontier Judge)
- Privacy, PII masking, and data loss prevention (DLP) in model streams

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Meta Llama Guard (Purple Llama)](https://github.com/meta-llama/PurpleLlama)
  - Type: Safety Classifier & Tooling
  - Language: English
  - Level: Intermediate
  - Why recommended: Meta's flagship open-weights safety classifier model fine-tuned on the MLCommons taxonomy to classify prompt and response safety.

### 🎓 Courses

- [Coursera: AI Ethics and Governance (DeepLearning.AI)](https://www.coursera.org/) — Course covering AI governance frameworks, safety evaluation, and automated content moderation.

### ▶️ YouTube — English

- [Prompt Engineering / AI Jason: Video Guides & Tutorials](https://www.youtube.com/@AIJason)
  - Channel: Prompt Engineering / AI Jason
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step tutorial implementing Llama Guard to intercept unsafe user prompts and model completions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Building Responsible AI by Alex Chen (O'Reilly)](https://www.oreilly.com/) — Practical architectural designs for moderation systems, ethical evaluation, and safety guardrails.

### 💻 GitHub / Implementations

- [LlamaGuard](https://github.com/meta-llama/PurpleLlama) — Content safety classification model.
- [PurpleLlama](https://github.com/meta-llama/PurpleLlama) — Set of tools for AI safety by Meta.
- [Detoxify](https://github.com/unitaryai/detoxify) — Toxic comment classification.
- [Perspective API](https://github.com/conversationai/perspectiveapi) — Toxicity detection API.

## 📄 Foundational Papers

- [Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations](https://arxiv.org/abs/2312.06674) — Presents Meta's instruction-tuned model for evaluating conversational safety across standard risk categories.

### 🧪 Practice

- [Detoxify Online Demo](https://github.com/unitaryai/detoxify) — Classify text for toxicity, severe toxicity, obscenity, and insult in Python.

### 🛠️ Projects

- [Multi-Tier Moderation Middleware](https://github.com/meta-llama/PurpleLlama) — Build an API proxy that screens requests via regex, classifies inputs with Llama Guard, and redacts PII.

## 🧭 Recommended Learning Path

1. Map out risk categories using the MLCommons AI Safety taxonomy.
2. Integrate OpenAI Moderation API or Detoxify for low-latency input checking.
3. Deploy Llama Guard locally via Ollama or vLLM.
4. Construct custom safety taxonomy definitions and customized system prompts.
5. Benchmark the moderation pipeline for false positive rates and user experience impact.

## ⭐ Top 3 Resources

1. Meta Purple Llama & Llama Guard (GitHub & Model weights)
2. OpenAI Moderation API (Free enterprise moderation endpoint)
3. Detoxify (Unitary AI open-source toxicity classifier)

