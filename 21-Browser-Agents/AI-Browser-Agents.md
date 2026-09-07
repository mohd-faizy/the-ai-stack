# AI Browser Agents

> AI Browser Agents combine vision-language models with browser automation to navigate the open web, click buttons, extract information, and complete complex multi-page tasks autonomously.

## 🎯 What to Learn

- DOM representation strategies: HTML pruning vs. Accessibility Tree (AXTree) vs. Set-of-Marks (SoM)
- browser-use: Open-source web agent framework connecting LLMs to browser sessions
- Stagehand (Browserbase): AI web automation framework built on Playwright
- Visual grounding: bounding box detection and coordinate-based clicking
- WebArena and VisualWebArena benchmarks for web agent evaluation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [browser-use: Make Websites Accessible for AI Agents](https://browser-use.com/)
  - Type: Official Framework & Docs
  - Language: English
  - Level: Intermediate
  - Why recommended: browser-use is the explosive open-source library that connects vision models to browsers, using interactive element numbering, screenshots, and Playwright to browse any website autonomously.

### 📖 Documentation & References

- [browser-use Documentation](https://docs.browser-use.com/) — Comprehensive guides on agents, controllers, custom actions, and vision models.
- [Stagehand Documentation](https://stagehand.dev/docs) — Playwright-based AI web browsing framework with `act()`, `extract()`, and `observe()`.
- [Skyvern Documentation](https://docs.skyvern.com/) — Automate browser workflows using computer vision and LLMs.

### 🎓 Courses

- [Building Web Browsing Agents (Hugging Face Agents Course)](https://huggingface.co/learn/agents-course/unit3/introduction) — Tutorial on building multimodal web agents and evaluating task success.

### ▶️ YouTube — English

- [Matthew Berman: Video Guides & Tutorials](https://www.youtube.com/@MatthewBerman)
  - Channel: Matthew Berman
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Hands-on setup running browser-use with GPT-4o and local models to automate flight searches and form submissions.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Computer Vision and Visual Agents](https://www.oreilly.com/) — Foundational techniques in multimodal perception, object localization, and visual interaction.

### 💻 GitHub / Implementations

- [browser-use/browser-use](https://github.com/browser-use/browser-use) — Make websites accessible for AI agents. Open-source web browsing library.
- [browserbase/stagehand](https://github.com/browserbase/stagehand) — An open source, AI-powered browser automation framework built on Playwright.
- [Skyvern-AI/skyvern](https://github.com/Skyvern-AI/skyvern) — Automate browser-based workflows with LLMs and Computer Vision.

## 📄 Foundational Papers

- [WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models](https://arxiv.org/abs/2401.13919) — He et al. (2024) landmark paper demonstrating Set-of-Marks visual grounding for web navigation.
- [Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V](https://arxiv.org/abs/2310.11441) — Yang et al. (Microsoft 2023) introducing numbered visual markers on actionable elements.

### 🧪 Practice

- [browser-use Quickstart Examples](https://github.com/browser-use/browser-use/tree/main/examples) — Run ready-made scripts for flight booking, shopping cart checkout, and research synthesis.

### 🛠️ Projects

- [Autonomous Competitor Pricing Monitor](https://docs.browser-use.com/) — Build a browser-use agent that navigates e-commerce portals, searches competitor product lines, extracts live pricing, and exports reports.

## 🧭 Recommended Learning Path

1. Learn why passing raw HTML to LLMs fails (token limits, dynamic JavaScript).
2. Study the Set-of-Marks (SoM) paradigm: overlaying numeric bounding tags onto web screenshots.
3. Install browser-use and execute a multi-step task (e.g. search Wikipedia and summarize a table).
4. Implement Stagehand's `extract()` function to parse structured data with Pydantic schemas.
5. Evaluate agent reliability on WebArena benchmark tasks.

## ⭐ Top 3 Resources

1. browser-use (browser-use/browser-use)
2. Stagehand (browserbase/stagehand)
3. WebVoyager Paper (He et al.)

