'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { Mail, Loader2, ArrowLeft, KeyRound } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { forgotPassword } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    if (!email.trim()) {
      setError(t.required);
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.invalidEmail);
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const result = await forgotPassword(email);
    setIsLoading(false);

    if (result.success) {
      showToast(t.resetLinkSent, 'success');
      setSubmitted(true);
    } else {
      showToast(result.message, 'error');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <Link href="/login" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gray-500)', textDecoration: 'none', marginBottom: '20px', fontSize: '14px' }}>
          <ArrowLeft size={18} />
          {t.backToLogin}
        </Link>
        
        <div className="auth-logo">MMS</div>
        
        <div className="auth-header">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--white)' }}>
              <KeyRound size={24} />
            </div>
          </div>
          <h1>{t.forgotPassword}</h1>
          <p>{t.forgotPasswordDescription}</p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              color: 'var(--white)'
            }}>
              <Mail size={32} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--gray-900)', marginBottom: '8px' }}>{t.checkYourEmail}</h3>
            <p style={{ color: 'var(--gray-500)', marginBottom: '24px' }}>{t.resetInstructions}</p>
            <Link 
              href="/login" 
              className="btn-auth"
              style={{ display: 'inline-flex', textDecoration: 'none' }}
            >
              {t.backToLogin}
            </Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t.email}</label>
              <div style={{ position: 'relative' }}>
                <Mail 
                  size={18} 
                  style={{ 
                    position: 'absolute', 
                    left: '14px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: 'var(--gray-400)'
                  }} 
                />
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  disabled={isLoading}
                  style={{ paddingLeft: '42px' }}
                />
              </div>
              {error && <span className="error">{error}</span>}
            </div>

            <button 
              type="submit" 
              className="btn-auth"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 size={18} className="spin" />
                  {t.sending}
                </>
              ) : (
                t.sendResetLink
              )}
            </button>
          </form>
        )}

        <div className="auth-footer">
          <p>
            {t.rememberPassword}{' '}
            <Link href="/login">{t.login}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
