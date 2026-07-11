import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, School, GraduationCap, Rocket } from 'lucide-react';

const chapters = [
  {
    icon: BookOpen,
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800/40',
    label: 'Primary School',
    school: 'Lalistu Bori Primary School & Kiltu Kara Primary School',
    period: '2001 – 2009',
    content: [
      'My educational journey began with my very first steps into learning. I started Kindergarten in 2001, and from those earliest years I was drawn to understanding how things worked.',
      'I attended Lalistu Bori Primary School before continuing at Kiltu Kara Primary School — both in rural settings where resources were limited but determination was not.',
      'These early years built the foundation of curiosity, discipline, and resilience that would define every chapter after them. Learning was not always easy, but the habit of showing up and pushing through started here.',
    ],
  },
  {
    icon: School,
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800/40',
    label: 'Secondary School',
    school: 'Kiltu Kara Secondary School',
    period: '2010 – 2011',
    content: [
      'Secondary school was a period of growth and self-discovery. I began to take academics more seriously and developed stronger study habits.',
      'I found myself drawn to mathematics and science — subjects that required logical thinking and structured problem-solving, skills that would later become central to my work as a software engineer.',
      'This chapter laid the groundwork for the more demanding years ahead.',
    ],
  },
  {
    icon: School,
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800/40',
    label: 'Preparatory School',
    school: 'Nekemte Comprehensive High School',
    period: '2012 – 2013',
    content: [
      'Preparatory school was one of the most challenging and transformative chapters of my education. The academic pressure intensified significantly, and I had to develop real discipline and persistence.',
      'Through dedication and perseverance, I not only survived the curriculum but emerged with stronger problem-solving skills and a much clearer sense of what I wanted to pursue.',
      'It was here that my interest in technology and computing really started to crystallize. The determination I built during these two years became one of my most important assets.',
    ],
  },
  {
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800/40',
    label: 'University',
    school: 'Haramaya University — BSc Software Engineering',
    period: '2022 – 2026',
    content: [
      'University was where everything came together. I enrolled in a Bachelor of Science in Software Engineering at Haramaya University, and from the first semester it was clear that I had found my field.',
      'I dove deep into software design, algorithms, databases, operating systems, and modern full-stack development. But the real growth came from building things — not just studying them.',
      'I designed and built the eLetter Management System for SSGI, an Internship Management System, a rental marketplace (E-Renting), and several other full-stack projects that solved real problems for real users.',
      'I joined the A2SV (Africa to Silicon Valley) Education Program to sharpen my algorithmic thinking and competitive programming skills — solving hundreds of Data Structures and Algorithms problems alongside talented engineers from across Africa.',
      'I completed a software engineering internship at the Space Science and Geospatial Institute (SSGI), where I shipped production software used by real government staff.',
      'I built my own personal brand, launched freelance development and video editing work, and started working with clients independently.',
      'University was not just an academic experience — it was a full transition into becoming a working software engineer.',
    ],
  },
  {
    icon: Rocket,
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/10 border-violet-200 dark:border-violet-800/40',
    label: 'What\'s Next',
    school: 'The Road Ahead',
    period: '2026 – ∞',
    content: [
      'The journey is far from over. Graduating from Haramaya University is not a finish line — it is a launching pad.',
      'I am building toward a career in full-stack engineering, product development, and technical leadership. I want to keep creating software that matters, working with teams that care about craft, and contributing to the kind of technology that changes how people live and work.',
      'The kid who started in a rural primary school with limited resources is now shipping production-grade software, studying algorithms alongside Africa\'s top engineers, and building a career in one of the most dynamic fields on earth.',
      'That story is still being written.',
    ],
  },
];

const MyStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">

      {/* Back nav */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors text-sm font-medium"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 text-center"
      >
        <span className="text-sm font-semibold text-amber-500 uppercase tracking-widest">
          The Full Story
        </span>
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-3 mb-5">
          My Education Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
          From early beginnings in rural education to building a future in software engineering —
          a journey of growth, resilience, and continuous learning.
        </p>
        {/* Divider */}
        <div className="mt-8 w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto" />
      </motion.div>

      {/* Chapters */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-12">
        {chapters.map((ch, i) => {
          const Icon = ch.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`rounded-2xl border p-7 ${ch.bg}`}
            >
              {/* Chapter header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${ch.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="text-white" size={22} />
                </div>
                <div>
                  <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
                    {ch.label}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                    {ch.school}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">📅 {ch.period}</p>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-4">
                {ch.content.map((para, j) => (
                  <p key={j} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            "The story is still being written."
          </p>
          <p className="text-gray-500 dark:text-gray-400 mb-8">— Amanuel Abate</p>
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

export default MyStory;
