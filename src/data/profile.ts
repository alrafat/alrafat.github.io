// ─────────────────────────────────────────────────────────────
//  Everything from the CV. Update here and every page follows.
// ─────────────────────────────────────────────────────────────

export const stats = [
  { value: '3.897', suffix: '/4', label: 'M.Sc. CGPA' },
  { value: '3.486', suffix: '/4', label: 'B.Sc. CGPA' },
  { value: '2', suffix: '', label: 'Oral presentations at international conferences' },
  { value: '7.0', suffix: '', label: 'IELTS overall' },
];

export const interests = [
  { title: 'Plant Physiology', text: 'How plants allocate resources between growth and defence.' },
  { title: 'Plant Stress', text: 'Responses to flooding, drought and other environmental extremes.' },
  { title: 'Plant Nutrient Management', text: 'Fertilizer and irrigation regimes and their effect on plant chemistry.' },
  { title: 'Controlled Environment Agriculture', text: 'Growing crops under precisely managed conditions.' },
  { title: 'Precision Agriculture', text: 'Data-driven decisions in the field.' },
  { title: 'Plant Science', text: 'Secondary metabolism, antioxidants and plant–microbe interactions.' },
];

export const education = [
  {
    year: '2023',
    degree: 'Master of Science (M.Sc.) in Crop Botany',
    place: 'Department of Crop Botany & Tea Production Technology, Sylhet Agricultural University',
    detail: 'CGPA 3.897 / 4',
  },
  {
    year: '2022',
    degree: 'Bachelor of Science (B.Sc.) in Agriculture',
    place: 'Sylhet Agricultural University, Sylhet, Bangladesh',
    detail: 'CGPA 3.486 / 4 · Last two semesters 3.79 / 4',
  },
];

export const workExperience = [
  {
    period: 'Oct 2023 – Sep 2026',
    title: 'Credentialing Analyst',
    org: 'Radiant Data Systems Ltd, Dhaka — healthcare BPO partner for AMN Healthcare, USA',
    points: [
      'Coordinated with U.S. healthcare professionals, state licensing boards, schools, hospitals and third-party vendors.',
      'Processed 400+ credentialing applications with 99.8% accuracy, above company quality benchmarks.',
      'Trained and mentored new hires across Bangladesh and U.S. teams; designed structured training modules and introduced AI-assisted workflows.',
      'Prepared audit documentation and maintained the credentialing database.',
      'Built daily and weekly reports in Excel and Power BI to find process gaps and reduce turnaround time.',
    ],
  },
];

export const researchExperience = [
  {
    period: 'Jul 2022 – Jun 2023',
    title: 'Research Assistant',
    org: 'Sylhet Agricultural University — PI: Dr. Md. Masudur Rahman',
    points: [
      'Good Agricultural Practices for black pepper across agro-ecological regions of Sylhet: fieldwork, soil preparation, monitoring flowering and fruit set, yield data analysis.',
      'Bacterial diversity in the black pepper rhizosphere: isolated rhizospheric bacteria and ran biochemical tests to differentiate isolates.',
    ],
  },
];

export const skills = [
  { group: 'Statistics & Data', items: ['R (tidyverse, ggplot2, dplyr, agricolae, factoextra)', 'SPSS', 'STATA', 'Power BI', 'Excel'] },
  { group: 'Bioinformatics & GIS', items: ['BLAST', 'Bioconductor', 'MEGA X', 'Jalview', 'PyMOL', 'ArcGIS'] },
  { group: 'Laboratory', items: ['UV spectrophotometry', 'HPLC', 'Kjeldahl analysis', 'Gel electrophoresis', 'Colorimetry', 'Centrifugation', 'Microtome', 'Biomolecule extraction', 'Aseptic technique'] },
  { group: 'Writing & Referencing', items: ['LaTeX / Overleaf', 'Zotero', 'Mendeley', 'Google Workspace', 'MS Office'] },
  { group: 'Code & Web', items: ['Python (beginner)', 'C / C++ (beginner)', 'HTML / CSS / JavaScript', 'WordPress', 'Webflow', 'AI-assisted development'] },
  { group: 'Design & Media', items: ['Photoshop', 'Illustrator', 'Figma', 'Canva', 'CapCut', 'Photography'] },
];

export const fellowships = [
  { title: 'National Science & Technology (NST) Fellowship', by: 'Ministry of Science and Technology, Bangladesh', year: '2022–2023' },
  { title: 'SAURES Research Fellowship', by: 'Sylhet Agricultural University Research System', year: '' },
  { title: 'Government Board Scholarships', by: 'Higher Secondary, Secondary, Junior and Primary School Certificate examinations', year: '' },
];

export const awards = [
  { title: 'Best Oral Presentation Award', by: '3rd International Conference, Bangladesh Society of Plant Science and Technology', year: 'Feb 2024' },
  { title: 'Employee of the Month (×4)', by: 'Radiant Data Systems Ltd — Mar 2024; Feb, Jun & Jul 2025', year: '2024–25' },
  { title: 'Mathematical Olympiad — Divisional Winner', by: 'Bangladesh Mathematical Olympiad', year: '2012, 2013' },
  { title: 'Physics Olympiad — Divisional Winner', by: 'Bangladesh Physics Olympiad', year: '2013, 2015' },
];

export const tests = [
  { name: 'IELTS Academic', score: '7.0', detail: 'Listening 7.5 · Reading 8.0 · Speaking 6.5 · Writing 6.0', date: 'Nov 2025' },
];

export const training = [
  { date: 'Oct 2025 – ongoing', title: 'Computer Science Fundamentals', by: 'Phitron' },
  { date: 'Nov 2023', title: 'Data Visualization in R with ggplot2', by: 'LinkedIn Learning' },
  { date: 'Oct 2023', title: 'R for Data Science: Analysis and Visualization', by: 'LinkedIn Learning' },
  { date: 'Mar 2020', title: 'Hands-on Training on Basic Bioinformatics', by: 'Sylhet Agricultural University' },
];

export const memberships = [
  'General Member, Krishibid (Agriculturist) Institution, Bangladesh (KIB)',
  'Member, Bangladesh Society of Plant Science and Technology (BSPST)',
];

export const leadership: { role: string; org: string; logo: 'saups' | 'iaas' | 'pathshala' | 'pradhikar'; text: string }[] = [
  { role: 'Administrative Counselor · former Vice President and Design & IT Secretary', org: 'SAU Photographic Society (SAUPS)', logo: 'saups', text: 'Helped organize national and international photography exhibitions.' },
  { role: 'Joint Secretary', org: 'IAAS Bangladesh — Sylhet Agricultural University', logo: 'iaas', text: 'Part of the first IAAS committee on campus; organized quizzes and student programs.' },
  { role: 'Volunteer and former Executive Member', org: 'Pathshala Ekush', logo: 'pathshala', text: 'Taught children from underprivileged families.' },
  { role: 'Member and Volunteer', org: 'Pradhikar', logo: 'pradhikar', text: 'Animal rights and biodiversity conservation.' },
];
