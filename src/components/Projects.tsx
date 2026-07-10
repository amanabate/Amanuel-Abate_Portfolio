import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 100,
    title: 'Letter Management System',
    description: 'Secure MERN-stack platform for digitizing official correspondence at SSGI with role-based approvals and digital signatures.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    category: 'Full Stack',
    github: 'https://github.com/biniman4/letPROJ',
    demo: 'http://let-proj.vercel.app',
  },
  {
    id: 2,
    title: 'Intern-Link',
    description: 'Full-stack internship management system with role-based dashboards, AI assistance, and attendance tracking.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    category: 'Full Stack',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Cloudinary'],
    github: 'https://github.com/banadawit/Intern-Link',
    demo: 'https://github.com/banadawit/Intern-Link',
  },
  {
    id: 3,
    title: 'E-Renting',
    description: 'Rental marketplace with real-time messaging, property listings, and dashboards for renters, owners, and admins.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    category: 'Full Stack',
    tech: ['Next.js', 'MongoDB', 'Socket.IO', 'Cloudinary'],
    github: 'https://github.com/amanabate/E-Renting',
    demo: 'https://github.com/amanabate/E-Renting',
  },
  {
    id: 4,
    title: 'Dormitory Management System',
    description: 'Java-based system for managing dormitory buildings, zones, student assignments, and proctor scheduling.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tech: ['Java'],
    category: 'Full Stack',
    github: 'https://github.com/banadawit/DormitoryManagementSystem',
    demo: 'https://github.com/banadawit/DormitoryManagementSystem',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Responsive developer portfolio with animations, interactive tech dashboard, and working contact form.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    tech: ['React', 'Framer Motion', 'Tailwind'],
    category: 'Frontend',
    github: 'https://github.com/amanabate/My_Portfolio',
    demo: 'https://amanuel-abate-portfolio.vercel.app/',
  },
  {
    id: 6,
    title: 'Problem Solve',
    description: 'Competitive programming and algorithmic problem solutions on LeetCode.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tech: ['LeetCode', 'Python', 'Java'],
    category: 'Competitive Programming Practice',
    github: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
    demo: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
    icon: SiLeetcode,
  },
];

const categories = ['All', 'Frontend', 'Full Stack', 'Competitive Programming Practice'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-10 lg:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            A selection of projects that reflect my full-stack capabilities
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-44">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Category badge */}
                    <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags — max 3 shown */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map(t => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 text-xs rounded-full">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
                      {/* Case study link */}
                      <Link
                        to={`/project/${project.id}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-500 hover:text-orange-500 transition-colors"
                      >
                        View Case Study <ArrowRight size={14} />
                      </Link>

                      {/* Icon links */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          className="text-gray-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={17} />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.15 }}
                          className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                          aria-label="Source code"
                        >
                          {Icon ? <Icon size={17} /> : <Github size={17} />}
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
