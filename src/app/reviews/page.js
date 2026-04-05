import Hero from '@/components/Hero';
import Link from 'next/link';

export const metadata = {
  title: 'Client Reviews | South Bay Home Painting',
  description: 'Read what South Bay homeowners have to say about our premium painting services.',
};

export default function ReviewsPage() {
  const reviews = [
    { name: "Sarah M.", city: "Redondo Beach", text: "The team was incredibly professional. They transformed our exterior, and the prep work was more thorough than any painter we've ever hired." },
    { name: "John D.", city: "Torrance", text: "We had our kitchen cabinets painted, and they look brand new. The finish is flawless and the process was exactly as described." },
    { name: "Emily R.", city: "Manhattan Beach", text: "Absolutely stunning work on our interior. They protected our floors, were very communicative, and left the house cleaner than they found it." },
  ];

  return (
    <>
      <Hero 
        title="What Our Clients Say"
        subtitle="Don't just take our word for it. Read reviews from homeowners across the South Bay."
      />
      <section className="section bg-white">
        <div className="container" style={{maxWidth: '1000px', margin: '0 auto'}}>
          <div style={{display: 'grid', gap: '2rem'}}>
            {reviews.map((rev, i) => (
              <div key={i} style={{padding: '2.5rem', background: 'var(--color-offwhite)', borderRadius: '8px', borderLeft: '4px solid var(--color-gold)'}}>
                <p style={{fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '1.5rem'}}>"{rev.text}"</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  <div style={{width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-navy)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}>{rev.name[0]}</div>
                  <div>
                    <h4 style={{margin: 0, color: 'var(--color-navy)'}}>{rev.name}</h4>
                    <span style={{fontSize: '0.9rem', color: '#666'}}>{rev.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{marginTop: '4rem', textAlign: 'center'}}>
            <h2 style={{marginBottom: '1rem'}}>Join our list of satisfied clients</h2>
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
