import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero 
        title="Premium Residential Painting in Torrance and the South Bay"
        subtitle="South Bay Home Painting helps homeowners upgrade, protect, and refresh their homes with premium interior and exterior painting, professional prep, and clean execution."
      />

      {/* Trust Bar */}
      <section className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>✓ Premium specialists</div>
          <div className={styles.trustItem}>✓ Clean & professional</div>
          <div className={styles.trustItem}>✓ Detailed prep</div>
          <div className={styles.trustItem}>✓ Free estimates</div>
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
            <h2>Why South Bay Homeowners Choose Us</h2>
            <p>We are not your typical painting contractor. We believe your home deserves the highest level of care, respect, and craftsmanship.</p>
            <ul className={styles.checkmarkList}>
              <li><strong>Premium workmanship:</strong> We never cut corners.</li>
              <li><strong>Clean & respectful crews:</strong> We protect your home.</li>
              <li><strong>Detailed preparation:</strong> The key to a finish that lasts.</li>
              <li><strong>Clear communication:</strong> You are never left guessing.</li>
              <li><strong>South Bay local focus:</strong> We know coastal homes.</li>
            </ul>
            <br />
            <Link href="/about" className="btn-primary">More About Us</Link>
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

      {/* Call to Action Wrapper Area */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Ready to Transform Your Home?</h2>
            <p>Contact us today for a free estimate and experience the difference of a premium painting service.</p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn-primary">Get Your Free Estimate</Link>
              <Link href="tel:+13107041147" className="btn-secondary">Call (310) 704-1147</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
