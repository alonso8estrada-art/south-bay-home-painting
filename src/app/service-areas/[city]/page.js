import Hero from '@/components/Hero';
import Link from 'next/link';

export const cityData = {
  torrance: {
    name: 'Torrance',
    title: 'Precision House Painters in Torrance | South Bay Home Painting',
    description: 'Serving Walteria to West Torrance, we deliver premium interior, exterior, and cabinet painting with a 3-Year No-Peel Guarantee.',
    headline: 'High-End Residential Painters in Torrance',
    intro: 'Homeowners in Torrance trust South Bay Home Painting to elevate and protect their homes. We bring a meticulous, white-glove approach to every project, ensuring your high-end property receives the flawless finish it deserves.',
    prepFocus: 'Torrance features a wide mix of architectural styles, from classic mid-century homes in South Torrance to newer coastal-adjacent builds. Proper prep here means addressing structural sun-fade and ensuring pristine wood repair on older eaves and fascia boards before a single drop of paint is applied.',
    typicalProjects: [
      'Whole-home interior repaints for new property purchases',
      'Factory-finish kitchen cabinet restorations',
      'Stucco repair and elastomeric exterior coatings'
    ],
    neighborhoods: ['Walteria', 'Hollywood Riviera', 'West Torrance', 'South Torrance', 'Oldfield'],
    faqs: [
      { q: "How long does a typical exterior paint job take in Torrance?", a: "Most residential exterior projects in Torrance take between 5 to 8 days, depending on the level of stucco or wood repair needed." },
      { q: "Do you handle HOA approvals in Torrance neighborhoods?", a: "Yes. Many of our clients live in strict HOA communities. We provide detailed color swatches and exact paint specifications to make your approval process seamless." },
      { q: "What kind of paint do you use?", a: "We exclusively use premium, ultra-durable lines from Dunn-Edwards and Sherwin-Williams specifically engineered for Southern California climates." },
      { q: "Can you fix damaged stucco before painting?", a: "Absolutely. We don't just paint over problems; our crew performs extensive stucco trenching, patching, and texturizing to ensure a flawless structural base." }
    ]
  },
  "redondo-beach": {
    name: 'Redondo Beach',
    title: 'Luxury Coastal Painters in Redondo Beach | South Bay Home Painting',
    description: 'Expert coastal exterior and interior painting in Redondo Beach. We use marine-grade prep to protect against ocean salt and moisture.',
    headline: 'Luxury Coastal Painters in Redondo Beach',
    intro: 'Redondo Beach estates demand a painting contractor who understands coastal architecture. We deliver stunning aesthetic upgrades while providing serious weatherproofing to project your investment.',
    prepFocus: 'Homes in South and North Redondo are constantly exposed to marine moisture, salt air, and heavy UV rays. If exterior walls aren\'t power-washed, treated for efflorescence, and sealed with high-build primers, the salt air will rapidly degrade standard paint. We prep specifically for the ocean environment.',
    typicalProjects: [
      'Weatherproofing exterior sea-facing walls and decks',
      'Bright, modern interior repaints to maximize natural light',
      'Detailed trim and baseboard restoration'
    ],
    neighborhoods: ['South Redondo', 'North Redondo', 'Golden Hills', 'Hollywood Riviera', 'The Esplanade'],
    faqs: [
      { q: "How does salt air affect my exterior paint?", a: "Salt is highly corrosive and breaks down standard acrylic paint binders rapidly. We use specialized masonry primers and ultra-premium exterior paints designed specifically to withstand marine environments." },
      { q: "Do you cover my furniture for interior jobs?", a: "Yes. We treat your home like a museum. All furniture, flooring, and valuables are completely masked off with heavy-duty drop cloths and plastic sheeting before any sanding or painting begins." },
      { q: "Can you paint exterior vinyl windows?", a: "Yes, utilizing highly specific bonding primers and heat-reflective technology, we can safely change the color of exterior vinyl frames." },
      { q: "Do you offer a warranty in Redondo Beach?", a: "Yes! Because of our intensive prep work, we proudly offer a 3-Year No-Peel Guarantee on all our projects." }
    ]
  },
  "manhattan-beach": {
    name: 'Manhattan Beach',
    title: 'High-End Painters in Manhattan Beach | South Bay Home Painting',
    description: 'Serving the Sand Section to the Hill Section, we provide ultra-premium interior, exterior, and custom cabinet painting for Manhattan Beach estates.',
    headline: 'Premium House Painters in Manhattan Beach',
    intro: 'In Manhattan Beach, uncompromising quality is the baseline. Our team specializes in high-end finishes, impeccably clean execution, and factory-smooth cabinet painting that matches your luxury estate\'s premium aesthetic.',
    prepFocus: 'From the Sand Section to the Tree Section, Manhattan Beach homes face intense direct sunlight and coastal wind. Wood siding and custom exterior trim work take a beating. Our prep phase involves extensive sanding, epoxy wood repair, and marine-grade caulking to ensure the ocean air cannot penetrate the structure.',
    typicalProjects: [
      'Luxury kitchen and bathroom cabinet refinishing',
      'Ultra-smooth Level 5 drywall prep and painting',
      'Exterior wood siding restoration and staining'
    ],
    neighborhoods: ['Sand Section', 'Tree Section', 'Hill Section', 'Manhattan Village', 'East Manhattan Beach'],
    faqs: [
      { q: "What is a 'factory-finish' on cabinets?", a: "We don't use brushes on cabinets. We remove your doors, take them to a controlled setup, deeply sand, spray-prime, and spray-apply a hard-curing urethane coating. The result is a smooth, durable finish identical to brand new custom cabinetry." },
      { q: "Are your crews clean and discreet?", a: "Absolutely. We are accustomed to working in high-end estates. Our crews park respectfully, maintain quiet working zones, and clean up the entire site at the end of every single day." },
      { q: "How often should a house in Manhattan Beach be painted?", a: "Due to the harsh coastal environment, exterior trim and sun-facing walls generally need repainting every 5 to 7 years to prevent severe wood rot.", },
      { q: "Can you match my existing custom wall color?", a: "Yes, we utilize advanced color-matching technology to perfectly replicate any existing shade or match physical swatches from any designer brand." }
    ]
  },
  "hermosa-beach": {
    name: 'Hermosa Beach',
    title: 'Expert House Painters in Hermosa Beach | South Bay Home Painting',
    description: 'Upgrade your Hermosa Beach home with our clean, reliable, and premium painting services. Coastal exterior painting experts.',
    headline: 'Your Trusted Hermosa Beach Painting Experts',
    intro: 'Transform your Hermosa Beach property. We focus on professional preparation and premium paints to give your home a beautiful, long-lasting look that thrives in the coastal environment.',
    prepFocus: 'Hermosa Beach properties endure constant marine layer moisture closely followed by baking midday sun. This intense contraction and expansion of wood and stucco causes rapid cracking. We utilize high-grade elastomeric caulks and flexible primers that move with the home to prevent cracking.',
    typicalProjects: [
      'Coastal exterior repaints',
      'Rental property interior refreshes',
      'Deck and railing weatherproofing'
    ],
    neighborhoods: ['Hermosa Valley', 'Sand Section', 'East Hermosa'],
    faqs: [
      { q: "How long does exterior paint last in Hermosa Beach?", a: "With basic prep, 3-5 years. With our intensive coastal prep system, premium paints will last 7-10+ years depending on direct sun exposure." },
      { q: "Do you handle scaffolding for tall narrow homes?", a: "Yes. Many homes on the Strand or steep hills require complex staging. We handle all scaffolding and safety protocols." },
      { q: "Should I paint or stain my deck?", a: "Both have advantages, but near the ocean, solid stains often provide better long-term protection against UV and salt degradation compared to standard paint." },
      { q: "Do you provide free color consultations?", a: "Yes, we provide large draw-down samples so you can see exactly how the color looks on your walls in different lighting conditions before we start." }
    ]
  },
  "palos-verdes": {
    name: 'Palos Verdes',
    title: 'Luxury Estate Painters in Palos Verdes | South Bay Home Painting',
    description: 'We protect and refresh Palos Verdes estates with high-end interior, exterior, and fine-finish cabinet painting.',
    headline: 'Luxury Estate Painters in Palos Verdes',
    intro: 'Palos Verdes estates require meticulous attention to detail and absolute professionalism. We provide upscale interior, exterior, and fine-finish prep work that preserves and enhances the elegance of your home.',
    prepFocus: 'Palos Verdes estates often feature towering great rooms, extensive custom millwork, and large expanses of exterior stucco exposed to fierce hillside elements. Our prep requires massive interior scaffolding setups for high ceilings, and deep elastomeric patching for hillside settling cracks in exterior stucco.',
    typicalProjects: [
      'High-ceiling interior great room and entryways',
      'Extensive exterior stucco patching and full recoating',
      'Detailed library and custom shelving painting'
    ],
    neighborhoods: ['Palos Verdes Estates', 'Rolling Hills', 'Rancho Palos Verdes', 'Lunada Bay', 'Malaga Cove'],
    faqs: [
      { q: "Can you paint over old, dark wood paneling?", a: "Yes. We use high-adhesion shellac primers designed to completely block wood tannins from bleeding through, allowing us to turn dark wood into a pristine, bright modern finish." },
      { q: "Do you repair large stucco cracks caused by hillside settling?", a: "Yes, settling cracks are common in PV. We properly V-groove, fill with elastomeric patching compound, and match the existing texture perfectly." },
      { q: "Are you fully insured for high-value properties?", a: "Absolutely. We carry comprehensive liability and workers compensation insurance tailored for luxury residential work." },
      { q: "How do you handle painting 20-foot ceilings?", a: "We use professional interior scaffolding systems with rubberized wheels to protect your floors while safely reaching high areas." }
    ]
  },
  "el-segundo": {
    name: 'El Segundo',
    title: 'Residential House Painters in El Segundo | South Bay Home Painting',
    description: 'Reliable, premium residential painting in El Segundo. We bring quality updates and professional, clean crews to your door.',
    headline: 'Top-Rated House Painters in El Segundo',
    intro: 'We love serving the El Segundo community. From reviving historic craftsman homes to modernizing newer builds, our crew delivers exceptional quality and incredibly clean workspaces.',
    prepFocus: 'El Segundo features a beautiful mix of historic 1920s homes and modern constructions. Historic homes require extreme care with lead safety protocols, gentle sanding, and wood preservation techniques to maintain their original charm while giving them a flawless modern finish.',
    typicalProjects: [
      'Historic home exterior preservation and repainting',
      'Brightening outdated living spaces',
      'Wrought iron and fencing painting'
    ],
    neighborhoods: ['Downtown El Segundo', 'Smoky Hollow', 'The Hill', 'Center Street'],
    faqs: [
      { q: "Do you know how to handle older historic homes safely?", a: "Yes. We use specialized, gentle prep techniques to ensure the integrity of the original wood siding and trim is maintained while providing a beautiful new finish." },
      { q: "How soon can you start a project?", a: "We typically book 2 to 4 weeks out, but we can sometimes accommodate tighter timelines if you are preparing a house for the real estate market." },
      { q: "Will you power wash my house before painting?", a: "Always. Every exterior project begins with a deep, professional power wash to safely remove dirt, chalking, and salt air buildup." },
      { q: "Do I need to move my furniture?", a: "We ask that you move small fragile items. Our crew will handle moving heavy furniture to the center of the room and covering it completely." }
    ]
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
      {/* Hero Section */}
      <Hero 
        title={data.headline}
        subtitle={data.intro}
        primaryCtaText="Get a Free Estimate"
        bgImage="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      
      {/* Why Homes Here Need Different Prep */}
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
                Why {data.name} Homes Require Specialized Preparation
              </h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-gold)', marginBottom: '2rem' }}></div>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginBottom: '1.5rem' }}>
                {data.prepFocus}
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
                Most painters apply cheap paint over failing surfaces. We don’t. We diagnose the environment of your exact neighborhood and apply a rigid preparation standard to ensure the finish outlasts the elements.
              </p>
            </div>
            <div style={{ background: 'var(--color-offwhite)', padding: '2.5rem', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)' }}>
               <h3 style={{ marginBottom: '1rem', color: 'var(--color-navy)', fontSize: '1.5rem' }}>Typical Projects in {data.name}</h3>
               <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2', color: '#444' }}>
                 {data.typicalProjects.map((project, index) => (
                   <li key={index}>{project}</li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Matrix */}
      <section className="section bg-neutral" style={{ backgroundColor: 'var(--color-offwhite)' }}>
        <div className="container" style={{maxWidth: '1200px'}}>
          <h2 className="section-title">Comprehensive Painting Services for {data.name}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            
            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Interior Painting</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Clean lines, meticulous furniture protection, and striking modern colors to elevate your daily living spaces.</p>
              <Link href="/services/interior-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Interior Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Exterior Painting</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Deep power washing, intensive stucco/wood repair, and high-build coatings to guard against the elements.</p>
              <Link href="/services/exterior-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Exterior Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Cabinet Refinishing</h3>
              <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>Factory-smooth, sprayed urethane finishes that completely transform outdated kitchens for a fraction of a remodel cost.</p>
              <Link href="/services/cabinet-painting" style={{ color: 'var(--color-gold)', fontWeight: 'bold', textDecoration: 'underline' }}>Explore Cabinet Painting →</Link>
            </div>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
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
            {/* The user would normally place the <LeadForm /> component here, or a link to /contact. Since lead form is imported but we want a link to /contact or the form directly. */}
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block', fontSize: '1.2rem', padding: '1rem 3rem' }}>
              Schedule Walk-Through Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
