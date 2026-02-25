export interface Project {
  id: number
  title: string
  description: string
  cover: string
  images: string[]
  link?: string
  github?: string
  badges: string[]
  files?: { name: string; path: string }[]
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Academic Resource & Knowledge (ARK)",
    badges: [
      "AI",
      "GPT",
      "BERT",
      "MiniLM",
      "Database Management",
      "Full-Stack",
      "VPS",
      "Role-Based Access Control",
      "Email Notifications",
      "Book Recommendation System",
      "Semantic Search",
      "Statistical Summaries",
    ],
    description: "Academic Resource & Knowledge (ARK) is a full-stack AI-powered academic library platform developed as a capstone project. The system modernizes traditional library services by integrating intelligent search, recommendation systems, and interactive academic engagement features.\n\nI contributed to both backend and frontend development, implementing GPT-powered semantic search to allow contextual query understanding beyond traditional keyword-based SQL matching. Additionally, BERT (MiniLM) was integrated for efficient natural language query processing, significantly improving retrieval accuracy and relevance ranking of academic resources.\n\nBeyond search optimization, the platform includes a dynamic book recommendation engine that suggests materials based on a user’s course and education level. The system also features engagement-driven functionalities such as bookmarks, comments, likes and dislikes, enabling students to interact with resources and contribute feedback within the academic community.\n\nThe capstone system extends beyond a digital library by incorporating an Event Proposal Submission module, allowing users to propose academic events directly through the platform. Administrators can review, approve, and publish events seamlessly.\n\nAdvanced statistical dashboards were implemented, including visual analytics for Top Trending Books, Top Commented Books, and engagement metrics. On the admin side, the system provides tools for book status modification, reservation handling, event creation and posting, and visual performance monitoring to support data-driven decision making.\n\nI also implemented automated email notification workflows for reservations and system updates, supported database schema design and normalization, handled interface integration, and participated in production deployment using a Hostinger domain and Hosting VPS (KVM) server. The project demonstrates applied AI integration, scalable system architecture, role-based access control, semantic information retrieval, and production-ready deployment practices.",
    cover: "/projects/ark/HEXTECH-ARK-LOGO-WHITE.jpeg",
    images: [
      "/projects/ark/1.png",
      "/projects/ark/2.png",
      "/projects/ark/3.png",
      "/projects/ark/4.png",
      "/projects/ark/5.png",
      "/projects/ark/6.png",
      "/projects/ark/7.png",
      "/projects/ark/8.png",
    ],
    github: "https://github.com/LioYoro/HexTech-ARK_Library_System",
    files: [
      { name: "Capstone Documentation", path: "/projects/ark/HEXTECH - ARK CAPSTONE.pdf" },
    ],
  },

  {
    id: 2,
    title: "Waste2Wealth",
    badges: [
      "PHP",
      "E-Commerce",
      "Recycling",
      "MySQL",
      "Database Management",
      "SDG-Focused",
    ],
    description: "PHP platform for trading recyclable waste developed as a course project for Integrative Programming. I handled the full stack development, including frontend design and database management, ensuring the platform is fully scalable and responsive. Users can track the status of all bottles to be sold, with prices per kilo dynamically set based on research and economic trends, providing accurate and fair valuation for recyclable materials. On the admin side, statuses can be updated as ‘On the Way for Pickup’, ‘Pending for Pickup’, or ‘Completed’, enabling efficient management of transactions and smooth coordination between sellers and recyclers. The platform emphasizes efficiency, sustainability, and a seamless user experience for all stakeholders.",
    cover: "/projects/w2w/W2W.jpg",
    images: [
      "/projects/w2w/1.png",
      "/projects/w2w/2.PNG",
      "/projects/w2w/4.PNG",
    ],
    github: "https://github.com/LioYoro/Waste2Wealth",
  },

  {
    id: 3,
    title: "JRU Online Clinic Appointment System",
    badges: [
      "PHP",
      "MySQL",
      "Google Authentication",
      "OTP Verification",
      "Software Design & Implementation",
      "Role-Based Access Control",
      "Web Hosting",
      "Queue Management System",
    ],
    description: "A full-stack web-based system that digitizes school clinic workflows for students, doctors, and administrators. Students can manage appointments and access medical history, doctors can monitor queues, record consultations, and issue medical certificates, while admins manage user accounts and system security. The platform includes features like a 30-minute grace period for unattended appointments and secure authentication via Google and OTP. The project showcases structured system architecture, workflow automation, role-based access control, and secure deployment.",
    cover: "/projects/clinic/clinicLogo.png",
    images: [
      "/projects/clinic/1.png",
      "/projects/clinic/2.png",
      "/projects/clinic/3.png",
      "/projects/clinic/4.png",
      "/projects/clinic/5.png",
      "/projects/clinic/6.png",
      "/projects/clinic/7.png",
      "/projects/clinic/8.png",
      "/projects/clinic/9.png",
      "/projects/clinic/10.png",
      "/projects/clinic/11.png",
      "/projects/clinic/12.png",
      "/projects/clinic/13.png",
      "/projects/clinic/14.png",
    ],
    github: "https://github.com/LioYoro/YoroClinicAppSys",
    files: [
      { name: "System Diagrams", path: "/projects/clinic/JRU CLINIC APPOINTMENT SYSTEM DIAGRAMS.pdf" },
    ],
  },

  {
    id: 4,
    title: "Sustainalyze",
    badges: [
      "Machine Learning",
      "Gradient Boosting",
      "Data Preprocessing",
      "Carbon Emission Forecasting",
      "Environmental Data Science",
      "SDG 13: Climate Action",
      "Business Analytics"
    ],
    description:
      "A machine learning system for forecasting and classifying CO₂ emissions, aligned with SDG 13: Climate Action. It uses global energy and socioeconomic data, applies a full analytics pipeline including preprocessing, feature engineering, and model tuning, and compares multiple regression models. Gradient Boosting achieved the best performance (Test R² ≈ 0.9844), with predictions converted into Low/Medium/High categories for actionable insights. Sustainalyze demonstrates ensemble learning, environmental analytics, and end-to-end deployment-ready business analytics.",
    cover: "/projects/sustainalyze/sustainalyze.png",
    images: [
      "/projects/sustainalyze/1.png",
      "/projects/sustainalyze/2.png",
      "/projects/sustainalyze/3.png",
      "/projects/sustainalyze/4.png",
      "/projects/sustainalyze/5.png",
      "/projects/sustainalyze/6.png",
      "/projects/sustainalyze/7.png",
      "/projects/sustainalyze/8.png"
    ],
    github: "https://github.com/LioYoro/HexTech-FinalProject-ITCC307-402I",
    files: [
      {
        name: "IEEE Research Paper",
        path: "https://github.com/LioYoro/HexTech-FinalProject-ITCC307-402I/blob/main/IEEE_HEXTECH.pdf"
      }
    ]
  },

  /* ------------------ ML/IEEE Projects ------------------ */
  
  {
    id: 5,
    title: "K-Nearest Neighbors (Iris Classification)",
    badges: ["Machine Learning", "kNN", "Classification", "Python", "Data Analysis"],
    description: "Applied K-Nearest Neighbors to classify Iris flower species, analyzing how neighbor size affects bias–variance tradeoff. Validated with metrics and visualizations, highlighting the importance of parameter tuning and data quality.",
    cover: "/projects/ieee/knn.png",
    images: ["/projects/ieee/knn.png"],
    github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/K%20Nearest%20Neighbors",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/K%20Nearest%20Neighbors/PT-P2-YORO_LeonardoAntero.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/K%20Nearest%20Neighbors/PT_P2-YORO_LeonardoAntero.ipynb" }
    ]
  },

  {
    id: 6,
    title: "Linear Regression (NBA Analytics)",
    badges: ["Machine Learning", "Linear Regression", "Python", "Sports Analytics"],
    description: "Used regression to predict NBA players’ field goal attempts from performance metrics, emphasizing feature selection. Points scored alone provided high predictive power (R² = 0.969), while multiple features slightly improved accuracy.",
    cover: "/projects/ieee/linreg.png",
    images: ["/projects/ieee/linreg.png"],
    github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/Linear%20Regression",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Linear%20Regression/PT-P3-YORO_LeonardoAntero.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Linear%20Regression/PT_P3-YORO_LeonardoAntero.ipynb" },    ]
  },

  {
    id: 7,
    title: "Logistic Regression & Decision Tree",
    badges: ["Machine Learning", "Multinomial Logistic Regression", "Decision Tree"],
    description: "Compared Logistic Regression and Decision Tree for multinomial classification. Decision Tree gave higher peak accuracy but more variability; Logistic Regression was stable. Highlights strategic hyperparameter tuning and model selection for balanced predictive power.",
    cover: "/projects/ieee/logresdt.png",
    images: ["/projects/ieee/logresdt.png"],
    github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/PT-M1-YORO_LeonardoAntero.pdf" },
      { name: ".ipynb file DT", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/YORO_LeonardoAntero-DT.ipynb" },
      { name: ".ipynb file MLR", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/YORO_LeonardoAntero-MLR.ipynb" }
    ]
  },

  {
    id: 8,
    title: "Multilayer Perceptron (Diabetes Prediction)",
    badges: ["Machine Learning", "Neural Network", "MLP", "Python", "Healthcare Analytics"],
    description: "Neural network for diabetes prediction using health attributes. Tuned hidden layers, solver, learning rate, and batch size. Adam solver outperformed others; careful complexity control improved generalization.",
    cover: "/projects/ieee/mlp.png",
    images: ["/projects/ieee/mlp.png"],
    github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/Multi-Layer%20Perceptrons%20(MLP)",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Multi-Layer%20Perceptrons%20(MLP)/YORO-Leonardo Antero-IEEE.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Multi-Layer%20Perceptrons%20(MLP)/YORO_LeonardoAntero_MLP.ipynb" }
    ]
  },

  {
    id: 9,
    title: "Course Project – Ensemble & Boosting",
    badges: ["Machine Learning", "Ensemble", "Boosting", "Bagging", "MLP", "Diabetes Prediction", "Python"],
    description: "Compared traditional models (LR, DT, SVM) with ensemble methods for diabetes detection. Boosting achieved highest predictive performance, bagging improved stability. Highlights ensemble techniques for robust healthcare ML applications.",
    cover: "/projects/ieee/ensemble.png",
    images: ["/projects/ieee/ensemble.png"],
    github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/Term%20Project",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Term%20Project/Yeagerists_FinalProject_IEEE-1.docx" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Term%20Project/Yeagerists_FinalProject_Models-1.ipynb" }
    ]
  },

