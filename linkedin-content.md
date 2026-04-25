LINKEDIN CONTENT - Leonardo Antero Yoro

====================================================================


LINKEDIN PROJECT ENTRIES

--------------------------------------------------------------------


PROJECT 1: ARK (Academic Resource & Knowledge)

Project Name: ARK (Academic Resource & Knowledge) - Capstone Project

Description:
ARK is a comprehensive full-stack AI-powered academic library platform developed as my capstone project. The system modernizes traditional library services by integrating intelligent search capabilities, personalized recommendation systems, and interactive academic engagement features.

On the frontend, users can search for books using natural language queries, receive AI-powered recommendations based on their course and education level, and engage with the community through bookmarks, comments, and likes/dislikes. The admin dashboard provides tools for book status management, reservation handling, event creation and posting, and visual performance monitoring through statistical analytics.

On the backend, I implemented GPT-powered semantic search enabling contextual query understanding beyond traditional keyword-based SQL matching. BERT (MiniLM) was integrated for efficient natural language query processing, significantly improving retrieval accuracy and relevance ranking of academic resources. The system includes automated email notification workflows for reservations and system updates.

Skills: Full-Stack Development, Artificial Intelligence (AI), Database Management, PHP, MySQL, GPT Integration, BERT, VPS Deployment

Media: /projects/ark/HEXTECH-ARK-LOGO-WHITE.jpeg (plus screenshots)

--------------------------------------------------------------------


PROJECT 2: SYNOPSIS (SINTOSIS ENGINE)

Project Name: SYNOPSIS - Viber Chat Summarization and Task Tracking System

Description:
SYNOPSIS (SINTOSIS ENGINE) is an On-the-Job Training (OJT) project - a full-stack Viber chat summarization and task tracking system that transforms chat screenshots into structured daily reports. The system automates the tedious process of converting conversation screenshots into actionable insights.

I contributed to both backend and frontend development, implementing an end-to-end pipeline from OCR extraction to LLM output generation. The screen watcher script records new Viber messages with auto-scrolling capability, capturing screenshots throughout the day. At day's end, these screenshots are processed through EasyOCR and PaddleOCR to extract text for downstream analysis.

The extracted text is compiled into JSON files, which are then fed into Qwen3.5-8B LLM for automated summarization. Detailed prompt engineering was implemented with specialized instructions for generating overviews, conversational threads, and task listings. A separate LLM call isolates task listing for improved performance and accuracy.

The system utilizes Retrieval-Augmented Generation (RAG) concepts with ChromaDB for embedding storage and contextual retrieval, enhancing summarization relevance. Output is generated in both HTML and text formats for frontend display. On the admin side, the platform provides user management, department management, and task aliasing for organized tracking. The entire system is Dockerized for consistent environment setup and application portability.

Skills: React.js, Large Language Models (LLM), Docker, Python, Retrieval-Augmented Generation (RAG), EasyOCR, PaddleOCR, ChromaDB, Qwen

Media: /projects/synopsis/1.jpg (plus screenshots)

--------------------------------------------------------------------


PROJECT 3: Sustainalyze

Project Name: Sustainalyze - CO2 Emission Forecasting and Classification

Description:
Sustainalyze is a machine learning system designed for forecasting and classifying CO2 emissions, aligned with SDG 13: Climate Action. The system leverages global energy and socioeconomic data to predict emission levels and provide actionable insights.

I developed a complete analytics pipeline including data preprocessing, feature engineering, and extensive model tuning. Multiple regression models were compared to identify the best-performing approach. Gradient Boosting achieved the highest performance with a Test R2 score of approximately 0.9844, demonstrating excellent predictive accuracy.

The predictions are converted into categorical classifications (Low/Medium/High) for actionable insights, enabling stakeholders to quickly assess emission levels and take appropriate action. The project showcases ensemble learning techniques, environmental analytics, and end-to-end deployment-ready business analytics workflows.

Skills: Machine Learning, Python, Gradient Boosting, Data Analysis, Business Analytics, Regression Models, Feature Engineering

Media: /projects/sustainalyze/sustainalyze.png (plus screenshots)

--------------------------------------------------------------------


PROJECT 4: JRU Online Clinic Appointment System

Project Name: JRU Online Clinic Appointment System

Description:
A full-stack web-based system that digitizes school clinic workflows for students, doctors, and administrators. The platform streamlines appointment management, medical history tracking, and consultation recording.

For students, the system allows booking appointments and accessing medical history. Doctors can monitor queue status, record consultations, and issue medical certificates digitally. Administrators have comprehensive tools for user account management and system security.

Key features include a 30-minute grace period for unattended appointments to handle no-shows gracefully, and secure authentication via Google OAuth and OTP (One-Time Password) verification for enhanced security.

The project demonstrates structured system architecture, workflow automation, role-based access control for three distinct user types, and secure deployment practices.

Skills: PHP, MySQL, Web Development, Role-Based Access Control, Google Authentication, OTP Verification, System Architecture

Media: /projects/clinic/clinicLogo.png (plus screenshots)


