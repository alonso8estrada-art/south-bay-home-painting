'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  const [status, setStatus] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const formData = new FormData(form);
    formData.append('_captcha', 'false');

    try {
      const res = await fetch('https://formsubmit.co/ajax/alonso@qintisolutions.com', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.leadForm} onSubmit={handleSubmit}>
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

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary"
          style={{ width: '100%', opacity: status === 'loading' ? 0.7 : 1, transition: 'all 0.3s ease' }}
        >
          {status === 'loading' ? 'Processing...' : 'Request Free Quote'}
        </button>
      </form>
    </div>
  );
}
