# Temporal & Graph Memory

> Temporal and Graph Memory structures capture evolving relationships, temporal validity windows, and entity knowledge graphs to enable multi-hop reasoning over historical agent events.

## 🎯 What to Learn

- Knowledge graph memory architectures for AI agents (Graphiti, Zep Graph)
- Temporal reasoning: handling facts with dynamic lifespans ('Alice works at X' -> 'Alice now works at Y')
- HippoRAG: Neurobiologically inspired hippocampal indexing for continuous memory
- Entity resolution and relationship extraction from conversational text
- Graph traversal queries for multi-hop agent recall

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Graphiti: Dynamically Evolving Knowledge Graphs for AI Agents (Zep)](https://github.com/getzep/graphiti)
  - Type: Open-Source Framework & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Graphiti builds temporally-aware knowledge graphs directly from enterprise data and agent dialogues, tracking when relationships change over time.

### 📖 Documentation & References

- [Graphiti Documentation](https://getzep.github.io/graphiti/) — Architecture, temporal indexing, and hybrid graph+vector search workflows.
- [HippoRAG Documentation](https://github.com/OSU-NLP-Group/HippoRAG) — Hippocampal memory indexing framework for deep multi-hop knowledge retrieval.

### 🎓 Courses

- [Graph Neural Networks & Knowledge Graphs (Stanford CS 224W)](https://web.stanford.edu/class/cs224w/) — Stanford lectures on graph representation learning and knowledge graph reasoning.

### ▶️ YouTube — English

- [Zep AI: Video Guides & Tutorials](https://www.youtube.com/@getzep)
  - Channel: Zep AI
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Walkthrough of constructing dynamic entity graphs that maintain temporal validity for agent memory.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [Knowledge Graphs: Fundamentals and Applications](https://link.springer.com/) — Foundational theory on entity linking, RDF triples, and graph-based deductive reasoning.

### 💻 GitHub / Implementations

- [getzep/graphiti](https://github.com/getzep/graphiti) — Build dynamically updating knowledge graphs from unstructured data.
- [OSU-NLP-Group/HippoRAG](https://github.com/OSU-NLP-Group/HippoRAG) — Neurobiologically inspired long-term memory for Large Language Models.

## 📄 Foundational Papers

- [HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models](https://arxiv.org/abs/2405.14831) — Gutiérrez et al. (NeurIPS 2024) paper introducing hippocampal indexing for multi-hop recall.

### 🧪 Practice

- [Graphiti Interactive Examples](https://github.com/getzep/graphiti/tree/main/examples) — Python scripts building entity graphs from evolving conversation logs.

### 🛠️ Projects

- [Temporal Relationship Tracker for CRM Agents](https://github.com/getzep/graphiti) — Construct an agent memory graph that accurately answers historical questions: 'Where did the client work in 2022 vs today?'

## 🧭 Recommended Learning Path

1. Learn why flat vector retrieval fails on multi-hop associative queries.
2. Study the role of the biological hippocampus in memory indexing and recall.
3. Deploy Graphiti to extract entities and relationships from incoming dialogue turns.
4. Store temporal validity metadata (start_time, end_time) on graph edges.
5. Execute hybrid graph traversal and vector similarity searches to answer complex memory queries.

## ⭐ Top 3 Resources

1. Graphiti (getzep/graphiti)
2. HippoRAG (OSU-NLP-Group)
3. Stanford CS 224W (Graph Machine Learning)

