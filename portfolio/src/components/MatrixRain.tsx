import { useEffect, useRef } from 'react';

// Cyberpunk glyph set: katakana + latin variants + block chars
const GLYPHS =
  'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン' +
  '0123456789ABCDEF<>{}[]|/\\?!@#$%^&*';

interface Column {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
  chars: string[];
}

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const FONT_SIZE = 13;
    const COLUMN_SPACING = 18;
    const OPACITY_RANGE = { min: 0.04, max: 0.14 }; // subtle — content stays readable

    let columns: Column[] = [];
    let animId: number;

    const init = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;

      const count = Math.floor(canvas.width / COLUMN_SPACING);
      columns = Array.from({ length: count }, (_, i) => ({
        x:       i * COLUMN_SPACING + Math.random() * 6,
        y:       Math.random() * -canvas.height,
        speed:   0.4 + Math.random() * 1.2,
        length:  10 + Math.floor(Math.random() * 20),
        opacity: OPACITY_RANGE.min + Math.random() * (OPACITY_RANGE.max - OPACITY_RANGE.min),
        chars:   Array.from({ length: 30 }, randomGlyph),
      }));
    };

    const draw = () => {
      // Don't clear — let trails fade naturally
      ctx.fillStyle = 'rgba(5, 10, 14, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px 'Share Tech Mono', monospace`;

      for (const col of columns) {
        for (let i = 0; i < col.length; i++) {
          const charY = col.y - i * FONT_SIZE;
          if (charY < -FONT_SIZE || charY > canvas.height) continue;

          // Head glyph is brighter
          const isHead = i === 0;
          const alpha  = isHead ? col.opacity * 3.5 : col.opacity * (1 - i / col.length);

          if (isHead) {
            ctx.fillStyle = `rgba(220, 240, 255, ${Math.min(alpha, 1)})`;
          } else {
            // Alternate between cyan and yellow tints
            const t = i / col.length;
            const r = Math.floor(0   + t * 252);
            const g = Math.floor(240 - t * 108);
            const b = Math.floor(255 - t * 246);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.min(alpha, 1)})`;
          }

          // Randomly mutate glyphs
          if (Math.random() < 0.03) col.chars[i] = randomGlyph();
          ctx.fillText(col.chars[i] ?? randomGlyph(), col.x, charY);
        }

        col.y += col.speed;
        if (col.y - col.length * FONT_SIZE > canvas.height) {
          col.y      = -FONT_SIZE * 5;
          col.speed  = 0.4 + Math.random() * 1.2;
          col.length = 10 + Math.floor(Math.random() * 20);
          col.opacity = OPACITY_RANGE.min + Math.random() * (OPACITY_RANGE.max - OPACITY_RANGE.min);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    init();
    animId = requestAnimationFrame(draw);

    const onResize = () => { init(); };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 1 }}
      aria-hidden="true"
    />
  );
}
