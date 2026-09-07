# Code Execution Sandboxes

> Code execution sandboxes provide isolated, ephemeral virtual machines and containers where agents can execute arbitrary Python scripts, shell commands, and data processing safely.

## 🎯 What to Learn

- Sub-second microVM initialization and container virtualization (Firecracker, gVisor)
- Kernel isolation, system call filtering (seccomp), and namespace virtualization
- E2B Python SDK and interactive Jupyter kernel sessions
- CodeSandbox SDK and browser-compatible sandbox runtimes
- State preservation and persistent filesystem checkpoints

## 📚 Best Learning Resources

### 🥇 Best Overall

- [E2B: Sandboxed Cloud Environments for AI Agents](https://e2b.dev/)
  - Type: Official Platform & SDK
  - Language: English
  - Level: Intermediate
  - Why recommended: E2B is the leading open-source cloud runtime designed specifically for AI code execution, spinning up secure, isolated microVMs in sub-second times.

### 📖 Documentation & References

- [E2B Official Documentation](https://e2b.dev/docs) — Guides on spawning sandboxes, executing code, streaming stdout/stderr, and rendering charts.
- [CodeSandbox SDK Docs](https://codesandbox.io/docs/sdk) — Programmatic cloud development environments and container execution SDK.

### 🎓 Courses

- [Securing AI Agents (DeepLearning.AI)](https://www.deeplearning.ai/) — Techniques for isolating agent executions and preventing prompt injection code attacks.

### ▶️ YouTube — English

- [E2B: Video Guides & Tutorials](https://www.youtube.com/@e2b-dev)
  - Channel: E2B
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Hands-on tutorial running Python code, handling exceptions, and downloading generated plots securely.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Container Security](https://www.oreilly.com/library/view/container-security/9781492056690/) — Liz Rice foundational O'Reilly guide on Linux namespaces, cgroups, and virtualization security.

### 💻 GitHub / Implementations

- [e2b-dev/E2B](https://github.com/e2b-dev/E2B) — Secure sandboxes for AI agents. Open-source cloud environment for running untrusted LLM code.
- [codesandbox/codesandbox-client](https://github.com/codesandbox/codesandbox-client) — An online code editor tailored for web application development.

## 📄 Foundational Papers

- [Firecracker: Lightweight Virtualization for Serverless Applications](https://www.usenix.org/conference/nsdi20/presentation/agache) — Agache et al. (NSDI 2020) seminal paper on microVM virtualization powering modern agent sandboxes.

### 🧪 Practice

- [E2B Code Interpreter Cookbook](https://github.com/e2b-dev/e2b-cookbook) — Interactive examples of financial modeling, image manipulation, and chart generation in sandboxes.

### 🛠️ Projects

- [Safe Multi-Tenant AI Coding Assistant](https://e2b.dev/docs) — Build a web app where users can ask an AI to write and test Python algorithms, executing code inside isolated E2B microVMs without host exposure.

## 🧭 Recommended Learning Path

1. Learn the severe security hazards of `exec()` and `subprocess.run()` on host machines.
2. Study microVM architecture (Firecracker) vs. process containers (Docker/gVisor).
3. Spawn your first E2B Python sandbox using the `@e2b/code-interpreter` SDK.
4. Implement bidirectional file transfers between host and sandbox.
5. Add strict network egress firewall rules to prevent agents from exfiltrating environment variables.

## ⭐ Top 3 Resources

1. E2B (e2b.dev)
2. CodeSandbox SDK
3. Container Security (Liz Rice)

