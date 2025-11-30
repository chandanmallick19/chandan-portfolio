import { CertificationItem, EducationItem, ExperienceItem, ProjectItem, SkillCategory } from "./types";

export const PROFILE = {
  name: "Chandan Kumar Mallick",
  tagline: "Computer Science Graduate | Software Developer | AI/ML Enthusiast",
  summary: "Enthusiastic and adaptable Computer Science graduate with hands-on experience in software development, web technologies, and data-driven projects. Skilled in Java, Python, SQL, and cloud platforms, with a strong foundation in problem-solving, algorithms, and software design. Eager to contribute, learn, and grow in a collaborative environment while delivering high-quality solutions. Passionate about leveraging technology to solve real-world challenges.",
  location: "Bhubaneswar, Odisha, India",
  email: "chandansoumya28@gmail.com",
  phone: "+91-7327888730",
  linkedin: "https://www.linkedin.com/in/chandanmallick19",
  github: "https://github.com/chandanmallick19",
  blog: "https://chandanmallick19.blogspot.com/",
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C", "JavaScript", "SQL", "Bash Scripting"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Hibernate", "MVC", "Bootstrap", "JDBC", "Node.js"]
  },
  {
    title: "Databases & Platforms",
    skills: ["MySQL", "Oracle Database", "AWS (EC2, S3)", "Google Cloud", "Jupyter", "Android Studio"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "Apache Tomcat", "Docker", "Kubernetes (basic)"]
  },
  {
    title: "Software Development",
    skills: ["RESTful APIs", "Microservices Architecture", "SDLC", "Agile/Scrum", "Application Testing"]
  },
  {
    title: "Data & AI/ML",
    skills: ["Pandas", "NumPy", "Scikit-Learn", "TensorFlow", "Hugging Face Transformers"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Persistent Systems",
    role: "Cloud Engineer Trainee",
    duration: "07/2024 – 11/2024",
    location: "India",
    description: "Led cloud computing workshops, enhancing AWS certification rates by 25% through practical, hands-on training. Partnered with AWS Academy to create a structured learning program, resulting in a 15% improvement in trainee cloud deployment capabilities.",
    logoInitial: "P"
  },
  {
    company: "Katalon",
    role: "Software Testing Intern",
    duration: "11/2023 – 01/2024",
    location: "India",
    description: "Automated testing processes using Katalon Studio, cutting manual testing time by 30% and increasing test coverage by 20%. Directed functional, UI, and regression testing, achieving a 95% bug detection rate prior to production.",
    logoInitial: "K"
  },
  {
    company: "TryHackMe",
    role: "Member",
    duration: "March 2024 - June 2025",
    location: "India",
    description: "Engaged in hands-on cybersecurity training through virtual labs covering penetration testing, web exploitation, and reverse engineering.",
    logoInitial: "T"
  },
  {
    company: "Cyber Secured India",
    role: "Cyber Security & Digital Forensics",
    duration: "January 2024 - June 2025",
    location: "Mumbai, Maharashtra",
    description: "Specialized in Cyber Security & Digital Forensics. Worked on initiatives for a non-profit focusing on training, internship and mentoring in cyber security.",
    logoInitial: "C"
  },
  {
    company: "Microsoft",
    role: "Beta Microsoft Learn Student Ambassador",
    duration: "November 2023 - June 2025",
    location: "India",
    description: "Engaged in enhancing digital skills and promoting technology literacy. Empowered fellow students and fostered innovation within the Microsoft ecosystem.",
    logoInitial: "M"
  },
  {
    company: "Qlik",
    role: "Business Analyst",
    duration: "April 2024 - September 2024",
    location: "Pennsylvania, United States",
    description: "Focused on Qlik Sense for business analytics, creating interactive reports and dashboards. Worked with Qlik Analytics Platform (QAP) to expand analytics solutions.",
    logoInitial: "Q"
  },
  {
    company: "Future Crime Research Foundation",
    role: "Cyber Defense Incident Responder",
    duration: "June 2024 - August 2024",
    location: "India",
    description: "Specialized in Research in Cyber Security, Digital Crime, Fraud Risk Management, and Cyber Forensics.",
    logoInitial: "F"
  },
  {
    company: "SmartInternz",
    role: "Salesforce Developer",
    duration: "August 2023 - January 2024",
    location: "India",
    description: "Gained hands-on experience in Salesforce development, Apex, and JavaScript.",
    logoInitial: "S"
  },
  {
    company: "IBM",
    role: "Cybersecurity Intern",
    duration: "October 2023 - November 2023",
    location: "India",
    description: "Internship focused on Cybersecurity fundamentals.",
    logoInitial: "I"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "ITER, Siksha ‘O’ Anusandhan",
    degree: "BTech in Computer Science & Engineering",
    year: "11/2021 – 08/2025"
  },
  {
    institution: "Harvard University",
    degree: "Aspire Leader's Program, Leadership",
    year: "December 2024 - February 2025"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya (JNV)",
    degree: "Class VI - XII",
    year: "November 2011 - April 2018"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "AI-Powered Fake News Detection System",
    description: "Developed an AI-powered Fake News Detection System using NLP and deep learning techniques to accurately classify news articles as real or fake.",
    duration: "03/2025 – 06/2025",
    technologies: ["NLP", "Deep Learning", "Python"],
    link: "https://github.com/chandanmallick19",
    type: 'project'
  },
  {
    title: "E-Medical Management System",
    description: "Developed a role-based E-Medical Management System using Spring Boot, enabling patients to book appointments, doctors to manage them, and admins to oversee system operations.",
    duration: "11/2024 – 01/2025",
    technologies: ["Spring Boot", "Java", "Web"],
    link: "https://github.com/chandanmallick19",
    type: 'project'
  },
  {
    title: "Banking Management System",
    description: "Constructed a comprehensive banking management system using JDBC and Oracle Database, supporting seamless account management and secure transactions for over 500 users.",
    duration: "04/2024 – 05/2024",
    technologies: ["JDBC", "Oracle Database", "Java"],
    link: "https://github.com/chandanmallick19",
    type: 'project'
  },
  {
    title: "AI in Cybersecurity: Application and Research Challenges",
    description: "Published a review paper titled 'AI in Cybersecurity: Application and Research Challenges' in RAECC-2025, exploring the role of artificial intelligence in enhancing cybersecurity, and key research gaps in the field.",
    duration: "05/2025",
    technologies: ["Research", "Cybersecurity", "AI"],
    type: 'publication'
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "06/2024",
    description: "Acquired advanced data analytics skills, including data cleaning, visualization, and statistical analysis."
  },
  {
    title: "Google Cybersecurity Professional",
    issuer: "Google",
    date: "11/2023",
    description: "Fine-tuned expertise in threat detection and risk management, enabling me to implement robust security measures."
  }
];

export const RESUME_CONTEXT = `
You are an AI assistant representing Chandan Kumar Mallick. Use the following resume details to answer questions about him from recruiters or visitors.
Name: ${PROFILE.name}
Summary: ${PROFILE.summary}
Contact: ${PROFILE.email}, ${PROFILE.phone}

Skills: ${JSON.stringify(SKILLS)}

Experience: ${JSON.stringify(EXPERIENCE)}

Projects: ${JSON.stringify(PROJECTS)}

Certifications: ${JSON.stringify(CERTIFICATIONS)}

Education: ${JSON.stringify(EDUCATION)}

Tone: Professional, enthusiastic, and knowledgeable. Speak in the first person if appropriate (e.g. "I have worked at...") or third person ("Chandan has...").
`;