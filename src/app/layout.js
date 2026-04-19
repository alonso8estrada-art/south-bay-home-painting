import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  metadataBase: new URL('https://www.southbayhomepainting.com'),
  title: {
    default: "House Painting in South Bay, CA | South Bay Home Painting",
    template: "%s | South Bay Home Painting",
  },
  description: "Premium interior & exterior house painting for South Bay homeowners. Serving Torrance, Manhattan Beach, Redondo Beach, Hermosa Beach, Palos Verdes & El Segundo. Licensed #1109637, insured. Free estimate.",
  openGraph: {
    title: 'House Painting in South Bay, CA — Premium Results, Licensed & Insured',
    description: 'South Bay Home Painting delivers flawless interior, exterior & cabinet painting for homes in Torrance, Manhattan Beach, Redondo Beach & Palos Verdes. 3-Year No-Peel Guarantee.',
    url: 'https://www.southbayhomepainting.com',
    siteName: 'South Bay Home Painting',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/logotransparent.png', width: 1200, height: 630, alt: 'South Bay Home Painting — Premium Residential Painters in South Bay, CA' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Painting in South Bay, CA | South Bay Home Painting',
    description: 'Premium interior, exterior & cabinet painting for South Bay homeowners. Licensed #1109637. Free estimate.',
    images: ['/logotransparent.png'],
  },
  alternates: { canonical: 'https://www.southbayhomepainting.com/' },
  robots: { index: true, follow: true },
  verification: {
    google: 'dLs4jjiaW6GRYVZSepBvjcWnwCauTT2lHTATJHwiaFw',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: 'South Bay Home Painting',
    image: 'https://www.southbayhomepainting.com/logotransparent.png',
    '@id': 'https://www.southbayhomepainting.com',
    url: 'https://www.southbayhomepainting.com',
    telephone: '+13107041147',
    email: 'info@southbayhomepainting.com',
    address: { '@type': 'PostalAddress', addressLocality: 'Torrance', addressRegion: 'CA', postalCode: '90505', addressCountry: 'US' },
    geo: { '@type': 'GeoCoordinates', latitude: 33.8358, longitude: -118.3406 },
    areaServed: [
      { '@type': 'City', name: 'Torrance' },
      { '@type': 'City', name: 'Redondo Beach' },
      { '@type': 'City', name: 'Manhattan Beach' },
      { '@type': 'City', name: 'Hermosa Beach' },
      { '@type': 'City', name: 'Palos Verdes Estates' },
      { '@type': 'City', name: 'El Segundo' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Interior House Painting', url: 'https://www.southbayhomepainting.com/services/interior-painting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Exterior House Painting', url: 'https://www.southbayhomepainting.com/services/exterior-painting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cabinet Painting', url: 'https://www.southbayhomepainting.com/services/cabinet-painting' } },
      ],
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '3', bestRating: '5', worstRating: '1' },
    review: [
      { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Michael T.' }, reviewBody: 'They completely transformed the exterior of our Palos Verdes home. The crew was incredibly clean, respectful, and the final finish is absolutely flawless.' },
      { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'Sarah J.' }, reviewBody: 'We hired South Bay Home Painting to redo our kitchen cabinets. They look like they came straight from the factory. Saved us thousands on a remodel!' },
      { '@type': 'Review', reviewRating: { '@type': 'Rating', ratingValue: '5' }, author: { '@type': 'Person', name: 'David R.' }, reviewBody: 'Communication was a 10/10. Showed up exactly on time every day, cleaned up their workspace, and the interior cut-ins on our trim are perfectly straight.' },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '07:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '15:00' },
    ],
    hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'California Contractor License #1109637' },
    sameAs: ['https://www.facebook.com/SouthBayHomePainting', 'https://www.instagram.com/southbayhomepainting'],
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
