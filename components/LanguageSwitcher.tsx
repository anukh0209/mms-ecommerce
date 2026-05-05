'use client';

import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string }[] = [
  { code: 'mn', label: 'MN' },
  { code: 'en', label: 'EN' },
  { code: 'cn', label: 'CN' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <Globe size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
      <div style={{ display: 'flex', gap: '6px' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`language-btn ${language === lang.code ? 'active' : ''}`}
            title={lang.label}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
