# Information Extraction

> Information Extraction (IE) extracts structured entities, relationships, and attributes from unstructured natural language text.

## 🎯 What to Learn

- Named Entity Recognition (NER): BIO/BILOU tagging schemes and token classification
- Classical vs Neural NER: Conditional Random Fields (CRF), BiLSTM-CRF, and BERT token classifiers
- Open-vocabulary & zero-shot entity extraction with GLiNER (Generalist and Lightweight Model for NER)
- Relation Extraction (RE): dependency parsing, entity pair classification, and prompt-based extraction
- Co-reference resolution: linking pronouns and mentions to canonical entity clusters
- Constructing structured Knowledge Graphs from unstructured textual corpora
- Evaluation metrics: Entity-level Precision, Recall, and strict vs fuzzy F1-score

## 📚 Best Learning Resources

### 🥇 Best Overall

- [GLiNER: Generalist Model for Named Entity Recognition](https://github.com/urchade/GLiNER)
  - Type: Repository & Pretrained Model
  - Language: English
  - Level: Intermediate
  - Why recommended: GLiNER revolutionizes NER by enabling zero-shot extraction of arbitrary entity types using a lightweight bidirectional transformer without task-specific fine-tuning.

### 📖 Documentation & References

- [spaCy Rule-based Matching & NER Guide](https://spacy.io/usage/rule-based-matching) — Combining neural token classification with deterministic token pattern matching.
- [Hugging Face Token Classification Guide](https://huggingface.co/docs/transformers/tasks/token_classification) — Fine-tuning transformer models on CoNLL-2003 NER datasets.

### 🎓 Courses

- [Stanford CS224N - Lecture on Information Extraction & Relation Extraction](https://web.stanford.edu/class/cs224n/) — Academic treatment of distant supervision, relation extraction, and knowledge graphs.

### ▶️ YouTube — English

- [Venelin Valkov: Video Guides & Tutorials](https://www.youtube.com/@venelin_valkov)
  - Channel: Venelin Valkov
  - Language: English
  - Type: Tutorial
  - Level: Intermediate
  - Why: Complete PyTorch and Hugging Face walkthrough tokenizing text and aligning subword labels for NER.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Speech and Language Processing (Jurafsky & Martin) — Chapter 17: Information Extraction](https://web.stanford.edu/~jurafsky/slp3/) — Covers relation extraction, entity linking, and template filling.

### 💻 GitHub / Implementations

- [spaCy](https://github.com/explosion/spaCy) — NER, dependency parsing, and more.
- [GLiNER](https://github.com/urchade/GLiNER) — Generalist named entity recognition.
- [Prodigy](https://github.com/explosion/prodigy-recipes) — Annotation tool for NER and text classification.
- [DeepPavlov](https://github.com/deeppavlov/DeepPavlov) — Conversational AI and NLU library.
- [Duckling](https://github.com/facebook/duckling) — Parse text into structured data.

### 🧪 Practice

- [CoNLL-2003 Dataset](https://huggingface.co/datasets/conll2003) — The standard academic benchmark for evaluating named entity recognition models.

### 🛠️ Projects

- [Financial Entity & Relationship Extraction Pipeline](https://github.com/urchade/GLiNER) — Extract companies, stock tickers, acquisitions, and monetary figures from SEC filing documents.

## 🧭 Recommended Learning Path

1. Understand token classification and BIO (Beginning, Inside, Outside) tagging schemes.
2. Implement rule-based entity extractors with spaCy EntityRuler.
3. Fine-tune a BERT model on CoNLL-2003 with subword label alignment.
4. Deploy GLiNER for zero-shot entity extraction with arbitrary natural language prompts.
5. Extract entity-relation triples (Subject, Predicate, Object) to populate a Neo4j knowledge graph.

## ⭐ Top 3 Resources

1. [GLiNER](https://github.com/urchade/GLiNER) — The most flexible and efficient zero-shot named entity recognition model.
2. [spaCy NER](https://spacy.io/usage/linguistic-features#named-entities) — Industrial standard for blazing-fast rule-based and neural entity extraction.
3. [Hugging Face Token Classification](https://huggingface.co/docs/transformers/tasks/token_classification) — The premier framework for training state-of-the-art custom NER models.

