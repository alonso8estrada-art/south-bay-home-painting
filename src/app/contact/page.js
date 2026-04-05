import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | South Bay Home Painting',
  description: 'Reach out to South Bay Home Painting for a free estimate on your next exterior, interior, or cabinet painting project.',
};

export default function ContactPage() {
  return (
    <>
      <Hero 
        title="Contact South Bay Home Painting"
        subtitle="We're ready to help. Reach out below or call us for a fast, free estimate."
        primaryCtaText="Call (310) 704-1147"
        primaryCtaLink="tel:+13107041147"
        secondaryCtaText="Text Us"
        secondaryCtaLink="sms:+13107041147"
        bgImage="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section bg-white">
        <div className={`container ${styles.contactGrid}`}>
          <div>
            <h2>Get In Touch</h2>
            <br />
            <p><strong>Phone:</strong> <a href="tel:+13107041147">(310) 704-1147</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@southbayhomepainting.com">info@southbayhomepainting.com</a></p>
            <p><strong>Service Areas:</strong> Torrance, Redondo Beach, Manhattan Beach, Hermosa Beach, Palos Verdes, El Segundo.</p>
            <br />
            <h3>Our Simple Process</h3>
            <ol className={styles.contactList}>
              <li>Fill out the form with your project details</li>
              <li>We will respond quickly to schedule a simple walkthrough</li>
              <li>You receive a clear, upfront proposal</li>
            </ol>
          </div>
          <div>
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
