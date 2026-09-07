# Text Summarization

> Text summarization compresses lengthy documents, dialogue transcripts, and articles into coherent, concise synopses while preserving key factual content.

## 🎯 What to Learn

- Extractive summarization (selecting key sentences) vs Abstractive summarization (re-generating novel text)
- Sequence-to-sequence pretrained encoder-decoders: BART, T5, and PEGASUS (Gap Sentences Generation)
- Long-document challenges: attention context limits, chunk-and-combine vs hierarchical transformers (LED, Longformer)
- Controlling summary length, style, and tone with conditional prompting
- Hallucination mitigation and factual consistency verification in abstractive summaries
- Evaluation metrics: ROUGE (ROUGE-1, ROUGE-2, ROUGE-L), BLEU, and LLM-as-a-judge factual evaluation

## 📚 Best Learning Resources

### 🥇 Best Overall

- [BART: Denoising Sequence-to-Sequence Pre-training (Meta AI Research)](https://huggingface.co/facebook/bart-large-cnn)
  - Type: Pretrained Model & Paper
  - Language: English
  - Level: Intermediate
  - Why recommended: BART (particularly `bart-large-cnn`) set the standard for abstractive text summarization by combining a bidirectional encoder with an autoregressive GPT-like decoder.

### 📖 Documentation & References

- [Hugging Face Summarization Task Guide](https://huggingface.co/docs/transformers/tasks/summarization) — Complete guide on fine-tuning T5 and BART on summarization datasets (CNN/DailyMail).

### 🎓 Courses

- [Hugging Face NLP Course - Chapter 7: Summarization](https://huggingface.co/learn/nlp-course/chapter7/5) — Detailed tutorial building an end-to-end abstractive summarizer with evaluation.

### ▶️ YouTube — English

- [Yannic Kilcher: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher
  - Language: English
  - Type: Paper Review
  - Level: Intermediate
  - Why: Clear review of text corruption techniques (token masking, deletion, sentence permutation) used in BART.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Natural Language Processing with Transformers — Chapter 6: Summarization](https://transformers-book.com/) — In-depth guide detailing the ROUGE metric, beam search tuning, and PEGASUS.

### 💻 GitHub / Implementations

- [sumy](https://github.com/miso-belica/sumy) — Automatic text summarization.
- [Pegasus](https://github.com/google-research/pegasus) — Pre-training with extracted gap-sentences for abstractive summarization.

### 🧪 Practice

- [CNN/DailyMail Summarization Benchmark](https://huggingface.co/datasets/cnn_dailymail) — The standard multi-sentence news summarization dataset.

### 🛠️ Projects

- [Podcast & Meeting Transcript Summarizer](https://huggingface.co/facebook/bart-large-cnn) — Build a pipeline that takes 1-hour Whisper audio transcripts and generates bulleted executive summaries.

## 🧭 Recommended Learning Path

1. Understand extractive summarization baselines using TextRank and sentence embeddings.
2. Study the sequence-to-sequence architecture of BART and T5 with cross-attention.
3. Compute ROUGE-1, ROUGE-2, and ROUGE-L metrics and understand recall vs precision trade-offs.
4. Fine-tune a BART model on a domain-specific dataset (legal or medical briefs).
5. Compare encoder-decoder summarizers against modern decoder-only LLMs using few-shot prompting.

## ⭐ Top 3 Resources

1. [BART (Meta AI)](https://huggingface.co/facebook/bart-large-cnn) — The quintessential sequence-to-sequence model for abstractive text summarization.
2. [Hugging Face Summarization Guide](https://huggingface.co/docs/transformers/tasks/summarization) — The most practical walkthrough for training summarization pipelines.
3. [PEGASUS Paper (Zhang et al.)](https://arxiv.org/abs/1912.08777) — Pioneering pretraining objective explicitly designed for abstractive summarization.

