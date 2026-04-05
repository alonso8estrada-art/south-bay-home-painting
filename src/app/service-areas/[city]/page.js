import Hero from '@/components/Hero';
import Link from 'next/link';
import { cityData } from '@/data/cities';

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return {};
  
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function CityPage({ params }) {
  const { city } = await params;
  const data = cityData[city];
  
  if (!data) return <div>City not found</div>;

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title={data.headline}
        subtitle={data.intro}
        primaryCtaText="Get a Free Estimate"
        bgImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Comprehensive SEO Editorial Section (Authority Body) */}
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <article style={{ color: '#444', lineHeight: '1.8', fontSize: '1.15rem' }}>
            
            {/* The Environmental Threat */}
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem', color: 'var(--color-navy)' }}>
              {data.seoBody1.heading}
            </h2>
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-gold)', marginBottom: '2rem' }}></div>
            {data.seoBody1.paragraphs.map((p, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>{p}</p>
            ))}

            {/* Architectural Variations */}
            <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginTop: '4rem', marginBottom: '1.5rem' }}>
              {data.seoBody2.heading}
            </h2>
            {data.seoBody2.paragraphs.map((p, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>{p}</p>
            ))}

            {/* Why Prep Matters */}
            <div style={{ background: 'var(--color-offwhite)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)', margin: '3rem 0' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--color-navy)', fontSize: '1.6rem' }}>Our Prep Philosophy in {data.name}</h3>
               <p style={{ marginBottom: '1.5rem' }}>
                 {data.prepFocus}
               </p>
               <h4 style={{ color: 'var(--color-navy)', fontWeight: 'bold', marginBottom: '0.5rem' }}>Typical Projects You'll See Us Doing in {data.name}:</h4>
               <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
                 {data.typicalProjects.map((project, index) => (
                   <li key={index}>{project}</li>
                 ))}
               </ul>
            </div>

            {/* Interior & General Excellence */}
            <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginTop: '4rem', marginBottom: '1.5rem' }}>
              {data.seoBody3.heading}
            </h2>
            {data.seoBody3.paragraphs.map((p, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>{p}</p>
            ))}

          </article>
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <div className="container" style={{maxWidth: '1200px'}}>
          <h2 className="section-title" style={{ color: 'white' }}>Comprehensive Painting Services for {data.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-navy)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Interior Painting</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Clean lines, meticulous furniture protection, and striking modern colors to elevate your daily living spaces.</p>
              <Link href="/services/interior-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Interior Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-navy)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Exterior Painting</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Deep power washing, intensive stucco/wood repair, and high-build coatings to guard against the elements.</p>
              <Link href="/services/exterior-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Exterior Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-navy)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Cabinet Refinishing</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Factory-smooth, sprayed urethane finishes that completely transform outdated kitchens for a fraction of a remodel cost.</p>
              <Link href="/services/cabinet-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Cabinet Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', color: 'var(--color-navy)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Trim, Doors & Baseboards</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Sharp, high-gloss or satin finishes on your architectural focal points to make your entire house pop.</p>
              <span style={{ color: '#999', fontSize: '0.9rem' }}>Included in Interior Services</span>
            </div>

          </div>
        </div>
      </section>

      {/* Neighborhoods & Trust */}
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Proudly Serving {data.name} Neighborhoods</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            We are locally operated and practically live in your city. You’ve likely seen our clean crews working in:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {data.neighborhoods.map((hood, i) => (
              <span key={i} style={{ background: 'var(--color-navy)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                {hood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ backgroundColor: 'var(--color-offwhite)', borderTop: '1px solid #eee' }}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
            {data.faqs.map((faq, index) => (
              <div key={index} style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-navy)', marginBottom: '1rem', fontWeight: 'bold' }}>{faq.q}</h3>
                <p style={{ color: '#555', lineHeight: '1.7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas (SEO Link Juice) */}
      <section style={{ padding: '4rem 0', background: 'white', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>Other Areas We Serve in the South Bay</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
          {Object.entries(cityData).map(([slug, cityInfo]) => (
            slug !== city ? (
              <Link key={slug} href={`/service-areas/${slug}`} style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>
                {cityInfo.name}
              </Link>
            ) : null
          ))}
        </div>
      </section>

      {/* VIP CTA */}
      <section className="section" style={{ background: 'var(--color-navy)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'white' }}>Ready for a Flawless Finish?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#ccc' }}>
            Don’t trust your luxury {data.name} home to the lowest bidder. Schedule a free walk-through today to receive a transparent, no-obligation quote from South Bay's premier painting crew.
          </p>
          <div style={{ background: 'white', padding: '3rem', borderRadius: '8px', color: 'var(--color-navy)', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Get Your Free Estimate</h3>
            <p style={{ marginBottom: '2rem', color: '#555' }}>Fill out the form below or call us directly at <strong>(310) 704-1147</strong>.</p>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', fontSize: '1.2rem', padding: '1rem 3rem' }}>
              Schedule Walk-Through Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
