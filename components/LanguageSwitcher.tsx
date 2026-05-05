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
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Globe size={16} style={{ color: '#999' }} />
      <div style={{ display: 'flex', gap: '4px' }}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            style={{
              padding: '4px 10px',
              border: 'none',
              background: language === lang.code ? '#D31145' : 'transparent',
              color: language === lang.code ? 'white' : '#999',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 'bold',
              borderRadius: '3px',
              transition: 'all 0.3s',
            }}
            title={lang.label}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
