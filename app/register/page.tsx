'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { User, Mail, Lock, Loader2, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.required;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.minName;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.invalidEmail;
    }

    if (!formData.password) {
      newErrors.password = t.required;
    } else if (formData.password.length < 6) {
      newErrors.password = t.minPassword;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.passwordMatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const result = await register(formData.name, formData.email, formData.password);
    setIsLoading(false);

    if (result.success) {
      showToast(t.registerSuccess, 'success');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    } else {
      showToast(t.emailExists, 'error');
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
          <h1>{t.register}</h1>
          <p>{t.registerDescription}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.name}</label>
            <input
              type="text"
              name="name"
              placeholder={t.name}
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

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

          <div className="form-group">
            <label>{t.confirmPassword}</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder={t.confirmPassword}
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
          </div>

          <button 
            type="submit" 
            className="btn-auth"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin" />
                {t.registering}
              </>
            ) : (
              t.registerButton
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {t.hasAccount}{' '}
            <Link href="/login">{t.login}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
