'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { FadeIn } from '@/components/motion/FadeIn';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <FadeIn>
      <form className="contact-form-native" onSubmit={(e) => { e.preventDefault(); setStatus('success'); }}>
        <div className="grid gap-2 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <select required aria-label={t('howDidYouFindUs')}>
              <option value="">{t('howDidYouFindUs')}</option>
              <option value="ads">{t('sourceOptions.ads')}</option>
              <option value="facebook">{t('sourceOptions.socialFacebook')}</option>
              <option value="instagram">{t('sourceOptions.socialInstagram')}</option>
              <option value="youtube">{t('sourceOptions.socialYouTube')}</option>
              <option value="exhibitions">{t('sourceOptions.exhibitions')}</option>
              <option value="clinics">{t('sourceOptions.clinics')}</option>
              <option value="google">{t('sourceOptions.google')}</option>
              <option value="bing">{t('sourceOptions.bing')}</option>
              <option value="other">{t('sourceOptions.other')}</option>
            </select>
          </div>
          <input type="text" required placeholder={t('firstName')} />
          <input type="text" required placeholder={t('lastName')} />
          <input type="text" required placeholder={t('company')} />
          <input type="email" required placeholder={t('email')} />
          <input type="tel" required placeholder={t('phone')} />
          <input type="text" required placeholder={t('country')} />
          <div className="lg:col-span-2">
            <textarea rows={10} required placeholder={t('message')} />
          </div>
          <div className="lg:col-span-2 mb-3">
            <label className="contact-form-consent">
              <input type="checkbox" required />
              <span>{t('privacyConsent')}</span>
            </label>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-white-outline">
            {t('submit')}
          </button>
        </div>
        {status === 'success' && <p className="mt-4 text-sm text-green-600">{t('success')}</p>}
        {status === 'error' && <p className="mt-4 text-sm text-red-600">{t('error')}</p>}
      </form>
    </FadeIn>
  );
}
