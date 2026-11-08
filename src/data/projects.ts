export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / ML' | 'Full Stack' | 'Data Science' | 'Internship';
  featured: boolean;
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: 'medimate',
    title: 'MediMate — Medication Management & AI Health Assistant',
    subtitle: 'Full-Stack Healthcare Web App with Gemini AI Integration',
    category: 'Full Stack',
    featured: true,
    description: 'A modern, responsive healthcare application that manages prescription schedules, tracks medication stock, delivers audio alarms & reminders, and provides AI health consultation powered by Google Gemini API.',
    longDescription: 'MediMate solves patient non-adherence by combining automated dose reminders with real-time stock alerts. Built with responsive dark glassmorphism SaaS UI, compliance analytics, and speech synthesis voice alerts.',
    tags: ['React', 'Node.js', 'Google Gemini AI', 'Web Audio API', 'Express', 'Tailwind CSS'],
    metrics: [
      { label: 'AI Response Time', value: '< 1.2s' },
      { label: 'Adherence Accuracy', value: '99.4%' },
      { label: 'Device Support', value: 'Mobile + Desktop' },
    ],
    githubUrl: 'https://github.com/pandianlogesh795-bot/Medi-Mate',
    liveUrl: '#contact',
    highlights: [
      'Interactive AI Health Assistant powered by Gemini API with offline safety fallback',
      'Audible chime alarms and Web Speech text-to-speech medication reminders',
      'Inventory depletion warnings when stock drops under 10 doses',
      'Adherence compliance dashboard with daily and weekly metrics',
    ],
  },
  {
    id: 'dlk-ml-internship',
    title: 'Machine Learning Workflow & Predictive Modeling',
    subtitle: 'Core Internship Project at DLK Technologies',
    category: 'Internship',
    featured: true,
    description: 'Designed and deployed machine learning pipelines involving end-to-end data preprocessing, feature engineering, classification algorithms, and rigorous model evaluation on real-world datasets.',
    tags: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib', 'Model Evaluation'],
    metrics: [
      { label: 'Internship Duration', value: '1 Month Intensive' },
      { label: 'Workshops', value: 'Certified Hands-on' },
      { label: 'Model Metrics', value: 'Confusion Matrix & ROC' },
    ],
    githubUrl: 'https://github.com/pandianlogesh795-bot',
    highlights: [
      'Implemented Supervised & Unsupervised ML algorithms with Python and Scikit-learn',
      'Executed data cleaning, missing value imputation, and correlation matrix analysis',
      'Presented machine learning insights and received DLK Workshop Certification',
    ],
  },
  {
    id: 'spam-classifier',
    title: 'Intelligent SMS & Email Spam Classifier',
    subtitle: 'NLP Text Classification System',
    category: 'AI / ML',
    featured: false,
    description: 'Natural Language Processing model built to detect and filter unsolicited spam messages and phishing attempts using TF-IDF tokenization and Multinomial Naive Bayes classification.',
    tags: ['Python', 'NLP', 'Scikit-Learn', 'TF-IDF', 'NLTK', 'Streamlit'],
    metrics: [
      { label: 'Accuracy', value: '97.2%' },
      { label: 'Latency', value: '18ms' },
    ],
    githubUrl: 'https://github.com/pandianlogesh795-bot',
    highlights: [
      'Preprocessed raw textual data via stopword removal, stemming, and regex filtering',
      'Engineered TF-IDF vectorizers to capture discriminative n-gram features',
      'Delivered interactive prediction interface with confidence probability scores',
    ],
  },
  {
    id: 'titanic-predictor',
    title: 'Titanic Survival Prediction & Exploratory Analytics',
    subtitle: 'Supervised Machine Learning & Feature Engineering',
    category: 'Data Science',
    featured: false,
    description: 'In-depth exploratory data analysis and predictive classification on demographic survival factors using ensemble models, hyperparameter tuning, and cross-validation.',
    tags: ['Python', 'Data Science', 'Pandas', 'Seaborn', 'Random Forest', 'XGBoost'],
    metrics: [
      { label: 'Cross-Val Score', value: '84.6%' },
      { label: 'Features Tested', value: '14+' },
    ],
    githubUrl: 'https://github.com/pandianlogesh795-bot',
    highlights: [
      'Comprehensive exploratory data visualization with Seaborn pairplots and violin plots',
      'Engineered deck levels, family size, and title extraction features',
      'Benchmark comparison between Logistic Regression, Decision Trees, and Random Forest',
    ],
  },
  {
    id: 'college-academic-suite',
    title: 'College Academic Project Management & Analytics',
    subtitle: 'Departmental Collaboration & Task Execution Suite',
    category: 'Full Stack',
    featured: false,
    description: 'Assisted in planning, system architecture, and execution of team milestone tracking for engineering cohorts at Anand Institute of Higher Technology.',
    tags: ['C++', 'Python', 'SQL', 'Project Management', 'Workflow Automation'],
    metrics: [
      { label: 'Team Members', value: 'Multi-Disciplinary' },
      { label: 'Delivery', value: 'On-Time' },
    ],
    githubUrl: 'https://github.com/pandianlogesh795-bot',
    highlights: [
      'Streamlined sprint planning, module allocation, and code reviews',
      'Handled unit testing and technical documentation for departmental audits',
    ],
  },
];
