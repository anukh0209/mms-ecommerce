'use client';

import { useState } from 'react';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.email || !formData.message) {
      showToast(t.required, 'error');
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    
    showToast(t.loginSuccess, 'success');
    setFormData({ lastName: '', firstName: '', phone: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDescription}</p>
            
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={20} /></div>
              <div>
                <div className="contact-label">{t.address}</div>
                <div className="contact-value">{t.addressValue}</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Phone size={20} /></div>
              <div>
                <div className="contact-label">{t.phone}</div>
                <div className="contact-value">{t.phoneValue}</div>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><Mail size={20} /></div>
              <div>
                <div className="contact-label">{t.email}</div>
                <div className="contact-value">{t.emailValue}</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>{t.formTitle}</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>{t.lastName}</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={(e) => setFormData(p => ({ ...p, lastName: e.target.value }))} placeholder={t.lastName} />
              </div>
              <div className="form-group">
                <label>{t.firstName}</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={(e) => setFormData(p => ({ ...p, firstName: e.target.value }))} placeholder={t.firstName} />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>{t.phone}</label>
                <input type="tel" name="phone" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder={t.phone} />
              </div>
              <div className="form-group">
                <label>{t.email}</label>
                <input type="email" name="email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="example@email.com" />
              </div>
            </div>
            
            <div className="form-group">
              <label>{t.message}</label>
              <textarea name="message" value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} placeholder={t.message} rows={4} />
            </div>
            
            <button type="submit" className="btn-submit" disabled={isLoading}>
              <Send size={18} />
              {isLoading ? t.sending : t.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
