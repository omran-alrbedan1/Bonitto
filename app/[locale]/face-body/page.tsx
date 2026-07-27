import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata({ locale, page: 'faceBody', path: '/face-body' });
}

const treatmentZones = [
  { id: 'forehead', label: 'Forehead', products: ['HA Filler Fine Lines'] },
  { id: 'eyes', label: 'Periorbital Area', products: ['HA Filler Deep', 'Skin Booster'] },
  { id: 'cheeks', label: 'Cheeks', products: ['HA Filler Volume', 'HA Filler Ultra'] },
  { id: 'nose', label: 'Nose', products: ['HA Filler Rhinoplasty'] },
  { id: 'lips', label: 'Lips', products: ['HA Filler Lips', 'HA Filler Volume'] },
  { id: 'chin', label: 'Chin', products: ['HA Filler Deep', 'PLLA Line'] },
  { id: 'jawline', label: 'Jawline', products: ['HA Filler Ultra', 'PLLA Line'] },
  { id: 'neck', label: 'Neck', products: ['Skin Booster', 'PLLA Line'] },
];

export default async function FaceBodyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faceBody' });

  return (
    <main>
      <section className="pt-32 pb-16 sm:pt-40 bg-brand-bg-warm">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <span className="inline-block rounded-full bg-brand-teal/8 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">
            {t('hero.tag')}
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">{t('hero.title')}</h1>
          <p className="mt-3 text-brand-muted max-w-[500px]">{t('hero.description')}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1200px,calc(100%-48px))]">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
            {/* Accessible fallback list */}
            <div>
              <h2 className="text-lg font-bold text-brand-ink mb-4">{t('fallback.title')}</h2>
              <p className="text-sm text-brand-muted mb-6">{t('fallback.description')}</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {treatmentZones.map((zone) => (
                  <div key={zone.id} className="rounded-xl border border-brand-line bg-white p-4 transition hover:border-brand-teal hover:shadow-sm">
                    <h3 className="text-sm font-bold text-brand-ink">{zone.label}</h3>
                    <p className="mt-1 text-xs text-brand-muted">{zone.products.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SVG Face Diagram (simple) */}
            <div className="rounded-3xl border border-brand-line bg-white p-8 flex items-center justify-center">
              <svg viewBox="0 0 200 300" className="w-full max-w-[280px] h-auto">
                <ellipse cx="100" cy="130" rx="70" ry="90" fill="none" stroke="#1F5C52" strokeWidth="1.5" opacity="0.3" />
                <ellipse cx="100" cy="100" rx="55" ry="25" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.2" />
                <ellipse cx="80" cy="110" rx="12" ry="6" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.3" />
                <ellipse cx="120" cy="110" rx="12" ry="6" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.3" />
                <ellipse cx="100" cy="140" rx="8" ry="4" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.3" />
                <ellipse cx="100" cy="170" rx="20" ry="8" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.3" />
                <rect x="95" y="190" width="10" height="30" rx="5" fill="none" stroke="#1F5C52" strokeWidth="1" opacity="0.2" />
                {treatmentZones.map((zone, i) => (
                  <circle key={zone.id} cx={80 + (i % 3) * 20} cy={80 + Math.floor(i / 3) * 35} r="6" fill="#1F5C52" opacity="0.15" className="cursor-pointer hover:opacity-50 transition" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