{
  id: 10,
  title: "NLP Text Preprocessing",
  badges: ["Python", "NLP", "Text Cleaning", "Data Preprocessing", "Pandas", "Tokenization", "Stopword Removal", "Lemmatization"],
  description: "Applied text preprocessing techniques on a labeled Twitter dataset for hate speech and offensive language detection. Steps included lowercasing, contraction expansion, removal of usernames, URLs, numbers, special characters, stopwords, and repeated-character normalization. Preprocessing reduced the dataset from 349,862 to 199,158 words, improving semantic clarity for NLP analysis.",
  cover: "/projects/ieee/textpre.png",
  images: ["/projects/ieee/textpre.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/NLP%20Text%20Preprocessing",
  files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Preprocessing/Exer2_YORO_LeonardoAntero.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Preprocessing/Exer2_YORO_LeonardoAntero.ipynb" }
    ]
},

{
  id: 11,
  title: "NLP Text Representation",
  badges: ["Python", "NLP", "One-Hot Encoding", "Bag of Words", "TF-IDF", "Text Representation"],
  description: "Introduced core NLP text representation methods including dictionary lookup, one-hot encoding, Bag of Words, and TF-IDF, converting raw text into numerical formats suitable for models. TF-IDF improved relevance weighting across corpora. Implemented in Python using scikit-learn, emphasizing understanding each representation method for downstream tasks like classification, clustering, and language modeling.",
  cover: "/projects/ieee/textrep1.png",
  images: ["/projects/ieee/textrep1.png","/projects/ieee/textrep2.png", "/projects/ieee/textrep3.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/NLP%20Text%20Representation",
  files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Representation/YoroLeonardoAntero_Exercise3_NLP_Representation.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Representation/YOROLeonardAntero_Exercise3_NLP_Representation.ipynb" }
    ]
},

