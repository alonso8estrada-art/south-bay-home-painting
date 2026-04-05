import Hero from '@/components/Hero';

export const metadata = {
  title: 'Project Gallery | South Bay Home Painting',
  description: 'View our portfolio of premium interior and exterior painting projects across the South Bay area.',
};

export default function GalleryPage() {
  const images = [
    "/gallery/port_1_kitchen.png",
    "/gallery/port_2_living.png",
    "/gallery/port_3_exterior.png",
    "/gallery/port_4_bedroom.png",
    "/gallery/port_5_stucco.png",
    "/gallery/port_6_cabinets.png",
    "/gallery/port_7_dining.png",
    "/gallery/port_8_outside.png",
    "/gallery/port_9_stairs.png",
    "/gallery/port_10_bathroom.png",
    "/gallery/port_11_interior.png",
    "/gallery/port_12_exterior.png"
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
