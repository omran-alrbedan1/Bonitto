'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useRef, useEffect } from 'react';

const localeNames: Record<string, { native: string; short: string; country: string }> = {
  en: { native: 'English', short: 'EN', country: 'gb' },
  fr: { native: 'Français', short: 'FR', country: 'fr' },
  de: { native: 'Deutsch', short: 'DE', country: 'de' },
  it: { native: 'Italiano', short: 'IT', country: 'it' },
  ru: { native: 'Русский', short: 'RU', country: 'ru' },
  tr: { native: 'Türkçe', short: 'TR', country: 'tr' },
  ar: { native: 'العربية', short: 'AR', country: 'sa' },
  es: { native: 'Español', short: 'ES', country: 'es' },
  he: { native: 'עברית', short: 'HE', country: 'il' },
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="m-0 p-0 border-none bg-transparent text-white font-light uppercase text-xs md:text-sm cursor-pointer flex items-center gap-1.5"
        aria-label="Change language"
        aria-expanded={open}
      >
        <span>{localeNames[locale]?.native || locale}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 28 15"
          className={`w-3 h-auto transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        >
          <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 .999999 14 14 27 1" />
        </svg>
      </button>

      <div
        className="language-switcher-panel absolute top-[calc(100%+12px)] z-50 min-w-[200px]"
        style={{
          opacity: open ? 1 : 0,
          transform: `translateY(${open ? 0 : -8}px)`,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        <div
          className="rounded-sm overflow-hidden"
          style={{
            backgroundColor: 'rgba(74,178,168,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
          }}
        >
          <div className="py-1">
            {Object.entries(localeNames).map(([code, { native, short }]) => {
              const isActive = locale === code;
              return (
                <button
                  key={code}
                  onClick={() => {
                    //@ts-ignore
                    router.replace(pathname, { locale: code });
                    setOpen(false);
                  }}
                  className="language-option flex items-center gap-3 w-full text-left border-none cursor-pointer transition-all duration-200"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : 'transparent',
                    color: '#fff',
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <img
                    src={`https://flagcdn.com/w40/${localeNames[code].country}.png`}
                    alt=""
                    className="w-5 h-[15px] object-cover rounded-[1px]"
                    loading="lazy"
                  />
                  <span className="font-light opacity-80">{native}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          className="language-switcher-arrow absolute -top-[6px] w-3 h-3 rotate-45"
          style={{ backgroundColor: 'rgba(74,178,168,0.95)', border: '1px solid rgba(255,255,255,0.2)', borderRight: 'none', borderBottom: 'none' }}
        />
      </div>
    </div>
  );
}
