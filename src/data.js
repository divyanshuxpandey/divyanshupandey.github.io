export const profile = {
  name: 'Divyanshu Pandey',
  title: 'Software Development Engineer (Full Stack)',
  location: 'Faridabad, Haryana, India',
  email: 'pdivyanshu918@gmail.com',
  linkedin: 'https://linkedin.com/in/divyanshupandey18',
  github: 'https://github.com/divyanshuxpandey',
  // Relative (no leading slash): this deploys under a GitHub Pages project
  // subpath (/divyanshupandey.github.io/), not the domain root.
  resumeUrl: 'Divyanshu_Pandey_Resume.pdf',
  // Drop a photo at public/avatar.jpg and set this to 'avatar.jpg' to show it in the hero.
  photoUrl: null,
  initials: 'DP',
  summary:
    'Full-stack developer who builds and deploys AI-driven web applications, connecting machine learning models to intuitive user interfaces. Experience across Node.js/GraphQL/REST APIs, SQL and NoSQL data layers, and server-side rendering frontend architecture, paired with production LLM integration — RAG, LangChain, vector search — on AWS and Azure. Currently shipping full-stack features on a live React Native Web + Node.js SaaS platform. B.Tech in Robotics and AI; top-ranked in Meta HackerCup and Codeforces.',
};

export const skillGroups = [
  {
    title: 'Frontend Development',
    icon: 'code',
    items: ['React.js', 'Next.js (App Router)', 'React Native / React Native Web', 'Tailwind CSS', 'SSR', 'Responsive UI'],
  },
  {
    title: 'State & Data',
    icon: 'layers',
    items: ['Redux Toolkit', 'Zustand', 'React Query', 'Client-side state management'],
  },
  {
    title: 'Backend & APIs',
    icon: 'server',
    items: ['Node.js', 'Express', 'TypeScript', 'GraphQL', 'REST API design', 'Microservices'],
  },
  {
    title: 'AI / ML Integration',
    icon: 'spark',
    items: ['LLMs', 'Azure OpenAI', 'LangChain', 'LlamaIndex', 'RAG', 'Prompt Engineering', 'Vector Search', 'HuggingFace', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Cloud Infrastructure',
    icon: 'cloud',
    items: ['Azure App Services', 'Azure Functions', 'AKS', 'Cognitive Services', 'AWS (EC2, S3, Lambda, SageMaker)', 'Docker', 'Kubernetes', 'GitHub Actions / Jenkins'],
  },
  {
    title: 'Database Systems',
    icon: 'database',
    items: ['PostgreSQL', 'NoSQL', 'Azure Cosmos DB', 'Pinecone', 'Airflow'],
  },
  {
    title: 'Languages & Tools',
    icon: 'terminal',
    items: ['Python', 'TypeScript / JavaScript', 'SQL', 'Go', 'C++', 'Bash', 'Git'],
  },
];

export const experience = [
  {
    role: 'Software Development Engineer I',
    company: 'Apinya Mechatronics Industries Pvt. Ltd. (AIM)',
    location: 'Faridabad, Haryana',
    period: 'July 2026 — Present',
    bullets: [
      'Contribute full-stack to AIM Navigator, a production telematics/IoT SaaS platform — React Native Web frontend, Node.js/Express + PostgreSQL backend — building APIs that surface real-time fleet data.',
      'Build predictive maintenance ML models (XGBoost, LSTM) on multi-sensor time-series data, exposed via backend services and dashboards for stakeholders.',
      'Prototype an autoencoder anomaly-detection module and a CNN defect-detection pipeline, containerized with Docker for testing against live data streams.',
      'Set up AWS data pipelines (S3, Lambda, Airflow) into PostgreSQL, and explore GenAI/prompt engineering to auto-draft maintenance reports from anomaly logs.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'OMSR Media Pvt Ltd',
    location: 'Gurugram, Haryana',
    period: 'May 2025 — June 2026',
    bullets: [
      'Built a content recommendation system (collaborative + content-based filtering), improving engagement and click-through rate by 15%.',
      'Deployed churn prediction models (logistic regression, XGBoost) as backend services, powering retention campaigns that cut churn by 8%.',
      'Built end-to-end Python/SQL data pipelines and REST endpoints consolidating multi-source engagement data into a shared dashboard used weekly by the founding team.',
      'Partnered with founders and product to define KPIs and design A/B testing frameworks for new feature rollouts.',
    ],
  },
  {
    role: 'SDE Intern',
    company: 'Stock Tutor Pvt Ltd',
    location: 'Gurugram, Haryana',
    period: 'January 2025 — April 2025',
    bullets: [
      'Built a stock price trend prediction model (ARIMA, LSTM) with 78% directional accuracy, served via backend APIs for an educational product.',
      'Analyzed engagement data to identify course modules tied to better performance, informing curriculum changes that raised completion by 10%.',
    ],
  },
];

export const projects = [
  {
    name: 'mMARS',
    subtitle: 'Multi-Modal AI Research Automation System',
    icon: 'network',
    github: 'https://github.com/divyanshuxpandey/mMARS-multi_Modal_AI_research_software',
    stack: ['Python', 'LLMs', 'LangChain', 'RAG', 'AWS'],
    description:
      'An LLM-driven pipeline with Retrieval-Augmented Generation for multi-format data extraction; modular workflows with prompt orchestration, embeddings, and vector-based semantic retrieval.',
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
  {
    name: 'Duplicate Question Detection',
    subtitle: 'Semantic Similarity with Transformer Embeddings',
    icon: 'compare',
    stack: ['NLP', 'DistilBERT', 'Scikit-learn', 'HuggingFace'],
    description:
      'A semantic similarity system — Bag-of-Words + Random Forest reaching 81.67% accuracy, and a fine-tuned DistilBERT model reaching 89.89% accuracy — using transformer-based embeddings.',
  },
  {
    name: 'Language Translator',
    subtitle: 'Ollama-Powered Translation Web App',
    icon: 'globe',
    github: 'https://github.com/divyanshuxpandey/Language_translation_using_ollama',
    stack: ['Python', 'Streamlit', 'LangChain', 'Ollama'],
    description:
      'A Streamlit web app for real-time text translation, using LangChain to orchestrate prompts and output parsing over a locally-run Llama model served through Ollama.',
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
