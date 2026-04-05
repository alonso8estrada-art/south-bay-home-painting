'use client';
import { useState } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    // We add the required _captcha false flag for AJAX to work seamlessly
    const formData = new FormData(form);
    formData.append("_captcha", "false");
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/alonso@qintisolutions.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if(res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--color-navy)' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-gold)', color: 'var(--color-navy)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
          ✓
        </div>
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Quote Request Sent!</h3>
        <p style={{ color: '#555', lineHeight: '1.6' }}>Thank you for reaching out to South Bay Home Painting. Your request has been securely processed and our team will contact you shortly.</p>
        <button onClick={() => setStatus('')} style={{ marginTop: '2.5rem', background: 'transparent', border: 'none', color: 'var(--color-gold)', textDecoration: 'underline', fontWeight: 'bold', cursor: 'pointer' }}>Submit another request</button>
      </div>
    );
  }

  return (
    <div className={styles.formWrapper}>
      <form 
        className={styles.leadForm} 
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="_subject" value="New Premium Lead: South Bay Home Painting Website!" />
        <input type="hidden" name="_template" value="table" />

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="John Doe" className={styles.input} />
        </div>
        
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number *</label>
            <input type="tel" id="phone" name="phone" required placeholder="(310) 704-1147" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email Address</label>
            <input type="email" id="email" name="email" placeholder="john@example.com" className={styles.input} />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city" className={styles.label}>City in South Bay *</label>
            <select id="city" name="city" required className={styles.select}>
              <option value="">Select a city...</option>
              <option value="torrance">Torrance</option>
              <option value="redondo">Redondo Beach</option>
              <option value="manhattan">Manhattan Beach</option>
              <option value="hermosa">Hermosa Beach</option>
              <option value="palos-verdes">Palos Verdes</option>
              <option value="el-segundo">El Segundo</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className={styles.formGroup}>
             <label htmlFor="service" className={styles.label}>Service Needed *</label>
             <select id="service" name="service" required className={styles.select}>
               <option value="">Select a service...</option>
               <option value="interior">Interior Painting</option>
               <option value="exterior">Exterior Painting</option>
               <option value="cabinets">Cabinet Painting</option>
               <option value="other">Other / Not Sure</option>
             </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="details" className={styles.label}>Project Details</label>
          <textarea id="details" name="details" rows="4" placeholder="Briefly describe what you're looking to paint..." className={styles.textarea}></textarea>
        </div>

        {status === 'error' && (
          <div style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
            Oops! There was a problem processing your request. Please try giving us a call.
          </div>
        )}

        <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{width: '100%', opacity: status === 'loading' ? 0.7 : 1, transition: 'all 0.3s ease'}}>
          {status === 'loading' ? 'Processing...' : 'Request Free Quote'}
        </button>
      </form>
    </div>
  );
}
