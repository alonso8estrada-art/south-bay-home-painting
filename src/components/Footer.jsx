import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>

        <div className={styles.column}>
          <Image
            src="/logotransparent.png"
            alt="South Bay Home Painting — Licensed Residential Painters in South Bay, CA"
            width={400}
            height={110}
            className={styles.logo}
          />
          <p className={styles.brandStatement}>
            South Bay Home Painting helps homeowners in the South Bay upgrade, protect, and refresh their homes with premium interior and exterior painting, professional prep, and clean execution.
          </p>

          <address
            className={styles.contactInfo}
            style={{ fontStyle: 'normal' }}
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <span itemProp="name" style={{ display: 'none' }}>South Bay Home Painting</span>
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Torrance</span>,{' '}
              <span itemProp="addressRegion">CA</span>{' '}
              <span itemProp="postalCode">90505</span>
            </span>
            <p><strong>Phone:</strong>
        </div>

        <div className={styles.column}>
          <h3>Our Services</h3>
          <ul className={styles.linksList}>
            <li><Link href="/services/interior-painting">Interior House Painting</Link></li>
            <li><Link href="/services/exterior-painting">Exterior House Painting</Link></li>
            <li><Link href="/services/cabinet-painting">Cabinet Painting</Link></li>
            <li><Link href="/services/interior-painting">Trim, Doors &amp; Baseboards</Link></li>
            <li><Link href="/services/exterior-painting">Stucco &amp; Wood Repair</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Service Areas</h3>
          <ul className={styles.linksList}>
            <li><Link href="/service-areas/torrance">Torrance</Link></li>
            <li><Link href="/service-areas/redondo-beach">Redondo Beach</Link></li>
            <li><Link href="/service-areas/manhattan-beach">Manhattan Beach</Link></li>
            <li><Link href="/service-areas/hermosa-beach">Hermosa Beach</Link></li>
            <li><Link href="/service-areas/palos-verdes">Palos Verdes</Link></li>
            <li><Link href="/service-areas/el-segundo">El Segundo</Link></li>
          </ul>
        </div>

      </div>

      <div className={styles.bottomBar}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} South Bay Home Painting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
