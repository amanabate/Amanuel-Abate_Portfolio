import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, User, ChevronDown, Calendar } from 'lucide-react';

interface Exp {
  id: number;
  role: string;
  company: string;
  duration: string;
  type: 'work' | 'education' | 'freelance' | 'personal';
  description: string[];
  tags: string[];
}

const experiences: Exp[] = [
  {
    id: 1,
    role: 'A2SV Education Trainee',
    company: 'A2SV (Africa to Silicon Valley)',
    duration: '2025 – Present',
    type: 'education',
    description: [
      'Solved advanced Data Structures and Algorithms problems.',
      'Strengthened problem-solving and competitive programming skills.',
      'Participated in technical interviews, coding assessments, and peer learning sessions.',
      'Collaborated with fellow trainees to improve software engineering practices.',
      'Built a strong foundation for scalable software development.',
    ],
    tags: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Space Science and Geospatial Institute (SSGI)',
    duration: '2026',
    type: 'work',
    description: [
      'Developed the eLetter Management System (eLMS) to digitize organizational correspondence.',
      'Built responsive user interfaces and secure backend services.',
      'Implemented authentication, role-based access control, and workflow management.',
      'Collaborated with supervisors to deliver high-quality software solutions.',
      'Improved operational efficiency by replacing manual paper-based processes.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript'],
  },
  {
    id: 3,
    role: 'Independent Software Developer',
    company: 'Self-Initiated Projects',
    duration: '2024 – Present',
    type: 'personal',
    description: [
      'Designed and developed software solutions to address real-world challenges.',
      'Built full-stack applications using modern development practices.',
      'Applied clean architecture, authentication, database design, and API integration.',
      'Continuously improved technical skills by exploring emerging technologies.',
      'Maintained high-quality, scalable, and maintainable codebases.',
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'Git'],
  },
  {
    id: 4,
    role: 'Software Engineering Student',
    company: 'Haramaya University',
    duration: '2022 – Present',
    type: 'education',
    description: [
      'Developed academic and collaborative software engineering projects.',
      'Applied SDLC principles to real-world case studies.',
      'Worked in teams using Git, Agile methodologies, and version control.',
      'Strengthened knowledge of software architecture, database systems, and system analysis.',
      'Participated in coding competitions, technical workshops, and software engineering activities.',
    ],
    tags: ['Java', 'Python', 'C++', 'Git', 'SQL'],
  },
  {
    id: 5,
    role: 'Portfolio & Personal Brand Developer',
    company: 'Personal Brand',
    duration: '2025 – Present',
    type: 'personal',
    description: [
      'Designed and developed a modern personal portfolio to showcase software engineering projects.',
      'Created responsive user interfaces with a focus on performance and accessibility.',
      'Deployed applications using modern cloud hosting platforms.',
      'Built a professional online presence through GitHub and LinkedIn.',
      'Continuously updated projects and technical content to reflect new skills and achievements.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
  {
    id: 6,
    role: 'Freelance Video Editor',
    company: 'Self-Employed',
    duration: '2024 – Present',
    type: 'freelance',
    description: [
      'Edited engaging videos for social media, promotional campaigns, and digital content.',
      'Enhanced video quality using professional transitions, motion graphics, color correction, and audio synchronization.',
      'Collaborated with clients to transform ideas into compelling visual stories.',
      'Optimized videos for YouTube, TikTok, Instagram, and Facebook.',
      'Delivered high-quality projects while meeting client requirements and deadlines.',
    ],
    tags: ['CapCut', 'Adobe After Effects', 'Adobe Premiere Pro', 'Motion Graphics', 'Color Grading'],
  },
];

const typeConfig = {
  work:      { icon: Briefcase,     color: 'from-amber-500 to-orange-600',  dot: 'bg-amber-500',   ring: 'ring-amber-200 dark:ring-amber-800' },
  education: { icon: GraduationCap, color: 'from-blue-500 to-cyan-600',     dot: 'bg-blue-500',    ring: 'ring-blue-200 dark:ring-blue-800'   },
  personal:  { icon: Code2,         color: 'from-emerald-500 to-teal-600',  dot: 'bg-emerald-500', ring: 'ring-emerald-200 dark:ring-emerald-800' },
  freelance: { icon: User,          color: 'from-violet-500 to-purple-600', dot: 'bg-violet-500',  ring: 'ring-violet-200 dark:ring-violet-800' },
};

/* ── card variants ── */
const cardVariants = (isLeft: boolean) => ({
  hidden: { opacity: 0, x: isLeft ? -60 : 60, y: 20 },
  visible: (i: number) => ({
    opacity: 1, x: 0, y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
});

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1, opacity: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 14, delay: i * 0.1 + 0.15 },
  }),
};

