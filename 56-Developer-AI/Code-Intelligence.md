# Code Intelligence

> Syntax tree parsers, structural search engines, and static semantic analysis tools that provide deep syntactic understanding of programming languages to AI agents.

## 🎯 What to Learn

- Tree-sitter: Incremental parsing system producing concrete syntax trees for 40+ programming languages in real time
- ast-grep: Fast, language-aware structural code search and linting tool using Tree-sitter ASTs
- Sourcegraph & Cody: Planetary-scale code search across millions of repositories using Precise Code Navigation (SCIP/LSIF)
- Semgrep & CodeQL: Semantic static analysis engines finding security bugs by matching AST patterns and taint flows
- Providing structural context to LLM coding agents: Giving models AST nodes rather than raw unstructured regex snippets
- Incremental parsing: Updating syntax trees in milliseconds as characters are typed in an IDE

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Tree-sitter](https://github.com/tree-sitter/tree-sitter)
  - Type: Incremental Parsing System
  - Language: English
  - Level: Intermediate
  - Why recommended: The foundational syntax parsing library powering modern editors (Neovim, Zed, GitHub) and AI coding agents, providing fast, error-tolerant concrete syntax trees.

### 🎓 Courses

- [Stanford CS143: Compilers](https://web.stanford.edu/class/cs143/) — The definitive university course on lexical analysis, parsing, syntax-directed translation, and ASTs.

### ▶️ YouTube — English

- [ThePrimeagen / Neovim Conf: Video Guides & Tutorials](https://www.youtube.com/@ThePrimeTimeagen)
  - Channel: ThePrimeagen / Neovim Conf
  - Language: English
  - Type: Talk
  - Level: Intermediate
  - Why: Entertaining and insightful explanation of why ASTs beat regex for code intelligence and refactoring.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Compilers: Principles, Techniques, and Tools by Aho, Lam, Sethi, Ullman (Dragon Book)](https://en.wikipedia.org/wiki/Compilers:_Principles,_Techniques,_and_Tools) — The timeless definitive bible on compiler construction and syntax trees.

### 💻 GitHub / Implementations

- [Tree-sitter](https://github.com/tree-sitter/tree-sitter) — Incremental parsing system.
- [Sourcegraph](https://github.com/sourcegraph/sourcegraph-public-snapshot) — Code AI platform.
- [ast-grep](https://github.com/ast-grep/ast-grep) — Structural search and rewrite tool.
- [CodeQL](https://github.com/github/codeql) — Semantic code analysis engine.
- [Semgrep](https://github.com/semgrep/semgrep) — Fast static analysis.

### 🧪 Practice

- [Tree-sitter Online Playground](https://tree-sitter.github.io/tree-sitter/playground) — Type code in any language and inspect the generated syntax tree nodes in real time.

### 🛠️ Projects

- [AST-Aware Code Chunker for RAG](https://github.com/tree-sitter/tree-sitter) — Build a Python RAG chunker using Tree-sitter that splits Python code strictly at function and class boundaries instead of arbitrary token counts.

## 🧭 Recommended Learning Path

1. Understand why regular expressions fail to parse nested programming language constructs.
2. Explore the Tree-sitter playground to see how syntax trees represent functions, classes, and arguments.
3. Use Tree-sitter S-expression queries (`(function_definition name: (identifier) @func)`) in Python.
4. Use ast-grep for structural search-and-replace across a large codebase.
5. Integrate AST chunking into your codebase RAG and AI agent toolbelt.

## ⭐ Top 3 Resources

1. Tree-sitter (Incremental Parsing Standard)
2. ast-grep (Structural Code Search)
3. Semgrep (Lightweight Static Analysis)

