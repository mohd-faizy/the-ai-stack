# Graph Databases

> Graph database management systems store and navigate highly connected data networks using native graph storage, index-free adjacency, and graph query languages.

## 🎯 What to Learn

- Property Graph model (Labeled Property Graphs) vs RDF Triplestores (SPARQL)
- Index-Free Adjacency: traversing millions of relationships per second without expensive SQL joins
- Cypher Query Language: `MATCH (p:Person)-[:WORKS_AT]->(c:Company) WHERE ... RETURN ...`
- Neo4j architecture: native graph storage engine, causal clustering, and vector index integration
- In-memory high-performance alternatives: Memgraph (C++ based) and NebulaGraph for massive distributed graphs
- Graph algorithms: PageRank, Betweenness Centrality, Louvain community detection, and shortest paths

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Neo4j Documentation & Developer Guides](https://neo4j.com/docs/)
  - Type: Database Platform & Documentation
  - Language: English
  - Level: Beginner to Advanced
  - Why recommended: Neo4j is the world's leading graph database, providing the gold-standard Cypher query language, enterprise clustering, Graph Data Science (GDS) library, and native vector search.

### 📖 Documentation & References

- [Neo4j Official Documentation](https://neo4j.com/docs/) — Comprehensive reference manual for Cypher syntax, administration, and Python driver integration.
- [Memgraph Documentation](https://memgraph.com/docs) — In-memory, open-source graph database compatible with Cypher, built for streaming real-time analytics in C++.
- [NebulaGraph Documentation](https://docs.nebula-graph.io/) — Open-source distributed graph database designed for handling super-large datasets with trillions of edges.

### 🎓 Courses

- [GraphAcademy by Neo4j](https://graphacademy.neo4j.com/) — Free, self-paced certification courses covering Cypher fundamentals, modeling, and Graph Data Science.

### ▶️ YouTube — English

- [Fireship: Video Guides & Tutorials](https://www.youtube.com/@Fireship)
  - Channel: Fireship
  - Language: English
  - Type: Overview
  - Level: Beginner
  - Why: Fast-paced breakdown of nodes, relationships, Cypher queries, and graph traversal vs relational joins.
- [freeCodeCamp.org: Video Guides & Tutorials](https://www.youtube.com/@freecodecamp)
  - Channel: freeCodeCamp.org
  - Language: English
  - Type: Course
  - Level: Beginner
  - Why: Comprehensive hands-on course covering Cypher syntax, constraints, and data modeling.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Graph Databases (2nd Edition) by Ian Robinson, Jim Webber, and Emil Eifrem (O'Reilly)](https://neo4j.com/graph-databases-book/) — Free comprehensive book explaining native graph architecture, modeling, and performance benefits.

### 💻 GitHub / Implementations

- [Neo4j](https://github.com/neo4j/neo4j) — Leading graph database.
- [NebulaGraph](https://github.com/vesoft-inc/nebula) — Distributed graph database.
- [ArangoDB](https://github.com/arangodb/arangodb) — Multi-model database (graph, document, key-value).
- [JanusGraph](https://github.com/JanusGraph/janusgraph) — Distributed graph database.
- [DGraph](https://github.com/dgraph-io/dgraph) — Distributed GraphQL database.
- [Apache TinkerPop](https://github.com/apache/tinkerpop) — Graph computing framework.
- [Memgraph](https://github.com/memgraph/memgraph) — In-memory graph database.
- [TypeDB](https://github.com/vaticle/typedb) — Strongly-typed database with a reasoning engine.

### 🧪 Practice

- [Neo4j AuraDB Free Cloud Instance](https://neo4j.com/cloud/platform/aura-graph-database/) — Launch a free cloud graph database instance with interactive browser visualization.

### 🛠️ Projects

- [Financial Fraud Ring Detection System](https://neo4j.com/use-cases/fraud-detection/) — Model bank accounts, credit cards, and device IPs in Neo4j to detect synthetic identity fraud rings using circular money transfers.

## 🧭 Recommended Learning Path

1. Understand why relational database foreign key joins degrade exponentially on deep recursive queries.
2. Master the Property Graph model: Nodes (entities), Labels (types), Relationships (directed verbs), and Properties.
3. Write Cypher queries to create, traverse, and filter relationships.
4. Apply graph algorithms: run PageRank to identify influential nodes and Louvain to detect communities.
5. Connect Neo4j to Python applications using the official `neo4j` driver.

## ⭐ Top 3 Resources

1. [Neo4j](https://neo4j.com/) — The undisputed global leader in graph database technology and developer tools.
2. [Memgraph](https://memgraph.com/) — High-performance in-memory C++ graph database designed for streaming analytics.
3. [Graph Databases Book (O'Reilly)](https://neo4j.com/graph-databases-book/) — The definitive textbook on graph modeling and architecture.

