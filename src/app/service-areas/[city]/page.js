import Hero from '@/components/Hero';
import Link from 'next/link';
import { cityData } from '@/data/cities';

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return {};
  const canonical = `https://www.southbayhomepainting.com/service-areas/${city}`;
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical },
    openGraph: { title: data.title, description: data.description, url: canonical },
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return <div>City not found</div>;

  const otherCities = [
    ['torrance', 'Torrance'],
    ['redondo-beach', 'Redondo Beach'],
    ['manhattan-beach', 'Manhattan Beach'],
    ['hermosa-beach', 'Hermosa Beach'],
    ['palos-verdes', 'Palos Verdes'],
    ['el-segundo', 'El Segundo'],
  ].filter(([slug]) => slug !== city);

  return (
    <>
      <Hero
        title={data.headline}
        subtitle={data.intro}
        primaryCtaText="Get a Free Estimate"
        bgImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <article style={{ color: '#444', lineHeight: '1.8', fontSize: '1.15rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--color-navy)' }}>
              {data.seoBody1.heading}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-gold)', marginBottom: '2rem' }}></div>
            {data.seoBody1.paragraphs.map((p, i) => <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>)}

            <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginTop: '4rem', marginBottom: '1.5rem' }}>{data.seoBody2.heading}</h2>
            {data.seoBody2.paragraphs.map((p, i) => <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>)}

            <div style={{ background: 'var(--color-offwhite)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)', margin: '3rem 0' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--color-navy)', fontSize: '1.6rem' }}>Our Prep Philosophy in {data.name}</h3>
              <p style={{ marginBottom: '1.5rem' }}>{data.prepFocus}</p>
              <h4 style={{ color: 'var(--color-navy)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Typical Projects in {data.name}:</h4>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
                {data.typicalProjects.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>

            <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginTop: '4rem', marginBottom: '1.5rem' }}>{data.seoBody3.heading}</h2>
            {data.seoBody3.paragraphs.map((p, i) => <p key={i} style={{ marginBottom: '1.5rem' }}>{p}</p>)}
          </article>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <h2 className="section-title" style={{ color: 'white' }}>Comprehensive Painting Services for {data.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {[
              { href: '/services/interior-painting', h: 'Interior Painting', p: 'Clean lines, meticulous furniture protection, and striking modern colors to elevate your daily living spaces.' },
              { href: '/services/exterior-painting', h: 'Exterior Painting', p: 'Deep power washing, intensive stucco/wood repair, and high-build coatings to guard against the elements.' },
              { href: '/services/cabinet-painting', h: 'Cabinet Refinishing', p: 'Factory-smooth, sprayed urethane finishes that completely transform outdated kitchens for a fraction of a remodel cost.' },
            ].map(({ href, h, p }) => (
              <div key={href} style={{ background: 'white', padding: '2rem', borderRadius: '8px', color: 'var(--color-navy)' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>{h}</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{p}</p>
                <Link href={href} style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore {h} in {data.name} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Proudly Serving {data.name} Neighborhoods</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>We are locally operated and practically live in your city. You've likely seen our clean crews working in:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {data.neighborhoods.map((hood, i) => (
              <span key={i} style={{ background: 'var(--color-navy)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>{hood}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">Recent Projects in {data.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {data.recentProjects.map((proj, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <p style={{ color: '#888', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 'bold', marginBottom: '0.5rem' }}>📍 {proj.location}</p>
                <h3 style={{ color: 'var(--color-navy)', fontSize: '1.3rem', margin: 0 }}>{proj.type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem', textAlign: 'center' }}>Trusted by {data.name} Homeowners</h2>
          <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.1rem', color: '#444' }}>
            <li><strong style={{ color: 'var(--color-navy)' }}>✓ Experience with high-end homes:</strong> We know how to navigate luxury architecture.</li>
            <li><strong style={{ color: 'var(--color-navy)' }}>✓ Clean, professional crews:</strong> Immaculate dust containment and daily cleanup.</li>
            <li><strong style={{ color: 'var(--color-navy)' }}>✓ Attention to detail:</strong> Crisp lines, smooth finishes, no cut corners.</li>
            <li><strong style={{ color: 'var(--color-navy)' }}>✓ Respect for your property:</strong> Full floor, furniture, and landscaping protection.</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>{faq.q}</h3>
                <p style={{ margin: 0, color: '#555' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ borderTop: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1.5rem' }}>Other Areas We Serve in the South Bay</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {otherCities.map(([slug, label]) => (
              <Link key={slug} href={`/service-areas/${slug}`} style={{ background: 'var(--color-navy)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 'bold' }}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-neutral)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Get Your Free Estimate in {data.name}</h2>
          <p>Book your painting estimate within 24 hours. Call us at <strong>(310) 704-1147</strong> or use the contact form.</p>
          <br />
          <Link href="/contact" className="btn-primary">Schedule Walk-Through Now</Link>
        </div>
      </section>
    </>
  );
}
