import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteMetadata } from "@/content/services";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://deltiveengineering.com";
const siteDescription =
  "Deltive Engineering is a Ghent-based product design and engineering studio for strategy, industrial design, mechanical engineering, prototyping and manufacturing support.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Deltive Engineering",
    default: "Deltive Engineering | Product Design and Engineering Studio",
  },
  description: siteDescription,
  applicationName: "Deltive Engineering",
  authors: [{ name: "Deltive Engineering", url: siteUrl }],
  creator: "Deltive Engineering",
  publisher: "Deltive Engineering",
  category: "Product design and engineering",
  keywords: [
    "Deltive Engineering",
    "Deltive",
    "product development",
    "product design",
    "industrial design",
    "mechanical engineering",
    "prototyping",
    "manufacturing support",
    "engineering studio Ghent",
    "hardware development Belgium",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deltive Engineering | Product Design and Engineering Studio",
    description: siteDescription,
    url: siteUrl,
    siteName: "Deltive Engineering",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/scraped/image-00.jpg",
        width: 1200,
        height: 630,
        alt: "Deltive Engineering product development studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deltive Engineering | Product Design and Engineering Studio",
    description: siteDescription,
    images: ["/images/scraped/image-00.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: "Deltive Engineering",
  alternateName: "Deltive",
  url: siteUrl,
  logo: `${siteUrl}/images/brand_assets/logo/Logo_icon.png`,
  image: `${siteUrl}/images/scraped/image-00.jpg`,
  description: siteDescription,
  email: siteMetadata.email,
  telephone: siteMetadata.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ghent",
    addressCountry: "BE",
  },
  sameAs: [siteMetadata.socials.instagram, siteMetadata.socials.linkedin],
  areaServed: ["Belgium", "Europe"],
  knowsAbout: [
    "Product development",
    "Industrial design",
    "Mechanical engineering",
    "Prototyping",
    "Manufacturing support",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
