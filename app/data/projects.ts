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
      "Vanilla PHP",
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
    description: "A full-stack web-based Clinic Appointment Management System developed as a course project for Software Design and Implementation. The system digitalizes the school clinic workflow, providing a structured and efficient platform for students, doctors, and administrators.\n\nOn the user side, students can create, reschedule, cancel, and view both current and past medical appointments. The platform also maintains a medical history record for successful consultations, ensuring proper documentation and accessibility of past clinical interactions.\n\nOn the doctor side, healthcare personnel can monitor the live queue of appointments. The system includes a 30-minute grace period feature that automatically cancels unattended appointments to maintain scheduling efficiency. During consultations, doctors can record remarks, current symptoms, prescriptions, and optionally issue medical certificates directly through the system.\n\nOn the admin side, administrators can monitor system logins, manage accounts per role (Staff, User, Admin), and update account details such as ID, name, email, and assigned role. The system implements secure authentication mechanisms including Google Authentication and OTP verification to enhance security.\n\nThe project demonstrates structured system architecture, database normalization, role-based access control, workflow automation, and secure web deployment practices.",
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
    "Linear Regression",
    "Hyperparameter Optimization",
    "Python (Scikit-Learn)",
    "Data Preprocessing",
    "Carbon Emission Forecasting",
    "Environmental Data Science",
    "SDG 13: Climate Action",
    "Business Analytics"
    ],
  description:
    "Sustainalyze is a machine learning–powered carbon emission forecasting and classification system developed for the course Foundation of Business Analytics. The project aligns directly with United Nations Sustainable Development Goal (SDG) 13: Climate Action, focusing on predictive modeling of CO₂ emissions using sustainable energy and socioeconomic indicators.\n\nThe system utilizes a comprehensive global dataset including renewable energy share, fossil fuel electricity generation, nuclear and low-carbon energy contribution, GDP per capita, population density, primary energy consumption, and electricity access metrics. A full end-to-end analytics pipeline was implemented covering data preprocessing, correlation analysis, feature engineering, feature scaling, model training, evaluation, and hyperparameter optimization.\n\nMultiple regression models were compared, including Linear Regression, Random Forest Regressor, Support Vector Regressor (SVR), and Gradient Boosting Regressor. Models were evaluated using Mean Squared Error (MSE) and R² metrics. After optimization using Randomized Search Cross-Validation, Gradient Boosting achieved the strongest generalization performance (Test R² ≈ 0.9844), effectively capturing nonlinear relationships between economic and energy indicators.\n\nTo improve interpretability and real-world usability, continuous CO₂ predictions were converted into categorical emission levels (Low, Medium, High) using percentile-based thresholds. This classification layer enables clearer decision-making for sustainability planning and policy analysis.\n\nThe finalized model, feature scaler, and classification thresholds were serialized into .pkl files for reproducibility and deployment readiness. Sustainalyze demonstrates applied ensemble learning, environmental analytics, SDG-aligned system design, and advanced business analytics implementation.",
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
}
]