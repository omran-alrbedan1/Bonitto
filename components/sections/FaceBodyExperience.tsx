'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from '@/i18n/routing';

type ProductType = 'professional-cosmetic-in-vials' | 'fillers';
type Area = 'face' | 'body';

type Product = {
  title: string;
  type: ProductType;
  image: string;
  slug: string;
};

type Zone = {
  id: string;
  label: string;
  path: string;
  products: Product[];
};

const vial = 'professional-cosmetic-in-vials' as const;
const filler = 'fillers' as const;

const products = {
  lipsOn: { title: 'LIPS ON', type: vial, slug: 'lips-on', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/LIPS-ON.webp' },
  lipsPlump: { title: '02 LIPS PLUMP', type: filler, slug: 'n-02-bonitto-lips-plum', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/08/FILLERS-02-3.webp' },
  proAgeFine: { title: '01 PRO AGE FINE', type: filler, slug: 'n-01-bonitto-pro-age-fine', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/08/FILLERS-01-3.webp' },
  ageSolution: { title: '03 AGE SOLUTION', type: filler, slug: 'n-03-bonitto-age-solution', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/FILLERS-03.webp' },
  faceSculpt: { title: '04 FACE SCULPT', type: filler, slug: 'n-04-bonitto-face-sculpt', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/FILLERS-04.webp' },
  volume: { title: '05 VOLUME', type: filler, slug: 'n-05-bonitto-volume', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/FILLERS-SB-05.webp' },
  mstRedox: { title: 'MST REDOX', type: vial, slug: 'mst-redox', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/MST-REDOX.webp' },
  goldStem: { title: 'GOLD STEM', type: vial, slug: 'gold-stem', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/GOLD-STEM.webp' },
  corControl: { title: 'COR CONTROL', type: vial, slug: 'cor-control', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/COR-CONTROL.webp' },
  shinePower: { title: 'SHINE POWER', type: vial, slug: 'shine-power', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/SHINE-POWER.webp' },
  whitening: { title: 'WHITENING+', type: vial, slug: 'whitening', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/WHITENING-PLUS.webp' },
  peel: { title: 'PEEL 4.0', type: vial, slug: 'peel-4-0', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/PEEL-4.0.webp' },
  mevita: { title: 'MEVITA 15 + HA', type: vial, slug: 'mevita-15-ha', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/MEVITA-15HA.webp' },
  haBooster: { title: 'HA+ BOOSTER & AA15', type: vial, slug: 'ha-booster-aa15', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/HA-BOOSTER.webp' },
  dnaBooster: { title: 'DNA BOOSTER', type: vial, slug: 'dna-booster', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/DNA-BOOSTER.webp' },
  hyavital: { title: 'HYAVITAL H+L', type: vial, slug: 'hyavital-hl', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/HYAVITAL-HL.webp' },
  collagen: { title: 'COLLAGEN ULTRA', type: vial, slug: 'collagen-ultra', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/COLLAGEN-ULTRA.webp' },
  age: { title: 'AGE+', type: vial, slug: 'age', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/AGE.webp' },
  proAge: { title: 'PRO AGE', type: vial, slug: 'pro-age', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/PRO-AGE.webp' },
  exogenix: { title: 'EXOGENIX', type: vial, slug: 'exogenix', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/EXOGENIX.webp' },
  btx: { title: 'BTX 2.0', type: vial, slug: 'btx-2-0', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/BTX-20.webp' },
  btxPlus: { title: 'BTX+', type: vial, slug: 'btx', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/BTX-PLUS.webp' },
  ox: { title: 'OX+', type: vial, slug: 'ox', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/OX-PLUS.webp' },
  powerOxy: { title: 'POWER OXY', type: vial, slug: 'power-oxy', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/POWER-OXY.webp' },
  oxUltra: { title: 'OX ULTRA', type: vial, slug: 'ox-ultra', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/OX-ULTRA.webp' },
  hairUltra: { title: 'HAIR ULTRA', type: vial, slug: 'hair-ultra', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/HAIR-ULTRA.webp' },
  hairScalp: { title: 'HAIRSCALP', type: vial, slug: 'hairscalp', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/HAIRSCALP.webp' },
  ey: { title: 'EY+', type: vial, slug: 'ey', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/EY-PLUS.webp' },
  lipo: { title: 'LIPO+', type: vial, slug: 'lipo', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/LIPO-PLUS.webp' },
  proCells: { title: 'PRO CELLS', type: vial, slug: 'pro-cells', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/PRO-CELLS.webp' },
  radiance: { title: 'RADIANCE PRO', type: vial, slug: 'radiance-pro', image: 'https://www.bonittoaesthetic.com/wp-content/uploads/2024/11/RADIANCE-PRO.webp' },
} satisfies Record<string, Product>;

const fullVials = [
  products.mstRedox, products.goldStem, products.corControl, products.shinePower, products.whitening,
  products.peel, products.mevita, products.haBooster, products.dnaBooster, products.hyavital,
  products.collagen, products.age, products.proAge, products.exogenix, products.btx, products.btxPlus,
  products.oxUltra, products.ox, products.powerOxy,
];

const faceZones: Zone[] = [
  { id: 'forehead', label: 'Forehead', path: 'M306.596 230.988C314.269 223.326 314.269 210.903 306.596 203.241C298.924 195.578 286.484 195.578 278.812 203.241C271.14 210.903 271.14 223.326 278.812 230.988C286.484 238.65 298.924 238.65 306.596 230.988Z', products: [products.proAgeFine] },
  { id: 'nose', label: 'Nose', path: 'M265.216 297.277C252.207 335.776 229.827 344.31 269.776 343.635C277.136 343.511 282.012 323.815 286.608 301.715C291.205 279.614 290.141 260.705 284.234 259.48C278.327 258.255 272.446 275.883 265.216 297.277Z', products: [products.ageSolution, products.faceSculpt] },
  { id: 'under-eye', label: 'Under eye', path: 'M431.911 296.485C418.364 305.587 411.304 309.426 385.214 310.604C359.124 311.783 342.248 305.636 337.432 300.754C307.753 270.675 358.039 287.813 384.129 286.635C410.219 285.457 464.765 274.411 431.911 296.485Z', products: [products.proAgeFine, products.ey] },
  { id: 'eyebrow', label: 'Eyebrow', path: 'M482.195 222.465C473.651 230.236 473.376 228.467 444.341 191.034C428.629 170.778 363.472 169.942 403.63 166.314C409.489 165.785 414.899 165.864 416.329 165.88C424.282 165.973 442.233 167.576 458.605 183.915C476.997 202.272 487.239 217.875 482.193 222.463L482.195 222.465Z', products: [products.ageSolution] },
  { id: 'side-eye', label: 'Side eye', path: 'M477.573 266.159C488.811 253.807 494.582 240.763 490.462 237.024C486.342 233.286 473.892 240.268 462.653 252.62C451.414 264.972 445.644 278.016 449.764 281.755C453.883 285.493 466.334 278.511 477.573 266.159Z', products: [products.proAgeFine] },
  { id: 'chick', label: 'Cheek', path: 'M471.295 345.65C499.655 325.298 517.009 300.966 510.055 291.302C503.102 281.638 474.475 290.302 446.115 310.654C417.755 331.006 400.401 355.338 407.355 365.002C414.308 374.666 442.935 366.002 471.295 345.65Z', products: [products.ageSolution, products.faceSculpt, ...fullVials] },
  { id: 'jawline', label: 'Jawline', path: 'M508 396C512.543 372.004 483 444 417.5 483.5C320.5 521 274.5 507.501 266.5 524.5C271.01 528.325 328 532.628 379 514C392.976 508.895 438.915 496.308 462 473C495.979 438.693 509.203 404.24 508 396Z', products: [products.faceSculpt, ...fullVials] },
  { id: 'double-chin', label: 'Double chin', path: 'M472 483.5C446 501 446.5 498.5 417 512.5C336 542 315.5 534.5 297 540.5C302 548.2 353.005 545.771 392 533.5C402.686 530.137 444.5 512.5 456.5 503.5C472 489.5 476 488 472 483.5Z', products: [products.faceSculpt, products.lipo] },
  { id: 'side-mouth', label: 'Side mouth', path: 'M350.5 486C358.508 486 365 479.508 365 471.5C365 463.492 358.508 457 350.5 457C342.492 457 336 463.492 336 471.5C336 479.508 342.492 486 350.5 486Z', products: [products.proAgeFine] },
  { id: 'smile-lines', label: 'Smile lines', path: 'M365.535 430.367C363.6 455.225 355.947 422.395 338.457 416.061C323.587 410.676 298.422 383.312 325.238 388.462C343.642 391.997 350.221 400.573 352.316 402.768C363.395 414.386 365.959 424.914 365.535 430.367Z', products: [products.proAgeFine] },
  { id: 'neck', label: 'Neck', path: 'M522.667 542.104C510.95 489.356 469.511 522.568 423.414 547.128C377.318 571.687 261.896 580.316 355.735 631.041C381.689 645.07 408.891 650.576 454.987 626.017C501.084 601.458 526.229 558.138 522.667 542.104Z', products: fullVials },
  { id: 'hair', label: 'Hair', path: 'M608.346 161.732C625.84 251.738 552.622 286.562 507.917 132.044C491.804 76.3489 418.467 58.573 428.278 44.1015C438.086 29.6317 497.783 48.7741 543.439 79.6404C589.094 110.507 605.011 144.576 608.346 161.731V161.732Z', products: [products.hairUltra, products.hairScalp] },
  { id: 'mouth', label: 'Mouth', path: 'M221.968 418.332C221.968 418.332 241.455 389.004 263.685 402.223C263.685 402.223 268.206 406.496 275.495 402.209C282.785 397.921 289.066 401.571 339.572 432.975C342.285 435.596 308.878 466.13 265.638 459.41C265.638 459.41 240.353 463.215 221.968 418.333V418.332Z', products: [products.lipsOn, products.lipsPlump] },
];

const bodyZones: Zone[] = [
  { id: 'arm', label: 'Arm', path: 'M481.526 131.877C490.207 121.095 465.113 86.5557 425.477 54.7323C385.84 22.9088 346.67 5.85164 337.989 16.634C329.307 27.4164 354.401 61.9552 394.038 93.7787C433.675 125.602 472.844 142.659 481.526 131.877Z', products: [products.volume, products.lipo, products.proCells] },
  { id: 'back', label: 'Back', path: 'M281.966 109.093C307.523 196.92 305.283 270.301 301.55 300.102C289.477 396.501 182.29 380.21 269.873 293.597C280.088 283.494 278.665 195.874 259.681 157.304C213.842 64.1708 222.367 6.39279 248.924 32.8618C270.944 54.8096 270.032 68.0836 281.965 109.092L281.966 109.093Z', products: [products.lipo, products.proCells] },
  { id: 'buttocks', label: 'Buttocks', path: 'M219.989 458.647C200.689 490.494 244.594 556.068 176.167 523.675C161.278 516.626 153.667 485.853 161.801 446.619C169.936 407.385 191.879 391.78 205.623 381.592C225.844 366.605 254.407 401.856 219.989 458.647Z', products: [products.volume, products.lipo, products.proCells] },
  { id: 'leg', label: 'Leg', path: 'M354.683 670.047C374.713 659.705 368.911 608.753 341.723 556.243C314.536 503.732 276.258 469.548 256.227 479.889C236.196 490.231 241.999 541.183 269.186 593.693C296.374 646.204 334.652 680.388 354.683 670.047Z', products: [products.volume, products.lipo, products.proCells] },
  { id: 'belly', label: 'Belly', path: 'M420.687 308.48C413.818 341.504 396.847 391.13 376.027 370.935C376.027 370.935 369.586 329.694 391.776 295.821C412.517 264.161 422.818 234.827 436.437 233.365C465.388 230.259 428.987 268.584 420.687 308.48Z', products: [products.lipo, products.proCells] },
  { id: 'hand', label: 'Hand', path: 'M438.58 408.572C450.097 394.466 455.385 379.735 450.391 375.669C445.397 371.603 432.013 379.743 420.496 393.849C408.979 407.955 403.691 422.686 408.685 426.751C413.679 430.817 427.064 422.678 438.58 408.572Z', products: [products.volume, products.radiance] },
];

const filters: ProductType[] = [vial, filler];

function AreaFigure({
  area,
  zones,
  activeZoneId,
  onSelect,
}: {
  area: Area;
  zones: Zone[];
  activeZoneId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="face-body-figure-section section-lg">
      <div className="face-body-figure-panel">
        <h2>{area === 'face' ? 'Face' : 'Body'}</h2>
        <div className="face-body-figure">
          <svg
            viewBox={area === 'face' ? '0 0 679 681' : '0 0 681 681'}
            role="img"
            aria-label={area === 'face' ? 'Select a face treatment zone' : 'Select a body treatment zone'}
          >
            <defs>
              <clipPath id={`face-body-clip-${area}`}>
                <rect width={area === 'face' ? 679 : 681} height="681" rx="340.5" />
              </clipPath>
            </defs>
            <image
              href={`/images/face-body-${area}.jpg`}
              x={area === 'face' ? -285.22 : -33.4}
              y="0"
              width={area === 'face' ? 1250.44 : 747.8}
              height="682"
              preserveAspectRatio="none"
              clipPath={`url(#face-body-clip-${area})`}
            />
          {zones.map((zone) => (
            <path
              key={zone.id}
              className={`face-body-zone ${zone.id === activeZoneId ? 'active' : ''}`}
              d={zone.path}
              tabIndex={0}
              role="button"
              onClick={() => onSelect(zone.id)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  onSelect(zone.id);
                }
              }}
              aria-pressed={zone.id === activeZoneId}
              aria-label={zone.label}
            >
              <title>{zone.label}</title>
            </path>
          ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

function ProductPanel({ area, zones, activeZoneId }: { area: Area; zones: Zone[]; activeZoneId: string | null }) {
  const panelRef = useRef<HTMLElement>(null);
  const activeZone = zones.find((zone) => zone.id === activeZoneId);
  const availableFilters = useMemo(
    () => new Set(activeZone?.products.map((product) => product.type) ?? []),
    [activeZone]
  );
  const [filter, setFilter] = useState<ProductType>(vial);

  useEffect(() => {
    if (!activeZone) return;
    setFilter(availableFilters.has(vial) ? vial : filler);
    const timer = window.setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 60);
    return () => window.clearTimeout(timer);
  }, [activeZone, availableFilters]);

  const visibleProducts = useMemo(
    () => activeZone?.products.filter((product) => product.type === filter) ?? [],
    [activeZone, filter]
  );

  if (!activeZone) return null;

  return (
    <section ref={panelRef} className="face-body-products-section section-lg">
      <div className="face-body-products-panel">
        <h2>Products</h2>

        <div className="face-body-filter-row" role="group" aria-label="Product filters">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className={`face-body-filter ${filter === item ? 'active' : ''}`}
              onClick={() => setFilter(item)}
              disabled={!availableFilters.has(item)}
            >
              {item === filler ? 'Fillers' : 'Mesotherapy'}
            </button>
          ))}
        </div>

        <div className="face-body-product-grid" aria-live="polite">
          {visibleProducts.map((product) => (
            <Link href={`/product/${product.slug}`} className="face-body-product-card" key={`${activeZone.id}-${product.slug}`}>
              <img src={product.image} alt={product.title} loading="lazy" />
              <span className="face-body-product-title">{product.title}</span>
              <span>{product.type === filler ? 'Fillers' : 'Sterile vials'}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FaceBodyExperience() {
  const [activeFaceZone, setActiveFaceZone] = useState<string | null>(null);
  const [activeBodyZone, setActiveBodyZone] = useState<string | null>(null);

  return (
    <>
      <AreaFigure area="face" zones={faceZones} activeZoneId={activeFaceZone} onSelect={setActiveFaceZone} />
      <ProductPanel area="face" zones={faceZones} activeZoneId={activeFaceZone} />
      <AreaFigure area="body" zones={bodyZones} activeZoneId={activeBodyZone} onSelect={setActiveBodyZone} />
      <ProductPanel area="body" zones={bodyZones} activeZoneId={activeBodyZone} />
    </>
  );
}
