# 57 - AI Databases

> High-dimensional vector storage engines, graph databases, Natural Language to SQL (Text-to-SQL) translation systems, and time-series databases.

## 🌐 Overview & Architectural Importance

Traditional relational databases were built for scalar rows and exact SQL queries. AI workloads require specialized database engines—storing billion-scale high-dimensional embeddings (Qdrant, Milvus), modeling interconnected knowledge graphs (Neo4j), and translating natural language into complex multi-table SQL queries.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Vector Databases**](Vector-Databases.md) — Qdrant, Milvus, Weaviate, Chroma, LanceDB, pgvector, and approximate nearest neighbors.
* [**Graph Databases**](Graph-Databases.md) — Neo4j, Memgraph, ArangoDB, Cypher query language, and Graph RAG.
* [**Text-to-SQL**](Text-to-SQL.md) — Vanna, DB-GPT, DIN-SQL, sqlcoder, and natural language database querying.
* [**Time Series Databases**](Time-Series-Databases.md) — TimescaleDB, InfluxDB, QuestDB, and high-throughput time-series analytics.

## 🧭 Recommended Study Sequence

1. **Vector Storage Mechanics**: HNSW graphs, Inverted File Index (IVF), and scalar/product quantization.
2. **Graph Database Modeling**: Nodes, edges, properties, and Cypher query execution with Neo4j.
3. **Text-to-SQL Architectures**: Schema linking, few-shot prompting, and execution-guided correction with Vanna.
4. **Time Series Ingestion**: Hypertable partitioning, continuous aggregates, and metrics compression.
5. **Hybrid AI Retrieval**: Fusing BM25 keyword search, vector similarity, and graph traversals.

## 🗝️ Foundational Prerequisites

- Relational database principles (SQL, indexes, B-trees, normalization).
- Vector similarity metrics (Cosine, Euclidean, Dot Product).
- Graph theory (nodes, directed edges, adjacency matrices).

---

[← Back to Main Repository](../README.md)
