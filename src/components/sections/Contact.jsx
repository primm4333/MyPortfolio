import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { HERO_DATA, REFERENCES_DATA } from '../../constants';

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: HERO_DATA.email,
    href: `mailto:${HERO_DATA.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: HERO_DATA.phone,
    href: `tel:${HERO_DATA.phone.replace(/\s/g, '')}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Location',
    value: HERO_DATA.location,
    href: null,
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // =====================================================
    // EMAILJS SETUP (optional but recommended):
    // 1. Go to https://emailjs.com and create a free account
    // 2. Create a service (Gmail), template, and get your keys
    // 3. Install: npm install @emailjs/browser (already in package.json)
    // 4. Replace the values below and uncomment the emailjs block
    // =====================================================

    // import emailjs from '@emailjs/browser';
    // try {
    //   await emailjs.send(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
    //     'YOUR_PUBLIC_KEY'
    //   );
    //   setStatus('success');
    //   setForm({ name: '', email: '', subject: '', message: '' });
    // } catch {
    //   setStatus('error');
    // }

    // Fallback: open mailto link
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${HERO_DATA.email}?subject=${subject}&body=${body}`, '_blank');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="section-padding relative bg-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent2/4 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent3/4 rounded-full blur-[100px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={fadeIn('up', 0)} className="mb-16 text-center">
            <p className="section-subheading">Get In Touch</p>
            <h2 className="section-heading">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-textMuted font-body text-base mt-4 max-w-xl mx-auto">
              Whether you have a project idea, job opportunity, or just want to say hi — my inbox is always open.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div variants={fadeIn('right', 0.1)} className="flex flex-col gap-8">
              {/* Contact items */}
              <div className="flex flex-col gap-4">
                {CONTACT_ITEMS.map((item, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-textMuted text-xs font-mono">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text text-sm font-semibold hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text text-sm font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-textMuted text-xs font-mono mb-3 uppercase tracking-widest">Find me on</p>
                <div className="flex gap-3">
                  {[
                    { label: 'LinkedIn', href: HERO_DATA.linkedin, icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    )},
                    { label: 'GitHub', href: HERO_DATA.github, icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                    )},
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 glass-card rounded-xl text-textMuted hover:text-accent text-sm font-medium transition-all duration-200"
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* References */}
              <div>
                <p className="text-textMuted text-xs font-mono mb-3 uppercase tracking-widest">References</p>
                <div className="flex flex-col gap-3">
                  {REFERENCES_DATA.map((ref, i) => (
                    <div key={i} className="glass-card rounded-xl p-4">
                      <p className="font-semibold text-text text-sm">{ref.name}</p>
                      <p className="text-accent text-xs font-mono">{ref.role}</p>
                      <p className="text-textMuted text-xs">{ref.company}</p>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <a href={`mailto:${ref.email}`} className="text-textMuted hover:text-accent text-xs transition-colors">
                          {ref.email}
                        </a>
                        {ref.phone && (
                          <a href={`tel:${ref.phone}`} className="text-textMuted hover:text-accent text-xs transition-colors">
                            {ref.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div variants={fadeIn('left', 0.1)}>
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display font-bold text-text text-lg mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Recruiter' },
                    { name: 'email', label: 'Your Email', type: 'email', placeholder: 'recruiter@company.com' },
                    { name: 'subject', label: 'Subject', type: 'text', placeholder: "Let's work together!" },
                  ].map((field) => (
                    <div key={field.name} className="flex flex-col gap-1.5">
                      <label className="text-textMuted text-xs font-mono uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="bg-surface border border-white/8 rounded-lg px-4 py-3 text-text text-sm placeholder:text-textMuted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200"
                      />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-textMuted text-xs font-mono uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity or project..."
                      rows={5}
                      required
                      className="bg-surface border border-white/8 rounded-lg px-4 py-3 text-text text-sm placeholder:text-textMuted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full flex items-center justify-center gap-2 mt-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-sm text-center font-mono"
                    >
                      ✓ Message sent! I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center font-mono">
                      ✗ Something went wrong. Please email me directly.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
