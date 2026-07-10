import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search, Circle, Layers, Server, Database, Smartphone,
  Container, Cloud, Wrench, Paintbrush, Brain, TestTube2,
  ChevronLeft, ChevronRight, RefreshCw, X, Code2, Bot,
} from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiRedux, SiFramer, SiNodedotjs, SiExpress, SiNestjs,
  SiMongodb, SiPostgresql, SiFirebase, SiSupabase,
  SiVercel, SiNetlify, SiAmazon,
  SiDocker, SiGithubactions,
  SiGit, SiFigma, SiPostman, SiLinux,
  SiExpo, SiFlutter,
  SiOpenai, SiClaude, SiAnthropic, SiGooglegemini,
  SiGithubcopilot, SiHuggingface, SiPerplexity, SiOllama,
  SiPython, SiCplusplus,
} from 'react-icons/si';

/* ─────────────────────────── DATA ─────────────────────────── */
type Category =
  | 'All' | 'Frontend' | 'Backend' | 'Database' | 'Mobile'
  | 'DevOps' | 'Cloud' | 'Tools' | 'Design' | 'AI' | 'Testing'
  | 'Languages';
interface Tech {
  name: string;
  icon: React.ElementType;
  description: string;
  category: Exclude<Category, 'All'>;
  color: string;
}

const techs: Tech[] = [
  // Frontend
  { name: 'React',        icon: SiReact,           description: 'Component-based UI library',         category: 'Frontend',  color: '#61DAFB' },
  { name: 'Next.js',      icon: SiNextdotjs,       description: 'Full-stack React framework',          category: 'Frontend',  color: '#ffffff' },
  { name: 'TypeScript',   icon: SiTypescript,      description: 'Typed superset of JavaScript',        category: 'Frontend',  color: '#3178C6' },
  { name: 'JavaScript',   icon: SiJavascript,      description: 'Core web scripting language',         category: 'Frontend',  color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: SiTailwindcss,     description: 'Utility-first CSS framework',         category: 'Frontend',  color: '#38BDF8' },
  { name: 'Redux',        icon: SiRedux,           description: 'Predictable state management',        category: 'Frontend',  color: '#764ABC' },
  { name: 'Framer Motion',icon: SiFramer,          description: 'Production-ready animation library',  category: 'Frontend',  color: '#BB4B96' },
  // Backend
  { name: 'Node.js',      icon: SiNodedotjs,       description: 'JavaScript runtime on the server',    category: 'Backend',   color: '#68A063' },
  { name: 'Express.js',   icon: SiExpress,         description: 'Minimal Node.js web framework',       category: 'Backend',   color: '#ffffff' },
  { name: 'NestJS',       icon: SiNestjs,          description: 'Progressive Node.js framework',       category: 'Backend',   color: '#E0234E' },
  // Database
  { name: 'MongoDB',      icon: SiMongodb,         description: 'NoSQL document database',             category: 'Database',  color: '#47A248' },
  { name: 'PostgreSQL',   icon: SiPostgresql,      description: 'Advanced open-source RDBMS',          category: 'Database',  color: '#336791' },
  { name: 'Firebase',     icon: SiFirebase,        description: "Google's BaaS platform",              category: 'Database',  color: '#FFCA28' },
  { name: 'Supabase',     icon: SiSupabase,        description: 'Open-source Firebase alternative',    category: 'Database',  color: '#3ECF8E' },
  // Cloud
  { name: 'Vercel',       icon: SiVercel,          description: 'Frontend cloud platform',             category: 'Cloud',     color: '#ffffff' },
  { name: 'Netlify',      icon: SiNetlify,         description: 'Modern web hosting platform',         category: 'Cloud',     color: '#00C7B7' },
  { name: 'AWS',          icon: SiAmazon,          description: 'Amazon cloud computing services',     category: 'Cloud',     color: '#FF9900' },
  // DevOps
  { name: 'Docker',       icon: SiDocker,          description: 'Container platform',                  category: 'DevOps',    color: '#2496ED' },
  { name: 'GitHub Actions',icon: SiGithubactions,  description: 'CI/CD automation workflows',          category: 'DevOps',    color: '#2088FF' },
  // Tools
  { name: 'Git',          icon: SiGit,             description: 'Distributed version control',         category: 'Tools',     color: '#F05032' },
  { name: 'VS Code',      icon: Code2,             description: 'Lightweight code editor',             category: 'Tools',     color: '#007ACC' },
  { name: 'Figma',        icon: SiFigma,           description: 'Collaborative UI design tool',        category: 'Tools',     color: '#F24E1E' },
  { name: 'Postman',      icon: SiPostman,         description: 'API development & testing',           category: 'Tools',     color: '#FF6C37' },
  { name: 'Linux',        icon: SiLinux,           description: 'Open-source operating system',        category: 'Tools',     color: '#FCC624' },
  // Mobile
  { name: 'React Native', icon: SiReact,           description: 'Cross-platform mobile apps',          category: 'Mobile',    color: '#61DAFB' },
  { name: 'Expo',         icon: SiExpo,            description: 'React Native development toolkit',    category: 'Mobile',    color: '#ffffff' },
  { name: 'Flutter',      icon: SiFlutter,         description: "Google's cross-platform UI toolkit",  category: 'Mobile',    color: '#54C5F8' },
  // Languages
  { name: 'Python',       icon: SiPython,          description: 'Versatile high-level language',       category: 'Languages', color: '#3776AB' },
  { name: 'C++',          icon: SiCplusplus,       description: 'High-performance system language',    category: 'Languages', color: '#00599C' },
  { name: 'JavaScript',   icon: SiJavascript,      description: 'Core web scripting language',         category: 'Languages', color: '#F7DF1E' },
  { name: 'Java',         icon: Bot,               description: 'Object-oriented platform language',   category: 'Languages', color: '#F89820' },
  // AI
  { name: 'ChatGPT',        icon: SiOpenai,        description: 'OpenAI conversational AI assistant',  category: 'AI',        color: '#10A37F' },
  { name: 'Claude',         icon: SiClaude,        description: 'Anthropic\'s AI assistant',           category: 'AI',        color: '#D97757' },
  { name: 'Gemini',         icon: SiGooglegemini,  description: 'Google\'s multimodal AI model',       category: 'AI',        color: '#4285F4' },
  { name: 'GitHub Copilot', icon: SiGithubcopilot, description: 'AI pair programmer by GitHub',        category: 'AI',        color: '#ffffff' },
  { name: 'Cursor',         icon: Bot,             description: 'AI-first code editor',                category: 'AI',        color: '#F59E0B' },
  { name: 'Windsurf',       icon: Bot,             description: 'Agentic AI IDE by Codeium',           category: 'AI',        color: '#06B6D4' },
  { name: 'Kiro',           icon: Bot,             description: 'AWS AI-powered dev environment',      category: 'AI',        color: '#FF9900' },
  { name: 'DeepSeek',       icon: Bot,             description: 'Open-source reasoning AI model',      category: 'AI',        color: '#4D6BFE' },
  { name: 'Antigravity',    icon: Bot,             description: 'AI coding assistant',                 category: 'AI',        color: '#A855F7' },
  { name: 'Perplexity',     icon: SiPerplexity,    description: 'AI-powered search & answers',         category: 'AI',        color: '#20B8CD' },
  { name: 'Hugging Face',   icon: SiHuggingface,   description: 'Open-source AI model hub',            category: 'AI',        color: '#FFD21E' },
  { name: 'Ollama',         icon: SiOllama,        description: 'Run LLMs locally on your machine',    category: 'AI',        color: '#ffffff' },
  { name: 'Anthropic',      icon: SiAnthropic,     description: 'AI safety & research company',        category: 'AI',        color: '#D97757' },
];


