import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { HERO_DATA } from '../../constants';
import StarsCanvas from '../canvas/StarsCanvas';
import FloatingCube from '../canvas/FloatingCube';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Stars Background */}
      <StarsCanvas />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent3/5 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Noise texture overlay for artistic depth */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        opacity: 0.4
      }} />

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeIn('down', 0)} className="flex items-center gap-2">
              <div className="flex items-center gap-2 glass px-4 py-2 rounded-full border border-accent/20 w-fit">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-textMuted">Associate Full Stack Dev @ Ollcode Pvt Ltd</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeIn('up', 0.1)}>
              <p className="section-subheading">Hello, I'm</p>
              <h1 className="section-heading text-text">
                {HERO_DATA.name.split(' ')[0]}{' '}
                <span className="gradient-text">{HERO_DATA.name.split(' ')[1]}</span>
              </h1>
            </motion.div>

            {/* Animated roles */}
            <motion.div variants={fadeIn('up', 0.2)} className="flex items-center gap-3">
              <span className="text-textMuted font-body text-lg">I am</span>
              <TypeAnimation
                sequence={HERO_DATA.roles.flatMap((role) => [role, 2200])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent font-display font-semibold text-lg"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeIn('up', 0.3)}
              className="text-textMuted font-body text-base leading-relaxed max-w-lg"
            >
              {HERO_DATA.description}
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeIn('up', 0.35)}
              className="flex flex-wrap gap-6 pt-2"
            >
              {[
                { label: 'Projects Shipped', value: '10+' },
                { label: 'Years of experience', value: '4+' },
                { label: 'Technologies', value: '15+' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-bold text-2xl gradient-text">{stat.value}</span>
                  <span className="font-body text-xs text-textMuted">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeIn('up', 0.4)} className="flex flex-wrap gap-4 pt-2">
              <a href={HERO_DATA.resume} download className="btn-primary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-neon inline-flex items-center gap-2"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeIn('up', 0.45)} className="flex items-center gap-4 pt-2">
              <span className="text-textMuted text-xs font-mono">CONNECT —</span>
              <a
                href={HERO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded glass border border-white/10 flex items-center justify-center text-textMuted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={HERO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded glass border border-white/10 flex items-center justify-center text-textMuted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={`mailto:${HERO_DATA.email}`}
                className="w-9 h-9 rounded glass border border-white/10 flex items-center justify-center text-textMuted hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* 3D Element */}
              <div className="w-full h-full">
                <FloatingCube />
              </div>

              {/* Decorative rings */}
              <div className="absolute inset-4 rounded-full border border-accent/8 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-accent2/8 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

              {/* Floating badge: IoT Singapore */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-6 top-1/4 glass border border-accent/25 rounded-lg px-3 py-2 flex items-center gap-2 shadow-neon"
              >
                <span className="text-lg">🇸🇬</span>
                <div>
                  <p className="text-xs font-semibold text-text leading-none">IoT BMS</p>
                  <p className="text-[10px] text-textMuted">Singapore Client</p>
                </div>
              </motion.div>

              {/* Floating badge: SLIIT */}
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-6 bottom-1/4 glass border border-accent2/25 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-xs font-semibold text-text leading-none">SLIIT 2026</p>
                  <p className="text-[10px] text-textMuted">BSc (Hons) IT</p>
                </div>
              </motion.div>

              {/* Floating badge: AI Research */}
              <motion.div
                animate={{ y: [-5, 10, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute -right-4 top-8 glass border border-accent3/25 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="text-lg">🤖</span>
                <div>
                  <p className="text-xs font-semibold text-text leading-none">YOLOv8</p>
                  <p className="text-[10px] text-textMuted">Edge AI Research</p>
                </div>
              </motion.div>

              {/* Floating badge: 10K signals */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
                className="absolute -left-4 bottom-12 glass border border-green-500/25 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="text-lg">📡</span>
                <div>
                  <p className="text-xs font-semibold text-text leading-none">10K+ Points</p>
                  <p className="text-[10px] text-textMuted">IoT Signals</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-textMuted hover:text-accent transition-colors"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.button>
    </section>
  );
}
