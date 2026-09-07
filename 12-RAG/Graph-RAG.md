# Graph RAG

> Graph RAG combines vector retrieval with structured knowledge graphs to enable global corpus summarization, multi-hop relationship reasoning, and cross-document synthesis.

## 🎯 What to Learn

- Why Vector RAG fails on global questions ('What are the top 5 themes in this 10,000-page archive?')
- Microsoft GraphRAG architecture: Entity extraction, relation extraction, graph construction, community detection (Leiden), and community summaries
- Local Search vs. Global Search in Graph RAG
- Knowledge Graph construction using LLMs: Nodes, edges, claims, and covariates
- Hybrid Graph-Vector systems: combining Neo4j graph traversal with dense vector search
- LightRAG and nano-graphrag for lightweight, cost-effective graph retrieval

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Microsoft GraphRAG Documentation & Repository](https://microsoft.github.io/graphrag/)
  - Type: Open-Source System & Docs
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: Microsoft GraphRAG is the definitive open-source system that revolutionized knowledge-dense retrieval, extracting hierarchical entity communities to synthesize answers across entire corpora.

### 📖 Documentation & References

- [Microsoft GraphRAG Documentation](https://microsoft.github.io/graphrag/) — Complete guide covering data pipeline configuration, indexing, local search, and global search.
- [Neo4j GenAI Ecosystem Docs](https://neo4j.com/developer/genai-ecosystem/) — Guide on building Graph RAG systems combining Neo4j graph databases and vector indexes.

### 🎓 Courses

- [DeepLearning.AI: Knowledge Graphs for RAG (Neo4j)](https://www.deeplearning.ai/short-courses/) — Learn to build Graph RAG applications combining structured knowledge graphs and vector databases.

### ▶️ YouTube — English

- [Intro to GraphRAG: Enhancing LLM Reasoning with Knowledge Graphs](https://www.youtube.com/@MicrosoftReactor)
  - Channel: Microsoft Reactor
  - Language: English
  - Type: Channel / Tech Talks
  - Level: Intermediate
  - Why: Official Microsoft presentations explaining how GraphRAG extracts communities and generates hierarchical summaries for global queries.
- [GraphRAG with Knowledge Graphs and GenAI](https://www.youtube.com/@neo4j)
  - Channel: Neo4j
  - Language: English
  - Type: Channel / Tutorials
  - Level: Intermediate
  - Why: Technical tutorials on structuring knowledge graphs and traversing entity relations for multi-hop question answering.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.

### 📚 Books

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization (Edge et al. - Microsoft Research)](https://arxiv.org/abs/2404.16130) — The landmark research paper introducing Microsoft GraphRAG.

### 💻 GitHub / Implementations

- [microsoft/graphrag](https://github.com/microsoft/graphrag) — A modular graph-based Retrieval-Augmented Generation (RAG) system by Microsoft Research.
- [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) — Simple and Fast Retrieval-Augmented Generation with Knowledge Graphs.
- [getzep/graphiti](https://github.com/getzep/graphiti) — Build dynamically updating knowledge graphs from unstructured text.

## 📄 Foundational Papers

- [From Local to Global: A Graph RAG Approach to Query-Focused Summarization](https://arxiv.org/abs/2404.16130) — Edge et al. (Microsoft Research 2024) foundational paper establishing community-based graph summarization.

### 🧪 Practice

- [Microsoft GraphRAG Get Started Guide](https://microsoft.github.io/graphrag/get_started/) — Initialize a GraphRAG project, configure settings, run indexing, and execute global search queries.

### 🛠️ Projects

- [Global Corpus Summarizer on Enterprise Disclosures](https://microsoft.github.io/graphrag/) — Run Microsoft GraphRAG on a collection of 50 annual reports to answer high-level thematic questions that vector search completely misses.

## 🧭 Recommended Learning Path

1. Understand the fundamental limitation of vector search: inability to synthesize information across hundreds of documents without specific keyword/semantic overlap.
2. Study Microsoft GraphRAG's extraction phase: LLMs identify entities (people, organizations, places) and relationships from text chunks.
3. Learn hierarchical community detection: algorithms like Leiden group connected entities into clusters at multiple modularity levels.
4. Compare Global Search (pre-summarized community answers) vs. Local Search (entity neighborhood traversal).
5. Run GraphRAG on a domain dataset using the official Python CLI.

## ⭐ Top 3 Resources

1. Microsoft GraphRAG (microsoft/graphrag)
2. GraphRAG Landmark Paper (Edge et al.)
3. Neo4j GenAI Ecosystem (neo4j.com)

