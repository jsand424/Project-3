# Project 3🏥 Hospital Infection Controls 

## Group 5 - Members Contribution:  

### 👱🏼 Jackson Sandler (Group Leader/Interatcive App)  
### 🧕🏽 Zahra Razook (Project Planner/ ETA: Data Cleaning & Transformation)  
### 👩🏻 Yuqi Huang (Proposal/ Data Analysis)  

## Purpose of our Project

The primary purpose of this project is to analyze hospital infection control data to identify
patterns, trends, and potential risk factors associated with healthcare-associated
infections (HAIs). By interpreting and visualizing these data, we aim to provide
comprehensive and actionable insights that can help healthcare professionals and
hospital administrators improve infection control measures, consequentially reducing the
incidence of HAIs.  

## Data Source and Public Interest
* *Source*:
According to the Author, the data is sourced from official healthcare databases and reports provided by health authorities and government agencies. These sources include the Centers for Disease Control and Prevention (CDC), Centers for Medicare & Medicaid Services (CMS), and other relevant health organizations. The data is collected from publicly available records to ensure transparency and accuracy.

The dataset refers to [Healthcare Associated Infections - Hospital](https://www.kaggle.com/datasets/muhammadfaizan65/hospital-infections-dataset?resource=download) was sourced from Kaggle.  

This dataset is highly relevant to public health as it addresses a critical aspect of patient
safety within healthcare settings. HAIs are a significant concern worldwide, leading to
increased patient morbidity, extended hospital stays [Zimlichman et al., 2013](https://jamanetwork.com/journals/jamainternalmedicine/article-abstract/1733452) and
additional healthcare costs [Mitchell et al., 2017](https://www.sciencedirect.com/science/article/pii/S2468045117300433). By analyzing this dataset, we aim to
contribute to public health awareness and promote more effective infection control
strategies.  

* *Collection Methodology*:
The data was collected through automated data retrieval systems and manual verification processes. Geographic and hospital-specific details were cross-referenced with official documentation from healthcare authorities. Infection measures and performance scores were validated through multiple rounds of review to ensure accuracy and reliability.

## ⚖️ Data Safety and Legal Consideration

* *Data Safety*: The dataset contains anonymized and aggregated data, which means no
personally identifiable information (PII) [Privacy and Data Protection Act 2014](https://content.legislation.vic.gov.au/sites/default/files/2023-08/14-60aa030-authorised.pdf) is included. This reduces the risk of violating
patients’ sensitive information.

* *Legal Considerations*: The dataset is publicly available on Kaggle which implies that it
has been shared under terms that allow for public use. Therefore, it is used ethically and
responsibly. We will ensure compliance with all relevant data protection laws and
guidelines, such as [The full text of the General Data Protection Regulation(GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679), by not
including any PII and using the data solely for educational and research purposes.  

### Data visualization path  

We aim to create at least three data visualizations using Python libraries such as:
- Python
- Pandas
- Matplotib
- Seaborn
- Numpy
- JavaScript: Plotly, D3

### 🎯 Goal   
The primary objective of this project, as detailed in the proposal, was to analyze hospital infection control data to identify patterns, trends, and potential risk factors associated with healthcare-associated infections (HAIs). By evaluating hospital performance using Standardized Infection Ratio (SIR) scores, our goal was to highlight how hospitals manage infections and offer actionable recommendations to improve infection control protocols.

### 📊 Sequences of Data Visualization
ETA
1. Data Extraction
   1) Identify data type, missing data & inconsistent naming
   2) Standardized formats
2. Data Transformation & Cleaning
   1) Date cleaning: Missing values outliers
   2) Created new variables that allow us to gain further insights
   3) Database with two tables
      - Hospital Table
      - Measure Table
4. Data Analysis
   1) Select key metrics regrading to the evidence-based guideline
      - **Standardized Infection Ratio (SIR)**, which compares observed infections to predicted ones.[The NHSN Standardized Infection Ratio (SIR). A Guide to the SIR (March, 2024)](https://www.cdc.gov/nhsn/pdfs/ps-analysis-resources/nhsn-sir-guide.pdf)
      - A ratio of less than 1 means fewer infections than expected (better performance), and a ratio greater than 1 means more infections than expected (worse performance). The SIR helps standardize infection rates across hospitals of different sizes and patient populations.
   2) Create pie and bar charts comparing the cleaned data
      - States (California)
      - Top 3 Better Performance hospitals in US
   3) Key findings to draw a conclusion

## ✅ Conclusion
Our group project successfully analyzed hospital infection control performance using Standardized Infection Ratio (SIR) scores across various healthcare-associated infections (HAIs). We highlighted that hospitals such as **ST ROSE DOMINICAN HOSPITALS - SIENA CAMPUS** in **Nevada** excelled in managing **central-line associated Infections**, while others, like **ST FRANCIS HEALTH CENTER INC** in **Kansas**, showed areas for improvement, particularly in **Clostridium difficile (C.diff.) Laboratory-identified Events (Intestinal infections)**. In addition, **Northeast Georgia Medical Center, Inc. in Georgia** has an exellent management in **catheter-associated Urinary Tract Infections**. 

This analysis demonstrates the importance of data-driven insights in improving hospital infection control measures. By adopting the best practices and protocols from ST ROSE DOMINICAN HOSPITALS - SIENA CAMPUS (CLABSI (ICUs only)), healthcare providers can significantly reduce fetal central line-associated bloodstream infection rates and improve patient outcomes in Intensive Care Units. As for catheter-associated Urinary Tract Infections control, we can adopt the practices and protocols from Northeast Georgia Medical Center, Inc.

Moving forward, future analyses can be enhanced by incorporating more granular data, predictive analytics, and interactive visualizations to provide hospitals with actionable insights for ongoing improvement in infection control.


### Usage of Jupyter Notebook
``` bash
git clone https://github.com/jsand424/Project-3.git
```
``` bash
# In the local repository
# Open GitBash
conda activate dev
jupyter notebook
```
## 📋 Access to the Interative App
``` bash
python -m http.server 8080
## Then open the local host in your web browser, entering: http://localhost:8080
## Drag down the Hospital ID to explore and choose your first-picked hospital 😍
```

## 📈 Future Improvement
While our analysis provided significant insights, there are several areas where we can improve our approach for future projects:
* *Enhanced Data Granularity*:
Future projects can benefit from more granular data—including patient demographics, hospital department-specific data, and details of infection control interventions (eg. Hand hygiene, Aseptic technique). This will allow for more precise analysis and tailored recommendations.

* *Incorporate Benchmarks*:
In future analyses, we can incorporate international benchmarks or regional peer comparisons to provide hospitals with a broader context of their performance. This will enable hospitals to understand how they compare not just nationally, but globally.

* *Predictive Modeling*:
Using predictive models can help hospitals foresee infection outbreaks or spikes in specific infections, allowing them to take preventive measures in advance. These models can be built using historical data and machine learning techniques.

* *Collaboration with Healthcare Providers*:
As data analysts, engaging with healthcare providers will ensure our analyses address real-world challenges. By understanding the challenges faced in infection control directly from the frontlines, we can make more targeted and impactful recommendations.
