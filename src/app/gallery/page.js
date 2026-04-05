import Hero from '@/components/Hero';

export const metadata = {
  title: 'Project Gallery | South Bay Home Painting',
  description: 'View our portfolio of premium interior and exterior painting projects across the South Bay area.',
};

export default function GalleryPage() {
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
    </>
  );
}
