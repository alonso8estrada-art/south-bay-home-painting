import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";

export default function Home() {
  return (
    <>
      <Hero 
        title="Premium Interior & Exterior Painting in South Bay"
        subtitle="Clean, precise, and built to last. Serving Torrance and surrounding South Bay luxury communities."
        bgImage="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Trust Bar */}
      <section className={styles.trustBar} style={{ borderBottom: '1px solid var(--color-neutral)', borderTop: '1px solid var(--color-neutral)', backgroundColor: 'var(--color-navy)', color: 'var(--color-gold)' }}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem} style={{textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem'}}>100% Satisfaction Guarantee</div>
          <div className={styles.trustItem} style={{textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem'}}>Fully Licensed & Insured</div>
          <div className={styles.trustItem} style={{textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem'}}>Premium Coastal Paints</div>
          <div className={styles.trustItem} style={{textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem'}}>No-Mess Execution</div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Premium Services</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{backgroundImage: 'url("/interior.png")'}}></div>
              <div className={styles.serviceContent}>
                <h3>Interior Painting</h3>
                <p>Elevate your living spaces with flawless finishes, straight lines, and professional preparation.</p>
                <Link href="/services/interior-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{backgroundImage: 'url("/exterior.png")'}}></div>
              <div className={styles.serviceContent}>
                <h3>Exterior Painting</h3>
                <p>Protect your home from coastal weather with top-tier paints and meticulous stucco/wood repair.</p>
                <Link href="/services/exterior-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceImagePlaceholder} style={{backgroundImage: 'url("https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
              <div className={styles.serviceContent}>
                <h3>Cabinet Painting</h3>
                <p>Transform your kitchen or bathroom with our factory-like fine finish cabinet painting process.</p>
                <Link href="/services/cabinet-painting" className={styles.textLink}>Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.whyChooseUs}`}>
        <div className={`container ${styles.splitGrid}`}>
          <div className={styles.splitContent}>
            <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2' }}>Why South Bay Homeowners Demand the Best</h2>
            <p style={{ fontSize: '1.1rem', color: '#555' }}>We are not your typical painting contractor. We believe your luxury home deserves the highest level of care, respect, and meticulous craftsmanship.</p>
            <ul className={styles.checkmarkList}>
              <li><strong>Premium workmanship:</strong> We never cut corners.</li>
              <li><strong>Clean & respectful crews:</strong> We protect your home.</li>
              <li><strong>Detailed preparation:</strong> The key to a finish that lasts.</li>
              <li><strong>Clear communication:</strong> You are never left guessing.</li>
              <li><strong>South Bay local focus:</strong> We know coastal homes.</li>
            </ul>
            <br />
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <Link href="/contact" className="btn-primary">Get Free Estimate</Link>
            </div>
          </div>
          <div className={styles.splitImage} style={{backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")'}}></div>
        </div>
      </section>

      {/* Simple Process */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">Our Simple Process</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Request Free Estimate</h3>
              <p>Reach out via phone or form to schedule a walk-through at a time that works for you.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Review Proposal</h3>
              <p>Receive a clear, detailed, and transparent proposal with no hidden fees.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Clean Execution</h3>
              <p>Our professional crew preps, paints, and protects your home throughout the project.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Enjoy Your Home</h3>
              <p>Walk through the final beautiful result with us to ensure 100% satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className={`section ${styles.whyChooseUs}`}>
        <div className="container">
          <h2 className="section-title">What South Bay Homeowners Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            
            <div style={{ background: 'var(--color-navy)', color: 'white', padding: '2rem', borderRadius: '8px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "They completely transformed the exterior of our Palos Verdes home. The crew was incredibly clean, respectful, and the final finish is absolutely flawless. Highly recommend!"
              </p>
              <p style={{ fontWeight: 'bold' }}>— Michael T., Palos Verdes</p>
            </div>

            <div style={{ background: 'var(--color-navy)', color: 'white', padding: '2rem', borderRadius: '8px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "We hired South Bay Home Painting to redo our kitchen cabinets. They look like they came straight from the factory. Saved us thousands on a remodel!"
              </p>
              <p style={{ fontWeight: 'bold' }}>— Sarah J., Torrance</p>
            </div>

            <div style={{ background: 'var(--color-navy)', color: 'white', padding: '2rem', borderRadius: '8px' }}>
              <div style={{ color: 'var(--color-gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                "Communication was a 10/10. Showed up exactly on time every day, cleaned up their workspace, and the interior cut-ins on our trim are perfectly straight."
              </p>
              <p style={{ fontWeight: 'bold' }}>— David R., Redondo Beach</p>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Lead Form / CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Ready to Transform Your Home?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#e0e0e0' }}>
            Reach out today for a free estimate and experience the precision of a premium painting service.
          </p>
          
          <div style={{ textAlign: 'left', background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.2)', color: 'var(--color-navy)' }}>
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
