# Machine Translation

> Machine Translation (MT) translates text across languages using sequence-to-sequence neural architectures and cross-lingual representation models.

## 🎯 What to Learn

- Evolution of MT: Statistical Machine Translation (SMT) to Neural Machine Translation (NMT)
- Sequence-to-sequence architectures: encoder-decoder attention and autoregressive generation
- Multilingual translation models: NLLB-200 (No Language Left Behind), MarianMT, and mBART
- Decoding strategies: greedy decoding, beam search, temperature sampling, and repetition penalties
- Data mining for parallel corpora: bitext filtering, back-translation, and pivot translation
- Evaluation metrics: BLEU (Bilingual Evaluation Understudy), chrF, TER, and neural COMET scores

## 📚 Best Learning Resources

### 🥇 Best Overall

- [No Language Left Behind (NLLB) by Meta AI Research](https://github.com/facebookresearch/fairseq/tree/nllb)
  - Type: Model Family & Codebase
  - Language: English
  - Level: Intermediate to Advanced
  - Why recommended: NLLB is a landmark open-source multilingual neural translation model delivering state-of-the-art translations across 200+ languages, including low-resource languages.

### 📖 Documentation & References

- [Hugging Face Translation Task Guide](https://huggingface.co/docs/transformers/tasks/translation) — Tutorial on fine-tuning MarianMT and T5 models on parallel text corpora.
- [OpenNMT Documentation](https://opennmt.net/) — Open-source ecosystem for neural machine translation and sequence generation in PyTorch.

### 🎓 Courses

- [Stanford CS224N - Lecture on Machine Translation & Seq2Seq](https://web.stanford.edu/class/cs224n/) — Foundational university lecture covering encoder-decoder models and beam search.

### ▶️ YouTube — English

- [DeepLearning.AI: Video Guides & Tutorials](https://www.youtube.com/@Deeplearningai)
  - Channel: DeepLearning.AI
  - Language: English
  - Type: Lecture
  - Level: Intermediate
  - Why: Andrew Ng explains sequence-to-sequence translation mechanics, beam search width, and length normalization.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Neural Machine Translation by Philipp Koehn](https://www.cambridge.org/core/books/neural-machine-translation/918F95F4D7BCE902B2155F105F86D971) — Comprehensive academic textbook by one of the founding pioneers of modern machine translation.

### 💻 GitHub / Implementations

- [NLLB / fairseq](https://github.com/facebookresearch/fairseq) — Sequence-to-sequence modeling toolkit.
- [OpenNMT](https://github.com/OpenNMT/OpenNMT-py) — Open-source neural machine translation.
- [MarianMT](https://github.com/marian-nmt/marian) — Fast neural machine translation in C++.
- [Argos Translate](https://github.com/argosopentech/argos-translate) — Open-source offline translation.
- [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) — Free and open-source machine translation API.

### 🧪 Practice

- [WMT (Workshop on Machine Translation) Competitions](https://statmt.org/wmt23/) — The premier global benchmarking evaluation for machine translation systems.

### 🛠️ Projects

- [Offline Multilingual Translation Microservice](https://huggingface.co/facebook/nllb-200-distilled-600M) — Deploy Meta's distilled NLLB-200 model with CTranslate2 for ultra-fast low-memory translation inference.

## 🧭 Recommended Learning Path

1. Understand sequence-to-sequence architectures and why fixed-length context vectors required attention.
2. Explore beam search decoding: tracking top-B hypotheses and applying length normalization.
3. Evaluate translation quality: compare n-gram precision (BLEU) against neural semantic metrics (COMET).
4. Fine-tune a MarianMT English-to-Hindi / English-to-Spanish translation model with Hugging Face Trainer.
5. Deploy optimized quantized models using CTranslate2 for sub-50ms CPU translation.

## ⭐ Top 3 Resources

1. [NLLB-200 (Meta AI)](https://github.com/facebookresearch/fairseq/tree/nllb) — The most capable open-source translation model spanning 200 languages.
2. [CTranslate2](https://github.com/OpenNMT/CTranslate2) — High-performance inference engine for Transformer models delivering 4x speedups.
3. [Koehn's Neural Machine Translation](https://www.cambridge.org/core/books/neural-machine-translation/918F95F4D7BCE902B2155F105F86D971) — The authoritative textbook covering statistical and neural translation.

