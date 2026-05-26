import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

export function ScrollProgress() {
  const { scrollProgress } = useScrollPosition();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gold z-50"
      style={{
        scaleX: scrollProgress / 100,
        transformOrigin: '0%',
      }}
      initial={{ scaleX: 0 }}
    />
  );
}
