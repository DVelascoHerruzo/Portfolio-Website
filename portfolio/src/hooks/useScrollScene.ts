import { useState, useEffect } from 'react';

export type SceneId = 'hero' | 'skills' | 'shaders' | 'llm' | 'lore' | 'contact';

export interface SceneConfig {
  id: SceneId;
  label: string;
  index: number;
  glow: string;   // CSS color for ambient glow
  accent: string; // Hex for the side HUD
}

export const SCENES: SceneConfig[] = [
  { id: 'hero',    label: '00 / BOOT',          index: 0, glow: '#fcee0912', accent: '#fcee09' },
  { id: 'skills',  label: '01 / SKILL_MATRIX',  index: 1, glow: '#00f0ff10', accent: '#00f0ff' },
  { id: 'shaders', label: '02 / SHADER_WORK',   index: 2, glow: '#fcee0910', accent: '#fcee09' },
  { id: 'llm',     label: '03 / BEYOND_RENDER', index: 3, glow: '#ff003c0d', accent: '#ff003c' },
  { id: 'lore',    label: '04 / JACK_IN',        index: 4, glow: '#00f0ff0e', accent: '#00f0ff' },
  { id: 'contact', label: '05 / OPEN_CHANNEL',  index: 5, glow: '#fcee0910', accent: '#fcee09' },
];

export function useScrollScene() {
  const [activeScene, setActiveScene] = useState<SceneConfig>(SCENES[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SCENES.forEach(scene => {
      const el = document.getElementById(scene.id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveScene(scene);
        },
        { rootMargin: '-35% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return activeScene;
}
