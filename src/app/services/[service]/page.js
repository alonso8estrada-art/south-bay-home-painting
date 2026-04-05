import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export const serviceData = {
  "interior-painting": {
    name: 'Interior Painting',
    title: 'Premium Interior House Painting in South Bay | South Bay Home Painting',
    description: 'Elevate your living spaces with high-end interior house painting. Professional prep, clean execution, and beautiful finishes.',
    headline: 'High-End Interior Painting for South Bay Homeowners',
    intro: 'Your home is your sanctuary. Our interior painting process ensures crisp lines, smooth walls, and absolute protection for your furniture and floors.',
    benefits: ['Crisp, straight cut-ins', 'Drywall patch and repair', 'No-mess clean execution', 'Premium, low-VOC paints'],
    image: '/interior.png',
    faq: [
      { q: "How long does it take?", a: "Most interior jobs take 3-5 days depending on the scope of work." },
      { q: "Do I need to move my furniture?", a: "We ask that you move small fragile items, but we move heavy furniture to the center and cover it completely." },
    ]
  },
  "exterior-painting": {
    name: 'Exterior Painting',
    title: 'Exterior House Painters in South Bay | South Bay Home Painting',
    description: 'Protect your South Bay home with our premium exterior painting services. We specialize in stucco repair, wood rot, and coastal weather protection.',
    headline: 'Protect & Refresh with Premium Exterior Painting',
    intro: 'Coastal elements take a toll on your home\'s exterior. We provide heavy-duty prep, power washing, and premium paints formulated for long-lasting protection.',
    benefits: ['Full power washing and mildew removal', 'Stucco and wood repair prep', 'High-quality weather-resistant paint', 'Increases curb appeal and home value'],
    image: '/exterior.png',
    faq: [
      { q: "Do you repair stucco cracks before painting?", a: "Absolutely. Proper masonry and stucco repair is essential to a lasting finish." },
      { q: "What kind of paint do you use?", a: "We use top-tier exterior paints from premium brands like Dunn-Edwards and Sherwin Williams." },
    ]
  },
  "cabinet-painting": {
    name: 'Cabinet Painting',
    title: 'Professional Cabinet Painting South Bay | South Bay Home Painting',
    description: 'Transform your kitchen with our factory-smooth cabinet painting process. South Bay Home Painting offers high-end finishes for your cabinets.',
    headline: 'Factory-Smooth Cabinet Painting',
    intro: 'Don\'t spend tens of thousands on a new kitchen. Our specialized fine-finish cabinet painting process gives you a brand-new look with outstanding durability.',
    benefits: ['Factory-like smooth finish', 'Extreme durability and washability', 'Proper degreasing and sanding', 'Custom hardware installation available'],
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    faq: [
      { q: "Will the paint chip?", a: "We use professional-grade cabinet enamels that cure to a hard, durable finish resistant to chipping." },
      { q: "Do you spray or brush?", a: "For cabinets, we spray doors and drawer fronts in a controlled environment to ensure a flawless finish." },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({
    service: service,
  }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) return {};
  
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const data = serviceData[service];
  
  if (!data) return <div>Service not found</div>;

  return (
    <>
      <Hero 
        title={data.headline}
        subtitle={data.intro}
        primaryCtaText="Get a Free Estimate"
        bgImage={data.image}
      />
      
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            <div>
              <h2>{data.name} Process & Benefits</h2>
              <p style={{margin: '1.5rem 0'}}>We don't just paint over problems. Our methodical execution guarantees a beautiful, long-lasting transformation.</p>
              <ul style={{lineHeight: '2'}}>
                {data.benefits.map((b, i) => (
                  <li key={i}><strong>✓</strong> {b}</li>
                ))}
              </ul>
            </div>
            <div style={{position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden'}}>
              <Image src={data.image} alt={data.name} fill style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--color-neutral)'}}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {data.faq.map((f, i) => (
              <div key={i} style={{background: 'var(--color-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)'}}>
                <h4 style={{fontFamily: 'var(--font-sans)', color: 'var(--color-navy)', marginBottom: '0.5rem'}}>{f.q}</h4>
                <p style={{margin: 0}}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ borderTop: '1px solid #eaeaea' }}>
        <div className="container" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center'}}>
          <h3 style={{ marginBottom: '1rem' }}>Areas We Serve for {data.name}</h3>
          <p style={{ color: '#666', lineHeight: '1.8' }}>
            We provide our signature {data.name.toLowerCase()} services to homeowners throughout the South Bay, including: 
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <Link href="/service-areas/torrance" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>Torrance</Link> | 
            <Link href="/service-areas/redondo-beach" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>Redondo Beach</Link> | 
            <Link href="/service-areas/manhattan-beach" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>Manhattan Beach</Link> | 
            <Link href="/service-areas/hermosa-beach" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>Hermosa Beach</Link> | 
            <Link href="/service-areas/palos-verdes" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>Palos Verdes</Link> | 
            <Link href="/service-areas/el-segundo" style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>El Segundo</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{backgroundColor: 'var(--color-navy)', color: 'white'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h2 style={{color: 'white'}}>Ready to upgrade your home?</h2>
          <br/>
          <Link href="/contact" className="btn-primary">Request Your Free Proposal</Link>
        </div>
      </section>
    </>
  );
}
