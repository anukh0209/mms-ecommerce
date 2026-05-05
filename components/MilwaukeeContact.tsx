'use client';

import { useState } from 'react';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function MilwaukeeContact() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    phone: '',
    email: '',
    message: '',
    questionType: 'product'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    showToast(t.loginSuccess, 'success');
    setFormData({
      lastName: '',
      firstName: '',
      phone: '',
      email: '',
      message: '',
      questionType: 'product'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="contact-section-milwaukee" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDescription}</p>
            
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>{t.address}</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>{t.addressValue}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>{t.phone}</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>{t.phoneValue}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>{t.email}</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>{t.emailValue}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form-milwaukee" onSubmit={handleSubmit}>
            <h3>{t.formTitle}</h3>
            
            <div className="form-row-milwaukee">
              <div className="form-group-milwaukee">
                <label>{t.lastName}</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-milwaukee">
                <label>{t.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-row-milwaukee">
              <div className="form-group-milwaukee">
                <label>{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-milwaukee">
                <label>{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group-milwaukee">
              <label>{t.questionType}</label>
              <select
                name="questionType"
                value={formData.questionType}
                onChange={handleChange}
              >
                <option value="product">{t.productRelated}</option>
                <option value="service">{t.serviceRelated}</option>
                <option value="other">{t.other}</option>
              </select>
            </div>
            
            <div className="form-group-milwaukee">
              <label>{t.message}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-submit-milwaukee"
              disabled={isLoading}
            >
              {isLoading ? (
                t.sending
              ) : (
                <>
                  <Send size={16} />
                  {t.submit}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
