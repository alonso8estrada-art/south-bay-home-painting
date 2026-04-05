'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} container`}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
              src="/logotransparent.png" 
              alt="South Bay Home Painting" 
              width={280} 
              height={76} 
              priority
              className={styles.logo}
            />
          </Link>
        </div>
        
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/services/interior-painting" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Interior</Link></li>
            <li><Link href="/services/exterior-painting" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Exterior</Link></li>
            <li><Link href="/services/cabinet-painting" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Cabinets</Link></li>
            <li><Link href="/gallery" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
            <li><Link href="/contact" className="btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Get Free Estimate</Link></li>
          </ul>
        </nav>

        <Link href="tel:+13107041147" className={`btn-primary ${styles.mobileCallBtn}`}>
          Call Now
        </Link>

        <button className={styles.hamburgerBtn} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
