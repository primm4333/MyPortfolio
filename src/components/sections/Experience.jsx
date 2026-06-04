import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { EXPERIENCE_DATA } from '../../constants';

function ExperienceCard({ exp, index }) {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-2 border-accent bg-primary z-10 flex items-center justify-center">
        {exp.current && <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />}
        {!exp.current && <div className="w-2 h-2 rounded-full bg-accent" />}
      </div>

      {/* Card */}
      <div className="glass-card rounded-2xl p-6 ml-4 group relative overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden shrink-0">
              {exp.logo ? (
                <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain p-1" />
              ) : (
                <span className="text-xl font-bold text-accent font-mono text-sm">OC</span>
              )}
            </div>
            <div>
              <h3 className="font-display font-bold text-text text-base">{exp.role}</h3>
              <p className="text-accent text-sm font-mono">{exp.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono border border-accent2/30 text-accent2 bg-accent2/5">
                {exp.type}
              </span>
              {exp.current && (
                <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Now
                </span>
              )}
            </div>
            <span className="text-textMuted text-xs font-mono">{exp.period}</span>
            <span className="text-textMuted text-xs flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {exp.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <ul className="flex flex-col gap-2.5 mb-5">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-textMuted text-sm leading-relaxed">
              <span className="text-accent mt-1 shrink-0 text-xs">▹</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        {exp.technologies?.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {exp.technologies.map((tech, i) => (
              <span key={i} className="skill-tag text-xs">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const realExperience = EXPERIENCE_DATA.filter(
    (e) => e.company && e.company !== 'Your Company Name'
  );

  return (
    <section id="experience" className="section-padding relative bg-secondary">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent3/4 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeIn('up', 0)} className="mb-16 text-center">
            <p className="section-subheading">My Journey</p>
            <h2 className="section-heading">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {realExperience.length > 0 && (
              <div className="absolute left-[9px] top-6 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent2 to-transparent" />
            )}
            {realExperience.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>

          {/* Currently studying badge */}
          <motion.div variants={fadeIn('up', 0.3)} className="mt-12">
            <div className="glass-card rounded-2xl p-5 flex items-center gap-4 border border-accent/10">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <span className="text-2xl">📚</span>
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-text text-sm">Currently Pursuing</p>
                <p className="text-textMuted text-xs mt-0.5">
                  BSc (Hons) in Information Technology · SLIIT · 2022 – 2026
                </p>
              </div>
              <span className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Active
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