====================================================================


LINKEDIN POST DRAFTS

--------------------------------------------------------------------


POST 1: ARK (Academic Resource & Knowledge)

Project Spotlight: ARK (Academic Resource & Knowledge)

My capstone project is complete! A year of development, countless iterations, and I am proud to share what my team and I built.

The Problem We Solved:
Traditional academic libraries rely on keyword-based search, which misses the context of what students actually need. A search for "machine learning applications" might miss relevant books about neural networks if they do not explicitly use that phrase.

What I Built:
A full-stack AI-powered academic library platform with:

Semantic Search with GPT - Users can ask questions naturally. "What books help with understanding AI for beginners?" returns contextually relevant results, not just keyword matches.

BERT-Powered Query Processing - Integrated MiniLM for efficient natural language understanding, improving retrieval accuracy significantly.

Book Recommendation Engine - Suggests materials based on course enrollment and education level, personalizing the experience.

Engagement Features - Students can bookmark favorites, leave comments, and like/dislike resources to surface the best content.

Event Proposal System - Users submit academic event proposals, admins review and publish - bridging digital and physical campus activities.

Admin Dashboard - Tools for book status management, reservation handling, event creation, and visual analytics for Top Trending Books and engagement metrics.

Automated Notifications - Email workflows for reservation confirmations and system updates.

Tech Stack: PHP, MySQL, GPT Integration, BERT (MiniLM), VPS (Hostinger), Role-Based Access Control, Email Automation

What I Learned:
This project taught me how to bridge AI capabilities with practical user needs - from semantic search algorithms to database normalization. It also showed me the importance of planning scalable architecture from day one.

Special thanks to my capstone team for the collaboration and late-night debugging sessions!

#CapstoneProject #FullStackDevelopment #AI #AcademicLibrary #GPT #BERT #PHP #MySQL

--------------------------------------------------------------------


POST 2: SYNOPSIS (SINTOSIS ENGINE)

OJT Project Spotlight: SYNOPSIS - Viber Chat Summarization

Real-time collaboration happens on Viber, but generating daily summaries for task tracking has always been manual and tedious - until now.

The Problem:
Teams communicate rapidly on Viber, making it difficult to track what decisions were made, who committed to what tasks, and key discussion points for stakeholders. End-of-day reports often required someone to manually scroll through hours of chat history and piece together summaries.

My Solution:
An automated end-to-end pipeline:

1. Screen Watcher (Auto-Screenshot Capture) - A Python script that monitors the Viber window, auto-scrolls to capture new messages, and saves screenshots throughout the day. The watcher runs silently in the background.

2. OCR Processing (Text Extraction) - At day's end, screenshots are processed through EasyOCR and PaddleOCR. Both engines are used for accuracy - PaddleOCR handles structured text well, while EasyOCR excels with varied fonts and layouts. The extracted text is compiled into structured JSON files.

3. LLM Summarization (Qwen3.5-8B) - The JSON files are fed into Qwen3.5-8B LLM with carefully engineered prompts. I implemented specialized instructions for generating daily overviews, identifying conversational threads and key discussions, and extracting action items and tasks. A separate LLM call is dedicated solely to task extraction for better accuracy - this isolation improves performance by avoiding context dilution.

4. RAG-Powered Context (ChromaDB) - The system uses Retrieval-Augmented Generation with ChromaDB for embedding storage. Previous summaries and context are stored as embeddings, enabling the LLM to reference historical information for better continuity.

5. Output Generation - Final summaries are generated in both HTML (for web display) and text formats. The frontend shows readable reports organized by date.

Admin Features:
- User management and authentication
- Department management for organizing teams
- Task aliasing (aliases point to responsible users)
- Historical summary access

Tech Stack: React.js, Python, Qwen3.5-8B, EasyOCR, PaddleOCR, ChromaDB, Docker, RAG

This project pushed my skills in LLM integration, prompt engineering, and building production-ready AI pipelines. Grateful for the hands-on OJT experience!

#OJT #ViberChat #LLM #OCR #RAG #Docker #ReactJS #Qwen #Automation #PromptEngineering

--------------------------------------------------------------------


POST 3: Sustainalyze

Project Spotlight: Sustainalyze - CO2 Emission Forecasting

Can machine learning help us predict and address climate change?

My latest project combines environmental data science with predictive analytics to forecast CO2 emissions - aligned with SDG 13: Climate Action.

The Goal:
Build a system that can forecast emission levels and classify them into actionable categories (Low/Medium/High) to help stakeholders make informed environmental decisions.

What I Built:

Data Pipeline:
- Collected global energy consumption and socioeconomic indicators
- Extensive data preprocessing and cleaning
- Feature engineering to extract meaningful predictors
- Normalized and scaled data for optimal model performance

Model Development:
I compared multiple regression approaches:
- Linear Regression as baseline
- Logistic Regression for classification
- Decision Trees for interpretability
- Gradient Boosting (final choice)

