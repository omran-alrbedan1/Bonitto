'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { usePathname, Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';

const BonittoLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331.27 72.1" fill="#fff" className="w-[235px] h-auto md:w-[251px]">
    <g>
      <path d="M31.39 36.34c0-7.9-5.08-11.61-11.06-11.61H6.11V47.4h15.25c6.05 0 10.03-4.33 10.03-11.06M6.11 2.06v21.29h12.16c6.73 0 11.06-3.92 11.06-10.58S25.35 2.06 19.3 2.06H6.11Zm31.67 34.21c0 7.21-6.39 12.5-14.7 12.5H0V.69h21.02c8.45 0 14.7 5.22 14.7 11.81 0 5.43-4.19 9.55-10.44 11.33 7.35 1.44 12.5 6.11 12.5 12.43M90.95 24.73c0-14.08-7.42-23.35-18.68-23.35s-18.61 9.27-18.61 23.35 7.42 23.35 18.61 23.35 18.68-9.27 18.68-23.35m-43.68 0C47.27 10.65 57.99 0 72.27 0s25.07 10.65 25.07 24.73-10.71 24.73-25.07 24.73-25-10.65-25-24.73M148.7.69v39.83L115.94.69h-5.16v48.08h1.65V5.63l35.58 43.14h2.34V.69h-1.65zM166.64.69h6.11v48.08h-6.11zM183.68.69v1.37h16.28v46.71h6.11V2.06h16.14V.69h-38.53zM231.02.69v1.37h16.28v46.71h6.11V2.06h16.15V.69h-38.54zM317.16 24.73c0-14.08-7.42-23.35-18.68-23.35s-18.61 9.27-18.61 23.35 7.42 23.35 18.61 23.35 18.68-9.27 18.68-23.35m-43.68 0c0-14.08 10.71-24.73 25-24.73s25.07 10.65 25.07 24.73-10.72 24.73-25.07 24.73-25-10.65-25-24.73M170.8 64.63l1.67 3.91h-3.33l1.66-3.91Zm-4.15 7.14h1.08l.99-2.27h4.15l.99 2.27h1.12l-4.18-9.54-4.16 9.54ZM180.72 69.59c.79.94 1.73 1.42 2.8 1.42 1.28 0 2-.72 2-1.46 0-.52-.15-.91-.44-1.19-.28-.28-.82-.63-1.62-1.04-.41-.21-.72-.38-.95-.53-.22-.15-.46-.32-.71-.53-.49-.44-.7-.94-.7-1.61 0-1.34 1.07-2.26 2.76-2.26.75 0 1.38.21 1.86.64v1.16c-.57-.57-1.19-.85-1.88-.85-1.07 0-1.72.52-1.72 1.31 0 .38.13.69.4.92.28.24.74.53 1.39.86.88.44 1.35.73 1.86 1.24.53.49.77 1.1.77 1.88 0 .65-.28 1.2-.82 1.69-.54.48-1.24.72-2.13.72-1.16 0-2.13-.37-2.88-1.1v-1.27ZM187.04 62.55v.95h2.51v8.27h1.03V63.5h2.51v-.95h-6.05zM194.67 67.17c0 1.1.36 2.02 1.07 2.75.72.73 1.62 1.09 2.71 1.09s1.98-.36 2.7-1.09c.71-.72 1.07-1.65 1.07-2.75s-.36-2.01-1.07-2.74c-.72-.73-1.61-1.1-2.7-1.1s-1.98.37-2.71 1.1c-.72.73-1.07 1.64-1.07 2.74m-1.02 0c0-1.36.46-2.5 1.39-3.41.94-.91 2.08-1.38 3.41-1.38s2.47.46 3.4 1.38c.94.91 1.4 2.05 1.4 3.41s-.46 2.51-1.4 3.42c-.93.91-2.06 1.36-3.4 1.36s-2.47-.45-3.41-1.36c-.92-.91-1.39-2.06-1.39-3.42M206.12 67.16h2.01c.53 0 .96-.17 1.31-.53.36-.36.53-.79.53-1.34 0-1.02-.76-1.8-1.77-1.8h-2.08v3.66Zm-1.04 4.61v-9.22h3.15c.77 0 1.41.26 1.96.79.54.52.81 1.18.81 1.96 0 1.22-.7 2.21-1.76 2.62l2.22 3.85h-1.18l-2.08-3.65h-2.09v3.65h-1.03ZM218.29 62.55l-2.6 4.42-2.63-4.42h-1.14l3.24 5.44v3.78h1.03v-3.78l3.21-5.44h-1.11zM225.4 67.17c0 1.1.36 2.02 1.07 2.75.73.73 1.63 1.09 2.71 1.09s1.98-.36 2.7-1.09c.71-.72 1.07-1.65 1.07-2.75s-.36-2.01-1.07-2.74c-.72-.73-1.61-1.1-2.7-1.1s-1.98.37-2.71 1.1c-.71.73-1.07 1.64-1.07 2.74m-1.01 0c0-1.36.46-2.5 1.39-3.41.94-.91 2.08-1.38 3.41-1.38s2.47.46 3.4 1.38c.94.91 1.4 2.05 1.4 3.41s-.46 2.51-1.4 3.42c-.93.91-2.06 1.36-3.4 1.36s-2.47-.45-3.41-1.36c-.92-.91-1.39-2.06-1.39-3.42M235.82 62.55v9.22h1.03v-4.34h3.45v-.95h-3.45V63.5h3.78v-.95h-4.81zM247.82 62.55v9.22h4.83v-.96h-3.79v-8.26h-1.04zM254.44 62.55h1.03v9.22h-1.03zM257.95 62.55v9.22h1.03v-4.34h3.45v-.95h-3.45V63.5h3.78v-.95h-4.81zM264.64 62.55v9.22h5.3v-.96h-4.27v-3.43h3.93v-.95h-3.93V63.5h4.18v-.95h-5.21zM271.23 69.59c.79.94 1.73 1.42 2.8 1.42 1.28 0 2-.72 2-1.46 0-.52-.14-.91-.44-1.19-.28-.28-.82-.63-1.61-1.04-.41-.21-.73-.38-.95-.53-.23-.15-.46-.32-.72-.53-.49-.44-.7-.94-.7-1.61 0-1.34 1.07-2.26 2.76-2.26.76 0 1.38.21 1.87.64v1.16c-.57-.57-1.19-.85-1.88-.85-1.07 0-1.72.52-1.72 1.31 0 .38.13.69.4.92.28.24.74.53 1.39.86.89.44 1.35.73 1.86 1.24.53.49.77 1.1.77 1.88 0 .65-.28 1.2-.82 1.69-.54.48-1.24.72-2.13.72-1.16 0-2.13-.37-2.88-1.1v-1.27ZM286.06 63.36v1.19c-.78-.8-1.75-1.21-2.9-1.21-1.09 0-1.98.37-2.7 1.1s-1.07 1.64-1.07 2.74.36 2.02 1.07 2.75 1.61 1.08 2.7 1.08c1.16 0 2.13-.41 2.9-1.22v1.19c-.77.65-1.73.98-2.9.98-1.34 0-2.47-.45-3.41-1.36-.93-.91-1.39-2.06-1.39-3.43s.46-2.5 1.39-3.41c.94-.91 2.08-1.38 3.41-1.38 1.16 0 2.13.33 2.9.98M288.28 62.55h1.03v9.22h-1.03zM291.8 62.55v9.22h5.3v-.96h-4.27v-3.43h3.92v-.95h-3.92V63.5H297v-.95h-5.2zM299.05 71.77h1.04V64.8l6.46 7.3v-9.55h-1.03v6.97l-6.47-7.3v9.55zM316.08 63.36v1.19c-.78-.8-1.75-1.21-2.9-1.21-1.09 0-1.98.37-2.7 1.1s-1.07 1.64-1.07 2.74.36 2.02 1.07 2.75 1.61 1.08 2.7 1.08c1.16 0 2.13-.41 2.9-1.22v1.19c-.77.65-1.73.98-2.9.98-1.34 0-2.47-.45-3.41-1.36-.93-.91-1.39-2.06-1.39-3.43s.46-2.5 1.39-3.41c.94-.91 2.08-1.38 3.41-1.38 1.16 0 2.13.33 2.9.98M318.25 62.55v9.22h5.3v-.96h-4.27v-3.43h3.93v-.95h-3.93V63.5h4.18v-.95h-5.21zM327.5.45c-2.12 0-3.73 1.59-3.73 3.7s1.6 3.7 3.73 3.7 3.77-1.59 3.77-3.7-1.62-3.7-3.77-3.7Zm0 6.62c-1.72 0-2.91-1.2-2.91-2.91s1.2-2.96 2.91-2.96 2.96 1.24 2.96 2.96-1.24 2.91-2.96 2.91Z" />
      <path d="M329.08 3.29c0-.81-.6-1.4-1.42-1.4h-1.56v4.38h.84V4.74h.58l.94 1.53h.99l-1.04-1.73c.43-.26.69-.72.69-1.25Zm-.86.02c0 .38-.25.65-.59.65h-.7V2.7h.7c.34 0 .59.26.59.61Z" />
    </g>
  </svg>
);

