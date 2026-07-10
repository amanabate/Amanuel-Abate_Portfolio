import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const projectsData = [
  {
    id: '100',
    title: 'Letter Management System',
    tagline: 'Digitalizing official correspondence for a government research institute',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    tech: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/biniman4/letPROJ',
    demo: 'http://let-proj.vercel.app',
    overview:
      'A secure MERN-stack Letter Management System developed for the Space Science and Geospatial Institute (SSGI). The system was built to digitize and streamline official correspondence that was previously handled manually on paper.',
    problem:
      'SSGI staff were managing hundreds of official letters manually — printing, signing, filing, and tracking them across departments was slow, error-prone, and difficult to audit.',
    solution:
      'We built a web-based platform that allows staff to create, route, sign, and archive letters digitally. Role-based access ensures only authorized personnel can approve or view sensitive documents.',
    features: [
      'Role-based access control (Admin, Manager, Staff)',
      'Digital signature workflow with multi-level approvals',
      'Document versioning and audit trail',
      'Full-text search across all letters',
      'Dashboard with statistics and pending items',
      'Secure file attachments with MongoDB GridFS',
    ],
    challenges:
      'Implementing a reliable digital signature workflow that mirrors the real-world approval chain was the hardest part. We solved it by modeling each letter as a state machine with defined transitions and role guards.',
  },
  {
    id: '2',
    title: 'Intern-Link',
    tagline: 'A smart internship management platform for students, supervisors, and admins',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express', 'Node.js', 'PostgreSQL', 'Cloudinary'],
    category: 'Full Stack',
    github: 'https://github.com/banadawit/Intern-Link',
    demo: 'https://github.com/banadawit/Intern-Link',
    overview:
      'Intern-Link is a full-stack internship management system that brings together students, supervisors, and administrators on a single platform to streamline every stage of the internship lifecycle.',
    problem:
      'Universities and companies manage internship programs through emails, spreadsheets, and physical forms — making it hard to track attendance, collect reports, and give timely feedback.',
    solution:
      'A centralized platform with dedicated dashboards for each role. Students log attendance and submit reports, supervisors review and give feedback, admins manage placements and generate analytics.',
    features: [
      'Role-based dashboards for Student, Supervisor, and Admin',
      'AI-assisted report writing suggestions',
      'Attendance tracking with daily check-in/out',
      'Report submission and supervisor feedback loop',
      'File uploads via Cloudinary',
      'PostgreSQL relational data model for complex queries',
    ],
    challenges:
      'Designing a schema that cleanly models the many-to-many relationship between students and supervisors across multiple internship cycles required careful normalization and query optimization.',
  },
  {
    id: '3',
    title: 'E-Renting',
    tagline: 'A full-stack rental marketplace connecting renters and property owners',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    category: 'Full Stack',
    github: 'https://github.com/amanabate/E-Renting',
    demo: 'https://github.com/amanabate/E-Renting',
    overview:
      'E-Renting is a rental marketplace that helps renters discover homes, save listings, and communicate with owners in real time, while property owners manage listings and admins oversee the platform.',
    problem:
      'Finding rental housing in Ethiopia involves many intermediaries, unclear pricing, and no reliable way to communicate with owners — making the process slow and frustrating.',
    solution:
      'A marketplace where owners post verified listings with photos, renters browse and save favorites, and both parties chat in real time via Socket.IO before committing.',
    features: [
      'Property listing with multi-image upload via Cloudinary',
      'Real-time messaging with Socket.IO',
      'Save/wishlist functionality for renters',
      'Admin dashboard for property and user management',
      'Advanced search and filter by location, price, size',
      'Role-based access: Renter, Owner, Admin',
    ],
    challenges:
      'Integrating real-time chat alongside a REST API required careful architecture decisions. We used Socket.IO rooms scoped per conversation and persisted messages in MongoDB for history.',
  },
  {
    id: '4',
    title: 'Dormitory Management System',
    tagline: 'A Java-based system for managing university dormitory operations',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    tech: ['Java'],
    category: 'Desktop',
    github: 'https://github.com/banadawit/DormitoryManagementSystem',
    demo: 'https://github.com/banadawit/DormitoryManagementSystem',
    overview:
      'A Java-based desktop system for managing university dormitory operations including buildings, zones, student assignments, and proctor management.',
    problem:
      'University dormitory staff were tracking student room assignments and proctor schedules manually, leading to conflicts, lost records, and inefficient space usage.',
    solution:
      'A structured Java application with clear object-oriented models for buildings, zones, students, and proctors — with a console-based interface for CRUD operations.',
    features: [
      'Building and zone management',
      'Student registration and room assignment',
      'Proctor scheduling and zone assignments',
      'Material and inventory tracking',
      'Data validation and conflict detection',
    ],
    challenges:
      'Modeling the hierarchical relationship between buildings, zones, and rooms in pure Java OOP without a database required careful use of collections and custom data structures.',
  },
  {
    id: '5',
    title: 'Portfolio Website',
    tagline: 'A modern, animated developer portfolio built with React and Tailwind',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'EmailJS'],
    category: 'Frontend',
    github: 'https://github.com/amanabate/My_Portfolio',
    demo: 'https://amanuel-abate-portfolio.vercel.app/',
    overview:
      'This portfolio website — the one you are reading right now. Built from scratch with React, TypeScript, Tailwind CSS, and Framer Motion to showcase projects, skills, and allow clients to get in touch.',
    problem:
      'A personal portfolio needs to be fast, visually impressive, easy to navigate, and functional — including a working contact form without a custom backend.',
    solution:
      'A single-page React app with smooth scroll navigation, animated sections, a dark/light theme toggle, an interactive Tech Stack dashboard, and EmailJS for serverless contact form handling.',
    features: [
      'Animated hero with typewriter effect',
      'Interactive Tech Stack dashboard with search and filtering',
      'Project cards with individual case study pages',
      'Working contact form via EmailJS',
      'Dark / light mode toggle',
      'Fully responsive across all screen sizes',
    ],
    challenges:
      'Building the Tech Stack dashboard to feel like a real embedded web app — with a sidebar, glassmorphism browser chrome, search, and animated cards — while keeping it performant was the most fun challenge.',
  },
  {
    id: '6',
    title: 'Problem Solve',
    tagline: 'Competitive programming solutions on LeetCode',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop',
    tech: ['LeetCode', 'Python', 'Java', 'C++'],
    category: 'Competitive Programming Practice',
    github: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
    demo: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
    icon: SiLeetcode,
    overview:
      'A collection of algorithmic problem solutions on LeetCode covering data structures, dynamic programming, graph algorithms, and more.',
    problem:
      'Strengthening algorithmic thinking and problem-solving skills required consistent practice with real competitive programming challenges.',
    solution:
      'Regular LeetCode practice across difficulty levels — Easy, Medium, and Hard — with solutions implemented in Python, Java, and C++.',
    features: [
      'Solutions across arrays, trees, graphs, DP, and more',
      'Multiple language implementations',
      'Focus on time and space complexity optimization',
      'Consistent daily practice streak',
    ],
    challenges:
      'Dynamic programming problems — particularly interval DP and bitmask DP — required the most mental effort to master.',
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-amber-500 hover:underline flex items-center gap-2">
          <ArrowLeft size={18} /> Back to Portfolio
        </Link>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back nav */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Title & tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
            {project.category}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-3">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">{project.tagline}</p>
        </motion.div>

        {/* Tech + links row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-10 border-b border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {Icon ? <Icon size={15} /> : <Github size={15} />} Source
            </a>
          </div>
        </motion.div>

        {/* Content sections */}
        {[
          { label: 'Overview', content: project.overview },
          { label: 'The Problem', content: project.problem },
          { label: 'The Solution', content: project.solution },
        ].map((section, i) => (
          <motion.div
            key={section.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {section.label}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {section.content}
            </p>
          </motion.div>
        ))}

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.07 }}
                className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex-shrink-0" />
                {f}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12 p-6 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/40 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Challenges & Learnings
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {project.challenges}
          </p>
        </motion.div>

        {/* Back CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft size={18} /> Back to All Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
