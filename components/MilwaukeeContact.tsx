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
    
    // Validate
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.email || !formData.message) {
      showToast(t.required, 'error');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
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
            
            <div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-label">{t.address}</div>
                  <div className="contact-value">{t.addressValue}</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-label">{t.phone}</div>
                  <div className="contact-value">{t.phoneValue}</div>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-label">{t.email}</div>
                  <div className="contact-value">{t.emailValue}</div>
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
                  placeholder={t.lastName}
                />
              </div>
              <div className="form-group-milwaukee">
                <label>{t.firstName}</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.firstName}
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
                  placeholder={t.phone}
                />
              </div>
              <div className="form-group-milwaukee">
                <label>{t.email}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
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
                placeholder={t.message}
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
                  <Send size={18} />
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
