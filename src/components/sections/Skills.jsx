import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';
import { SKILLS_DATA } from '../../constants';

const colorMap = {
  accent: {
    border: 'border-accent/20', bg: 'bg-accent/8', text: 'text-accent',
    glow: 'hover:shadow-neon', dot: 'bg-accent', headerBg: 'bg-accent/10',
  },
  accent2: {
    border: 'border-accent2/20', bg: 'bg-accent2/8', text: 'text-accent2',
    glow: 'hover:shadow-neon-purple', dot: 'bg-accent2', headerBg: 'bg-accent2/10',
  },
  accent3: {
    border: 'border-accent3/20', bg: 'bg-accent3/8', text: 'text-accent3',
    glow: 'hover:shadow-neon-pink', dot: 'bg-accent3', headerBg: 'bg-accent3/10',
  },
};

function SkillCard({ category, icon, color, skills, index }) {
  const c = colorMap[color] || colorMap.accent;
  return (
    <motion.div
      variants={zoomIn(index * 0.05, 0.5)}
      className={`glass-card rounded-2xl p-6 flex flex-col gap-4 group transition-all duration-300 ${c.glow}`}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${c.headerBg} border ${c.border} flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <h3 className={`font-display font-semibold text-sm ${c.text} uppercase tracking-wider`}>
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium
              ${c.bg} border ${c.border} ${c.text} transition-all duration-200 hover:scale-105`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const allTechs = [
  'React.js', 'Spring Boot', 'Node.js', 'MongoDB', 'Java', 'Kotlin',
  'Python', 'TimescaleDB', 'Apache Kafka', 'Redis', 'Express.js', 'FastAPI',
  'React Native', 'BACnet', 'Modbus', 'SNMP', 'YOLOv8', 'Raspberry Pi',
  'JWT', 'REST APIs', 'Tailwind CSS', 'Git', 'Postman', 'Swagger UI',
  'Claude Code', 'Docker', 'PostgreSQL', 'Android', 'JavaScript',
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section-padding relative bg-primary overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent2/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={fadeIn('up', 0)} className="mb-16 text-center">
            <p className="section-subheading">What I Work With</p>
            <h2 className="section-heading">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-textMuted font-body text-base mt-4 max-w-xl mx-auto">
              From IoT protocols to AI model training — a toolkit forged through real enterprise delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {SKILLS_DATA.map((skill, i) => (
              <SkillCard key={i} {...skill} index={i} />
            ))}
          </div>

          {/* Marquee rows — two directions for visual interest */}
          <motion.div variants={fadeIn('up', 0.2)} className="flex flex-col gap-4">
            {/* Row 1 — forward */}
            <div className="relative overflow-hidden py-2">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
              <div className="flex gap-4" style={{ animation: 'marquee 28s linear infinite' }}>
                {[...allTechs.slice(0, 15), ...allTechs.slice(0, 15)].map((tech, i) => (
                  <span
                    key={i}
                    className="shrink-0 px-4 py-2 glass border border-white/5 rounded-full text-xs font-mono text-textMuted whitespace-nowrap hover:border-accent/20 hover:text-accent transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2 — reverse */}
            <div className="relative overflow-hidden py-2">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />
              <div className="flex gap-4" style={{ animation: 'marquee 35s linear infinite reverse' }}>
                {[...allTechs.slice(15), ...allTechs.slice(15)].map((tech, i) => (
                  <span
                    key={i}
                    className="shrink-0 px-4 py-2 glass border border-white/5 rounded-full text-xs font-mono text-textMuted whitespace-nowrap hover:border-accent2/20 hover:text-accent2 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
