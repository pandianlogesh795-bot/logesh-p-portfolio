export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  institution: string;
  location: string;
  grade?: string;
  description: string;
  badge: string;
  type: 'education' | 'internship' | 'certification';
  skillsLearned: string[];
}

export const educationTimeline: TimelineItem[] = [
  {
    id: 'btech-ai-ds',
    year: '2024 — 2028',
    title: 'B.Tech — Artificial Intelligence and Data Science',
    institution: 'Anand Institute of Higher Technology',
    location: 'Kazhipattur, Chengalpattu, Tamil Nadu',
    grade: 'Currently Pursuing (3rd Year)',
    description: 'Specializing in machine learning methodologies, predictive data models, neural networks, algorithms, and computational intelligence with hands-on labs and project research.',
    badge: 'Undergraduate Degree',
    type: 'education',
    skillsLearned: ['Artificial Intelligence', 'Data Science', 'Machine Learning', 'Data Structures & Algorithms', 'Statistical Modeling'],
  },
  {
    id: 'ctc-diploma',
    year: '7-Month Intensive',
    title: 'Diploma in Computer Applications & Programming (DCA & DCP)',
    institution: 'CTC Computer Education Institute',
    location: 'Tamil Nadu',
    grade: 'Certified with Distinction',
    description: 'Mastered fundamental and advanced procedural programming, memory allocation, object-oriented concepts, and algorithmic logic in C and C++.',
    badge: 'Diploma Certification',
    type: 'certification',
    skillsLearned: ['C Programming', 'C++ Object Oriented Design', 'Memory Management', 'Computer Applications'],
  },
  {
    id: 'school-12th',
    year: 'Higher Secondary',
    title: '12th Standard — Higher Secondary Certificate',
    institution: 'State Board of Tamil Nadu',
    location: 'Tamil Nadu',
    grade: '75%',
    description: 'Rigorous coursework in Mathematics, Physics, Chemistry, and Computer Science establishing core analytical and numerical reasoning skills.',
    badge: 'High School',
    type: 'education',
    skillsLearned: ['Advanced Mathematics', 'Physics', 'Analytical Problem Solving'],
  },
  {
    id: 'school-10th',
    year: 'Secondary School',
    title: '10th Standard — Secondary School Leaving Certificate',
    institution: 'State Board of Tamil Nadu',
    location: 'Tamil Nadu',
    grade: '81%',
    description: 'Excellence across foundational science and mathematics with an active participation in regional sports and athletic meets.',
    badge: 'Secondary Education',
    type: 'education',
    skillsLearned: ['Foundational Science', 'Mathematics', 'Team Athletics'],
  },
];
