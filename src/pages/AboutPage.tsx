import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Palette, Zap, Users, Award, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code across the full stack — from API routes to UI components',
    color: 'from-amber-500 to-orange-600',
    glow: '0 20px 48px rgba(245,158,11,0.22)',
    border: 'rgba(245,158,11,0.4)',
  },
  {
    icon: Palette,
    title: 'UI & Design',
    description: 'Building consistent, beautiful interfaces with attention to detail and user experience',
    color: 'from-pink-500 to-rose-600',
    glow: '0 20px 48px rgba(244,63,94,0.22)',
    border: 'rgba(244,63,94,0.4)',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing both frontend rendering and backend response times for fast, efficient applications',
    color: 'from-yellow-400 to-orange-500',
    glow: '0 20px 48px rgba(251,191,36,0.22)',
    border: 'rgba(251,191,36,0.4)',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams using Agile methodologies, Git workflows, and clear communication',
    color: 'from-blue-500 to-cyan-600',
    glow: '0 20px 48px rgba(59,130,246,0.22)',
    border: 'rgba(59,130,246,0.4)',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Delivering reliable, tested, and cross-browser compatible solutions end to end',
    color: 'from-emerald-500 to-teal-600',
    glow: '0 20px 48px rgba(16,185,129,0.22)',
    border: 'rgba(16,185,129,0.4)',
  },
  {
    icon: BookOpen,
    title: 'Always Learning',
    description: 'Constantly exploring new technologies, frameworks, and AI tools to stay ahead of the curve',
    color: 'from-violet-500 to-purple-600',
    glow: '0 20px 48px rgba(139,92,246,0.22)',
    border: 'rgba(139,92,246,0.4)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18, delay: i * 0.09 },
  }),
};

const HighlightCard: React.FC<{ item: typeof highlights[0]; index: number }> = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        y: hovered ? -8 : 0,
        boxShadow: hovered ? item.glow : '0 4px 16px rgba(0,0,0,0.07)',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{
        border: hovered ? `1px solid ${item.border}` : '1px solid transparent',
        transition: 'border 0.25s ease',
      }}
      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl flex flex-col cursor-default"
    >
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4`}
      >
        <Icon className="text-white" size={24} />
      </motion.div>
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {item.title}
      </h4>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
        {item.description}
      </p>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Back nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-5">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 3+ years of experience building scalable web applications
            from database to deployment
          </p>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto" />
        </motion.div>

        {/* My Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            My Journey
          </h2>

          {[
            'I started my journey in software development with a deep curiosity for how complex systems are built from scratch. What began as experimenting with small scripts quickly grew into a passion for architecting full-stack applications — from designing REST APIs and managing databases to crafting polished, responsive user interfaces.',
            'Today I work across the entire stack — building backends with Node.js, Express, and NestJS, designing databases with MongoDB and PostgreSQL, and creating modern frontends with React, TypeScript, and Tailwind CSS. I care deeply about clean architecture, performance, and writing code that is easy to maintain and scale.',
            'When I\'m not coding, you\'ll find me exploring new technologies, diving into AI tools and developer workflows, contributing to open-source, or sharing what I\'ve learned with the developer community.',
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.12 }}
              className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg"
            >
              {para}
            </motion.p>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center"
        >
          What Drives Me
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <HighlightCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Back CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutPage;
