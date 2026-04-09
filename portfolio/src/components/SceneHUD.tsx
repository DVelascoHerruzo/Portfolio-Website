import { motion, AnimatePresence } from 'framer-motion';
import { SCENES, type SceneConfig } from '../hooks/useScrollScene';

interface Props {
  active: SceneConfig;
}

export default function SceneHUD({ active }: Props) {
  return (
    <div
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 pointer-events-none"
      aria-hidden="true"
    >
      {SCENES.map(scene => {
        const isActive = scene.id === active.id;
        return (
          <div key={scene.id} className="flex items-center gap-2">
            {/* Label — only shows for active */}
            <AnimatePresence>
              {isActive && (
                <motion.span
                  key={scene.id + '-label'}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-mono tracking-widest"
                  style={{ color: active.accent }}
                >
                  {scene.label}
                </motion.span>
              )}
            </AnimatePresence>

            {/* Dot */}
            <motion.div
              animate={{
                width:     isActive ? 20 : 4,
                height:    isActive ? 4  : 4,
                background: isActive ? active.accent : '#1f2937',
                boxShadow:  isActive ? `0 0 8px ${active.accent}` : 'none',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ borderRadius: 2 }}
            />
          </div>
        );
      })}

      {/* Vertical track line */}
      <div
        className="absolute right-[1px] inset-y-0 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #1f2937, transparent)' }}
      />
    </div>
  );
}