{
  id: 12,
  title: "NLP Functions",
  badges: ["Python", "NLP", "Text Classification", "Sentiment Analysis", "POS Tagging", "Text Summarization"],
  description: "Developed NLP models for sports journalism: text classification, sentiment analysis, part-of-speech tagging, and text summarization. Preprocessed and manually annotated datasets enabled evaluation against high-performance benchmarks: classification 92%, sentiment 88%, POS tagging 84.6%, summarization ROUGE-1 F1 88.8%. Highlights the importance of preprocessing, dataset annotation, and evaluation for effective NLP pipelines.",
  cover: "/projects/ieee/nlpMdlsTS.png",
  images: ["/projects/ieee/nlpMdls.png", "/projects/ieee/nlpMdlsTC.png","/projects/ieee/nlpMdlsSA.png", "/projects/ieee/nlpMdlsPoST.png", "/projects/ieee/nlpMdlsTS.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/NLP%20Functions",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Functions/EM2_IEEE_Report_YOROLeonardoAntero.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Functions/ExerciseM2_YoroLeonardoAntero_NLP_Models.ipynb" }
    ]
},

{
  id: 13,
  title: "BERT Question Answering",
  badges: ["Python", "NLP", "BERT", "DistilBERT", "RoBERTa", "Question Answering", "Pretrained Models"],
  description: "Evaluated pretrained question-answering models (BERT, DistilBERT, BERT-Large, RoBERTa) on contextual questions from local news articles. Metrics included Exact Match, F1 score, confidence, and inference time. DistilBERT achieved the best balance of accuracy and speed; RoBERTa had comparable accuracy with slightly slower inference; BERT-Large had lower scores and longest inference. Emphasizes impact of model architecture, pre-training, and fine-tuning in extractive QA.",
  cover: "/projects/ieee/bert1.png",
  images: ["/projects/ieee/bert1.png","/projects/ieee/bert2.png","/projects/ieee/bert3.png","/projects/ieee/bert4.png","/projects/ieee/bert5.png","/projects/ieee/bert6.png","/projects/ieee/bert7.png","/projects/ieee/bert8.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/BERT%20QnA",
    files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/BERT%20QnA/YOROLeonardoAntero%20-%20Exercise%20M3.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/BERT%20QnA/YORO_Exercise_M3.ipynb" }
    ]
},

