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
    <div className="auth-page-milwaukee">
      <div className="auth-container-milwaukee">
        <div className="auth-logo-milwaukee">MILWAUKEE</div>
        
        <div className="auth-header-milwaukee">
          <h1>НЭВТРЭХ</h1>
          <p>Бүртгэлээ ашиглан нэвтэрнэ үү</p>
        </div>

        <form className="auth-form-milwaukee" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ИМЭЙЛ ХАЯГ</label>
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

          <div className="form-group">
            <label>НУУЦ ҮГ</label>
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
            className="auth-submit-btn-milwaukee"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin" />
                НЭВТЭРЧ БАЙНА...
              </>
            ) : (
              'НЭВТРЭХ'
            )}
          </button>
        </form>

        <div className="auth-footer-milwaukee">
          <p>
            Бүртгэл байхгүй юу?{' '}
            <Link href="/register">БҮРТГҮҮЛЭХ</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
