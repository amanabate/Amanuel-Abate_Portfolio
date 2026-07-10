import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Bot, Globe, Layout, Lightbulb, Server, ChevronDown } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Rocket,
    title: 'Fast MVPs, PWAs & SaaS Products',
    description:
      'Bring your product to life with AI-powered development using Lovable, React, TypeScript and modern BaaS like Firebase and Supabase. Build high-performing web and mobile apps (PWAs) quickly, convert them to native apps with CapacitorJS, and deliver MVPs for your SaaS or business — lightning fast.',
    tags: ['Lovable', 'React', 'TypeScript', 'Firebase', 'Supabase', 'PWA', 'CapacitorJS'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Bot,
    title: 'Smart Automations & AI Integration',
    description:
      'Automate workflows and integrate AI into your systems with n8n, AI APIs, Gemini, OpenRouter. Build RAG-based models using LangChain, create intelligent automation pipelines, and leverage AI-powered features to save time, boost productivity, and scale your business faster.',
    tags: ['n8n', 'Gemini', 'OpenRouter', 'LangChain', 'RAG', 'AI APIs'],
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Globe,
    title: 'Full Stack Web Applications',
    description:
      'Build scalable, production-ready systems using Next.js, React, Vue.js, TypeScript, Node.js, Laravel, Golang with modern databases like PostgreSQL, MongoDB, Supabase, and Firebase. Implement REST APIs and GraphQL, use Tailwind CSS for beautiful UIs, and deliver enterprise-grade applications built for speed, reliability, and seamless growth.',
    tags: ['Next.js', 'Vue.js', 'Node.js', 'Laravel', 'Golang', 'PostgreSQL', 'MongoDB', 'Tailwind'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Layout,
    title: 'WordPress Expert & Static Sites',
    description:
      'Expert in WordPress development — bring any web app or system to life using WordPress, WooCommerce, Tutor LMS. From eCommerce stores to LMS platforms, news sites to custom integrations. Also build lightning-fast static sites and modern landing pages using HTML, CSS, JavaScript, or Headless WordPress with Next.js and React.',
    tags: ['WordPress', 'WooCommerce', 'Tutor LMS', 'Headless', 'Next.js', 'React'],
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting & CTO Services',
    description:
      'I help startups and businesses make smart technical decisions — from architecture and stack selection to team leadership and product strategy. I manage projects, internships, and development teams end-to-end. I also consult on AI adoption, digital transformation — showing businesses how to leverage AI tools and automation to cut costs, move faster, and stay ahead of the competition.',
    tags: ['Architecture', 'CTO', 'Teams', 'AI adoption', 'Strategy'],
    color: 'from-rose-500 to-pink-600',
  },
  {
    icon: Server,
    title: 'Deployment, Hosting & System Maintenance',
    description:
      'I deploy and maintain production systems on VPS, different servers, clouds and hosting providers, using Docker, Git, Kubernetes, and more. From server setup and CI/CD pipelines to SSL and domain config — plus mobile releases through Google Play Console when your product ships as an app. Ongoing maintenance keeps everything running smoothly and securely.',
    tags: ['Docker', 'Git', 'Kubernetes', 'CI/CD', 'VPS', 'Cloud', 'SSL', 'Google Play'],
    color: 'from-orange-500 to-amber-600',
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 flex-shrink-0`}>
        <Icon className="text-white" size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
        {service.title}
      </h3>

      {/* Description — expandable */}
      <div className="flex-1">
        <AnimatePresence initial={false}>
          <motion.p
            className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden`}
            style={{ WebkitLineClamp: expanded ? 'unset' : 3, display: '-webkit-box', WebkitBoxOrient: 'vertical' as const }}
            animate={{ maxHeight: expanded ? 400 : 72 }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 flex items-center gap-1 text-xs font-semibold text-amber-500 hover:text-orange-500 transition-colors"
        >
          {expanded ? 'Show less' : 'Read more'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
        {service.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-10 lg:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            What I Do Best
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From idea to production — services I deliver with focus and expertise
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
