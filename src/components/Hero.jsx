import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ 
  title, 
  subtitle, 
  primaryCtaText = "Get Free Estimate", 
  primaryCtaLink = "/contact",
  secondaryCtaText = "Call Now",
  secondaryCtaLink = "tel:+13107041147",
  bgImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground} style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.actions}>
          <Link href={primaryCtaLink} className="btn-primary">
            {primaryCtaText}
          </Link>
          <Link href={secondaryCtaLink} className="btn-secondary">
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
