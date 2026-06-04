import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import { PROJECTS_DATA } from '../../constants';

const TABS = [
  { key: 'workplace', label: '🏢 Workplace', desc: 'Production projects shipped at Ollcode Pvt Ltd for enterprise clients', badge: 'Live' },
  { key: 'personal', label: '⚡ Personal', desc: 'Research, open-source experiments and passion builds', badge: null },
  { key: 'academic', label: '🎓 Academic', desc: 'University projects from SLIIT coursework', badge: null },
];

const TECH_COLORS = {
  'Spring Boot': 'text-green-400 border-green-400/30 bg-green-400/5',
  'React.js': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'React Native': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'MongoDB': 'text-green-500 border-green-500/30 bg-green-500/5',
  'TimescaleDB': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  'Kafka': 'text-orange-400 border-orange-400/30 bg-orange-400/5',
  'Redis': 'text-red-400 border-red-400/30 bg-red-400/5',
  'Python': 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
  'YOLOv8 Nano': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
  'Kotlin': 'text-violet-400 border-violet-400/30 bg-violet-400/5',
  'default': 'text-textMuted border-white/10 bg-white/3',
};

function getTechClass(tech) {
  return TECH_COLORS[tech] || TECH_COLORS['default'];
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      variants={zoomIn(index * 0.05, 0.4)}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group relative"
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-gradient-to-r from-accent via-accent2 to-accent3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Project header mockup */}
      <div className="relative h-40 bg-gradient-to-br from-surface to-surfaceLight overflow-hidden flex flex-col items-center justify-center gap-3 px-5">
        {/* Terminal window mockup */}
        <div className="w-full max-w-[220px] rounded-lg bg-primary/80 border border-white/8 p-3 font-mono text-xs">
          <div className="flex gap-1.5 mb-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-2 items-center">
              <span className="text-accent/70">$</span>
              <div className="h-1.5 rounded bg-accent/30 w-2/3" />
            </div>
            <div className="h-1.5 rounded bg-accent2/20 w-4/5" />
            <div className="h-1.5 rounded bg-accent3/15 w-1/2" />
            <div className="h-1.5 rounded bg-accent/10 w-3/4" />
          </div>
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action links overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-text hover:text-accent hover:border-accent/40 transition-all"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-text hover:text-accent hover:border-accent/40 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>

        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 rounded text-xs font-mono bg-accent/15 border border-accent/25 text-accent">
              ★ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-bold text-text text-sm leading-snug group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-textMuted text-xs leading-relaxed">
          {expanded ? project.longDesc || project.description : project.description}
        </p>

        {project.longDesc && project.longDesc !== project.description && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent text-xs font-mono hover:underline text-left flex items-center gap-1 w-fit"
          >
            {expanded ? '← Less' : 'More detail →'}
          </button>
        )}

        {/* Tech tags */}
        {project.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1 mt-auto">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono font-medium border ${getTechClass(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('workplace');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const currentProjects = PROJECTS_DATA[activeTab] || [];
  const activeTabData = TABS.find((t) => t.key === activeTab);

  return (
    <section id="projects" className="section-padding relative bg-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/4 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent2/4 rounded-full blur-[130px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeIn('up', 0)} className="mb-12 text-center">
            <p className="section-subheading">What I've Built</p>
            <h2 className="section-heading">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-textMuted font-body text-base mt-4 max-w-xl mx-auto">
              From enterprise IoT systems in Singapore to AI research on Raspberry Pi — here's the work that defines me.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeIn('up', 0.1)} className="flex flex-wrap justify-center gap-3 mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-mono font-medium transition-all duration-200 border
                  ${activeTab === tab.key
                    ? 'bg-accent/10 border-accent/40 text-accent shadow-neon'
                    : 'glass border-white/10 text-textMuted hover:border-accent/20 hover:text-text'
                  }`}
              >
                {tab.label}
                {tab.badge && (
                  <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] bg-green-500/20 border border-green-500/30 text-green-400 font-mono">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          {/* Tab description */}
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-textMuted text-xs font-mono mb-10"
          >
            // {activeTabData?.desc}
          </motion.p>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer(0.05, 0)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* GitHub CTA */}
          <motion.div variants={fadeIn('up', 0.3)} className="mt-12 text-center">
            <a
              href="https://github.com/primm4333"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              View All on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