/* ── Mobile card (self-contained state) ── */
const MobileCard: React.FC<{ exp: Exp; index: number }> = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, color } = typeConfig[exp.type];
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18, delay: index * 0.1 } } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.12)' }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md transition-shadow duration-300"
    >
      <div className="flex items-start gap-4 mb-3">
        <motion.div
          initial={{ scale: 0 }} whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: index * 0.1 + 0.1 }}
          className={`w-10 h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}
        >
          <Icon className="text-white" size={18} />
        </motion.div>
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">{exp.role}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company}</p>
          <div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
            <Calendar size={11} />{exp.duration}
          </div>
        </div>
      </div>
      <motion.ul animate={{ maxHeight: expanded ? 400 : 56 }} transition={{ duration: 0.3 }} className="overflow-hidden space-y-1 mb-2">
        {exp.description.map((p, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`} />
            {p}
          </li>
        ))}
      </motion.ul>
      <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 text-xs font-semibold text-amber-500 mb-3">
        {expanded ? 'Show less' : 'Show more'}
        <motion.span animate={{ rotate: expanded ? 180 : 0 }}><ChevronDown size={12} /></motion.span>
      </button>
      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
        {exp.tags.map(t => <span key={t} className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-xs rounded-full text-gray-600 dark:text-gray-400">{t}</span>)}
      </div>
    </motion.div>
  );
};

/* ── Desktop card ── */
const ExperienceCard: React.FC<{ exp: Exp; index: number }> = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, color, dot, ring } = typeConfig[exp.type];
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-start md:w-1/2 ${isLeft ? 'flex-row md:pr-12 md:ml-0' : 'flex-row-reverse md:pl-12 md:ml-auto'}`}>

      {/* Animated dot */}
      <motion.div
        custom={index}
        variants={dotVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`hidden md:flex absolute top-6 ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'} w-5 h-5 rounded-full ${dot} ring-4 ${ring} z-10 items-center justify-center`}
      >
        {/* inner pulse */}
        <motion.span
          animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute inset-0 rounded-full ${dot} opacity-40`}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        custom={index}
        variants={cardVariants(isLeft)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        whileHover={{ y: -5, boxShadow: '0 24px 48px rgba(0,0,0,0.12)' }}
        className="flex-1 bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-md transition-shadow duration-300"
      >
        <div className="flex items-start gap-4 mb-3">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: index * 0.1 + 0.2 }}
            className={`w-10 h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="text-white" size={18} />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 dark:text-white leading-snug">{exp.role}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{exp.company}</p>
            <div className="flex items-center gap-1 mt-1 text-xs text-amber-500 font-medium">
              <Calendar size={11} />{exp.duration}
            </div>
          </div>
        </div>

        <motion.ul animate={{ maxHeight: expanded ? 400 : 56 }} transition={{ duration: 0.3 }} className="overflow-hidden space-y-1 mb-2">
          {exp.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color} flex-shrink-0`} />
              {point}
            </li>
          ))}
        </motion.ul>

        <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-orange-500 transition-colors mb-3">
          {expanded ? 'Show less' : 'Show more'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}><ChevronDown size={12} /></motion.span>
        </button>

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
          {exp.tags.map(tag => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + 0.3 }}
              className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-10 lg:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building impactful solutions and leading tech initiatives
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated center line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-orange-400 to-transparent -translate-x-1/2 origin-top"
          />

          {/* Mobile */}
          <div className="flex flex-col gap-6 md:hidden">
            {experiences.map((exp, i) => (
              <MobileCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:block space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
