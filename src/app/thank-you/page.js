import Link from 'next/link';

export const metadata = {
  title: 'Thank You | South Bay Home Painting',
  description: 'Your estimate request has been received. South Bay Home Painting will be in touch within one business day.',
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="section bg-white" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-gold)',
          color: 'var(--color-navy)',
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}>✓</div>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>We got your request!</h1>
        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
          Thank you for reaching out to South Bay Home Painting. Our team typically responds within one business day to schedule your free walk-through estimate.
        </p>
        <p style={{ color: '#777', marginBottom: '2.5rem' }}>
          Questions? Call us directly at{' '}
          <a href="tel:+13107041147" style={{ color: 'var(--color-navy)', fontWeight: '600' }}>(310) 704-1147</a>
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gallery" className="btn-primary">See Our Recent Work</Link>
          <Link href="/" className="btn-dark">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