Gradient Boosting Results:
- Test R2 approximately 0.9844
- This means the model explains 98.44% of variance in CO2 emissions
- Highly reliable for prediction and planning

Classification Output:
Predictions are converted into categorical buckets:
- Low - Emissions within acceptable thresholds
- Medium - Requires monitoring and potential intervention
- High - Immediate action recommended

Business Impact:
The system enables data-driven environmental decision-making. Organizations can anticipate emission trends, allocate resources efficiently, and track progress toward sustainability goals.

Tech Stack: Python, Scikit-learn, Pandas, NumPy, Matplotlib, Gradient Boosting

What This Taught Me:
Beyond technical ML skills, this project showed me how data science can drive meaningful environmental change. Numbers and predictions can become actionable insights that shape policy and practice.

#MachineLearning #ClimateAction #SDG13 #GradientBoosting #DataScience #Python #EnvironmentalAnalytics

--------------------------------------------------------------------


POST 4: JRU Online Clinic Appointment System

Project Spotlight: JRU Online Clinic Appointment System

From paper-based scheduling to streamlined digital workflows - my web development project modernized my school's clinic operations.

The Challenge:
Students waited in physical lines for appointments. Doctors juggled paper records. Administrators had no visibility into clinic traffic. It was inefficient and frustrating for everyone.

What I Built:
A comprehensive appointment management system with three distinct user experiences:

For Students:
- Register and authenticate via Google OAuth or email
- Browse available appointment slots
- Book, reschedule, or cancel appointments
- Access personal medical history
- Receive appointment reminders

For Doctors:
- View real-time queue status
- Record consultations with patient notes
- Issue medical certificates digitally
- Manage their availability schedule
- Track patient history per visit

For Administrators:
- Complete user account management
- System security configuration
- Analytics on clinic traffic and peak hours
- Book inventory management
- Audit logs for compliance

Key Features I Implemented:

30-Minute Grace Period:
Unattended appointments after 30 minutes are automatically marked as no-shows, freeing up slots for other students.

Secure Authentication:
- Google OAuth for quick student registration
- OTP (One-Time Password) verification for account security
- Role-based access control ensuring users only see what they need

Queue Management:
Real-time queue display shows waiting students, estimated wait times, and queue position - eliminating confusion and reducing crowding.

Medical Certificate Generation:
Doctors generate certificates digitally, signed and timestamped, reducing paperwork and improving record-keeping.

Tech Stack: PHP, MySQL, Google Authentication, OTP, JavaScript, HTML/CSS, Bootstrap

System Architecture:
- MVC pattern for clean code organization
- Prepared statements for SQL injection prevention
- Session management for authenticated states
- Deployed on web hosting with SSL

What I Learned:
This project reinforced that good software is not just about features - it is about user experience. Every workflow needed to be intuitive for non-technical users while maintaining security and efficiency.

Building for a real school with real students made the project meaningful. Seeing the system in daily use was incredibly rewarding.

#WebDevelopment #HealthcareIT #PHP #MySQL #FullStack #UserExperience #GoogleAuth #SchoolTech


====================================================================


BONUS: CERTIFICATION POST

Just Added 3 New Certifications to My Profile!

Three certifications that validate my technical knowledge across IT fundamentals, database management, and artificial intelligence.

1. CompTIA ITF+ (Information Technology Fundamentals)
Certified: December 2022

This certification provided a solid foundation in essential IT concepts: computer hardware and software, networking fundamentals, security basics, data management, and IT career pathways. Ideal for establishing core technical knowledge and understanding how different IT components work together.

2. Pearson Database Certification - Exam Passer
Certified: May 2024

Validates my skills in database concepts and terminology, SQL fundamentals and queries, database design and normalization, data manipulation and management, and understanding relational database structures. This certification directly applies to my work with MySQL in projects like ARK and the JRU Clinic system.

3. AI Singapore - AI for Industry
Certified: May 2025

Focused on practical AI applications: machine learning concepts and workflows, data-driven problem solving, real-world AI implementation, responsible AI considerations, and industry use-cases and best practices. This cert bridges my academic learning with practical AI skills used in SYNOPSIS (LLM/RAG) and Sustainalyze (ML).

Why Certifications Matter:
While portfolio projects demonstrate what I can build, certifications validate foundational knowledge. They show commitment to continuous learning and professional development.

Currently pursuing more certifications to deepen my expertise in cloud computing and AI/ML. The journey continues!

#CompTIA #Database #AI #Certifications #ContinuousLearning #BSIT #AITech #CareerDevelopment


====================================================================


SUGGESTED POSTING ORDER AND SCHEDULE

Week 1: ARK post + Project entry
Week 2: SYNOPSIS post + Project entry
Week 3: Sustainalyze post + Project entry
Week 4: JRU Clinic post + Project entry
Week 5: Certification post

Best Posting Times: Tuesday-Thursday, 8-10 AM or 6-8 PM local time

Engagement Tips:
- Respond to comments within the first hour
- Reply thoughtfully to connect with commenters
- End posts with questions to encourage interaction
- Tag relevant technologies and communities