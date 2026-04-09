import { useState } from 'react';
import { AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n';

const LANGS: { code: Language; label: string; cyan: boolean; warning?: string }[] = [
  { code: 'en', label: 'EN', cyan: true },
  { code: 'es', label: 'ES', cyan: true },
  {
    code: 'pl',
    label: 'PL',
    cyan: false,
    warning: "Polish isn't my native language — translations may contain errors.",
  },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div className="flex items-center gap-0.5">
      {LANGS.map(({ code, label, cyan, warning }) => {
        const isActive = language === code;
        const activeText   = cyan ? 'text-cp-cyan'   : 'text-cp-yellow';
        const activeBorder = cyan ? 'border-cp-cyan/50' : 'border-cp-yellow/50';
        const hoverText    = cyan ? 'hover:text-cp-cyan' : 'hover:text-cp-yellow';

        return (
          <div key={code} className="flex items-center">
            <button
              onClick={() => setLanguage(code)}
              className={`px-2 py-0.5 text-xs font-mono tracking-wider transition-all duration-200 border ${
                isActive
                  ? `${activeText} ${activeBorder} bg-white/5`
                  : `text-cp-muted border-transparent ${hoverText}`
              }`}
            >
              {label}
            </button>

            {warning && (
              <div
                className="relative ml-0.5"
                onMouseEnter={() => setShowWarning(true)}
                onMouseLeave={() => setShowWarning(false)}
              >
                <AlertTriangle
                  size={11}
                  className="text-cp-yellow/70 cursor-help"
                />
                {showWarning && (
                  <div
                    className="absolute top-full right-0 mt-2 w-56 z-[200] pointer-events-none"
                    style={{ fontFamily: "'Share Tech Mono', monospace" }}
                  >
                    {/* arrow */}
                    <div className="absolute right-1 bottom-full w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-cp-yellow/50" />
                    <div className="bg-cp-black border border-cp-yellow/50 p-2.5 text-xs leading-relaxed">
                      <span className="text-cp-yellow font-semibold flex items-center gap-1 mb-1">
                        <AlertTriangle size={10} /> UWAGA / WARNING
                      </span>
                      <span className="text-cp-muted">{warning}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
