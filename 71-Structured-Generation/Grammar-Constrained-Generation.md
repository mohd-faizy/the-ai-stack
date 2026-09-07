# Grammar-Constrained Generation

> Logit masking algorithms, Finite State Machines (FSMs), and Context-Free Grammars (CFGs) that enforce strict syntax at the token generation level.

## 🎯 What to Learn

- The mechanics of logit masking: Setting invalid token logits to $-infty$ before softmax during autoregressive generation
- Finite State Machines (FSMs) for regular expressions: Converting regex into deterministic finite automata (DFA) to guide token transitions
- GBNF (GGML BNF) grammars: Defining context-free grammars for llama.cpp to enforce arbitrary syntactic rules (JSON, SQL, code)
- Outlines index compilation: Indexing token vocabularies into state transitions for zero-overhead constrained decoding
- vLLM & SGLang grammar integration: High-throughput continuous batching with guided decoding engines
- Eliminating syntax errors completely: Why grammar-constrained models achieve 100% syntactic correctness without fine-tuning

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Outlines (.dottxt)](https://github.com/dottxt-ai/outlines)
  - Type: Constrained Generation Engine
  - Language: English
  - Level: Advanced
  - Why recommended: The breakthrough open-source library that compiles regular expressions and JSON schemas into Finite State Machines, masking logits in microseconds to guarantee 100% valid outputs.

### 🎓 Courses

- [Stanford CS143: Compilers (Grammars & Automata)](https://web.stanford.edu/class/cs143/) — Foundational theory on DFAs, NFAs, and context-free grammars.

### ▶️ YouTube — English

- [Brandon Willard / .dottxt / PyData: Video Guides & Tutorials](https://www.youtube.com/@PyDataTV)
  - Channel: Brandon Willard / .dottxt / PyData
  - Language: English
  - Type: Deep Dive
  - Level: Advanced
  - Why: Brandon Willard (co-founder of .dottxt) explains how compiling regex into DFAs allows instantaneous logit masking.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Introduction to the Theory of Computation by Michael Sipser](https://www.cengage.com/c/introduction-to-the-theory-of-computation-3e-sipser/9781133187790/) — The definitive classic on regular expressions, finite automata, and context-free grammars.

### 💻 GitHub / Implementations

- [llama.cpp](https://github.com/ggml-org/llama.cpp) — GBNF grammar-constrained generation.
- [Outlines](https://github.com/dottxt-ai/outlines) — JSON schema and regex-constrained generation.
- [SGLang](https://github.com/sgl-project/sglang) — Structured generation language.
- [vLLM](https://github.com/vllm-project/vllm) — Guided decoding support.

## 📄 Foundational Papers

- [Efficient Guided Generation for Large Language Models (Outlines)](https://arxiv.org/abs/2307.09702) — Willard and Louf landmark paper introducing FSM indexing for zero-latency constrained generation.

### 🧪 Practice

- [Outlines Quickstart Notebook](https://dottxt-ai.github.io/outlines/quickstart/) — Force a local open model to output only numbers matching a regex phone number pattern in 5 lines of Python.

### 🛠️ Projects

- [Guaranteed SQL Query Generator with GBNF](https://github.com/ggerganov/llama.cpp/tree/master/grammars) — Write a GBNF grammar for SQLite SELECT queries and run local inference with llama.cpp to guarantee 100% syntactically valid SQL.

## 🧭 Recommended Learning Path

1. Understand the mechanics of token sampling: Logits -> Softmax -> Sampling.
2. Learn how logit masking sets probabilities of disallowed tokens to zero.
3. Convert a regular expression to a Deterministic Finite Automaton (DFA).
4. Write a GBNF grammar in llama.cpp to restrict outputs to valid JSON.
5. Deploy Outlines with vLLM for high-throughput enterprise structured generation.

## ⭐ Top 3 Resources

1. Outlines (.dottxt)
2. llama.cpp GBNF Grammars
3. Efficient Guided Generation Paper (Willard & Louf)

