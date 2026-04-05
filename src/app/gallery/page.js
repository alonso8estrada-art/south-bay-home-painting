import Hero from '@/components/Hero';

export const metadata = {
  title: 'Project Gallery | South Bay Home Painting',
  description: 'View our portfolio of premium interior and exterior painting projects across the South Bay area.',
};

export default function GalleryPage() {
  const transformations = [
    {
      title: "Kitchen Cabinet Refinishing",
      before: "/gallery/t_kitchen_before.png",
      after: "/gallery/t_kitchen_after.png"
    },
    {
      title: "Exterior Stucco Refresh",
      before: "/gallery/t_stucco_before.png",
      after: "/gallery/t_stucco_after.png"
    },
    {
      title: "Living Room Modernization",
      before: "/gallery/t_living_before.png",
      after: "/gallery/t_living_after.png"
    },
    {
      title: "Master Bedroom Upgrade",
      before: "/gallery/t_bedroom_before.png",
      after: "/gallery/t_bedroom_after.png"
    },
    {
      title: "Bathroom Vanity Painting",
      before: "/gallery/t_bathroom_before.png",
      after: "/gallery/t_bathroom_after.png"
    },
    {
      title: "Trim & Accent Walls",
      before: "/gallery/t_trim_before.png",
      after: "/gallery/t_trim_after.png"
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Clean Interior
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // High End Exterior
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Custom Cabinets
    "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Luxury Bedroom
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Coastal Exterior
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Clean Trim Living Room
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Dining Room
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", // Bathroom
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"  // Modern Architecture
  ];

  return (
    <>
      <Hero 
        title="Our Portfolio"
        subtitle="A look at some of our recent transformations in Torrance, Redondo Beach, and beyond."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />
      <section className="section bg-white">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
            {images.map((img, i) => (
              <div key={i} style={{height: '300px', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)'}}>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-neutral" style={{ backgroundColor: 'var(--color-offwhite)', borderTop: '1px solid var(--color-neutral)' }}>
        <div className="container">
          <h2 className="section-title">Before & After Transformations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
            {transformations.map((item, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <h3 style={{ padding: '1.5rem', margin: 0, textAlign: 'center', backgroundColor: 'var(--color-navy)', color: 'white', fontSize: '1.2rem', letterSpacing: '1px' }}>
                  {item.title}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                  
                  {/* Before */}
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', zIndex: 2, fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Before
                    </div>
                    <div style={{ height: '350px', backgroundImage: `url(${item.before})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  </div>

                  {/* After */}
                  <div style={{ position: 'relative', borderLeft: '4px solid var(--color-gold)' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-gold)', color: 'var(--color-navy)', padding: '0.5rem 1rem', borderRadius: '4px', zIndex: 2, fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      After
                    </div>
                    <div style={{ height: '350px', backgroundImage: `url(${item.after})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
