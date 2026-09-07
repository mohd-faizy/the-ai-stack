# Climate & Weather

> Global numerical weather prediction foundation models, atmospheric emulators, and climate change projections powered by graph neural networks and vision transformers.

## 🎯 What to Learn

- The physics of numerical weather prediction: Navier-Stokes on a rotating sphere and ECMWF reanalysis data (ERA5)
- Google DeepMind GraphCast: Autoregressive graph neural network operating on an icosahedral multi-mesh predicting 10-day global weather in under a minute
- Huawei Pangu-Weather: 3D Earth-specific vision transformer predicting global weather faster than traditional supercomputers
- NVIDIA FourCastNet: Fourier Neural Operator-based global weather forecasting system
- Microsoft ClimaX: First foundation model for weather and climate fine-tunable across multiple downstream climate tasks
- Predicting extreme weather events: Tropical cyclone tracking, atmospheric rivers, and heatwaves

## 📚 Best Learning Resources

### 🥇 Best Overall

- [GraphCast (Google DeepMind)](https://github.com/google-deepmind/graphcast)
  - Type: Global Weather Model
  - Language: English
  - Level: Advanced
  - Why recommended: DeepMind's state-of-the-art global weather model that outperforms the European Centre for Medium-Range Weather Forecasts (ECMWF) HRES operational system on 90% of verification targets.

### 🎓 Courses

- [ECMWF Online Course: Machine Learning for Weather and Climate](https://www.ecmwf.int/) — Free comprehensive training on applying ML to atmospheric physics, satellite data, and forecasts.

### ▶️ YouTube — English

- [Yannic Kilcher / DeepMind: Video Guides & Tutorials](https://www.youtube.com/@YannicKilcher)
  - Channel: Yannic Kilcher / DeepMind
  - Language: English
  - Type: Paper Review
  - Level: Advanced
  - Why: Clear technical breakdown of the icosahedral multi-mesh graph neural network and 10-day autoregressive rollout.

### ▶️ YouTube — Hindi / Hinglish

> No high-quality Hindi/Hinglish resource identified for this topic.


### 📚 Books

- [Atmospheric Science: An Introductory Survey by John M. Wallace and Peter V. Hobbs (Academic Press)](https://www.elsevier.com/books/atmospheric-science/wallace/978-0-12-732951-2) — The definitive textbook on atmospheric thermodynamics, radiative transfer, and global circulation.

### 💻 GitHub / Implementations

- [ClimaX](https://github.com/microsoft/ClimaX) — Foundation model for weather and climate.
- [GraphCast](https://github.com/google-deepmind/graphcast) — DeepMind's weather forecasting model.
- [FourCastNet](https://github.com/NVlabs/FourCastNet) — Global weather forecasting by NVIDIA.
- [Pangu-Weather](https://github.com/198808xc/Pangu-Weather) — Huawei's weather forecasting model.

## 📄 Foundational Papers

- [Learning skillful medium-range global weather forecasting (GraphCast)](https://www.science.org/doi/10.1126/science.adi2336) — Lam, Sanchez-Gonzalez, Willson, Wirnsberger et al. landmark Science paper establishing AI dominance in global weather prediction.
- [Accurate medium-range global weather forecasting with 3D neural networks (Pangu-Weather)](https://www.nature.com/articles/s41586-023-06185-3) — Bi et al. Nature paper demonstrating 3D vision transformers for atmospheric forecasting.

### 🧪 Practice

- [GraphCast Interactive Colab](https://colab.research.google.com/github/deepmind/graphcast/blob/master/graphcast_demo.ipynb) — Load real ERA5 weather data and run a 10-day global weather forecast directly in Google Colab.

### 🛠️ Projects

- [Global Extreme Temperature Forecast Pipeline](https://github.com/google-deepmind/graphcast) — Run GraphCast inference on live ECMWF atmospheric data and plot 2-meter temperature anomaly maps.

## 🧭 Recommended Learning Path

1. Understand the ERA5 global reanalysis dataset and its surface and atmospheric pressure levels.
2. Explore icosahedral multi-mesh representations for spherical geometries.
3. Run the official GraphCast demo notebook in Google Colab.
4. Study autoregressive rollout and techniques to prevent error accumulation over multi-day predictions.
5. Evaluate models against root-mean-square error (RMSE) and anomaly correlation coefficients (ACC).

## ⭐ Top 3 Resources

1. GraphCast (Google DeepMind / Science Paper)
2. ECMWF Machine Learning Resources
3. Microsoft ClimaX

