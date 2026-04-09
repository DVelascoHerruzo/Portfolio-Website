import { motion } from 'framer-motion';
import type { SceneConfig } from '../hooks/useScrollScene';

interface Props {
  scene: SceneConfig;
}

/**
 * Full-screen radial glow that shifts color per section.
 * Fixed behind all content, pointer-events-none.
 */
export default function AmbientGlow({ scene }: Props) {
  return (
    <motion.div
      key={scene.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Top-left corner bloom */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${scene.glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      {/* Bottom-right corner bloom */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '-10%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${scene.glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  );
}
