import type { Metadata } from "next";
import "./globals.css";

const siteBasePath = "/carmen-montano-senate-website";
const siteUrl = `https://jackson-p-peterson.github.io${siteBasePath}`;
const socialImagePath = `${siteBasePath}/images/share-card.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL("https://jackson-p-peterson.github.io"),
  title: "Carmen Montano for State Senate District 10",
  description:
    "District 10 is at a turning point. Meet Carmen Montano's plan for safer neighborhoods, affordable housing, strong public schools, and a more affordable future.",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Carmen Montano",
    "State Senate",
    "District 10",
    "California",
    "2026",
    "Senate District 10",
    "Fremont",
    "Hayward",
    "Union City",
    "Milpitas",
    "Newark",
    "San Jose",
    "affordable housing",
    "public safety",
    "education",
    "East Bay",
  ],
  openGraph: {
    title: "District 10 is at a turning point. Meet Carmen Montano.",
    description:
      "Explore Carmen Montano's plan for safer neighborhoods, affordable housing, strong schools, and real accountability in Sacramento.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Carmen Montano for Senate 2026",
    images: [
      {
        url: socialImagePath,
        width: 1200,
        height: 630,
        alt: "Carmen Montano for State Senate District 10",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "District 10 is at a turning point. Meet Carmen Montano.",
    description:
      "See Carmen Montano's plan for safer neighborhoods, affordable housing, and strong public schools in District 10.",
    images: [socialImagePath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#1B2A4A" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
