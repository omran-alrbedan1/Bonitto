export type ConsentCategory = 'functional' | 'preferences' | 'statistics' | 'marketing';

export type DraftConsent = Pick<ConsentState, 'preferences' | 'statistics' | 'marketing'>;

export type ConsentState = {
  v: 1;
  functional: true;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const CONSENT_STORAGE_KEY = 'bonitto-consent-v1';

export const CONSENT_CATEGORIES: Array<{ id: ConsentCategory; required?: boolean }> = [
  { id: 'functional', required: true },
  { id: 'preferences' },
  { id: 'statistics' },
  { id: 'marketing' },
];

export const CONSENT_EVENT = 'bonitto:consent-changed';

declare global {
  interface Window {
    __bonittoConsent?: ConsentState;
  }
}

export function loadConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed?.v !== 1) return null;
    return {
      v: 1,
      functional: true,
      preferences: Boolean(parsed.preferences),
      statistics: Boolean(parsed.statistics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt ?? new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

let cachedSnapshot: ConsentState | null | undefined;

export function saveConsent(state: ConsentState): void {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
  window.__bonittoConsent = state;
  cachedSnapshot = state;
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
}

export function getConsentSnapshot(): ConsentState | null {
  if (cachedSnapshot !== undefined) return cachedSnapshot;
  cachedSnapshot = loadConsent();
  return cachedSnapshot;
}

export function subscribeConsent(onStoreChange: () => void): () => void {
  const handleStorage = () => {
    cachedSnapshot = undefined;
    onStoreChange();
  };
  window.addEventListener('storage', handleStorage);
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
  };
}

export function isCategoryAllowed(category: ConsentCategory): boolean {
  if (typeof window === 'undefined') return false;
  const state = window.__bonittoConsent ?? getConsentSnapshot();
  if (!state) return false;
  if (category === 'functional') return true;
  return Boolean(state[category]);
}