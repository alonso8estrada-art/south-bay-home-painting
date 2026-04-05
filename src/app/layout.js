import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "South Bay Home Painting | Premium Residential Painters in South Bay",
  description: "South Bay Home Painting provides premium interior, exterior, and cabinet painting for homeowners in Torrance and the South Bay. Free estimates.",
  openGraph: {
    title: 'South Bay Home Painting | Premium Residential Painters in South Bay',
    description: 'South Bay Home Painting provides premium interior, exterior, and cabinet painting for homeowners in Torrance and the South Bay. Free estimates.',
    url: 'https://southbayhomepainting.com',
    siteName: 'South Bay Home Painting',
    locale: 'en_US',
    type: 'website',
  },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'South Bay Home Painting',
    image: 'https://southbayhomepainting.com/logotransparent.png',
    '@id': 'https://southbayhomepainting.com',
    url: 'https://southbayhomepainting.com',
    telephone: '+13107041147',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Coastal Hwy',
      addressLocality: 'Torrance',
      addressRegion: 'CA',
      postalCode: '90505',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 33.8358,
      longitude: -118.3406
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '08:00',
      closes: '18:00'
    },
    sameAs: [
      'https://www.facebook.com/SouthBayHomePainting',
      'https://www.instagram.com/southbayhomepainting'
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// trigger vercel webhook
