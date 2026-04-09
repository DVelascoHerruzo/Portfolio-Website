import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none"
      aria-hidden="true"
    >
      {/* Main line */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, #fcee09 0%, #00f0ff 50%, #ff003c 100%)',
          boxShadow: '0 0 8px #00f0ff, 0 0 20px #00f0ff66',
        }}
      />
    </motion.div>
  );
}
