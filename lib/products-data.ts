export interface Product {
  slug: string;
  name: string;
  type: string;
  description?: string;
}

export const productsData: Record<string, Product[]> = {
  '01': [
    { slug: 'n-01-bonitto-pro-age-fine', name: '01 PRO AGE FINE', type: 'Fillers' },
    { slug: 'n-02-bonitto-lips-plum', name: '02 LIPS PLUMP', type: 'Fillers' },
    { slug: 'n-03-bonitto-age-solution', name: '03 AGE SOLUTION', type: 'Fillers' },
    { slug: 'n-04-bonitto-face-sculpt', name: '04 FACE SCULPT', type: 'Fillers' },
    { slug: 'n-05-bonitto-volume', name: '05 VOLUME', type: 'Fillers' },
  ],
  '02': [
    { slug: '01-lush-bloom', name: '01 LUSH BLOOM', type: 'Cross-linked Hyaluronic Acid' },
    { slug: '02-lover-touch', name: '02 LOVER TOUCH', type: 'Cross-linked Hyaluronic Acid' },
    { slug: '03-lift-up', name: '03 LIFT UP', type: 'Cross-linked Hyaluronic Acid' },
    { slug: '04-level-max', name: '04 LEVEL MAX', type: 'Cross-linked Hyaluronic Acid' },
  ],
  '03': [
    { slug: 'age', name: 'AGE+', type: 'Sterile vials' },
    { slug: 'btx-2-0', name: 'BTX 2.0', type: 'Sterile vials' },
    { slug: 'btx', name: 'BTX+', type: 'Sterile vials' },
    { slug: 'collagen-ultra', name: 'COLLAGEN ULTRA', type: 'Sterile vials' },
    { slug: 'cor-control', name: 'COR CONTROL', type: 'Sterile vials' },
    { slug: 'dna-booster', name: 'DNA BOOSTER', type: 'Sterile vials' },
    { slug: 'exogenix', name: 'EXOGENIX', type: 'Sterile vials' },
    { slug: 'ey', name: 'EY+', type: 'Sterile vials' },
    { slug: 'gold-stem', name: 'GOLD STEM', type: 'Sterile vials' },
    { slug: 'ha-booster-aa15', name: 'HA+ BOOSTER & AA15', type: 'Sterile vials' },
    { slug: 'hair-ultra', name: 'HAIR ULTRA', type: 'Sterile vials' },
    { slug: 'hairscalp', name: 'HAIRSCALP', type: 'Sterile vials' },
    { slug: 'hyavital-hl', name: 'HYAVITAL H+L', type: 'Sterile vials' },
    { slug: 'lipo', name: 'LIPO+', type: 'Sterile vials' },
    { slug: 'lips-on', name: 'LIPS ON', type: 'Sterile vials' },
    { slug: 'mevita-15-ha', name: 'MEVITA 15 + HA', type: 'Sterile vials' },
    { slug: 'mst-redox', name: 'MST REDOX', type: 'Sterile vials' },
    { slug: 'ox-ultra', name: 'OX ULTRA', type: 'Sterile vials' },
    { slug: 'ox', name: 'OX+', type: 'Sterile vials' },
    { slug: 'peel-4-0', name: 'PEEL 4.0', type: 'Sterile vials' },
    { slug: 'peel-exo-capture-35', name: 'PEEL EXO CAPTURE 35', type: 'Sterile vials' },
    { slug: 'power-oxy', name: 'POWER OXY', type: 'Sterile vials' },
    { slug: 'pro-age', name: 'PRO AGE', type: 'Sterile vials' },
    { slug: 'pro-cells', name: 'PRO CELLS', type: 'Sterile vials' },
    { slug: 'radiance-pro', name: 'RADIANCE PRO', type: 'Sterile vials' },
    { slug: 'shine-power', name: 'SHINE POWER', type: 'Sterile vials' },
    { slug: 'whitening', name: 'WHITENING+', type: 'Sterile vials' },
    { slug: 'xnad', name: 'XNAD+', type: 'Sterile vials' },
  ],
  '04': [
    { slug: 'drinxha', name: 'DrinxHa', type: '1 HA Syringe of 1,5 ml - 1 Concentrate Syringe of 0,5 ml' },
    { slug: 'giha', name: 'GiHa', type: '1 HA Syringe of 1,5 ml - 1 Concentrate Syringe of 0,5 ml' },
    { slug: 'hadefined', name: 'HaDefined', type: '1 HA Syringe of 1,5 ml - 1 Concentrate Syringe of 0,5 ml' },
    { slug: 'vitalha', name: 'VitalHa', type: '1 HA Syringe of 1,5 ml - 1 Concentrate Syringe of 0,5 ml' },
  ],
  '05': [
    { slug: 'bonitto-celeste-forte-pl', name: 'Bonitto Celestè Forte PL', type: 'Sterile vials' },
    { slug: 'bonitto-celeste-pl', name: 'Bonitto Celestè PL', type: 'Sterile vials' },
    { slug: 'bonitto-celeste-ultra-pn', name: 'Bonitto Celestè Ultra PN', type: 'Sterile vials' },
  ],
  '06': [
    { slug: 'babyskin', name: 'BabySkin', type: 'Micellar Milk Cleanser' },
    { slug: 'balancecontrol', name: 'BalanceControl', type: 'Brightening Serum' },
    { slug: 'bloomingmind', name: 'BloomingMind', type: 'Revitalizing Glow Cream' },
    { slug: 'c-glow-serum', name: 'C-Glow Serum', type: 'Rejuvenating Serum' },
    { slug: 'focusy', name: 'FocusY', type: 'Eye Contour Cream' },
    { slug: 'freshspirit', name: 'FreshSpirit', type: 'Cream Hydra Booster' },
    { slug: 'glowbooster', name: 'GlowBooster', type: 'Antioxidant Serum' },
    { slug: 'hyperskin', name: 'HyperSkin', type: 'Vitamin C Radiance Cream' },
    { slug: 'infinite-youth', name: 'Infinite Youth', type: 'Intimate Plumping Gel' },
    { slug: 'lightnet', name: 'LightNet', type: 'Brightening Global Cream' },
    { slug: 'lushlips', name: 'LushLips', type: '3D Hyaluronic Acid Volumatrix' },
    { slug: 'ohmygoodnessrich', name: 'OhMyGoodnessRich', type: 'Ultra Nourishing Cream' },
    { slug: 'protime', name: 'ProTime', type: 'Anti-Age Power Serum' },
    { slug: 'sun-age-defense-50', name: 'SUNAGEDEFENSE', type: 'Skin Defense SPF 50 Cream' },
    { slug: 'sunagedefense', name: 'SunAgeDefense', type: 'Skin Defense SPF 30+ Cream' },
    { slug: 'supermelabooster', name: 'SuperMelaBooster', type: 'Anti Spot Serum' },
    { slug: 'vitaminstrong', name: 'VitaminStrong', type: 'Serum Hydra Booster' },
  ],
};

