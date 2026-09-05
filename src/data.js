export const profile = {
  name: 'Divyanshu Pandey',
  title: 'Software Development Engineer — Cloud Infrastructure & Data Systems',
  location: 'Faridabad, Haryana, India',
  email: 'pdivyanshu918@gmail.com',
  phone: '+91-9006188881',
  linkedin: 'https://linkedin.com/in/divyanshupandey18',
  github: 'https://github.com/divyanshuxpandey',
  // Relative (no leading slash): this deploys under a GitHub Pages project
  // subpath (/divyanshupandey.github.io/), not the domain root.
  resumeUrl: 'Divyanshu_Pandey_Resume.pdf',
  photoUrl: 'avatar.jpg',
  initials: 'DP',
  summary:
    'Software Development Engineer with 1.5+ years building and operating cloud data infrastructure: AWS pipelines (S3, Lambda, Airflow) writing into PostgreSQL, containerized services (Docker, Kubernetes), and CI/CD workflows (Git, Jenkins, GitHub Actions) across IoT, media, and fintech production systems. Works daily in Linux, scripts in Python and Bash, and troubleshoots data and pipeline issues under lean-resource constraints. Quantitative foundation from a B.Tech in Robotics & Artificial Intelligence, reinforced by competitive-programming results (Meta HackerCup, Codeforces).',
};

export const stats = [
  { value: 1.5, suffix: '+', decimals: 1, label: 'Years in production data & cloud systems' },
  { value: 15, suffix: '%', label: 'Engagement/CTR lift from a shipped recommendation engine' },
  { value: 8, suffix: '%', label: 'Churn cut with logistic regression & XGBoost models' },
  { value: 78, suffix: '%', label: 'Directional accuracy, ARIMA/LSTM stock-trend model' },
];

