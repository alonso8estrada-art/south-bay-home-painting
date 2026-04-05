'use client';
import { useState } from 'react';
import styles from './LeadForm.module.css';

export default function LeadForm() {
  return (
    <div className={styles.formWrapper}>
      <form 
        className={styles.leadForm} 
        action="https://formsubmit.co/alonso@qintisolutions.com" 
        method="POST"
      >
        {/* FormSubmit Configuration Settings */}
        <input type="hidden" name="_subject" value="New Lead: South Bay Home Painting Website!" />
        <input type="hidden" name="_template" value="table" />
        {/* We won't use _next yet since the domain isn't fully propagated, FormSubmit default thank you page works great */}

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

        <button type="submit" className="btn-primary" style={{width: '100%'}}>Request Free Quote</button>
      </form>
    </div>
  );
}
