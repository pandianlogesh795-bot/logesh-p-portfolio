export interface Achievement {
  id: string;
  title: string;
  event: string;
  category: 'Sports' | 'Athletics' | 'Competitions' | 'Leadership';
  icon: string;
  highlight: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export const achievementsData: Achievement[] = [
  {
    id: 'kho-kho-state',
    title: 'Zonal & District Kho Kho Representation',
    event: 'Inter-District & Zonal Kho Kho Meets',
    category: 'Sports',
    icon: 'Trophy',
    highlight: '4-Time District Athlete & Zonal Competitor',
    description: 'Demonstrated tactical agility, rapid defensive and chase reflexes, and exceptional team coordination across multiple tournament campaigns.',
    metric: '4x',
    metricLabel: 'District Meets',
  },
  {
    id: 'athletics-100m',
    title: 'District Winner — 100m Athletics',
    event: 'District Track & Field Championships',
    category: 'Athletics',
    icon: 'Medal',
    highlight: 'Gold / 1st Place Champion',
    description: 'Secured the first-place podium in competitive sprint events, demonstrating relentless training, peak physical stamina, and explosive focus.',
    metric: '1st',
    metricLabel: 'District Gold',
  },
  {
    id: 'volleyball-zonal',
    title: 'Volleyball Zonal Tournament Player',
    event: 'Inter-Collegiate / Zonal Championship',
    category: 'Sports',
    icon: 'Activity',
    highlight: 'Key Defensive & Court Rotation Player',
    description: 'Active contributor in competitive high-intensity matches, showcasing strategic team communication, rapid court coverage, and sportsmanship.',
    metric: '2x',
    metricLabel: 'Zonal Tournaments',
  },
  {
    id: 'esports-gaming',
    title: 'Competitive E-Sports Player',
    event: 'State & Collegiate Gaming Tournaments',
    category: 'Competitions',
    icon: 'Gamepad2',
    highlight: 'Tactical Team Coordinator & Strategist',
    description: 'Harnessed lightning-fast reflexes, pattern recognition, spatial awareness, and real-time team strategy in competitive digital arenas.',
    metric: 'Top',
    metricLabel: 'Tactical Strategist',
  },
];

export const certificationsData = [
  {
    id: 'ctc-c-cpp',
    title: 'CTC Certificate in C & C++ Programming',
    organization: 'CTC Computer Education Institute',
    period: '7 Months Intensive Diploma (DCA & DCP)',
    status: 'Verified Certification',
    description: 'Comprehensive practical training in procedural & OOP programming, pointer arithmetic, memory management, and structured algorithmic design.',
    skills: ['C', 'C++', 'Object-Oriented Design', 'Memory Optimization', 'Data Structures'],
    badgeColor: 'from-violet-500 to-indigo-600',
  },
  {
    id: 'dlk-ml',
    title: 'Machine Learning Workshop & Practical Internship',
    organization: 'DLK Technologies',
    period: 'Hands-on Workshop Certification',
    status: 'Verified Certification',
    description: 'Extensive exposure to real-world machine learning pipelines, predictive modeling, data cleaning, and real-world project problem solving.',
    skills: ['Machine Learning', 'Python', 'Scikit-Learn', 'Exploratory Data Analysis', 'Model Validation'],
    badgeColor: 'from-cyan-500 to-blue-600',
  },
];

export const personalStrengths = [
  {
    title: 'Physically & Mentally Resilient',
    description: 'Years of competitive Kho Kho and sprinting cultivate unyielding focus and calm decision-making during high-stress project deadlines.',
    icon: 'Shield',
  },
  {
    title: 'Self-Disciplined & Hardworking',
    description: 'Committed to consistent daily progress, continuous technical upskilling, and meticulous attention to detail in code and data.',
    icon: 'Target',
  },
  {
    title: 'Quick Learner & Agile Team Player',
    description: 'Rapidly absorbs cutting-edge libraries, adapts to team workflows, and collaborates openly to achieve shared engineering milestones.',
    icon: 'Users',
  },
  {
    title: 'Analytical & Problem Solver',
    description: 'Approaches complex software and data challenges by decomposing them into structured, verifiable logic blocks.',
    icon: 'Cpu',
  },
];
