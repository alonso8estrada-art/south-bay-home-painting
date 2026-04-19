import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";

export const metadata = {
  title: "House Painting in South Bay, CA | South Bay Home Painting",
  description: "Premium interior & exterior house painting for South Bay homeowners. Serving Torrance, Manhattan Beach, Redondo Beach, Hermosa Beach, Palos Verdes & El Segundo. Licensed #1109637. Free estimate.",
  alternates: { canonical: "https://www.southbayhomepainting.com/" },
  openGraph: {
    title: "House Painting in South Bay, CA — Premium Results, Licensed & Insured",
    description: "South Bay Home Painting delivers flawless interior, exterior & cabinet painting for homes in Torrance, Manhattan Beach, Redondo Beach & Palos Verdes.",
    url: "https://www.southbayhomepainting.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        title="House Painting in South Bay, CA — Premium Results That Last Years, Not Months"
        subtitle="Interior & exterior house painters serving Torrance, Manhattan Beach, Redondo Beach, Hermosa Beach, Palos Verdes & El Segundo. Clean crews. Flawless finishes."
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>100% Satisfaction Guarantee</div>
          <div className={styles.trustItem}>Fully Licensed & Insured</div>
          <div className={styles.trustItem}>Premium Coastal Paints</div>
          <div className={styles.trustItem}>No-Mess Execution</div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{ backgroundImage: 'url("/interior.png")' }} role="img" aria-label="Interior painting in a South Bay living room"></div>
              <div className={styles.serviceContent}>
                <h3>Interior Painting</h3>
                <p>Elevate your living spaces with flawless finishes, straight lines, and professional preparation.</p>
                <Link href="/services/interior-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{ backgroundImage: 'url("/exterior.png")' }} role="img" aria-label="Exterior painting on a South Bay home"></div>
              <div className={styles.serviceContent}>
                <h3>Exterior Painting</h3>
                <p>Protect your home from coastal weather with top-tier paints and meticulous stucco/wood repair.</p>
                <Link href="/services/exterior-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }} role="img" aria-label="Cabinet painting in a South Bay kitchen"></div>
              <div className={styles.serviceContent}>
                <h3>Cabinet Painting</h3>
                <p>Transform your kitchen or bathroom with our factory-like fine finish cabinet painting process.</p>
                <Link href="/services/cabinet-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.whyChooseUs}`}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.splitContent}>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Why South Bay Homeowners Choose Us</h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>We are not your typical painting contractor. We don't just paint; we execute a flawless process.</p>
            <ul className={styles.checkmarkList}>
              <li><strong>We prep properly:</strong> (Most painters don't—this is why paint fails)</li>
              <li><strong>We protect your home:</strong> Full masking and drop cloths, every time</li>
              <li><strong>We communicate daily:</strong> You are never left guessing where the project stands</li>
              <li><strong>We don't cut corners:</strong> High-end paints and proper technique only</li>
            </ul>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <Link href="/contact" className="btn-primary">Get Free Estimate</Link>
            </div>
          </div>
          <div className={styles.splitImage} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }} role="img" aria-label="Professional painting crew at work in a South Bay home"></div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Promise to Homeowners</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: '#ccc' }}>
            We know what it means to invite contractors into your luxury home. That's why we operate under three iron-clad promises that guarantee your peace of mind.
          </p>
          <div className={styles.promiseGrid}>
            {[
              { icon: '🛡️', h: '3-Year No-Peel Guarantee', p: 'Because we meticulously prepare every inch of surface before applying premium paint, we confidently guarantee our finishes will not peel, flake, or fail.' },
              { icon: '⏱️', h: 'On-Time Completion', p: 'Your time is valuable. We provide accurate project timelines upfront, show up exactly when we say we will, and finish on schedule.' },
              { icon: '🧹', h: 'Daily Cleanup', p: "You shouldn't have to live in a messy construction zone. Our crews lay down pristine drop cloths and perform a complete cleanup at the end of every single day." },
            ].map(({ icon, h, p }) => (
              <div key={h} className={styles.promiseCard}>
                <span className={styles.promiseIcon}>{icon}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Simple Process</h2>
          <div className={styles.processGrid}>
            {[
              { n: '1', h: 'Request Free Estimate', p: 'Reach out via phone or form to schedule a walk-through at a time that works for you.' },
              { n: '2', h: 'Review Proposal', p: 'Receive a clear, detailed, and transparent proposal with no hidden fees.' },
              { n: '3', h: 'Clean Execution', p: 'Our professional crew preps, paints, and protects your home throughout the project.' },
              { n: '4', h: 'Enjoy Your Home', p: 'Walk through the final beautiful result with us to ensure 100% satisfaction.' },
            ].map(({ n, h, p }) => (
              <div key={n} className={styles.processStep}>
                <div className={styles.stepNumber}>{n}</div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.whyChooseUs}`}>
        <div className="container">
          <h2 className="section-title">What South Bay Homeowners Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {[
              { text: 'They completely transformed the exterior of our Palos Verdes home. The crew was incredibly clean, respectful, and the final finish is absolutely flawless. Highly recommend!', author: 'Michael T., Palos Verdes' },
              { text: 'We hired South Bay Home Painting to redo our kitchen cabinets. They look like they came straight from the factory. Saved us thousands on a remodel!', author: 'Sarah J., Torrance' },
              { text: 'Communication was a 10/10. Showed up exactly on time every day, cleaned up their workspace, and the interior cut-ins on our trim are perfectly straight.', author: 'David R., Redondo Beach' },
            ].map(({ text, author }) => (
              <div key={author} style={{ background: 'var(--color-navy)', color: 'white', padding: '2rem', borderRadius: '8px' }}>
                <div style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{text}"</p>
                <p style={{ fontWeight: 'bold' }}>— {author}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="https://www.google.com/maps/search/South+Bay+Home+Painting+Torrance+CA" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-navy)', fontWeight: '600', borderBottom: '1px solid var(--color-gold)', paddingBottom: '2px' }}>
              Read more reviews on Google →
            </a>
          </div>
        </div>
      </section>

      <section className={`section ${styles.ctaSection}`}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Ready to Transform Your Home?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#e0e0e0' }}>Reach out today for a free estimate and experience the precision of a premium painting service.</p>
          <div style={{ textAlign: 'left', color: 'var(--color-navy)' }}>
            <LeadForm />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <p>Or call us directly at <strong><Link href="tel:+13107041147" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>(310) 704-1147</Link></strong></p>
          </div>
        </div>
      </section>
    </>
  );
}
