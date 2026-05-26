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
    title: "AI Document Workflow Automation Platform",
    badges: [
      "Full-Stack",
      "AI",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "OpenAI GPT-4o-mini",
      "OCR",
      "Tesseract",
      "Semantic Search",
      "pgvector",
      "Docker",
      "Supabase",
      "MiniLM",
    ],
    description: "AI Document Workflow Automation Platform is a full-stack AI-powered document processing system that ingests scanned documents and PDFs, extracts text via dual-engine OCR, classifies and extracts structured fields using LLMs, stores data in a searchable database, and provides semantic search capabilities. The system is designed for real-world operational problems such as barangay documents, invoices, and HR resumes.\n\nI developed both backend and frontend architecture, building a FastAPI + SQLAlchemy backend with Supabase PostgreSQL for data persistence and Supabase Auth with RLS policies for security. The frontend is built with React + Vite + TypeScript and Tailwind CSS with Shadcn-style components, featuring dark theme glassmorphism design and loading skeletons.\n\nThe OCR pipeline uses Tesseract for image processing and PyMuPDF for PDFs, automatically detecting file types and routing to the correct engine. After text extraction, OpenAI GPT-4o-mini handles document classification and structured field extraction with per-field confidence scoring, enabling accurate data capture from varied document formats.\n\nFor search, I implemented a semantic search system using MiniLM embeddings (384-dim) stored in pgvector within Supabase PostgreSQL, performing cosine similarity searches with filename boosting. Background processing is handled via ARQ workers with Redis (Upstash) and automatic sync fallback for reliability.\n\nThe system includes a full admin dashboard with role-based access control, audit logging, and Recharts analytics. The platform is fully deployed with Docker, Vercel (frontend), Render (backend), and Supabase (database), demonstrating clean layered architecture with proper API → Services → Workers separation.",
    cover: "/projects/ai-doc-workflow/1.png",
    images: [
      "/projects/ai-doc-workflow/1.png",
      "/projects/ai-doc-workflow/2.png",
      "/projects/ai-doc-workflow/3.png",
      "/projects/ai-doc-workflow/4.png",
      "/projects/ai-doc-workflow/5.png",
      "/projects/ai-doc-workflow/6.png",
    ],
    github: "https://github.com/LioYoro/lio-ai-project",
  },

  {
    id: 2,
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
    id: 3,
    title: "SYNOPSIS",
    badges: [
      "React.js",
      "Qwen3.5-8B",
      "EasyOCR",
      "PaddleOCR",
      "ChromaDB",
      "RAG",
      "Docker",
      "Full-Stack",
      "LLM Integration",
      "Task Tracking",
      "OJT Project"
    ],
    description: "SYNOPSIS is an OJT project—a full-stack Viber chat summarization and task tracking system that transforms chat screenshots into structured daily reports. The system automates the tedious process of converting conversation screenshots into actionable insights.\n\nI contributed to both backend and frontend development, implementing an end-to-end pipeline from OCR extraction to LLM output generation. The screen watcher script records new Viber messages with auto-scrolling capability, capturing screenshots throughout the day. At day's end, these screenshots are processed through EasyOCR and PaddleOCR to extract text for downstream analysis.\n\nThe extracted text is compiled into JSON files, which are then fed into Qwen3.5-8B LLM for automated summarization. I implemented detailed prompt engineering with specialized instructions for generating overviews, conversational threads, and task listings. A separate LLM call isolates task listing for improved performance and accuracy.\n\nThe system utilizes Retrieval-Augmented Generation (RAG) concepts with ChromaDB for embedding storage and contextual retrieval, enhancing summarization relevance. Output is generated in both HTML and text formats for frontend display.\n\nOn the admin side, the platform provides user management, department management, and task aliasing for organized tracking. Regular users can view summaries, access historical reports, and execute the watcher script. The entire system is Dockerized for consistent environment setup and application portability, ensuring seamless deployment across different systems.",
    cover: "/projects/synopsis/1.jpg",
    images: [
      "/projects/synopsis/1.jpg",
      "/projects/synopsis/2.jpg",
      "/projects/synopsis/3.jpg",
      "/projects/synopsis/4.png"
    ],
    github: "https://github.com/catapangBERT/SINTOSIS-ENGINE1",
  },

  {
    id: 4,
    title: "Salapi — Personal Finance Automation",
    badges: [
      "n8n", "Telegram Bot", "Google Sheets API", "Docker",
      "JavaScript", "Low-Code", "Workflow Automation",
      "Personal Finance", "FinTech", "HTML Email",
      "ngrok", "Webhooks", "Data Privacy"
    ],
    description: "Salapi is a text-driven personal finance automation system that turns Telegram messages into structured financial records. Users send natural language commands such as 'gastos 310 grab' or 'gains 20000 freelance' and the system parses, categorizes, and logs transactions into Google Sheets in real time — no app installs, no spreadsheets to open, no friction.\n\nThe platform uses n8n for workflow orchestration running locally on Docker, with ngrok providing webhook tunneling for Telegram integration. A JavaScript-based Code node handles command parsing, amount extraction, and intelligent pattern matching to classify expenses into categories like Transport, Food, Clothes, Subscriptions, Bills & Utilities, Entertainment, and Health & Fitness.\n\nEvery transaction is instantly confirmed via Telegram and appended to structured Google Sheets with date, amount, title, category, and source fields. A monthly summary workflow runs on the 1st of every month via Schedule Trigger, reading both Expenses and Income sheets, filtering for the previous month, and sending a clean HTML email report with income totals, expense breakdowns by category, and net balance.\n\nThe entire system runs locally on Docker for data privacy, with n8n handling all integrations, webhooks, and scheduling. Built solo to solve a personal pain point — proving that low-code automation can deliver real utility without cloud dependency or complex infrastructure.",
    cover: "/projects/salapi/Salapi1.png",
    images: [
      "/projects/salapi/Salapi1.png",
      "/projects/salapi/Salapi2.png",
      "/projects/salapi/Salapi3.png",
      "/projects/salapi/Salapi4.png",
      "/projects/salapi/Salapi5.png",
      "/projects/salapi/Salapi6.png",
      "/projects/salapi/Salapi7.png"
    ]
  },

  {
    id: 5,
    title: "Waste2Wealth",
    badges: [
      "PHP",
      "E-Commerce",
      "Recycling",
      "MySQL",
      "Database Management",
      "SDG-Focused",
    ],
    description: "PHP platform for trading recyclable waste developed as a course project for Integrative Programming. I handled the full stack development, including frontend design and database management, ensuring the platform is fully scalable and responsive. Users can track the status of all bottles to be sold, with prices per kilo dynamically set based on research and economic trends, providing accurate and fair valuation for recyclable materials. On the admin side, statuses can be updated as 'On the Way for Pickup', 'Pending for Pickup', or 'Completed', enabling efficient management of transactions and smooth coordination between sellers and recyclers. The platform emphasizes efficiency, sustainability, and a seamless user experience for all stakeholders.",
    cover: "/projects/w2w/W2W.jpg",
    images: [
      "/projects/w2w/1.png",
      "/projects/w2w/2.PNG",
      "/projects/w2w/4.PNG",
    ],
    github: "https://github.com/LioYoro/Waste2Wealth",
  },

  {
    id: 6,
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
    id: 7,
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

  {
    id: 8,
    title: "NLP & Semantic Search Research Papers",
    badges: [
      "NLP", "BERT", "DistilBERT", "RoBERTa", "MiniLM",
      "Semantic Search", "Question Answering", "Fine-Tuning",
      "Python", "Information Retrieval"
    ],
    description: "A collection of research papers exploring natural language processing techniques, from foundational text preprocessing and representation methods to fine-tuning pretrained transformer models for semantic retrieval and question answering.\n\nProjects include: hate speech text preprocessing pipelines, TF-IDF/BoW/one-hot encoding comparisons, multi-task NLP models (classification 92%, sentiment 88%, POS tagging 84.6%, summarization ROUGE-1 F1 88.8%), BERT/DistilBERT/RoBERTa evaluation for extractive QA, and fine-tuning MiniLM for semantic book retrieval (MRR 0.9676). Hyperparameter optimization via Grid/Random Search achieved MRR 0.9928.\n\nAll papers follow IEEE format with corresponding Jupyter notebooks for reproducibility.",
    cover: "/projects/ieee/bert1.PNG",
    images: [
      "/projects/ieee/bert1.PNG", "/projects/ieee/bert2.PNG",
      "/projects/ieee/bert3.PNG", "/projects/ieee/bert4.PNG"
    ],
    github: "https://github.com/LioYoro/MachineLearningPapers",
    files: [
      { name: "NLP Text Preprocessing (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Preprocessing/Exer2_YORO_LeonardoAntero.pdf" },
      { name: "NLP Text Preprocessing (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Preprocessing/Exer2_YORO_LeonardoAntero.ipynb" },
      { name: "NLP Text Representation (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Representation/YoroLeonardoAntero_Exercise3_NLP_Representation.pdf" },
      { name: "NLP Text Representation (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Text%20Representation/YOROLeonardAntero_Exercise3_NLP_Representation.ipynb" },
      { name: "NLP Functions (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Functions/EM2_IEEE_Report_YOROLeonardoAntero.pdf" },
      { name: "NLP Functions (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Functions/ExerciseM2_YoroLeonardoAntero_NLP_Models.ipynb" },
      { name: "BERT QnA (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/BERT%20QnA/YOROLeonardoAntero%20-%20Exercise%20M3.pdf" },
      { name: "BERT QnA (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/BERT%20QnA/YORO_Exercise_M3.ipynb" },
      { name: "MiniLM Semantic Retrieval (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Fine-Tuning%20-%20Babysitting/YORO%2C%20LeonardoAntero%20-%20Exercise%20F2.pdf" },
      { name: "MiniLM Semantic Retrieval (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/NLP%20Fine-Tuning%20-%20Babysitting/YORO_EXERCISE_2_MODEL_FINETUNING.ipynb" },
      { name: "MiniLM Optimization (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Automated%20Optimizatiom/YORO%2C%20LeonardoAntero%20-%20Exercise%20F3.pdf" },
      { name: "MiniLM Optimization (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Automated%20Optimizatiom/YORO_EXERCISE_3_AUTOMATED_OPTIMIZATION.ipynb" }
    ]
  },

  {
    id: 9,
    title: "Machine Learning Predictive Modeling Research Papers",
    badges: [
      "Machine Learning", "kNN", "Linear Regression", "Neural Network",
      "MLP", "Ensemble", "Boosting", "Python"
    ],
    description: "A collection of research papers exploring classical and ensemble machine learning techniques across different domains. Covers K-Nearest Neighbors (Iris classification with bias–variance analysis), Linear Regression (NBA player performance prediction, R² = 0.969), Multinomial Logistic Regression vs Decision Trees (hyperparameter tuning comparison), Multilayer Perceptron (diabetes prediction with Adam solver optimization), and Ensemble/Boosting methods (bagging, AdaBoost, Gradient Boosting for improved healthcare classification).\n\nEach paper follows IEEE format documenting methodology, experimental results, and analysis of model tradeoffs. Demonstrates understanding of fundamental ML algorithms, feature engineering, hyperparameter tuning, and model evaluation.",
    cover: "/projects/ieee/ensemble.PNG",
    images: [
      "/projects/ieee/knn.PNG", "/projects/ieee/linreg.PNG",
      "/projects/ieee/logresdt.PNG", "/projects/ieee/mlp.PNG",
      "/projects/ieee/ensemble.PNG"
    ],
    github: "https://github.com/LioYoro/MachineLearningPapers",
    files: [
      { name: "KNN (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/K%20Nearest%20Neighbors/PT-P2-YORO_LeonardoAntero.pdf" },
      { name: "KNN (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/K%20Nearest%20Neighbors/PT_P2-YORO_LeonardoAntero.ipynb" },
      { name: "Linear Regression (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Linear%20Regression/PT-P3-YORO_LeonardoAntero.pdf" },
      { name: "Linear Regression (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Linear%20Regression/PT_P3-YORO_LeonardoAntero.ipynb" },
      { name: "Logistic Regression & DT (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/PT-M1-YORO_LeonardoAntero.pdf" },
      { name: "Logistic Regression & DT (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/YORO_LeonardoAntero-DT.ipynb" },
      { name: "MLR (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Logistic%20Regression%20(MLR)%20%26%20Decision%20Trees/YORO_LeonardoAntero-MLR.ipynb" },
      { name: "MLP Diabetes (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Multi-Layer%20Perceptrons%20(MLP)/YORO-Leonardo%20Antero-IEEE.pdf" },
      { name: "MLP Diabetes (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Multi-Layer%20Perceptrons%20(MLP)/YORO_LeonardoAntero_MLP.ipynb" },
      { name: "Ensemble & Boosting (IEEE)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Term%20Project/Yeagerists_FinalProject_IEEE-1.docx" },
      { name: "Ensemble & Boosting (.ipynb)", path: "https://github.com/LioYoro/MachineLearningPapers/blob/main/Term%20Project/Yeagerists_FinalProject_Models-1.ipynb" }
    ]
  }
]
