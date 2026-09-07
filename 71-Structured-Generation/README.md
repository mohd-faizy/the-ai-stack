# 71 - Structured Generation

> Grammar-constrained decoding, context-free grammar (CFG) masks, JSON schema validation, and deterministic output engines.

## 🌐 Overview & Architectural Importance

Language models output arbitrary probabilistic text by default, causing downstream parsers to crash on missing commas or invalid schemas. Structured generation frameworks (Outlines, Guidance, Instructor, llama.cpp grammars) modify the model's logits at every token step, guaranteeing 100% syntactic compliance with JSON, Pydantic, and regex schemas with zero retries.

## 📑 Curated Learning Guides

Explore in-depth roadmaps, authoritative textbooks, official documentation, courses, and implementations for each subtopic:

* [**Structured Output Frameworks**](Structured-Output-Frameworks.md) — Outlines, Guidance, Instructor, Marvin, LMQL, and structured extraction libraries.
* [**Grammar-Constrained Generation**](Grammar-Constrained-Generation.md) — Logit masking, finite state machines (FSMs), GBNF grammars, and llama.cpp/vLLM constrained decoding.
* [**Schema Validation**](Schema-Validation.md) — Pydantic, JSON Schema, TypeChat, and strict schema validation pipelines.

## 🧭 Recommended Study Sequence

1. **Logit Biasing & Masking**: Restricting token vocabulary at inference time to valid grammatical tokens.
2. **Finite State Machine Decoding**: Outlines compiling regex and JSON schemas into fast FSMs.
3. **Context-Free Grammars (CFG)**: GBNF grammars in llama.cpp and vLLM.
4. **Type-Safe Python Integration**: Instructor wrapping OpenAI/Anthropic APIs with Pydantic validation.
5. **Production Pipelines**: Guaranteeing 100% structured data extraction with zero parsing errors.

## 🗝️ Foundational Prerequisites

- Finite Automata (DFA/NFA) and regular expressions.
- Context-Free Grammars (BNF / EBNF notation).
- Pydantic models and JSON Schema specifications.

---

[← Back to Main Repository](../README.md)
