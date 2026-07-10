import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 100,
      title: 'Letter Management System',
      description: 'A secure MERN-stack Letter Management System developed for the Space Science and Geospatial Institute (SSGI), designed to digitize official correspondence with role-based approvals, digital signatures, and secure document management.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js','TypeScript','Tailwind CSS' ,'Express.js', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/biniman4/letPROJ',
      demo: 'http://let-proj.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'Intern-Link',
      description: 'A full-stack internship management system that streamlines student internships with role-based dashboards, AI assistance, attendance tracking, report management, and supervisor feedback.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'Full Stack',
      tech: ['Next.js','TypeScript','Tailwind CSS','Express','Noje.js','PostgreSQL','Cloudinary'],
      github: 'https://github.com/banadawit/Intern-Link',
      demo: 'https://github.com/banadawit/Intern-Link',
      featured: false,
    },
    {
      id: 3,
      title: ' E-Renting',
      description: 'A full-stack rental marketplace that helps renters discover homes, save listings, and communicate with owners, while owners and admins manage properties and users through dedicated dashboards.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      category: 'Full Stack',
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Socket.IO", "Cloudinary"],
      github: 'https://github.com/amanabate/E-Renting',
      demo: 'https://github.com/amanabate/E-Renting',
      featured: true,
    },

     {
      id: 4,
      title: 'Dormitory Management System',
      description: 'A Java-based system for managing dormitory buildings, zones, students, and proctors, featuring building assignments and material management.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      tech: ['Java'],
      github: 'https://github.com/banadawit/DormitoryManagementSystem',
      demo: 'https://github.com/banadawit/DormitoryManagementSystem',
      featured: true,
    },

    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with animations and modern design principles.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      tech: ['React', 'Framer Motion', 'Tailwind'],
      category: 'Frontend',
      github: 'https://github.com/amanabate/My_Portfolio',
      demo: 'https://amanuel-abate-portfolio.vercel.app/',
      featured: false,
    },
    {
      id: 6,
      title: 'Problem Solve',
      description: 'A collection of competitive programming and algorithmic problem solutions on LeetCode.',
      image: '', // Remove the broken LeetCode logo as the main image
      backgroundImage: 'url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop)', // Example background image
      tech: ['LeetCode'],
      category: 'Competitive Programming Practice',
      github: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
      demo: 'https://leetcode.com/u/Amanuel-Abate-Horeta/',
      featured: false,
      icon: SiLeetcode,
    },
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Competitive Programming Practice'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-10 lg:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category}
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
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                style={project.backgroundImage ? { backgroundImage: project.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
              >
                {project.backgroundImage ? (
                  <>
                    <div style={{ width: '100%', height: '12rem', backgroundImage: project.backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="p-6 bg-gray-900 dark:bg-gray-900">
                      <h3 className="text-xl font-bold text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400 font-medium">
                          {project.category}
                        </span>
                        <div className="flex space-x-3">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-amber-400 hover:text-amber-300"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-400 hover:text-gray-300"
                          >
                            {project.icon ? (
                              <project.icon size={18} />
                            ) : (
                              <Github size={18} />
                            )}
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {project.category}
                        </span>
                        <div className="flex space-x-3">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            {project.icon ? (
                              <project.icon size={18} />
                            ) : (
                              <Github size={18} />
                            )}
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
