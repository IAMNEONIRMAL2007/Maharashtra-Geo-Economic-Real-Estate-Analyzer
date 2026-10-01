# 🌆 Maharashtra Geo-Economic & Real Estate Analyzer

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=22&pause=1000&color=2ECC71&center=true&vCenter=true&width=600&lines=Artificial+Intelligence+Pipeline;K-Means+Business+Clustering;Real+Estate+Price+Forecasting;Gradio+Web+Application)](https://git.io/typing-svg)

<div align="center">
  <img src="https://img.shields.io/badge/Python-3.10+-blue.svg?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" alt="Scikit-Learn">
  <img src="https://img.shields.io/badge/Pandas-2C2D72?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas">
  <img src="https://img.shields.io/badge/Gradio-FF7C00?style=for-the-badge&logo=gradio&logoColor=white" alt="Gradio">
</div>

<br>

> **An AI-powered real estate and economic analyzer for Maharashtra. Features a custom data pipeline with outlier removal, K-Means clustering for business viability scoring, and Linear Regression for price forecasting.**

---

## 🔄 System Architecture & Data Flow

*GitHub will automatically render this interactive flowchart.*

```mermaid
graph TD
    %% Data Layer
    A[1_data_generator.py] -->|Generates Base Data| B[(maharashtra_data.csv)]
    
    %% ML Layer
    B --> C[2_ml_models.py]
    C -->|Statistical Filtering| D[Outlier Removal ±2σ]
    D -->|Derive Metrics| E[Feature Engineering]
    
    %% Split Models
    E --> F{ML Algorithms}
    F -->|Unsupervised| G[K-Means Clustering]
    F -->|Supervised| H[Linear Regression]
    
    %% Output
    G -->|Opportunity Score| I[(maharashtra_analyzed.csv)]
    H -->|5-Yr Price Prediction| I
    
    %% UI Layer
    I --> J[3_app_ui.py]
    J -->|Gradio Dashboard| K((Live Web App))
    
    %% Styling
    classDef file fill:#2C2D72,stroke:#fff,stroke-width:2px,color:#fff;
    classDef data fill:#2ECC71,stroke:#fff,stroke-width:2px,color:#fff;
    classDef model fill:#F7931E,stroke:#fff,stroke-width:2px,color:#fff;
    
    class A,C,J file;
    class B,I data;
    class G,H model;
