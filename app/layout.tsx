import type { Metadata, Viewport } from "next";
import "./globals.css";
import { contact } from "@/lib/data";

const SITE_DESCRIPTION =
  "Green Miles Travel & Tourism provides tour packages, hotel bookings, flight tickets, insurance, visa services, car rental, freight services, and personalized travel support in Lebanon.";

export const metadata: Metadata = {
  title: "Green Miles Travel & Tourism | Travel Support in Lebanon",
  description: SITE_DESCRIPTION,
  applicationName: "Green Miles Travel & Tourism",
  keywords: [
    "Green Miles",
    "Travel Agency Lebanon",
    "Tour Packages",
    "Hotel Bookings",
    "Flight Tickets",
    "Visa Services",
    "Travel Insurance",
    "Car Rental",
    "Freight Services",
    "Lebanon Tourism",
  ],
  authors: [{ name: "Green Miles Travel & Tourism" }],
  openGraph: {
    type: "website",
    title: "Green Miles Travel & Tourism | Travel Support in Lebanon",
    description: SITE_DESCRIPTION,
    siteName: "Green Miles Travel & Tourism",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Miles Travel & Tourism",
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f3d2e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: contact.business,
  description: SITE_DESCRIPTION,
  telephone: contact.phoneDisplay,
  areaServed: "Lebanon",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LB",
    addressLocality: "Lebanon",
  },
  sameAs: [contact.instagramHref, contact.facebookHref],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ivory-50 text-brand-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
