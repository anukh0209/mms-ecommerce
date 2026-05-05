'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { User, Mail, Lock, Loader2 } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const { showToast } = useToast();
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
      newErrors.name = 'Нэр оруулна уу';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Нэр хамгийн багадаа 2 үсэг байх ёстой';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Имэйл хаяг оруулна уу';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Зөв имэйл хаяг оруулна уу';
    }

    if (!formData.password) {
      newErrors.password = 'Нууц үг оруулна уу';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Нууц үг таарахгүй байна';
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
      showToast(result.message, 'success');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
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
          <h1>БҮРТГҮҮЛЭХ</h1>
          <p>Шинэ бүртгэл үүсгэнэ үү</p>
        </div>

        <form className="auth-form-milwaukee" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>НЭР</label>
            <input
              type="text"
              name="name"
              placeholder="Таны нэр"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

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
              placeholder="Хамгийн багадаа 6 тэмдэгт"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label>НУУЦ ҮГ ДАВТАХ</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Нууц үгээ дахин оруулна уу"
              value={formData.confirmPassword}
              onChange={handleChange}
              disabled={isLoading}
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <button 
            type="submit" 
            className="auth-submit-btn-milwaukee"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="spin" />
                БҮРТГЭЖ БАЙНА...
              </>
            ) : (
              'БҮРТГҮҮЛЭХ'
            )}
          </button>
        </form>

        <div className="auth-footer-milwaukee">
          <p>
            Бүртгэлтэй юу?{' '}
            <Link href="/login">НЭВТРЭХ</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
