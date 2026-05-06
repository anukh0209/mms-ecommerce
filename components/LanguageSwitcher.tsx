'use client';

import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'mn', label: 'MN', flag: '🇲🇳' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'cn', label: 'CN', flag: '🇨🇳' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <Globe size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
      <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`language-btn ${language === lang.code ? 'active' : ''}`}
            title={lang.label}
          >
            <span style={{ fontSize: '14px', marginRight: '4px' }}>{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
