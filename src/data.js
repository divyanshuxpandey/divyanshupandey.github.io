export const profile = {
  name: 'Divyanshu Pandey',
  brand: 'DIVYANSHU',
  title: 'GenAI Engineer & Cloud Architect',
  tagline: 'GENAI.ENGINE',
  role: 'GenAI • Forward Deployed Engineering • Cloud Architecture',
  location: 'Faridabad, Haryana, India',
  email: 'pdivyanshu918@gmail.com',
  phone: '+91-9006188881',
  linkedin: 'https://linkedin.com/in/divyanshupandey18',
  github: 'https://github.com/divyanshuxpandey',
  // Relative (no leading slash / handled via BASE_URL): this deploys under
  // a GitHub Pages project subpath (/divyanshupandey.github.io/), not the
  // domain root.
  resumeUrl: 'Divyanshu_Pandey_Resume.pdf',
  summary:
    'Software Development Engineer building GenAI systems and cloud architecture in production: RAG/LLM pipelines, AWS pipelines (S3, Lambda, Airflow) writing into PostgreSQL, and containerized services (Docker, Kubernetes) — shipped embedded directly with operations teams, validated against live production data, across IoT, media, and fintech systems.',
  stackLine: 'GenAI/RAG • AWS Architecture • LLM Ops • Docker/K8s',
};

export const stats = [
  { value: '1.5+', label: 'Years in production data & cloud systems' },
  { value: '15%', label: 'Engagement/CTR lift from a shipped recommendation engine' },
  { value: '8%', label: 'Churn cut with logistic regression & XGBoost models' },
  { value: '78%', label: 'Directional accuracy, ARIMA/LSTM stock-trend model' },
];

export const achievements = [
  { text: 'National Semi-Finalist, ', strong: 'Meta HackerCup 2025', rest: ' — India Rank 112, Global Rank 716 among 13,000+ participants.' },
  { text: 'All India Rank 466, ', strong: 'Codeforces Round 1020 (Div. 3)', rest: ' — Global Rank 1783 among 40,000+ contestants.' },
  { text: 'Top 20 Finalist, ', strong: 'Samsung Solve for Tomorrow (India)', rest: ' — selected nationally for an impactful real-world tech solution.' },
  { text: '1st Place, ', strong: 'Entrepreneurship Summit', rest: ' — J.C. Bose University of Science and Technology (YMCA), Faridabad.' },
];

export const techStack = [
  'AWS', 'PostgreSQL', 'Docker', 'Kubernetes', 'Python', 'Apache Airflow', 'LangChain', 'GitHub Actions',
];

export const expertiseData = [
  {
    number: '01',
    title: 'GenAI & LLM Systems',
    text: 'Building RAG pipelines, vector-store retrieval, and LangChain-orchestrated LLM workflows — from multi-modal research automation to real-time translation.',
    tag: 'RAG / LANGCHAIN / VECTOR DB',
    gradient: 'from-[#1a0809] via-[#111111] to-[#090909]',
  },
  {
    number: '02',
    title: 'Forward-Deployed Engineering',
    text: 'Embedding directly with operations teams to ship working AI tools fast — LLM-based auto-drafting, anomaly detection, validated against live production data before rollout, not staged demos.',
    tag: 'CUSTOMER-EMBEDDED DELIVERY',
    gradient: 'from-[#220a0d] via-[#131313] to-[#0a0a0a]',
  },
  {
    number: '03',
    title: 'Cloud Architecture',
    text: 'Designing AWS-based data and ML systems end to end (S3, Lambda, Airflow → PostgreSQL), containerized with Docker/Kubernetes and deployed via CI/CD.',
    tag: 'AWS SYSTEM DESIGN',
    gradient: 'from-[#1f0a0c] via-[#121212] to-[#0a0a0a]',
  },
  {
    number: '04',
    title: 'ML & Data Modeling',
    text: 'Shipping recommendation engines, churn models (XGBoost, logistic regression), and time-series forecasting (ARIMA/LSTM) on production data.',
    tag: 'ML / FEATURE ENGINEERING',
    gradient: 'from-[#1d090b] via-[#101010] to-[#080808]',
  },
];

