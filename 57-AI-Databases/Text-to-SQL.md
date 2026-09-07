# Text-to-SQL

> Natural Language to SQL translation engines, schema linking architectures, and enterprise database query interfaces.

## 🎯 What to Learn

- The Text-to-SQL challenge: Schema linking, ambiguous column names, join path ambiguity, and dialect variations
- Vanna AI: Open-source Python RAG framework for accurate Text-to-SQL trained on your schema, DDL, and documentation
- DB-GPT: Open-source AI native data app development framework with private Text-to-SQL agents
- Specialized open models: Defog SQLCoder (fine-tuned models outperforming GPT-4 on SQL generation benchmarks)
- DIN-SQL (Decomposed In-Context Learning): Breaking Text-to-SQL into classification, schema linking, and query synthesis
- Execution-guided self-correction: Running generated SQL against the DB and feeding error tracebacks back into the LLM

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Vanna AI](https://github.com/vanna-ai/vanna)
  - Type: Text-to-SQL Framework
  - Language: English
  - Level: Beginner
  - Why recommended: The leading open-source Python framework for Text-to-SQL that trains a personalized RAG model on your database schema, documentation, and verified SQL queries to achieve >90% accuracy.

### 🎓 Courses

- [DeepLearning.AI: Building Systems with the ChatGPT API](https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/) — Covers structured prompt outputs and translating instructions to database queries.

### ▶️ YouTube — English

- [Prompt Engineering / Vanna AI: Video Guides & Tutorials](https://www.youtube.com/@PromptEngineering)
  - Channel: Prompt Engineering / Vanna AI
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Step-by-step guide training Vanna on database DDL, connecting to PostgreSQL, and chatting with data.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [SQL for Data Analysis by Cathy Tanimura (O'Reilly)](https://www.oreilly.com/library/view/sql-for-data/9781492088776/) — Essential reference on complex analytical SQL, window functions, and schema design.

### 💻 GitHub / Implementations

- [DB-GPT](https://github.com/eosphoros-ai/DB-GPT) — AI-native data app development.
- [Vanna](https://github.com/vanna-ai/vanna) — AI-powered SQL generation.
- [DIN-SQL](https://github.com/MohammadrezaPourreza/Few-shot-NL2SQL-with-prompting) — Decomposed in-context NL2SQL.
- [sqlcoder](https://github.com/defog-ai/sqlcoder) — LLMs for SQL generation.
- [Text2SQL](https://github.com/caesarHQ/textSQL) — Natural language to SQL.

## 📄 Foundational Papers

- [DIN-SQL: Decomposed In-Context Learning of Text-to-SQL with Self-Correction](https://arxiv.org/abs/2304.11015) — Pourreza and Rafiei paper introducing multi-stage decomposition achieving breakthrough accuracy on Spider benchmark.

### 🧪 Practice

- [Vanna Colab Notebook](https://vanna.ai/docs/tutorial-notebooks/) — Connect to a sample Chinook database and test natural language queries in Google Colab.

### 🛠️ Projects

- [Autonomous Enterprise BI Chatbot with Vanna & Streamlit](https://github.com/vanna-ai/vanna) — Train Vanna on a company database schema, generate SQL queries, auto-execute them, and display interactive Plotly charts.

## 🧭 Recommended Learning Path

1. Understand why naive zero-shot SQL generation fails on complex databases (missing schema context).
2. Study schema linking: Identifying relevant tables and columns for a given user question.
3. Train a Vanna instance on your database DDL and gold-standard SQL examples.
4. Implement execution-guided self-correction to auto-heal syntax and column naming errors.
5. Add security guardrails: Read-only database users and AST verification to prevent accidental `DROP TABLE`.

## ⭐ Top 3 Resources

1. Vanna AI (Python Text-to-SQL RAG Framework)
2. Defog SQLCoder (Specialized SQL Foundation Models)
3. DIN-SQL Research Paper

