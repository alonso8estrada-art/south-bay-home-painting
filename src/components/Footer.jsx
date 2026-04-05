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
            alt="South Bay Home Painting logo" 
            width={400} 
            height={110} 
            className={styles.logo}
          />
          <p className={styles.brandStatement}>
            South Bay Home Painting helps homeowners in the South Bay upgrade, protect, and refresh their homes with premium interior and exterior painting, professional prep, and clean execution.
          </p>
          <div className={styles.contactInfo}>
            <p><strong>Phone:</strong> <a href="tel:+13107041147">(310) 704-1147</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@southbayhomepainting.com">info@southbayhomepainting.com</a></p>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Our Services</h3>
          <ul className={styles.linksList}>
            <li><Link href="/services/interior-painting">Interior House Painting</Link></li>
            <li><Link href="/services/exterior-painting">Exterior House Painting</Link></li>
            <li><Link href="/services/cabinet-painting">Cabinet Painting</Link></li>
            <li><Link href="/services/interior-painting">Trim, Doors & Baseboards</Link></li>
            <li><Link href="/services/exterior-painting">Stucco & Wood Repair</Link></li>
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
