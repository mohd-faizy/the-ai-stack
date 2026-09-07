# Deep Research & Autonomous Search Agents

> Deep research agents autonomously plan multi-query web search strategies, scrape heterogeneous sources, cross-reference evidence, and synthesize citation-backed research reports.

## 🎯 What to Learn

- Recursive query expansion and search tree planning
- Web scraping, content extraction, and noisy HTML cleaning for LLMs
- Stanford STORM architecture (perspective-guided multi-agent dialogue)
- Source verification, citation alignment, and factual consistency checking
- Search engine APIs (Tavily, Exa, Serper) and specialized agent retrieval

## 📚 Best Learning Resources

### 🥇 Best Overall

- [STORM: Synthesis of Topic Outlines through Repeated Multiperspective Questioning](https://github.com/stanford-oval/storm)
  - Type: Open-Source Research System
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Developed by Stanford University's OVAL lab, STORM generates Wikipedia-depth, multi-section research papers with verifiable citations by simulating expert-perspective interviews.

### 📖 Documentation & References

- [STORM Documentation](https://stanford-oval.github.io/storm/) — Architecture, pre-writing interview workflows, and outline generation pipelines.
- [GPT Researcher Documentation](https://docs.gptr.dev/) — Autonomous agent designed for comprehensive online research on any topic.
- [Open-DeepResearch (Hugging Face)](https://github.com/huggingface/open-deep-research) — Open-source reproduction of OpenAI's Deep Research using smolagents.

### 🎓 Courses

- [Building Knowledge-Rich AI Agents (Stanford OVAL Seminar)](https://oval.cs.stanford.edu/) — Lectures on automated research, information synthesis, and citation grounding.

### ▶️ YouTube — English

- [LangChain: Video Guides & Tutorials](https://www.youtube.com/@LangChain)
  - Channel: LangChain
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step walkthrough of building a recursive web research agent that plans queries and writes cited summaries.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Information Retrieval & Web Search](https://nlp.stanford.edu/IR-book/) — Manning, Raghavan, and Schütze foundational text on web crawling, relevance ranking, and querying.

### 💻 GitHub / Implementations

- [stanford-oval/storm](https://github.com/stanford-oval/storm) — An LLM-powered knowledge curation system that researches topics and writes full reports.
- [assafelovic/gpt-researcher](https://github.com/assafelovic/gpt-researcher) — Autonomous agent that produces objective, detailed research reports.
- [huggingface/open-deep-research](https://github.com/huggingface/open-deep-research) — Open-source Deep Research implementation using smolagents.

## 📄 Foundational Papers

- [Assisting in Writing Wikipedia-like Articles From Scratch with Large Language Models](https://arxiv.org/abs/2402.14207) — Shao et al. (Stanford OVAL 2024) foundational paper introducing the STORM multi-perspective interviewing methodology.

### 🧪 Practice

- [STORM Demo & Playground](https://storm.genie.stanford.edu/) — Interactive portal generating automated deep-dive reports across diverse domains.

### 🛠️ Projects

- [Autonomous Competitive Intelligence Agent](https://github.com/stanford-oval/storm) — Build an agent that accepts a company or industry keyword, queries Tavily, extracts financial/product signals, and compiles an executive dossier.

## 🧭 Recommended Learning Path

1. Understand the limitations of single-shot web search in LLMs (shallow coverage, hallucinated links).
2. Learn the STORM two-phase methodology: Pre-writing (interview & outline) and Writing (section drafting & citation).
3. Integrate Tavily or Exa API to execute semantic and keyword queries optimized for LLM contexts.
4. Implement section-by-section drafting with strict grounded citation insertion.
5. Deploy an autonomous research agent that outputs publication-ready Markdown reports.

## ⭐ Top 3 Resources

1. Stanford STORM (stanford-oval/storm)
2. Open-DeepResearch (Hugging Face)
3. GPT Researcher (assafelovic/gpt-researcher)

