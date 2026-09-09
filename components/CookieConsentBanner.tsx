'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import {
  CONSENT_CATEGORIES,
  getConsentSnapshot,
  loadConsent,
  saveConsent,
  subscribeConsent,
  type ConsentCategory,
  type DraftConsent,
} from '@/lib/cookie-consent';

const EMPTY_DRAFT: DraftConsent = { preferences: false, statistics: false, marketing: false };

const CATEGORY_KEY: Record<ConsentCategory, string> = {
  functional: 'functional',
  preferences: 'preferences_cat',
  statistics: 'statistics',
  marketing: 'marketing',
};

export function CookieConsentBanner() {
  const t = useTranslations('cookieConsent');
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => null);
  const visible = consent === null;
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [draft, setDraft] = useState<DraftConsent>(EMPTY_DRAFT);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!visible) return;
    cardRef.current?.querySelector<HTMLButtonElement>('.cookie-consent-actions .btn')?.focus();
  }, [visible]);

  useEffect(() => {
    if (!visible || !preferencesOpen) return;
    const firstInput = cardRef.current?.querySelector<HTMLInputElement>(
      '.cookie-consent-category input:not(:disabled)'
    );
    firstInput?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreferencesOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible, preferencesOpen]);

  const applyConsent = (partial: DraftConsent) => {
    saveConsent({
      v: 1,
      functional: true,
      ...partial,
      updatedAt: new Date().toISOString(),
    });
  };

  const acceptAll = () => applyConsent({ preferences: true, statistics: true, marketing: true });

  const denyAll = () => applyConsent(EMPTY_DRAFT);

  const savePreferences = () => applyConsent(draft);

  const openPreferences = () => {
    const saved = loadConsent();
    setDraft({
      preferences: saved?.preferences ?? false,
      statistics: saved?.statistics ?? false,
      marketing: saved?.marketing ?? false,
    });
    setPreferencesOpen(true);
  };

  const toggleDraft = (key: keyof DraftConsent, checked: boolean) => {
    setDraft((prev) => ({ ...prev, [key]: checked }));
  };

  if (!visible) return null;

  return (
    <div
      ref={cardRef}
      className="cookie-consent-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
    >
      <div className="cookie-consent-card">
        <p id="cookie-consent-title">{t('message')}</p>

        <div className="cookie-consent-actions">
          <button type="button" className="btn btn-white-outline" onClick={acceptAll}>
            {t('acceptAll')}
          </button>
          <button type="button" className="btn btn-white-outline" onClick={denyAll}>
            {t('denyAll')}
          </button>
          <button type="button" className="btn btn-white-outline" onClick={openPreferences}>
            {t('preferences')}
          </button>
        </div>

        {preferencesOpen && (
          <div className="cookie-consent-preferences">
            {CONSENT_CATEGORIES.map((cat) => {
              const isFunctional = cat.id === 'functional';
              const value = isFunctional ? true : draft[cat.id as keyof DraftConsent];
              return (
                <label key={cat.id} className="cookie-consent-category">
                  <input
                    type="checkbox"
                    checked={value}
                    disabled={cat.required}
                    onChange={(event) => toggleDraft(cat.id as keyof DraftConsent, event.target.checked)}
                  />
                  <span>
                    <strong>{t(CATEGORY_KEY[cat.id])}</strong>
                    <small>{t(`${cat.id}Desc`)}</small>
                  </span>
                </label>
              );
            })}

            <button type="button" className="btn btn-white-outline" onClick={savePreferences}>
              {t('save')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}