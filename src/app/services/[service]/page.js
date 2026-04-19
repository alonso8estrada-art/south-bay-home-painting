import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';

export const serviceData = {
  "interior-painting": {
    name: 'Interior Painting',
    title: 'Interior House Painters in South Bay, CA | South Bay Home Painting',
    description: 'Professional interior painting for South Bay homes. Crisp cut-ins, drywall repair, no-mess crews, and premium low-VOC paints. 3-Year No-Peel Guarantee. Free estimate.',
    canonical: 'https://www.southbayhomepainting.com/services/interior-painting',
    headline: 'Interior House Painters in South Bay, CA — Crisp Lines, Zero Mess',
    intro: "Your home deserves more than a fresh coat of paint — it deserves a process. From the moment we walk through your door to the final walkthrough, you'll notice the difference: zero dust in untouched rooms, perfectly straight cut-ins, and a finish that holds up for years.",
    benefits: ['Crisp, straight cut-ins on all trim and edges', 'Drywall patch and texture repair included', 'Full furniture protection — no exceptions', 'Premium low-VOC paints from Dunn-Edwards & Sherwin-Williams'],
    image: '/interior.png',
    imageAlt: 'Interior house painting in a South Bay living room by South Bay Home Painting',
    body: [
      {
        heading: 'Our Interior Painting Process',
        paragraphs: [
          'Most paint failures are a preparation problem, not a paint problem. Every interior project we take on follows the same non-negotiable sequence: full-room protection first, surface repair and patching second, targeted priming where it matters, and then two full finish coats with meticulous brushwork.',
          'Before any paint is opened, we move heavy furniture to the center of the room and cover it completely with padded drop cloths. All baseboards, trim, hardware, and floors are masked. We patch every nail hole, dent, and crack — and skim-coat any drywall repairs until they are perfectly invisible under paint.',
          'We apply two full coats of premium, low-VOC interior paint. Our brushwork on trim, doors, and baseboards produces tight, straight cut-ins without tape bleed. At the end of every workday, we clean the workspace and restore access to rooms you need.'
        ]
      },
      {
        heading: 'What We Paint Inside Your Home',
        paragraphs: [
          'We handle every painted surface inside your home: living rooms, dining rooms, bedrooms, master suites, kitchens, bathrooms, hallways, stairwells, vaulted ceilings, trim, crown molding, baseboards, doors, and home offices. Ceilings are included in all full-room quotes.',
          'All of our standard interior paints are low-VOC. Our default specifications are washable eggshell on walls, satin on trim and doors, and flat on ceilings — though we match any finish preference you have.'
        ]
      },
      {
        heading: 'How Long Does Interior Painting Take?',
        paragraphs: [
          'A single room typically takes one day. A full floor of three to four rooms takes two to three days. A whole-home interior repaint takes four to seven days depending on scope. We provide a detailed, written timeline before any work begins and show up every day without exception.'
        ]
      }
    ],
    faq: [
      { q: 'Do I need to move all my furniture?', a: 'No. We ask that you remove small, fragile, or irreplaceable items. All heavy furniture is moved to the center of the room and fully protected with padded drop cloths.' },
      { q: 'Will there be a smell? Is it safe?', a: 'All of our standard interior paints are low-VOC. There will be a mild scent during application that typically dissipates within 24–48 hours. We recommend light ventilation while we work.' },
      { q: 'Can you match my existing paint color exactly?', a: 'Yes. Bring us a paint chip, a swatch, or the original paint can. We can also color-match from a small painted sample.' },
      { q: 'Do you paint ceilings?', a: 'Absolutely. Ceilings are included in all full-room quotes. Popcorn ceiling removal or skim-coat resurfacing is an available add-on.' },
      { q: 'What is your warranty?', a: 'All interior painting work is backed by our 3-Year No-Peel Guarantee. If any painted surface peels, flakes, or fails due to application error within three years, we fix it at no charge.' },
      { q: 'How long does interior painting take?', a: 'A single room takes one day. A full floor takes 2–3 days. A whole-home repaint typically takes 4–7 days. We provide an exact written timeline with every proposal.' },
    ]
  },
  "exterior-painting": {
    name: 'Exterior Painting',
    title: 'Exterior House Painters in South Bay, CA | South Bay Home Painting',
    description: "Exterior painting built for South Bay's coastal climate. Full power washing, stucco repair, elastomeric primers & premium weather-resistant paints. Free estimate.",
    canonical: 'https://www.southbayhomepainting.com/services/exterior-painting',
    headline: 'Exterior House Painters in South Bay, CA — Coastal-Grade Protection',
    intro: 'The South Bay coast is one of the harshest environments for exterior paint in California. Salt air, marine moisture, and daily temperature cycling cause inferior coatings to crack and peel within years. We use coastal-grade primers, elastomeric coatings, and meticulous surface prep to deliver results that outlast standard applications by years — not months.',
    benefits: ['Full power washing and salt removal', 'Stucco V-groove repair and texture matching', 'High-build elastomeric primer on all masonry', 'Premium Dunn-Edwards & Sherwin-Williams exterior coatings'],
    image: '/exterior.png',
    imageAlt: 'Exterior house painting on a stucco home in South Bay, CA by South Bay Home Painting',
    body: [
      {
        heading: 'Our Exterior Painting Process',
        paragraphs: [
          "We walk the full exterior with you first, noting every crack, stucco failure, wood rot area, and peeling section. Nothing is hidden from the proposal. Then we power-wash the entire exterior to remove accumulated salt, dirt, mildew, and chalky oxidized paint — painting over salt contamination is one of the most common causes of early coastal paint failure.",
          'Every crack wider than a hairline is V-grooved open, packed with elastomeric patching compound, and textured to match your existing stucco. Wood rot on fascia boards, soffits, and eaves is repaired using marine-grade epoxy fillers or replaced outright if structurally compromised.',
          'We apply a high-build, alkali-resistant primer to all repaired areas and a full elastomeric primer coat to stucco surfaces. Then two full coats of premium exterior paint go on at full manufacturer-specified thickness.'
        ]
      },
      {
        heading: 'The Paints We Use',
        paragraphs: [
          'For South Bay coastal exteriors we rely on Dunn-Edwards Evershield and Sherwin-Williams Emerald Exterior — both are 100% acrylic, elastomeric-grade formulas rated for coastal California exposure. These paints resist mildew, salt, UV fading, and thermal cracking at a level that standard exterior paints cannot match.'
        ]
      }
    ],
    faq: [
      { q: 'Do you repair stucco cracks before painting?', a: 'Yes — always. We V-groove cracks, fill with elastomeric compound, and texture-match before any primer touches the surface. Painting over cracks is a temporary fix that fails within one season.' },
      { q: 'Can you fix wood rot on my fascia?', a: 'Yes. Minor to moderate rot is repaired with marine-grade epoxy wood filler. Severely compromised boards are replaced with new primed lumber.' },
      { q: 'How long does exterior painting last in South Bay?', a: 'With proper prep and premium coastal-grade coatings, 8–12 years is a realistic lifespan. Our 3-Year No-Peel Guarantee reflects our confidence in this process.' },
      { q: 'Do I need to be home during the project?', a: 'No. We coordinate access on day one and work independently after that. You will receive a daily update and can reach your project lead by phone at any time.' },
      { q: 'How long does a full exterior take?', a: 'Most single-family homes in South Bay take 5–8 days. Larger estates or homes with extensive wood repair may take 10–12 days. We provide an exact written timeline in your proposal.' },
      { q: 'What is your warranty?', a: 'All exterior work carries our 3-Year No-Peel Guarantee. Any peeling, flaking, or finish failure due to our application is corrected at zero cost to you.' },
    ]
  },
  "cabinet-painting": {
    name: 'Cabinet Painting',
    title: 'Cabinet Painting in South Bay, CA | South Bay Home Painting',
    description: 'Factory-smooth cabinet painting for South Bay kitchens & bathrooms. Sprayed urethane finish, extreme durability, fraction of the cost of replacement. Free estimate.',
    canonical: 'https://www.southbayhomepainting.com/services/cabinet-painting',
    headline: 'Cabinet Painting in South Bay, CA — Factory Finish for Your Kitchen',
    intro: 'A full kitchen cabinet replacement in the South Bay typically runs $15,000–$40,000. Our professional cabinet painting process delivers a result that looks and functions identically to new cabinetry for roughly 20–30% of that cost. The key is our factory-controlled spray process: doors and drawer fronts are removed, taken off-site, and finished with a hardened urethane coating that cures to a glass-smooth, chip-resistant surface.',
    benefits: ['Factory-like smooth sprayed finish', 'Extreme durability and chip resistance', 'Professional degreasing, sanding, and tannin-blocking primer', 'Off-site spray for dust-free results'],
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    imageAlt: 'White kitchen cabinet painting in South Bay — factory-smooth finish by South Bay Home Painting',
    body: [
      {
        heading: 'Our Cabinet Painting Process',
        paragraphs: [
          'All cabinet doors and drawer fronts are removed and labeled for exact re-installation. They go to our controlled spray environment where they are degreased, sanded to 150 grit, primed with a tannin-blocking adhesion primer, sprayed with two coats of professional cabinet enamel, and allowed to fully cure before re-installation.',
          'This off-site process eliminates the overspray, dust contamination, and brush marks that occur when cabinets are painted in place. Cabinet boxes — the frames left in your kitchen — are hand-sanded, primed, and brush-painted with the same enamel.',
          'We use professional-grade cabinet enamels: Benjamin Moore Advance, Sherwin-Williams Emerald Urethane Trim, or Dunn-Edwards Spartashield. These products cure to a ceramic-hard surface, are designed for frequent washing, resist fingerprints and grease, and do not yellow over time.'
        ]
      }
    ],
    faq: [
      { q: 'Will the paint chip or scratch?', a: 'Not with our system. The professional enamels we use cure to a hardness that standard interior paints never achieve. Normal kitchen use — including washing, scrubbing, and repeated opening — will not damage the finish.' },
      { q: 'Do you spray or brush?', a: 'Both. Doors and drawer fronts are sprayed off-site for a glass-smooth result. Cabinet boxes are hand-painted in place with a very fine-nap roller and brush.' },
      { q: 'How long does cabinet painting take?', a: 'A typical full kitchen takes 3–5 days: one day for removal and box painting, 2–3 days for off-site door finishing and cure time, and a half-day for reinstallation.' },
      { q: 'Can you paint any color?', a: 'Yes. We can match any Benjamin Moore, Sherwin-Williams, or Dunn-Edwards color — or custom-match from a sample. White, off-white, navy, sage, and charcoal are our most-requested South Bay finishes.' },
      { q: 'Do I need to empty my cabinets?', a: 'We ask that you remove items from the lower cabinets only. Upper cabinet contents can stay as long as they are moved to the back of the shelf during painting days.' },
      { q: 'How much does cabinet painting cost vs. replacement?', a: 'Cabinet painting typically runs $1,500–$5,000 for a standard South Bay kitchen. A full replacement for the same kitchen runs $15,000–$40,000+. The finish quality is indistinguishable.' },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((service) => ({ service }));
}

export async function generateMetadata({ params }) {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: data.canonical },
    openGraph: { title: data.title, description: data.description, url: data.canonical },
  };
}

