import Hero from '@/components/Hero';
import Link from 'next/link';

export const cityData = {
  torrance: {
    name: 'Torrance',
    title: 'House Painters in Torrance | South Bay Home Painting',
    description: 'Looking for a premium house painter in Torrance? South Bay Home Painting offers high-end interior, exterior, and cabinet painting services.',
    headline: 'Premium Residential Painters in Torrance',
    intro: 'Homeowners in Torrance trust South Bay Home Painting to elevate and protect their homes. From the neighborhoods of Walteria to West Torrance, we deliver flawless results with clear communication.',
  },
  "redondo-beach": {
    name: 'Redondo Beach',
    title: 'Exterior Painting in Redondo Beach | South Bay Home Painting',
    description: 'Protect your Redondo Beach home from the coastal weather with premium exterior and interior painting by South Bay Home Painting.',
    headline: 'High-End House Painters in Redondo Beach',
    intro: 'Coastal homes in Redondo Beach require special care. We use premium finishes and deep prep work to ensure your home looks stunning and stands up to the ocean air.',
  },
  "manhattan-beach": {
    name: 'Manhattan Beach',
    title: 'Cabinet Painting in Manhattan Beach | South Bay Home Painting',
    description: 'South Bay Home Painting provides luxury interior and exterior painting services for homeowners in Manhattan Beach. Free estimates.',
    headline: 'Luxury Residential Painters in Manhattan Beach',
    intro: 'In Manhattan Beach, details matter. Our team specializes in high-end finishes, clean execution, and factory-smooth cabinet painting that matches your home\'s premium aesthetic.',
  },
  "hermosa-beach": {
    name: 'Hermosa Beach',
    title: 'Hermosa Beach House Painters | South Bay Home Painting',
    description: 'Upgrade your Hermosa Beach home with our clean, reliable, and premium painting services. Interior and exterior painting experts.',
    headline: 'Your Local Hermosa Beach Painting Experts',
    intro: 'Transform your Hermosa Beach property. We focus on professional preparation and premium paints to give your home a beautiful, long-lasting look.',
  },
  "palos-verdes": {
    name: 'Palos Verdes',
    title: 'House Painters in Palos Verdes | South Bay Home Painting',
    description: 'South Bay Home Painting is the trusted choice for luxury painting in Palos Verdes. We protect and refresh your beautiful estate.',
    headline: 'Premium Painting Services in Palos Verdes',
    intro: 'Palos Verdes estates require meticulous attention to detail. We provide upscale interior, exterior, and fine-finish prep work that preserves the elegance of your home.',
  },
  "el-segundo": {
    name: 'El Segundo',
    title: 'House Painters El Segundo | South Bay Home Painting',
    description: 'Need a reliable residential painter in El Segundo? South Bay Home Painting brings premium quality and professional crews to your door.',
    headline: 'Top-Rated Painters in El Segundo',
    intro: 'We love serving the El Segundo community. From reviving historic homes to modern updates, our crew delivers exceptional quality and clean workspaces.',
  }
};

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
      <Hero 
        title={data.headline}
        subtitle="South Bay Home Painting offers premium exterior and interior painting with detailed preparation."
        primaryCtaText="Get a Free Estimate"
        bgImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="section-title">Home Painting in {data.name}</h2>
          <p style={{fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem'}}>
            {data.intro}
          </p>
          
          <h3>Why {data.name} Homeowners Choose Us</h3>
          <ul style={{marginBottom: '2rem', lineHeight:'1.8'}}>
            <li>✓ Detailed prep work suitable for coastal climates</li>
            <li>✓ Clean, respectful crews</li>
            <li>✓ Premium finishes and materials</li>
            <li>✓ Clear, reliable communication from start to finish</li>
          </ul>
          
          <h3>Services in {data.name}</h3>
          <ul style={{marginBottom: '2rem', lineHeight:'1.8'}}>
            <li><Link href="/services/interior-painting" style={{color: 'var(--color-navy)', textDecoration:'underline'}}>Interior Painting</Link></li>
            <li><Link href="/services/exterior-painting" style={{color: 'var(--color-navy)', textDecoration:'underline'}}>Exterior Painting</Link></li>
            <li><Link href="/services/cabinet-painting" style={{color: 'var(--color-navy)', textDecoration:'underline'}}>Cabinet Painting</Link></li>
          </ul>

          <h3 style={{ marginTop: '2rem' }}>Other Areas We Serve in the South Bay</h3>
          <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
            Not in {data.name}? We proudly serve neighboring communities:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>
            {Object.entries(cityData).map(([slug, cityInfo]) => (
              slug !== city ? (
                <Link key={slug} href={`/service-areas/${slug}`} style={{ textDecoration: 'underline', color: 'var(--color-gold)', fontWeight: 'bold' }}>
                  {cityInfo.name}
                </Link>
              ) : null
            ))}
          </div>

          <div style={{marginTop: '3rem', textAlign: 'center', background: 'var(--color-neutral)', padding: '3rem', borderRadius: '8px'}}>
            <h2 style={{marginBottom: '1rem'}}>Ready for a Free Quote in {data.name}?</h2>
            <Link href="/contact" className="btn-primary">Request Estimate Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