export const skillGroups = [
  {
    title: 'Database & Data Storage',
    icon: 'database',
    items: ['PostgreSQL', 'SQL', 'RDBMS', 'Database Systems', 'Data Pipeline Design', 'Schema & Storage Optimization', 'Vector Databases'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: 'cloud',
    items: ['AWS (EC2, S3, Lambda, SageMaker)', 'GCP (BigQuery)', 'Docker', 'Kubernetes', 'Linux', 'Containerized Environments', 'API Design'],
  },
  {
    title: 'Automation & Scripting',
    icon: 'terminal',
    items: ['Bash', 'Python', 'Git', 'GitHub Actions', 'Jenkins', 'Apache Airflow', 'Infrastructure Automation Scripts'],
  },
  {
    title: 'Programming Languages',
    icon: 'code',
    items: ['Python', 'SQL', 'Go', 'C++', 'Bash'],
  },
  {
    title: 'Monitoring & Reliability',
    icon: 'server',
    items: ['Production Monitoring', 'System Health Checks', 'Root-Cause Troubleshooting', 'Data Quality & Pipeline Validation'],
  },
  {
    title: 'Data & ML Infra Exposure',
    icon: 'spark',
    items: ['Feature Engineering', 'Model Deployment', 'RAG & Vector Store Design', 'LLM Tooling'],
  },
  {
    title: 'Currently Deepening',
    icon: 'layers',
    items: ['MongoDB', 'ClickHouse', 'ScyllaDB', 'MinIO', 'Ansible', 'Terraform'],
  },
];

export const experience = [
  {
    role: 'Software Development Engineer I',
    company: 'Apinya Mechatronics Industries Pvt. Ltd.',
    location: 'Faridabad, Haryana',
    period: 'July 2026 — Present',
    bullets: [
      'Architected AWS data pipelines (S3, Lambda, Airflow) writing into PostgreSQL, standardizing storage of multi-sensor time-series data (vibration, temperature, current draw) for a robotic fleet and cutting manual data-prep effort for the modeling team.',
      'Containerized (Docker) an anomaly-detection service and a CV-based defect-detection pipeline, validating both against live production data streams before rollout.',
      'Applied PCA and feature engineering (scikit-learn, PyTorch) to reduce dimensionality and cut compute/storage overhead on large-scale sensor data.',
      'Prototyped LLM-based auto-drafting of maintenance reports from anomaly logs, cutting manual reporting time for the operations team.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'OMSR Media Pvt Ltd',
    location: 'Gurugram, Haryana',
    period: 'May 2025 — June 2026',
    bullets: [
      'Built end-to-end Python/SQL data pipelines consolidating multi-source engagement data into a centralized store, feeding a Power BI/Tableau dashboard used weekly by the founding team.',
      'Shipped a recommendation engine (collaborative + content-based filtering) lifting engagement/CTR 15%, and churn-prediction models (logistic regression, XGBoost) cutting churn 8% — both running on lean production data infrastructure.',
      'Mined user-generated content via NLP (NLTK, spaCy), surfacing sentiment and social-listening insights that shaped content and product strategy.',
      'Defined KPIs and A/B testing/experimentation frameworks with founders and product for new feature rollouts.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Stock Tutor Pvt Ltd',
    location: 'Gurugram, Haryana',
    period: 'January 2025 — April 2025',
    bullets: [
      'Built a time-series forecasting pipeline (ARIMA, LSTM) for stock-trend prediction, achieving 78% directional accuracy on backtested data.',
      'Analyzed historical trading and engagement data to correlate course modules with performance, informing curriculum changes that raised completion rate by 10%.',
    ],
  },
];

export const projects = [
  {
    name: 'mMARS',
    subtitle: 'Multi-Modal AI Research Automation System',
    icon: 'network',
    github: 'https://github.com/divyanshuxpandey/mMARS-multi_Modal_AI_research_software',
    stack: ['Python', 'LangChain', 'RAG', 'AWS', 'Vector DB'],
    description:
      'An LLM-driven, RAG-based pipeline for multi-format data extraction, with modular embeddings and vector-based semantic retrieval workflows. Designed the underlying storage/retrieval layer around a vector database, structuring embeddings for low-latency semantic lookups at query time.',
  },
  {
    name: 'Language Translator',
    subtitle: 'LLM-Based Language Translation System',
    icon: 'globe',
    github: 'https://github.com/divyanshuxpandey/Language_translation_using_ollama',
    stack: ['Python', 'Ollama', 'LangChain'],
    description:
      'A real-time translation system with LangChain-based prompt orchestration, optimizing for accuracy, latency, and multilingual context preservation — run on locally hosted models via Ollama, with environment setup and configuration handled on Linux.',
  },
  {
    name: 'Duplicate Question Detection',
    subtitle: 'Semantic Similarity with Transformer Embeddings',
    icon: 'compare',
    stack: ['NLP', 'DistilBERT', 'Scikit-learn', 'HuggingFace'],
    description:
      'A semantic-similarity system — Bag-of-Words + Random Forest reaching 81.67% accuracy — and a fine-tuned DistilBERT model reaching 89.89% accuracy, using transformer-based embeddings.',
  },
  {
    name: 'PIDV',
    subtitle: 'Person Identification & Verification via ML',
    icon: 'eye',
    github: 'https://github.com/divyanshuxpandey/PIDV_using_ML',
    stack: ['Python', 'OpenCV', 'YOLOv4', 'TensorFlow'],
    description:
      'A computer-vision system combining face detection (Haar Cascade), age/gender estimation, and YOLOv4-tiny object detection to identify individuals and estimate inter-person proximity from live camera feeds for social-distancing and smart-environment use cases.',
  },
];

export const education = {
  degree: 'Bachelor of Technology in Robotics and Artificial Intelligence',
  school: 'J.C. Bose University of Science and Technology, YMCA',
  location: 'Faridabad, Haryana',
  period: '2021 — May 2025',
};

export const achievements = [
  'Meta HackerCup 2025 — India Rank 112, Global Rank 716 among 13,000+ participants.',
  'Codeforces Round 1020 (Div. 3) — All India Rank 466, Global Rank 1783 among 40,000+ contestants.',
  'Top 20 Finalist, Samsung Solve for Tomorrow (India) — selected nationally for an impactful real-world tech solution.',
  '1st Place, Entrepreneurship Summit — J.C. Bose University of Science and Technology (YMCA), Faridabad.',
];
