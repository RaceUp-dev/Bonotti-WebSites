import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://boulangerie-bonotti.fr'),
  title: {
    default: 'Boulangerie Bonotti | Artisan Boulanger-Pâtissier à Lumes',
    template: '%s | Boulangerie Bonotti'
  },
  description: 'Boulangerie artisanale Bonotti à Lumes (08440). Pains traditionnels, viennoiseries, pâtisseries faites maison. Savoir-faire artisanal depuis des générations. 12 Grande rue, Lumes.',
  keywords: [
    'boulangerie Lumes',
    'boulangerie Bonotti',
    'artisan boulanger Ardennes',
    'pâtisserie Lumes',
    'pain artisanal 08440',
    'viennoiseries Charleville',
    'gâteau anniversaire Ardennes',
    'boulangerie traditionnelle',
    'pâtissier Lumes',
    'croissant artisanal'
  ],
  authors: [{ name: 'Boulangerie Bonotti' }],
  creator: 'Boulangerie Bonotti',
  publisher: 'Boulangerie Bonotti',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://boulangerie-bonotti.fr',
    siteName: 'Boulangerie Bonotti',
    title: 'Boulangerie Bonotti | Artisan Boulanger-Pâtissier à Lumes',
    description: 'Boulangerie artisanale à Lumes. Pains traditionnels, viennoiseries et pâtisseries faites maison avec passion.',
    images: [
      {
        url: '/asset/Belle Facade.webp',
        width: 1200,
        height: 630,
        alt: 'Boulangerie Bonotti - Façade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boulangerie Bonotti | Artisan Boulanger à Lumes',
    description: 'Boulangerie artisanale à Lumes. Pains traditionnels, viennoiseries et pâtisseries faites maison.',
    images: ['/asset/Belle Facade.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  alternates: {
    canonical: 'https://boulangerie-bonotti.fr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="geo.region" content="FR-08" />
        <meta name="geo.placename" content="Lumes" />
        <meta name="geo.position" content="49.7431;4.7833" />
        <meta name="ICBM" content="49.7431, 4.7833" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Schema.org JSON-LD pour le SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Boulangerie Bonotti",
              "image": "https://boulangerie-bonotti.fr/asset/Belle Facade.webp",
              "url": "https://boulangerie-bonotti.fr",
              "telephone": "+33324572976",
              "email": "laurent.bonotti@orange.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "12 Grande rue",
                "addressLocality": "Lumes",
                "postalCode": "08440",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.7431,
                "longitude": 4.7833
              },
              "priceRange": "€",
              "servesCuisine": ["Boulangerie", "Pâtisserie", "Viennoiserie"],
              "sameAs": [
                "https://www.facebook.com/profile.php?id=100054585604399"
              ],
              "hasMap": "https://maps.app.goo.gl/7BZEgmr6gAkZMRLL8"
            })
          }}
        />
      </body>
    </html>
  )
}
