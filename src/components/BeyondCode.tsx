import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Film, Heart, Lightbulb } from 'lucide-react';

const cards = [
  {
    icon: Palette,
    emoji: '🎨',
    title: 'Art & Design',
    description:
      'I express creativity through visual art and design, exploring ideas beyond code and bringing imagination into digital experiences.',
    color: 'from-pink-500 to-rose-600',
    glow: '0 20px 48px rgba(244,63,94,0.25)',
    border: 'rgba(244,63,94,0.4)',
    bg: 'bg-pink-50 dark:bg-pink-900/10',
    borderClass: 'border-pink-200 dark:border-pink-800/40',
  },
  {
    icon: Film,
    emoji: '🎬',
    title: 'Video Editing',
    description:
      'I craft engaging videos with attention to storytelling, timing, and visual impact — transforming concepts into memorable experiences.',
    color: 'from-violet-500 to-purple-600',
    glow: '0 20px 48px rgba(139,92,246,0.25)',
    border: 'rgba(139,92,246,0.4)',
    bg: 'bg-violet-50 dark:bg-violet-900/10',
    borderClass: 'border-violet-200 dark:border-violet-800/40',
  },
  {
    icon: Heart,
    emoji: '✝️',
    title: 'Believer',
    description:
      'My faith is an important part of who I am. I enjoy sharing what I believe and discussing values and understanding I gain from my faith — aiming to encourage and inspire people around me.',
    color: 'from-amber-500 to-orange-600',
    glow: '0 20px 48px rgba(245,158,11,0.25)',
    border: 'rgba(245,158,11,0.4)',
    bg: 'bg-amber-50 dark:bg-amber-900/10',
    borderClass: 'border-amber-200 dark:border-amber-800/40',
  },
  {
    icon: Lightbulb,
    emoji: '💡',
    title: 'Content Creation',
    description:
      'I create content about technology, digital transformation, and the impact of AI in daily life — sharing knowledge on how people can understand and benefit from modern technologies in this rapidly changing digital era.',
    color: 'from-emerald-500 to-teal-600',
    glow: '0 20px 48px rgba(16,185,129,0.25)',
    border: 'rgba(16,185,129,0.4)',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    borderClass: 'border-emerald-200 dark:border-emerald-800/40',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 18, delay: i * 0.1 },
  }),
};

const BeyondCode: React.FC = () => {
  return (
    <section id="beyond" className="py-10 lg:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Beyond The Code
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I'm not just a developer. I'm a creator — blending technology, creativity,
            storytelling, and faith to inspire people and build meaningful experiences.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <BeyondCard key={card.title} card={card} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

const BeyondCard: React.FC<{ card: typeof cards[0]; index: number }> = ({ card, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = card.icon;

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
        boxShadow: hovered ? card.glow : '0 4px 16px rgba(0,0,0,0.06)',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{
        border: hovered ? `1px solid ${card.border}` : '1px solid transparent',
        transition: 'border 0.25s ease',
      }}
      className={`rounded-2xl p-6 ${card.bg} flex flex-col cursor-default`}
    >
      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 8 : 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}
      >
        <Icon className="text-white" size={22} />
      </motion.div>

      {/* Emoji + Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        <span>{card.emoji}</span>
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
        {card.description}
      </p>
    </motion.div>
  );
};

export default BeyondCode;