/* ─────────────────────────── SIDEBAR ─────────────────────────── */
const sidebarItems: { label: Category; icon: React.ElementType }[] = [
  { label: 'All',      icon: Layers },
  { label: 'Frontend', icon: Circle },
  { label: 'Backend',  icon: Server },
  { label: 'Database', icon: Database },
  { label: 'Mobile',             icon: Smartphone },
  { label: 'Languages', icon: Code2 },
  { label: 'DevOps',             icon: Container },
  { label: 'Cloud',    icon: Cloud },
  { label: 'Tools',    icon: Wrench },
  { label: 'AI',       icon: Brain },
  { label: 'Design',   icon: Paintbrush },
  { label: 'Testing',  icon: TestTube2 },
];

function countByCategory(cat: Category) {
  if (cat === 'All') return techs.length;
  return techs.filter(t => t.category === cat).length;
}

/* ─────────────────────────── COMPONENT ─────────────────────────── */
const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('Frontend');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return techs.filter(t => {
      const matchCat = activeCategory === 'All' || t.category === activeCategory;
      const matchSearch = t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <section id="techstack" className="py-10 lg:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            An interactive dashboard of the tools and technologies I work with.
          </p>
        </motion.div>

        {/* ── Browser window ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: '#0B1220',
            boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        >
          {/* ── Browser bar ── */}
          <div
            className="flex items-center gap-3 px-5 py-4 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.07)', background: '#0d1526' }}
          >
            {/* Traffic lights */}
            <div className="flex gap-2 flex-shrink-0">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Nav arrows */}
            <div className="flex gap-1 text-gray-600 flex-shrink-0">
              <button className="p-1 rounded hover:text-gray-400 transition-colors" aria-label="Back"><ChevronLeft size={15} /></button>
              <button className="p-1 rounded hover:text-gray-400 transition-colors" aria-label="Forward"><ChevronRight size={15} /></button>
              <button className="p-1 rounded hover:text-gray-400 transition-colors" aria-label="Refresh"><RefreshCw size={13} /></button>
            </div>
            {/* URL bar */}
            <div
              className="flex-1 max-w-sm mx-auto flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs text-gray-500 select-none"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
              portfolio.dev/tech-stack
            </div>
          </div>

          {/* ── Main layout ── */}
          <div className="flex" style={{ minHeight: '600px' }}>

            {/* ── LEFT SIDEBAR ── */}
            <aside
              className="flex-shrink-0 border-r py-5"
              style={{
                width: '240px',
                borderColor: 'rgba(255,255,255,0.07)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <p className="px-4 mb-3 text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'rgba(255,255,255,0.3)' }}>
                Categories
              </p>
              <nav className="space-y-0.5 px-2">
                {sidebarItems.map(({ label, icon: Icon }) => {
                  const active = activeCategory === label;
                  const count = countByCategory(label);
                  return (
                    <motion.button
                      key={label}
                      onClick={() => setActiveCategory(label)}
                      whileTap={{ scale: 0.97 }}
                      className="relative w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-sm transition-colors"
                      style={{
                        color: active ? '#fff' : 'rgba(255,255,255,0.45)',
                        background: active ? 'rgba(245,158,11,0.15)' : 'transparent',
                      }}
                    >
                      {/* amber glow indicator */}
                      {active && (
                        <motion.span
                          layoutId="sidebar-indicator"
                          className="absolute inset-0 rounded-lg"
                          style={{
                            background: 'rgba(245,158,11,0.12)',
                            boxShadow: 'inset 0 0 0 1px rgba(245,158,11,0.4)',
                          }}
                        />
                      )}
                      <span className="relative flex items-center gap-2.5">
                        <Icon size={15} style={{ color: active ? '#F59E0B' : undefined }} />
                        {label}
                      </span>
                      {count > 0 && (
                        <span
                          className="relative text-xs px-1.5 py-0.5 rounded-md flex-shrink-0"
                          style={{
                            background: active ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.07)',
                            color: active ? '#FCD34D' : 'rgba(255,255,255,0.35)',
                          }}
                        >
                          {count}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </aside>

            {/* ── RIGHT CONTENT ── */}
            <main className="flex-1 p-6 overflow-auto">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {filtered.length} {filtered.length === 1 ? 'technology' : 'technologies'} in{' '}
                    <span style={{ color: '#F59E0B' }}>{activeCategory}</span>
                  </p>
                </div>
                {/* Search */}
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    minWidth: '200px',
                  }}
                >
                  <Search size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
                  <input
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search technologies…"
                    className="bg-transparent outline-none w-full text-white placeholder-gray-600 text-sm"
                  />
                  {search && (
                    <button onClick={() => setSearch('')} className="text-gray-600 hover:text-gray-400 transition-colors">
                      <X size={13} />
                    </button>
                  )}
                </div>
              </div>

              {/* Cards grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory + search}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3"
                >
                  {filtered.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full text-center py-16"
                      style={{ color: 'rgba(255,255,255,0.3)' }}
                    >
                      <Search size={32} className="mx-auto mb-3 opacity-30" />
                      <p className="text-sm">No technologies found for "<span className="text-white">{search}</span>"</p>
                    </motion.div>
                  ) : (
                    filtered.map((tech, i) => (
                      <TechCard key={tech.name} tech={tech} index={i} />
                    ))
                  )}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─────────────────────────── CARD ─────────────────────────── */
const TechCard: React.FC<{ tech: Tech; index: number }> = ({ tech, index }) => {
  const Icon = tech.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="rounded-xl p-4 flex flex-col gap-3 cursor-pointer select-none"
      style={{
        background: hovered
          ? 'rgba(245,158,11,0.08)'
          : 'rgba(255,255,255,0.04)',
        border: hovered
          ? '1px solid rgba(245,158,11,0.45)'
          : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 0 20px rgba(245,158,11,0.15)'
          : 'none',
        transition: 'background 0.2s, border 0.2s, box-shadow 0.2s',
      }}
    >
      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <Icon size={22} style={{ color: tech.color }} />
      </motion.div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-white truncate">{tech.name}</p>
        <p className="text-xs mt-0.5 leading-snug line-clamp-2"
          style={{ color: 'rgba(255,255,255,0.4)' }}>
          {tech.description}
        </p>
      </div>
    </motion.div>
  );
};

export default TechStack;
