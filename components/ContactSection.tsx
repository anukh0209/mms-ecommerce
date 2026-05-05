'use client';

import { useState } from 'react';
import { User, Phone, Mail, List, Edit, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    demandType: 'Ground mounted',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      demandType: 'Ground mounted',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label><User size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> Your Name *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label><Phone size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> Your Phone *</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><Mail size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label><List size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> Demand Type *</label>
              <select 
                name="demandType"
                value={formData.demandType}
                onChange={handleChange}
                required
              >
                <option>Ground mounted</option>
                <option>Rooftop</option>
                <option>Commercial</option>
                <option>Residential</option>
              </select>
            </div>
          </div>
          <div className="form-group full">
            <label><Edit size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} /> Message</label>
            <textarea 
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-submit">
            <button type="submit" className="btn-submit">
              Submit <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
