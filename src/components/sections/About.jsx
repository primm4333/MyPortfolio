import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { ABOUT_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../../constants';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding relative bg-secondary">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent2/3 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeIn('up', 0)} className="mb-16 text-center">
            <p className="section-subheading">Who I Am</p>
            <h2 className="section-heading">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image + Stats */}
            <motion.div variants={fadeIn('right', 0.1)} className="flex flex-col gap-8">
              {/* Profile Image Area */}
              <div className="relative group">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0 aspect-[4/5] rounded-2xl overflow-hidden glass-card">
                  {/* IMAGE PLACEHOLDER */}
                  {/* Replace this entire div with: <img src="/src/assets/images/primal-photo.jpg" alt="Primal Fernando" className="w-full h-full object-cover" /> */}
                  {/* <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-surface to-surfaceLight gap-4">
                    <div className="w-24 h-24 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                      <span className="text-4xl">👨‍💻</span>
                    </div>
                    <div className="text-center">
                      <p className="text-textMuted text-sm font-mono">// Add your photo here</p>
                      <p className="text-textMuted text-xs mt-1">src/assets/images/primal-photo.jpg</p>
                    </div>
                  </div> */}

                  <img src="src\assets\images\IMG_2445.jpeg" alt="Primal Fernando" className="w-full h-full object-cover" />
                 
                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-surface/80 to-transparent" />
                  {/* Name tag */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display font-bold text-text text-lg">Primal Fernando</p>
                    <p className="text-accent text-sm font-mono">Full Stack Developer</p>
                  </div>
                </div>

                {/* Decorative border */}
                <div className="absolute -bottom-3 -right-3 w-full max-w-sm h-full rounded-2xl border border-accent/20 -z-10" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {ABOUT_DATA.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeIn('up', 0.1 * i)}
                    className="glass-card rounded-xl p-5 text-center"
                  >
                    <p className="font-display font-bold text-3xl gradient-text">{stat.value}</p>
                    <p className="text-textMuted text-sm font-body mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Text + Education + Certs */}
            <motion.div variants={fadeIn('left', 0.1)} className="flex flex-col gap-10">
              {/* About text */}
              <div className="flex flex-col gap-4">
                {ABOUT_DATA.description.map((para, i) => (
                  <p key={i} className="text-textMuted font-body leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Education */}
              <div>
                <h3 className="font-display font-semibold text-text text-lg mb-5 flex items-center gap-2">
                  <span className="text-accent">🎓</span> Education
                </h3>
                <div className="flex flex-col gap-4 relative pl-8">
                  <div className="timeline-line" />
                  {EDUCATION_DATA.map((edu, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn('up', 0.05 * i)}
                      className="relative glass-card rounded-xl p-4"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-10 top-5 w-4 h-4 rounded-full border-2 border-accent bg-primary" />
                      <p className="font-display font-semibold text-text text-sm">{edu.institution}</p>
                      <p className="text-accent text-xs font-mono mt-0.5">{edu.degree}</p>
                      <p className="text-textMuted text-xs mt-0.5">{edu.period}</p>
                      <p className="text-textMuted text-xs mt-1">{edu.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-display font-semibold text-text text-lg mb-5 flex items-center gap-2">
                  <span className="text-accent">🏅</span> Certifications
                </h3>
                <div className="flex flex-col gap-3">
                  {CERTIFICATIONS_DATA.map((cert, i) => (
                    <motion.div
                      key={i}
                      variants={fadeIn('up', 0.05 * i)}
                      className="glass-card rounded-xl p-4 flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-lg">🏆</span>
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">{cert.title}</p>
                        <p className="text-textMuted text-xs">{cert.issuer} · {cert.date}</p>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto text-accent hover:text-accent/70 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