{
  id: 14,
  title: "MiniLM Semantic Retrieval",
  badges: ["Python", "NLP", "MiniLM", "Semantic Search", "Sentence Embeddings", "Information Retrieval"],
  description: "Fine-tuned MiniLM for semantic retrieval on 6,000+ book titles and descriptions using Multiple Negatives Ranking Loss. Optimized embeddings placed relevant book-query pairs closer in semantic space, evaluated via Mean Reciprocal Rank and Top-K accuracy. Optimal settings (10 epochs, weight decay 0.01, test size 0.3) achieved MRR 0.9676 and Top-1 0.9451, enabling accurate, context-aware book recommendations.",
  cover: "/projects/ieee/bbst2.png",
  images: ["/projects/ieee/bbst1.png","/projects/ieee/bbst2.png","/projects/ieee/bbst3.png","/projects/ieee/bbst4.png","/projects/ieee/bbst5.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/NLP%20Fine-Tuning%20-%20Babysitting",
  files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Fine-Tuning%20-%20Babysitting/YORO%2C%20LeonardoAntero%20-%20Exercise%20F2.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Fine-Tuning%20-%20Babysitting/YORO_EXERCISE_2_MODEL_FINETUNING.ipynb" }
    ]
},

{
  id: 15,
  title: "Automated MiniLM Optimization",
  badges: ["Python", "NLP", "MiniLM", "Semantic Retrieval", "Hyperparameter Tuning", "Grid Search", "Random Search"],
  description: "Performed systematic hyperparameter tuning for MiniLM on semantic retrieval tasks. Explored epochs, weight decay, learning rate, batch size, warmup steps, shuffle, and mixed-precision using Grid and Random Search. Optimal configuration (10 epochs, weight decay 0.01, learning rate 3e-5, batch size 4, 500 warmup steps) produced MRR 0.9928, Top-1 0.9878, Top-3/Top-5 1.0, demonstrating highly effective embeddings for accurate, contextual book recommendations.",
  cover: "/projects/ieee/search2.png",
  images: ["/projects/ieee/search1.png","/projects/ieee/search2.png","/projects/ieee/search3.png","/projects/ieee/search4.png","/projects/ieee/search5.png"],
  github: "https://github.com/LioYoro/MachineLearningPapers/tree/main/Automated%20Optimizatiom",
  files: [
      { name: "IEEE Paper", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Automated%20Optimizatiom/YORO%2C%20LeonardoAntero%20-%20Exercise%20F3.pdf" },
      { name: ".ipynb file", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Automated%20Optimizatiom/YORO_EXERCISE_3_AUTOMATED_OPTIMIZATION.ipynb" }
    ]
}

]