export default async function ServicePage({ params }) {
  const { service } = await params;
  const data = serviceData[service];
  if (!data) return <div>Service not found</div>;

  return (
    <>
      <Hero title={data.headline} subtitle={data.intro} primaryCtaText="Get a Free Estimate" bgImage={data.image} />

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2>{data.name} Process & Benefits</h2>
              <p style={{ margin: '1.5rem 0' }}>We don't just paint over problems. Our methodical execution guarantees a beautiful, long-lasting transformation.</p>
              <ul style={{ lineHeight: '2' }}>
                {data.benefits.map((b, i) => <li key={i}><strong>✓</strong> {b}</li>)}
              </ul>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
              <Image src={data.image} alt={data.imageAlt} fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ borderTop: '1px solid #f0f0f0', paddingTop: '0' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <article style={{ color: '#444', lineHeight: '1.8', fontSize: '1.1rem' }}>
            {data.body.map((section, i) => (
              <div key={i} style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>{section.heading}</h2>
                {section.paragraphs.map((p, j) => <p key={j} style={{ marginBottom: '1.25rem' }}>{p}</p>)}
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-neutral)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {data.faq.map((f, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '600' }}>{f.q}</h3>
                <p style={{ margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white" style={{ borderTop: '1px solid #eaeaea' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>Areas We Serve for {data.name}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            {[['torrance','Torrance'],['redondo-beach','Redondo Beach'],['manhattan-beach','Manhattan Beach'],['hermosa-beach','Hermosa Beach'],['palos-verdes','Palos Verdes'],['el-segundo','El Segundo']].map(([slug, label], i, arr) => (
              <span key={slug}>
                <Link href={`/service-areas/${slug}`} style={{ textDecoration: 'underline', color: 'var(--color-navy)', fontWeight: 'bold' }}>{label}</Link>
                {i < arr.length - 1 && ' | '}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-navy)', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white' }}>Ready to upgrade your home?</h2>
          <br />
          <Link href="/contact" className="btn-primary">Request Your Free Proposal</Link>
        </div>
      </section>
    </>
  );
}
