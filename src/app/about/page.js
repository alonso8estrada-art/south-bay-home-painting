import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | South Bay Home Painting',
  description: 'Learn about South Bay Home Painting. We are a premium residential painting company serving Torrance and the South Bay area.',
};

export default function AboutPage() {
  return (
    <>
      <Hero 
        title="About South Bay Home Painting"
        subtitle="We elevate South Bay homes through premium materials, meticulous preparation, and flawless execution."
        bgImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="section-title">Our Story</h2>
          <p style={{fontSize: '1.2rem', lineHeight: '1.8'}}>
            South Bay Home Painting was founded with a single goal: to provide a better, more reliable painting experience for homeowners in the South Bay. 
          </p>
          <br/>
          <p style={{lineHeight: '1.8'}}>
            We noticed that the painting industry is often filled with contractors who overpromise, underdeliver, and fail to respect the homes they work in. We set out to change that by focusing deeply on preparation, using only the finest paints, and keeping our work areas meticulously clean. 
          </p>
          <p style={{lineHeight: '1.8'}}>
            For us, painting is not just about color; it's about protecting one of your largest investments and ensuring the finish stands the test of time and the coastal environment.
          </p>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--color-neutral)'}}>
        <div className="container" style={{textAlign: 'center', maxWidth: '800px'}}>
          <h2 style={{color: 'var(--color-navy)', marginBottom: '1.5rem'}}>Experience the Difference</h2>
          <p>Don't settle for "good enough". Choose the team that treats your home like their own.</p>
          <br/>
          <Link href="/contact" className="btn-primary">Get a Free Proposal</Link>
        </div>
      </section>
    </>
  );
}
