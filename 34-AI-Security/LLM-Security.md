# LLM Security

> Cybersecurity practices, threat modeling, and defensive architectures to protect large language model applications from systemic exploitation and data breach.

## 🎯 What to Learn

- OWASP Top 10 for Large Language Model Applications (LLM01: Prompt Injection to LLM10: Model Theft)
- Indirect prompt injection via retrieved documents, emails, and web pages
- Insecure output handling leading to Cross-Site Scripting (XSS) and Remote Code Execution (RCE)
- Model inversion and training data extraction attacks
- Defense-in-depth: Dual LLM architectures, privilege separation, and sandboxed tool execution
- Vulnerability scanning with Garak, Vigil, and Protect AI LLM Guard

## 📚 Best Learning Resources

### 🥇 Best Overall

- [OWASP Top 10 for Large Language Model Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
  - Type: Security Standard & Framework
  - Language: English
  - Level: Intermediate
  - Why recommended: The definitive global cybersecurity standard outlining the most critical security vulnerabilities found in production LLM applications.

### 🎓 Courses

- [DeepLearning.AI: LLM Security and Safety](https://www.deeplearning.ai/short-courses/) — Overview of threat vectors, prompt injection mechanics, and defensive architectures.

### ▶️ YouTube — English

- [Black Hat / DEF CON: Video Guides & Tutorials](https://www.youtube.com/@BlackHatOfficialYT)
  - Channel: Black Hat / DEF CON
  - Language: English
  - Type: Conference Talk
  - Level: Intermediate
  - Why: Real-world demonstrations of exploiting LLMs via indirect injection, SSRF, and data exfiltration.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Security and Privacy in Machine Learning by Nicolas Papernot et al.](https://www.cambridge.org/) — Foundational academic work on attacking and defending machine learning systems.

### 💻 GitHub / Implementations

- [Garak](https://github.com/NVIDIA/garak) — LLM vulnerability scanner.
- [LLM Guard](https://github.com/protectai/llm-guard) — Comprehensive security toolkit.
- [NeMo Guardrails](https://github.com/NVIDIA-NeMo/Guardrails) — Programmable safety rails.
- [Vigil](https://github.com/deadbits/vigil-llm) — LLM security scanner.
- [LangKit](https://github.com/whylabs/langkit) — LLM security monitoring.

## 📄 Foundational Papers

- [Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection](https://arxiv.org/abs/2302.12173) — Seminal paper demonstrating how third-party untrusted data subverts LLM application control flow.

### 🧪 Practice

- [PortSwigger Web Security Academy: LLM Attacks](https://portswigger.net/web-security/llm-attacks) — Free interactive labs exploiting LLM vulnerabilities like indirect injection and insecure output handling.

### 🛠️ Projects

- [Secure LLM Gateway with Vigil and LLM Guard](https://github.com/deadbits/vigil-llm) — Deploy an API reverse proxy that scans requests against vector-based injection detectors before forwarding to models.

## 🧭 Recommended Learning Path

1. Study the OWASP LLM Top 10 vulnerabilities in detail.
2. Complete PortSwigger interactive LLM attack labs.
3. Implement prompt injection detection using Vigil or LLM Guard.
4. Design a dual-LLM architecture separating untrusted content processing from execution.
5. Run automated vulnerability scanning on your endpoints using Garak.

## ⭐ Top 3 Resources

1. OWASP Top 10 for LLM Applications
2. PortSwigger Web Security Academy LLM Labs
3. Protect AI LLM Guard (GitHub repository)

