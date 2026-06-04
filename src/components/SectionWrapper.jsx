import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer } from '../utils/motion';

export default function SectionWrapper({ children, id, className = '' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={`section-padding relative ${className}`}
    >
      <span className="hash-span" id={id} />
      {children}
    </motion.section>
  );
}