export const skillCategories = [
  {
    title: 'Database & Data Storage',
    desc: 'Designing schemas and pipelines across relational and vector stores, optimized for low-latency production reads.',
    tag: 'DATA STORAGE',
    skills: ['PostgreSQL', 'SQL', 'RDBMS', 'Vector Databases', 'Data Pipeline Design'],
  },
  {
    title: 'Cloud & Infrastructure',
    desc: 'Operating containerized, cloud-hosted production services with a focus on reliability and cost efficiency.',
    tag: 'INFRASTRUCTURE',
    skills: ['AWS (EC2, S3, Lambda, SageMaker)', 'GCP (BigQuery)', 'Docker', 'Kubernetes', 'Linux'],
  },
  {
    title: 'GenAI & LLM Engineering',
    desc: 'Shipping LLM-driven, RAG-based systems — from semantic retrieval pipelines to locally hosted multilingual translation.',
    tag: 'RAG & LLM',
    skills: ['LangChain', 'RAG', 'Vector Retrieval', 'Ollama', 'LLM Tooling'],
  },
  {
    title: 'Automation & Scripting',
    desc: 'Automating infrastructure and data workflows end to end, from ingestion scripts to CI/CD deploy pipelines.',
    tag: 'AUTOMATION',
    skills: ['Bash', 'Python', 'Git', 'GitHub Actions', 'Jenkins', 'Apache Airflow'],
  },
  {
    title: 'Programming Languages',
    desc: 'Comfortable across systems and scripting languages, picking the right tool for backend, data, and automation work.',
    tag: 'LANGUAGES',
    skills: ['Python', 'SQL', 'Go', 'C++', 'Bash'],
  },
  {
    title: 'Monitoring & Reliability',
    desc: 'Keeping production data pipelines healthy with proactive monitoring, validation, and root-cause troubleshooting.',
    tag: 'RELIABILITY',
    skills: ['Production Monitoring', 'System Health Checks', 'Root-Cause Troubleshooting', 'Data Quality Validation'],
  },
];

// Real projects, leading with the flagship GenAI/LLM builds.
export const projectsData = [
  {
    title: 'mMARS',
    category: 'GenAI / RAG Architecture',
    description:
      'LLM-driven, RAG-based pipeline for multi-format data extraction, with modular embeddings and vector-based semantic retrieval built for low-latency lookups at query time.',
    tags: ['Python', 'LangChain', 'RAG', 'AWS', 'Vector DB'],
    match: '100%',
    episode: 'S01 E01',
    github: 'https://github.com/divyanshuxpandey/mMARS-multi_Modal_AI_research_software',
  },
  {
    title: 'LLM Language Translator',
    category: 'GenAI / LLM Systems',
    description:
      'Real-time multilingual translation system with LangChain prompt orchestration, running locally hosted models via Ollama for accuracy, latency, and context preservation.',
    tags: ['Python', 'Ollama', 'LangChain', 'LLM'],
    match: '99%',
    episode: 'S01 E02',
    github: 'https://github.com/divyanshuxpandey/Language_translation_using_ollama',
  },
  {
    title: 'Cloud Sensor Data Platform',
    category: 'Cloud & Data Infrastructure',
    description:
      'AWS pipeline (S3, Lambda, Airflow) standardizing multi-sensor time-series data from a robotic fleet into PostgreSQL, cutting manual data-prep effort for modeling.',
    tags: ['AWS', 'Airflow', 'PostgreSQL', 'Python'],
    match: '98%',
    episode: 'S01 E03',
  },
  {
    title: 'Recommendation & Churn Engine',
    category: 'ML / Data Systems',
    description:
      'Collaborative + content-based recommendation engine lifting engagement/CTR 15%, paired with churn models (logistic regression, XGBoost) cutting churn 8%.',
    tags: ['Python', 'XGBoost', 'scikit-learn', 'SQL'],
    match: '98%',
    episode: 'S01 E04',
  },
  {
    title: 'Anomaly & Defect Detection',
    category: 'Computer Vision / DevOps',
    description:
      'Containerized (Docker) anomaly-detection service and CV-based defect-detection pipeline, validated against live production data streams before rollout.',
    tags: ['Docker', 'PyTorch', 'Computer Vision', 'AWS'],
    match: '97%',
    episode: 'S01 E05',
  },
  {
    title: 'Duplicate Question Detection',
    category: 'NLP / Semantic Similarity',
    description:
      'Semantic-similarity system for duplicate question pairs — a TF-IDF + Random Forest baseline (trained and evaluated in-repo) alongside a DistilBERT fine-tuning pipeline for transformer-based embeddings.',
    tags: ['NLP', 'DistilBERT', 'Scikit-learn', 'HuggingFace'],
    match: '96%',
    episode: 'S01 E06',
    github: 'https://github.com/divyanshuxpandey/Duplicate-Question-Detection-project',
  },
  {
    title: 'PIDV',
    category: 'Computer Vision',
    description:
      'Person identification & verification combining face detection, age/gender estimation, and YOLOv4-tiny object detection to estimate inter-person proximity from live feeds.',
    tags: ['Python', 'OpenCV', 'YOLOv4', 'TensorFlow'],
    match: '96%',
    episode: 'S01 E07',
    github: 'https://github.com/divyanshuxpandey/PIDV_using_ML',
  },
  {
    title: 'Stock Trend Forecasting',
    category: 'Time-Series Modeling',
    description:
      'Time-series forecasting pipeline (ARIMA, LSTM) for stock-trend prediction, achieving 78% directional accuracy on backtested data.',
    tags: ['Python', 'ARIMA', 'LSTM', 'Data Analysis'],
    match: '95%',
    episode: 'S01 E08',
  },
];
