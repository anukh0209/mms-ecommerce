'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.password) {
      newErrors.password = t.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const result = await login(formData.email, formData.password);
    setIsLoading(false);

    if (result.success) {
      showToast(t.loginSuccess, 'success');
      router.push('/');
    } else {
      showToast(t.invalidCredentials, 'error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gray-500)', textDecoration: 'none', marginBottom: '20px', fontSize: '14px' }}>
          <ArrowLeft size={18} />
          Back
        </Link>
        
        <div className="auth-logo">MMS</div>
        
        <div className="auth-header">
          <h1>{t.login}</h1>
          <p>{t.loginDescription}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.email}</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>{t.password}</label>
            <input
              type="password"
              name="password"
              placeholder={t.password}
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className="btn-auth"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin" />
                {t.loggingIn}
              </>
            ) : (
              t.loginButton
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {t.noAccount}{' '}
            <Link href="/register">{t.register}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
