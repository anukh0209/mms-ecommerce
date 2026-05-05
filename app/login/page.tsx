'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { Mail, Lock, Loader2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Имэйл хаяг оруулна уу';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Зөв имэйл хаяг оруулна уу';
    }

    if (!formData.password) {
      newErrors.password = 'Нууц үг оруулна уу';
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
      showToast(result.message, 'success');
      router.push('/');
    } else {
      showToast(result.message, 'error');
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
      <div className="auth-container">
        <div className="auth-header">
          <div className="auth-logo">MMS</div>
          <h1>Нэвтрэх</h1>
          <p>Бүртгэлээ ашиглан нэвтэрнэ үү</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className={`form-group ${errors.email ? 'error' : ''}`}>
            <label>
              <Mail size={16} />
              Имэйл хаяг
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`form-group ${errors.password ? 'error' : ''}`}>
            <label>
              <Lock size={16} />
              Нууц үг
            </label>
            <input
              type="password"
              name="password"
              placeholder="Нууц үгээ оруулна уу"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin" />
                Нэвтэрч байна...
              </>
            ) : (
              'Нэвтрэх'
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Бүртгэл байхгүй юу?{' '}
            <Link href="/register">Бүртгүүлэх</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
