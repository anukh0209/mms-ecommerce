'use client';

import { useState } from 'react';
import { useToast } from '@/lib/toast-context';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function MilwaukeeContact() {
  const { showToast } = useToast();
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
    showToast('Мессеж амжилттай илгээгдлээ!', 'success');
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
            <h2>CONTACT US</h2>
            <p>
              Бид таны асуулт, саналыг сонсохдоо баяртай байх болно. 
              Доорх маягтыг бөглөж бидэнтэй холбогдоно уу.
            </p>
            
            <div style={{ marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>ХАЯГ</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>MMS Green Building, Archivist street 512, Khan-Uul district, Ulaanbaatar</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>УТАС</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>+976-7711-1999, 89664141</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '40px', height: '40px', background: '#D31145', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '14px' }}>ИМЭЙЛ</div>
                  <div style={{ color: '#666', fontSize: '14px' }}>sales@source.mn</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form-milwaukee" onSubmit={handleSubmit}>
            <h3>ИЛГЭЭХ МАЯГТ</h3>
            
            <div className="form-row-milwaukee">
              <div className="form-group-milwaukee">
                <label>ОВОГ</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-milwaukee">
                <label>НЭР</label>
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
                <label>УТАС</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group-milwaukee">
                <label>ИМЭЙЛ</label>
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
              <label>АСУУЛТЫН ТӨРӨЛ</label>
              <select
                name="questionType"
                value={formData.questionType}
                onChange={handleChange}
              >
                <option value="product">Бүтээгдэхүүнтэй холбоотой</option>
                <option value="service">Үйлчилгээтэй холбоотой</option>
                <option value="other">Бусад</option>
              </select>
            </div>
            
            <div className="form-group-milwaukee">
              <label>МЕССЕЖ</label>
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
                'ИЛГЭЭЖ БАЙНА...'
              ) : (
                <>
                  <Send size={16} />
                  ИЛГЭЭХ
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
