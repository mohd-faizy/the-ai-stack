# Schema Validation

> Data validation standards, JSON schema definitions, and programmatic contract enforcers that safeguard AI pipeline reliability.

## 🎯 What to Learn

- Pydantic v2: High-performance data validation and parsing using Python type hints written in Rust
- JSON Schema standard: Draft-07 and 2020-12 specifications for describing JSON data structures
- Microsoft TypeChat: Using TypeScript types to build natural language interfaces with guaranteed typed outputs
- Data validation error handling: Parsing detailed validation errors and formatting them for LLM self-healing prompts
- Nested schema definitions: Modeling complex recursive trees, polymorphic types, and optional fields
- Generating automated API documentation directly from validated Pydantic models

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Pydantic v2](https://github.com/pydantic/pydantic)
  - Type: Validation Standard
  - Language: Python
  - Level: Beginner
  - Why recommended: The undisputed data validation standard for Python, rewritten in Rust for 20x performance, powering FastAPI, Instructor, and modern AI engineering.

### 🎓 Courses

- [Pydantic Official Tutorials](https://docs.pydantic.dev/latest/tutorials/overview/) — Step-by-step tutorials from basic model validation to advanced custom validators.

### ▶️ YouTube — English

- [ArjanCodes / Samuel Colvin: Video Guides & Tutorials](https://www.youtube.com/@ArjanCodes)
  - Channel: ArjanCodes / Samuel Colvin
  - Language: English
  - Type: Tutorial
  - Level: Beginner
  - Why: Clear walkthrough of Pydantic models, field constraints, custom validators, and performance improvements.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Robust Python by Patrick Viafore (O'Reilly)](https://www.oreilly.com/library/view/robust-python/9781098100650/) — In-depth guide to using type annotations, custom validators, and defensive programming.

### 💻 GitHub / Implementations

- [Pydantic](https://github.com/pydantic/pydantic) — Data validation with Python type hints.
- [JSON Schema](https://github.com/json-schema-org/json-schema-spec) — JSON validation specification.
- [TypeChat](https://github.com/microsoft/TypeChat) — Structured AI responses with TypeScript types.

### 🧪 Practice

- [Pydantic Interactive Documentation Sandbox](https://docs.pydantic.dev/latest/) — Test Pydantic model definitions and inspect generated JSON schemas in Python.

### 🛠️ Projects

- [Strict Data Ingestion Contract Validator](https://docs.pydantic.dev/) — Build an ingestion gateway that validates incoming multimodal metadata against complex nested Pydantic schemas, logging invalid records to a quarantine queue.

## 🧭 Recommended Learning Path

1. Understand why unchecked dictionaries cause runtime crashes in production AI apps.
2. Define clean data models using Pydantic `BaseModel` with `Field(...)` constraints.
3. Export JSON schemas from Pydantic models with `Model.model_json_schema()`.
4. Add custom business validation rules with `@field_validator` and `@model_validator`.
5. Explore Microsoft TypeChat for TypeScript-native schema validation.

## ⭐ Top 3 Resources

1. Pydantic v2 (Python Data Validation Standard)
2. JSON Schema Standard
3. Microsoft TypeChat

