# Tokenization

> Tokenization converts raw character strings into discrete integer sequences using statistical subword algorithms, defining the vocabulary boundary of language models.

## 🎯 What to Learn

- Character-level vs word-level vs subword tokenization trade-offs
- Byte-Pair Encoding (BPE): frequency statistics, merge rules, and byte-level fallback
- WordPiece algorithm (BERT) vs Unigram Language Model algorithm (SentencePiece)
- OpenAI tiktoken: blazing-fast Rust implementation of Byte-Pair Encoding for GPT-4/4o
- Special tokens: BOS (beginning of sequence), EOS (end of sequence), PAD, UNK, CLS, SEP, and MASK
- Out-of-vocabulary (OOV) elimination via UTF-8 byte fallbacks
- Tokenization quirks: whitespace sensitivity, number tokenization, and multi-language fertility rates

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Let's build the GPT Tokenizer by Andrej Karpathy](https://www.youtube.com/watch?v=zduSFxRajkE)
  - Type: Video Tutorial & Code
  - Language: English
  - Level: Intermediate
  - Why recommended: Karpathy builds minbpe from scratch, explaining UTF-8 byte encodings, BPE merge algorithms, regex splitting, and why tokenization is the hidden cause of many LLM quirks.

### 📖 Documentation & References

- [Hugging Face Tokenizers Documentation](https://huggingface.co/docs/tokenizers/index) — Ultra-fast, Rust-implemented tokenization library for modern research and production.
- [OpenAI tiktoken GitHub](https://github.com/openai/tiktoken) — Fast BPE tokeniser for use with OpenAI's models.

### 🎓 Courses

- [Hugging Face NLP Course - Chapter 6: The Tokenizers Library](https://huggingface.co/learn/nlp-course/chapter6/1) — Comprehensive deep dive into building and training subword tokenizers from scratch.

### ▶️ YouTube — English

- [Let's build the GPT Tokenizer](https://www.youtube.com/watch?v=zduSFxRajkE)
  - Channel: Andrej Karpathy
  - Language: English
  - Type: Deep Dive
  - Level: Intermediate
  - Why: 2-hour masterclass demonstrating BPE algorithm mechanics, tiktoken internals, and tokenization traps.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Speech and Language Processing (Jurafsky & Martin) — Chapter 2: Text Normalization and Tokenization](https://web.stanford.edu/~jurafsky/slp3/) — Rigorous academic coverage of regular expressions, BPE, and morphological tokenization.

### 💻 GitHub / Implementations

- [mohd-faizy/TF03_Natural-Language-Processing-in-TensorFlow](https://github.com/mohd-faizy/TF03_Natural-Language-Processing-in-TensorFlow) — Text tokenization, subword encodings, padding sequences, and embedding layers for recurrent neural networks.
- [Tokenizers](https://github.com/huggingface/tokenizers) — Fast tokenization implementations.
- [SentencePiece](https://github.com/google/sentencepiece) — Unsupervised text tokenizer.
- [tiktoken](https://github.com/openai/tiktoken) — Fast BPE tokenizer for OpenAI models.
- [BlingFire](https://github.com/microsoft/BlingFire) — Lightning fast tokenization.

### 🧪 Practice

- [OpenAI Tokenizer Interactive Web Tool](https://platform.openai.com/tokenizer) — Inspect real-time token splits, byte representations, and token IDs.

### 🛠️ Projects

- [Build a Byte-Pair Encoding Tokenizer from Scratch](https://github.com/karpathy/minbpe) — Implement vocabulary training, merge rule tracking, encoding, and decoding in pure Python.

## 🧭 Recommended Learning Path

1. Understand ASCII, Unicode, and UTF-8 byte encoding fundamentals.
2. Study the naive Byte-Pair Encoding (BPE) compression algorithm on character pairs.
3. Implement regex pattern splitting to prevent merges across whitespace and punctuation boundaries.
4. Train a custom Hugging Face BPE / WordPiece tokenizer on a domain-specific dataset.
5. Analyze token fertility (tokens per word) across English vs non-Latin scripts.

## ⭐ Top 3 Resources

1. [Karpathy's GPT Tokenizer Masterclass](https://www.youtube.com/watch?v=zduSFxRajkE) — The definitive tutorial on subword tokenization and BPE.
2. [Hugging Face Tokenizers](https://huggingface.co/docs/tokenizers/index) — The fastest, most versatile industrial subword tokenization engine.
3. [tiktoken (OpenAI)](https://github.com/openai/tiktoken) — Blazing fast Rust BPE library powering modern GPT models.

