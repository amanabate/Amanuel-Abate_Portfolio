import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code across the full stack — from API routes to UI components',
    },
    {
      icon: Palette,
      title: 'UI & Design',
      description: 'Building consistent, beautiful interfaces with attention to detail and user experience',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing both frontend rendering and backend response times for fast, efficient applications',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams using Agile methodologies, Git workflows, and clear communication',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Delivering reliable, tested, and cross-browser compatible solutions end to end',
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'Constantly exploring new technologies, frameworks, and AI tools to stay ahead of the curve',
    },
  ];

  return (
    <section id="about" className="py-10 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full-stack developer with 3+ years of experience building scalable web applications from database to deployment
          </p>
        </motion.div>

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            My Journey
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            I started my journey in software development with a deep curiosity for how complex systems are built from scratch.
            What began as experimenting with small scripts quickly grew into a passion for architecting full-stack applications —
            from designing REST APIs and managing databases to crafting polished, responsive user interfaces.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Today I work across the entire stack — building backends with Node.js, Express, and NestJS, designing databases
            with MongoDB and PostgreSQL, and creating modern frontends with React, TypeScript, and Tailwind CSS.
            I care deeply about clean architecture, performance, and writing code that is easy to maintain and scale.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, diving into AI tools and developer workflows,
            contributing to open-source, or sharing what I've learned with the developer community.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
