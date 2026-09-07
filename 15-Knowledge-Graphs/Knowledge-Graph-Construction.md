# Knowledge Graph Construction

> Constructing structured Knowledge Graphs from unstructured textual corpora through entity recognition, relation extraction, ontology alignment, and entity resolution.

## 🎯 What to Learn

- The Information Extraction pipeline: Entity Extraction (NER), Relation Extraction (RE), and Entity Resolution
- Subject-Predicate-Object (SPO) semantic triples: formatting facts into machine-readable assertions
- Ontology engineering: defining schema classes, hierarchies, constraints, and valid relationship predicates
- LLM-driven Knowledge Graph extraction: using instruction-tuned models with structured JSON schemas to parse text
- Entity resolution & deduplication: merging different textual mentions ('IBM', 'International Business Machines') to canonical node IDs
- Knowledge Graph Embedding models: TransE, RotatE, and ComplEx for link prediction and knowledge graph completion

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Microsoft GraphRAG Knowledge Graph Extractor](https://github.com/microsoft/graphrag)
  - Type: Framework & Architecture Guide
  - Language: English
  - Level: Intermediate
  - Why recommended: Microsoft GraphRAG demonstrates the state of the art in using Large Language Models to extract comprehensive entity-relation networks, claims, and community structures from raw text.

### 📖 Documentation & References

- [LangChain Graph Construction Guide](https://python.langchain.com/docs/how_to/graph_constructing/) — Tutorial on extracting knowledge graphs from text using LLMs and storing them directly in Neo4j.
- [LlamaIndex Knowledge Graph Index](https://docs.llamaindex.ai/en/stable/examples/index_structs/knowledge_graph/KnowledgeGraphIndex/) — Automated extraction and indexing of triples from text documents.

### 🎓 Courses

- [Stanford CS520: Knowledge Graphs](https://web.stanford.edu/class/cs520/) — Seminar course covering knowledge engineering, ontology matching, and enterprise knowledge graphs.

### ▶️ YouTube — English

- [Neo4j: Video Guides & Tutorials](https://www.youtube.com/@neo4j)
  - Channel: Neo4j
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Step-by-step walkthrough extracting entities and relationships from text using OpenAI function calling into Neo4j.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Knowledge Graphs: Methodology, Tools and Selected Use Cases by Fensel et al.](https://link.springer.com/book/10.1007/978-3-030-37439-6) — Comprehensive textbook on knowledge graph creation, curation, and deployment.

### 💻 GitHub / Implementations

- [spaCy](https://github.com/explosion/spaCy) — Entity and relation extraction.
- [DeepKE](https://github.com/zjunlp/DeepKE) — Knowledge extraction toolkit.
- [OpenIE](https://github.com/dair-iitd/OpenIE-standalone) — Open information extraction.
- [Graphiti](https://github.com/getzep/graphiti) — Build temporal knowledge graphs from unstructured data.

### 🧪 Practice

- [Wikidata Query Service (SPARQL)](https://query.wikidata.org/) — Explore the world's largest open collaborative knowledge graph with interactive graph queries.

### 🛠️ Projects

- [Automated Medical Literature Knowledge Graph Extractor](https://neo4j.com/developer/genai-ecosystem/) — Parse 1,000 PubMed clinical trial abstracts into a structured knowledge graph of diseases, drugs, and symptom relationships.

## 🧭 Recommended Learning Path

1. Understand the semantics of knowledge triples: `(Head Entity, Relation, Tail Entity)`.
2. Design an ontology schema defining allowed entity types and relationship verbs.
3. Use prompt engineering with structured Pydantic outputs to extract entity-relationship triples from text.
4. Apply entity resolution to deduplicate synonymous names to canonical entity identifiers.
5. Store extracted triples in a graph database and run TransE or RotatE to predict missing links.

## ⭐ Top 3 Resources

1. [Microsoft GraphRAG Knowledge Extractor](https://github.com/microsoft/graphrag) — The premier LLM-powered extraction pipeline for constructing rich knowledge networks.
2. [Neo4j GenAI LLM Graph Builder](https://github.com/neo4j-labs/llm-graph-builder) — User-friendly application for turning raw PDFs and documents into Neo4j knowledge graphs.
3. [Stanford CS520 (Knowledge Graphs)](https://web.stanford.edu/class/cs520/) — The leading university course on knowledge representation and graph engineering.

