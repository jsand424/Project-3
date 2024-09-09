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
4. Data Analysis
   1) Select key metrics regrading to the evidence-based guideline
      - **Standardized Infection Ratio (SIR)**, which compares observed infections to predicted ones.[The NHSN Standardized Infection Ratio (SIR). A Guide to the SIR (March, 2024)](https://www.cdc.gov/nhsn/pdfs/ps-analysis-resources/nhsn-sir-guide.pdf)
      - A ratio of less than 1 means fewer infections than expected (better performance), and a ratio greater than 1 means more infections than expected (worse performance). The SIR helps standardize infection rates across hospitals of different sizes and patient populations.
   2) Create pie and bar charts comparing the cleaned data
      - States
      - Local hospitals
   3) Key findings draw a conclusion

## ✅ Conclusion
This project has successfully highlighted important insights into hospital infection control performance, with **ST ROSE DOMINICAN HOSPITALS - SIENA CAMPUS** in **Nevada** state emerging as a top performer. Healthcare providers in other hospitals can adopt protocols from ST ROSE DOMINICAN HOSPITALS for better infection management, especially in **central line-associated infections**, **catheter-associated urinary tract infections**, and **C.diff** (Colon-associated Bacteria) prevention. These protocols could help promote better patient outcomes across acute and surgical settings. By adopting infection control protocols from top-performing hospitals and focusing on areas of weakness, hospitals can significantly reduce infection rates and improve patient outcomes. As data analysts, we can further improve future projects by leveraging more granular data, predictive models, and close collaboration with healthcare professionals to deliver actionable insights.

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

### Deploy the Interactive App
The final interactive App can be directed into our website by clicking [Helathcare Performance Dashboard]()

The link was generated from the Github:
1) Slect 'Settings'![image](https://github.com/user-attachments/assets/d15e1efd-af7a-4fed-8178-e71a290f8193)
2) In the Settings Section, select 'Pages'
3) Choose the 'main' branch and 'Save'
![image](https://github.com/user-attachments/assets/c8e458af-a964-449c-bbb4-6567772a78c6)

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
