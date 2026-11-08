export interface Skill {
  name: string;
  category: 'languages' | 'core' | 'tools' | 'soft';
  level: number; // percentage
  iconName: string;
  description: string;
  color: string;
}

export const skillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'languages', level: 90, iconName: 'Terminal', description: 'Data Science, ML scripting, OOP & algorithm prototyping', color: '#38bdf8' },
  { name: 'C++', category: 'languages', level: 85, iconName: 'Cpu', description: 'Data structures, algorithm complexity & system fundamentals', color: '#818cf8' },
  { name: 'C', category: 'languages', level: 88, iconName: 'Binary', description: 'Low-level memory management & procedural programming', color: '#a78bfa' },
  { name: 'SQL (Basic)', category: 'languages', level: 75, iconName: 'Database', description: 'Relational queries, schema design, filtering & joins', color: '#f472b6' },
  { name: 'JavaScript / ES6+', category: 'languages', level: 80, iconName: 'Code', description: 'Modern web scripting, async/await, DOM & API calls', color: '#fbbf24' },

  // Core & AI / Data Science
  { name: 'Artificial Intelligence', category: 'core', level: 86, iconName: 'Brain', description: 'Search algorithms, heuristic reasoning, AI agents & Gemini API', color: '#c084fc' },
  { name: 'Machine Learning', category: 'core', level: 84, iconName: 'Network', description: 'Supervised classification, regression, model validation & metrics', color: '#22d3ee' },
  { name: 'Data Science & Analytics', category: 'core', level: 85, iconName: 'BarChart3', description: 'Exploratory data analysis, statistical distributions & insights', color: '#34d399' },
  { name: 'Logical Problem Solving', category: 'core', level: 92, iconName: 'Zap', description: 'Breaking complex challenges into clean, verifiable steps', color: '#f59e0b' },
  { name: 'Feature Engineering', category: 'core', level: 80, iconName: 'Sliders', description: 'Scaling, encoding, missing value imputation & matrix ops', color: '#ec4899' },

  // Tools & Frameworks
  { name: 'Scikit-Learn', category: 'tools', level: 84, iconName: 'Boxes', description: 'Pipelines, estimators, cross-validation & confusion matrix', color: '#f97316' },
  { name: 'Pandas & NumPy', category: 'tools', level: 88, iconName: 'Table', description: 'High-performance dataframe manipulation & numerical computing', color: '#38bdf8' },
  { name: 'Git & GitHub', category: 'tools', level: 85, iconName: 'GitBranch', description: 'Version control, branch management, pull requests & open source', color: '#f43f5e' },
  { name: 'React & Vite', category: 'tools', level: 82, iconName: 'Layers', description: 'Component architecture, responsive hooks & UI state management', color: '#06b6d4' },
  { name: 'Node.js & Express', category: 'tools', level: 78, iconName: 'Server', description: 'REST APIs, server-side routes, middleware & JSON payloads', color: '#10b981' },

  // Soft Skills
  { name: 'Team Leadership & Sportsmanship', category: 'soft', level: 95, iconName: 'Award', description: 'District & Zonal athlete mindset, motivating peers towards goals', color: '#e879f9' },
  { name: 'Effective Communication', category: 'soft', level: 90, iconName: 'MessageSquare', description: 'Clear technical documentation, verbal presentations & team sync', color: '#67e8f9' },
  { name: 'Time Management', category: 'soft', level: 92, iconName: 'Clock', description: 'Balancing rigorous engineering coursework, sports & project sprints', color: '#fde047' },
  { name: 'High Adaptability', category: 'soft', level: 94, iconName: 'Sparkles', description: 'Quickly absorbing new tech stacks and pivoting when requirements evolve', color: '#a3e635' },
];

export const marqueeSkills = [
  'Python', 'Machine Learning', 'Data Science', 'Artificial Intelligence', 
  'C++', 'SQL', 'Scikit-Learn', 'Pandas & NumPy', 'Problem Solving',
  'Google Gemini API', 'React.js', 'Node.js', 'Fast Learner', 'Kho Kho Athlete',
  'Analytical Thinking', 'Git & GitHub', 'Tailwind CSS', 'Responsive UI'
];
