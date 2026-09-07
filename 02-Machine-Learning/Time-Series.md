# Time Series

> Time series analysis models temporal sequences, trends, seasonality, and autoregressive dynamics to forecast future values and detect regime shifts.

## 🎯 What to Learn

- Components of time series: trend, seasonality, cyclicality, and residuals
- Stationarity: Augmented Dickey-Fuller (ADF) test, differencing, and transformations
- Classical models: Autoregressive (AR), Moving Average (MA), ARIMA, SARIMAX, and Exponential Smoothing (ETS)
- Feature engineering for temporal data: lag features, rolling windows, calendar embeddings, and Fourier terms
- Modern machine learning forecasting: LightGBM with lag matrices and recursive/direct multi-step forecasting
- Neural and foundation forecasting models: Temporal Fusion Transformers (TFT), N-BEATS, PatchTST, and TimesFM
- Temporal cross-validation: TimeSeriesSplit, rolling-origin evaluation, and preventing future data leakage

## 📚 Best Learning Resources

### 🥇 Best Overall

- [Forecasting: Principles and Practice (3rd Edition) by Rob J Hyndman and George Athanasopoulos](https://otexts.com/fpp3/)
  - Type: Online Textbook
  - Language: English
  - Level: Beginner to Intermediate
  - Why recommended: The premier global reference on time series forecasting, freely accessible online, written by leading time series researchers.

### 📖 Documentation & References

- [Darts Documentation](https://unit8co.github.io/darts/) — Unified Python library for easy manipulation and forecasting of time series from ARIMA to deep learning.
- [StatsForecast Documentation (Nixtla)](https://nixtlaverse.nixtla.me/statsforecast/index.html) — Blazing-fast implementations of statistical forecasting models (AutoARIMA, ETS) outperforming standard libraries.
- [sktime Documentation](https://www.sktime.net/en/stable/) — Unified framework for machine learning with time series extending scikit-learn conventions.

### 🎓 Courses

- [Applied Time Series Analysis (Penn State STAT 510)](https://online.stat.psu.edu/stat510/) — Comprehensive academic curriculum covering classical ARIMA and state-space models.

### ▶️ YouTube — English

- [Time Series Analysis in Python Full Course](https://www.youtube.com/watch?v=vV12dGe_Fho)
  - Channel: Rob Mulla
  - Language: English
  - Type: Course
  - Level: Beginner to Intermediate
  - Why: Exceptional hands-on walkthrough of EDA, stationarity, lag features, and XGBoost forecasting by a Kaggle Grandmaster.

### ▶️ YouTube — Hindi / Hinglish

- [Time Series Analysis Full Playlist in Hindi](https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH)
  - Channel: CampusX
  - Language: Hindi / Hinglish
  - Type: Playlist
  - Level: Beginner to Intermediate
  - Why: Detailed Hinglish explanations of stationarity, autocorrelation (ACF/PACF), ARIMA, and Prophet.

### 📚 Books

- [Forecasting: Principles and Practice (Hyndman & Athanasopoulos)](https://otexts.com/fpp3/) — Free, definitive forecasting text with extensive real-world case studies.
- [Time Series Analysis and Its Applications (Shumway & Stoffer)](https://www.stat.pitt.edu/stoffer/tsa4/) — Rigorous mathematical text covering frequency domain and state-space models.

### 💻 GitHub / Implementations

- [mohd-faizy/TF04_Sequences-Time-Series-and-Prediction](https://github.com/mohd-faizy/TF04_Sequences-Time-Series-and-Prediction) — Time series forecasting and sequential prediction pipelines using TensorFlow, RNNs, LSTMs, and ConvNets.
- [Darts](https://github.com/unit8co/darts) — Time-series forecasting library.
- [sktime](https://github.com/sktime/sktime) — Unified time-series machine learning framework.
- [GluonTS](https://github.com/awslabs/gluonts) — Probabilistic time-series modeling.
- [Prophet](https://github.com/facebook/prophet) — Forecasting at scale by Meta.
- [NeuralForecast](https://github.com/Nixtla/neuralforecast) — Neural forecasting models.
- [StatsForecast](https://github.com/Nixtla/statsforecast) — Lightning fast statistical forecasting.
- [tsai](https://github.com/timeseriesAI/tsai) — State-of-the-art deep learning for time series.
- [Kats](https://github.com/facebookresearch/Kats) — Time series analysis toolkit by Meta.
- [PyTorch Forecasting](https://github.com/sktime/pytorch-forecasting) — Time series forecasting with PyTorch.
- [Merlion](https://github.com/salesforce/Merlion) — Time series intelligence by Salesforce.
- [TimesFM](https://github.com/google-research/timesfm) — Time series foundation model by Google.

### 🧪 Practice

- [Store Sales - Time Series Forecasting (Kaggle)](https://www.kaggle.com/competitions/store-sales-time-series-forecasting) — The standard competitive dataset for building multi-item hierarchical forecasting models.

### 🛠️ Projects

- [High-Frequency Demand Forecasting System](https://unit8co.github.io/darts/) — Build an automated multi-step demand forecaster comparing AutoARIMA, LightGBM, and Temporal Fusion Transformer.

## 🧭 Recommended Learning Path

1. Master stationarity, differencing, and autocorrelation plots (ACF and PACF).
2. Implement and tune baseline statistical models: Exponential Smoothing and SARIMAX.
3. Construct lag, rolling, and calendar features for gradient boosted decision trees.
4. Evaluate models with proper expanding/rolling-window backtesting without lookahead bias.
5. Experiment with foundation time-series models like TimesFM and PatchTST for zero-shot forecasting.

## ⭐ Top 3 Resources

1. [Forecasting: Principles and Practice (Hyndman)](https://otexts.com/fpp3/) — The single best educational resource on forecasting in the world.
2. [Darts Library](https://unit8co.github.io/darts/) — Most modern, unified Python time-series framework for both classical and neural models.
3. [Nixtla StatsForecast & NeuralForecast](https://nixtlaverse.nixtla.me/) — Industry-leading speed and scalability for enterprise-grade forecasting.

