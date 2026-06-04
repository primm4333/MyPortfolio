import { motion } from 'framer-motion';
import { HERO_DATA } from '../constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Name */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded border border-accent/40 flex items-center justify-center bg-accent/10">
              <span className="font-mono text-accent font-bold text-xs">PF</span>
            </div>
            <span className="font-display font-semibold text-textMuted text-sm">
              Primal<span className="text-accent">.</span>Fernando
            </span>
          </div>

          {/* Copyright */}
          <p className="text-textMuted text-xs font-mono text-center">
            © {year} Primal Fernando · Built with React + Vite + Tailwind + Three.js
          </p>

          {/* Quick links */}
          <div className="flex items-center gap-4">
            <a
              href={HERO_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-accent transition-colors text-xs font-mono"
            >
              LinkedIn
            </a>
            <a
              href={HERO_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textMuted hover:text-accent transition-colors text-xs font-mono"
            >
              GitHub
            </a>
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="text-textMuted hover:text-accent transition-colors text-xs font-mono"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
