import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  {
    id: 1,
    icon: BookOpen,
    level: 'Primary School',
    school: 'Lalistu Bori & Kiltu Kara Primary School',
    period: '2001 – 2009',
    summary: 'Where it all began. Early years that built curiosity, discipline, and a love for learning.',
    color: 'from-amber-500 to-orange-600',
    dot: 'bg-amber-500',
    ring: 'ring-amber-200 dark:ring-amber-800',
    glow: 'rgba(245,158,11,0.25)',
  },
  {
    id: 2,
    icon: School,
    level: 'Secondary School',
    school: 'Kiltu Kara Secondary School',
    period: '2010 – 2011',
    summary: 'A period of growth and self-discovery that strengthened my academic foundation.',
    color: 'from-orange-500 to-red-500',
    dot: 'bg-orange-500',
    ring: 'ring-orange-200 dark:ring-orange-800',
    glow: 'rgba(249,115,22,0.25)',
  },
  {
    id: 3,
    icon: School,
    level: 'Preparatory (High School)',
    school: 'Nekemte Comprehensive High School',
    period: '2012 – 2013',
    summary: 'A transformative chapter — developed problem-solving skills and the drive to pursue higher education.',
    color: 'from-blue-500 to-cyan-600',
    dot: 'bg-blue-500',
    ring: 'ring-blue-200 dark:ring-blue-800',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    id: 4,
    icon: GraduationCap,
    level: 'University',
    school: 'Haramaya University — Software Engineering',
    period: '2022 – 2026',
    summary: 'BSc in Software Engineering. Built full-stack projects, joined A2SV, interned at SSGI, and launched a freelance career.',
    color: 'from-emerald-500 to-teal-600',
    dot: 'bg-emerald-500',
    ring: 'ring-emerald-200 dark:ring-emerald-800',
    glow: 'rgba(16,185,129,0.25)',
  },
];

const lineVariant = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.4, ease: 'easeInOut' as const } },
};

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i: number) => ({
    scale: 1, opacity: 1,
    transition: { type: 'spring' as const, stiffness: 200, damping: 14, delay: i * 0.15 + 0.2 },
  }),
};

const cardVariant = (isLeft: boolean) => ({
  hidden: { opacity: 0, x: isLeft ? -50 : 50, y: 16 },
  visible: (i: number) => ({
    opacity: 1, x: 0, y: 0,
    transition: { type: 'spring' as const, stiffness: 75, damping: 18, delay: i * 0.15 },
  }),
});

const Education: React.FC = () => {
  return (
    <section id="education" className="py-10 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From early beginnings in rural education to building a future in software engineering —
            a journey of growth, resilience, and continuous learning.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            variants={lineVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-orange-400 to-transparent md:-translate-x-1/2 origin-top"
          />

          <div className="space-y-10">
            {milestones.map((m, index) => {
              const Icon = m.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={m.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Mobile dot */}
                  <motion.div
                    custom={index}
                    variants={dotVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className={`md:hidden w-4 h-4 rounded-full ${m.dot} ring-4 ${m.ring} flex-shrink-0 mt-5 z-10 relative`}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className={`absolute inset-0 rounded-full ${m.dot} opacity-40`}
                    />
                  </motion.div>

                  {/* Desktop dot */}
                  <motion.div
                    custom={index}
                    variants={dotVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className={`hidden md:flex absolute left-1/2 top-6 w-5 h-5 rounded-full ${m.dot} ring-4 ${m.ring} -translate-x-1/2 z-10 items-center justify-center`}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      className={`absolute inset-0 rounded-full ${m.dot} opacity-40`}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    custom={index}
                    variants={cardVariant(isLeft)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{
                      y: -6,
                      boxShadow: `0 20px 40px ${m.glow}`,
                    }}
                    className={`flex-1 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}
                  >
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div
                          initial={{ scale: 0, rotate: -20 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ type: 'spring', stiffness: 200, damping: 14, delay: index * 0.15 + 0.25 }}
                          className={`w-9 h-9 rounded-lg bg-gradient-to-r ${m.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="text-white" size={17} />
                        </motion.div>
                        <div>
                          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
                            {m.level}
                          </span>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                            {m.school}
                          </h3>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                        📅 {m.period}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {m.summary}
                      </p>
                    </div>
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl px-8 py-6">
            <p className="text-gray-600 dark:text-gray-400 text-base mb-4 italic">
              "There's a lot more to this story — the full journey, the pivots, and the lessons."
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/my-story"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                Read the Full Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