const CloseIcon = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6 md:h-8 md:w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);


const mainNav = [
  ['/about-us', 'aboutUs'],
  ['/events', 'newsEvents'],
  ['/category/research-articles', 'researchArticles'],
  ['/expert-insights-demonstrations', 'expertInsights'],
  ['/face-body', 'faceBody'],
  ['/contact-us', 'contactUs'],
  ['/distributors', 'distributors'],
] as const;

export default function Navbar() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = t.raw('megaMenu.categories') as Array<{ number: string; label: string }>;

  return (
    <>
      <header className="site-header fixed inset-x-0 top-0 md:top-2 z-10 !px-3 py-7 sm:py-8 md:px-10 md:py-10 lg:py-5"
        style={{ backgroundColor: 'rgba(74,178,168,0.1)' }}>
        <div className="flex items-center justify-between !mt-8">
          <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Bonitto Aesthetic home">
            <BonittoLogo />
          </Link>

          <div className="flex items-center">

            <div className="hidden md:inline-block mr-2 md:mr-12">
              <LanguageSwitcher />
            </div>

            <button
              className="border-none bg-transparent text-white font-light uppercase text-sm md:text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              {menuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="primary-navigation"
        className={`primary-menu ${menuOpen ? 'active' : ''}`}
        style={{ transform: menuOpen ? 'translateX(-100vw)' : 'none' }}
      >
        <div className="h-full overflow-y-scroll flex flex-col md:flex-row justify-end p-4 md:p-12"
          style={{ scrollbarWidth: 'none' }}>
          <button
            className="absolute right-5 top-5 md:right-12 md:top-10 z-10 inline-flex h-11 w-11 items-center justify-center border border-white/60 bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-[#4AB2A8]"
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>

          <div className="pb-20 md:pb-0 md:flex md:flex-col md:justify-center md:h-[calc(100vh-200px)]">
            <div className="md:flex md:items-end md:gap-16">
              <div className="mb-8 md:mb-0 md:w-1/2">
                <h2 className="mb-4 font-semibold uppercase text-4xl md:text-5xl lg:text-7xl md:leading-none"
                  style={{ fontSize: 'clamp(40px, 5vw, 90px)', lineHeight: 'clamp(40px, 5.5vw, 105px)' }}>
                  {t('megaMenu.title')}
                </h2>
                <ul className="list-none">
                  {categories?.map((cat) => (
                    <li key={cat.number} className="flex flex-wrap mb-4 md:mb-8">
                      <span className="w-8 md:w-12 font-normal">
                        {cat.number.padStart(2, '0')}.
                      </span>
                      <Link
                        href={`/product-category/${cat.number}`}
                        className="text-white no-underline uppercase text-lg md:text-3xl lg:text-4xl font-light hover:italic transition-all duration-500"
                        style={{ width: 'calc(100% - 32px)' }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {cat.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-1/2 md:text-right">
                <ul className="list-none">
                  {mainNav.map(([href, key]) => (
                    <li key={href} className="mb-2 md:mb-4">
                      <Link
                        href={href}
                        className={`text-white no-underline uppercase text-lg md:text-3xl lg:text-4xl font-light transition-all duration-300 hover:italic ${
                          pathname === href || pathname.startsWith(`${href}/`) ? 'italic' : ''
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {t(key)}
                      </Link>
                    </li>
                  ))}
                  <li className="mb-2 md:mb-4">
                    <Link
                      href="/reserved-area"
                      className="text-white no-underline uppercase text-lg md:text-3xl lg:text-4xl font-light transition-all duration-300 hover:italic"
                      onClick={() => setMenuOpen(false)}
                    >
                      {t('reservedArea')}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://store.bonittoaesthetic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline uppercase text-lg md:text-3xl lg:text-4xl font-light transition-all duration-300 hover:italic"
                    >
                      {t('shop')}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