export const categoryDescriptions: Record<string, string> = {
  '01': 'BONITTO is a sterile, injectable, apyrogenic, resorbable hyaluronic acid dermal filler medical device, formulated with BDDE cross-linked hyaluronic acid produced through bacterial fermentation for reliable performance in professional aesthetic medicine. Available in multiple hyaluronic acid concentrations, the BONITTO dermal filler range enables personalized treatment planning to help address a wide variety of aesthetic needs, including facial volume restoration, fine line and wrinkle correction, skin hydration, and facial contouring for natural-looking rejuvenation results.',
  '02': 'BONITTO is a sterile, injectable, pyrogen-free monophasic hydrogel medical device composed of sodium hyaluronate, cross-linked with BDDE, and enriched with glycine and L-proline in a buffered, non-pyrogenic solution. The sodium hyaluronate used is a highly purified raw material produced through bacterial fermentation (biotechnological process). The hydrogel is formed by cross-linking sodium hyaluronate chains using 1,4-butanediol diglycidyl ether (BDDE).',
  '03': 'Perfection comes across care. As a testament to precision and care, sterile solutions embody a great commitment to excellence, dedication to details, and a deeper and deeper respect for the delicate balance of human well-being.',
  '04': 'Natural beauty, enhanced by our brand-new formulas. Research, attention to detail and minimally invasive products are the secret to a new, more confident lifestyle. Discover our wide range, enriched by the best ingredients on the market.',
  '05': 'Poly-L-lactic acid (PLLA) is a collagen-stimulating treatment used in aesthetic medicine to restore natural volume and improve skin texture. Unlike traditional fillers, PLLA works by activating fibroblasts—the cells responsible for collagen production. PLLA gradually stimulates the body to produce new collagen over several weeks. This process leads to firmer, smoother, and more youthful-looking skin with long-lasting results. As the PLLA particles safely dissolve, the newly formed collagen remains.',
  '06': 'Innovation, expertise and best practices come together and give life to the future of aesthetics. A complete set of rejuvenating wonders, born by the symbiosis of science and lifestyle.',
};
