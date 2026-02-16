import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carmen Montano for State Senate 2026 | District 10",
  description:
    "Carmen Montano is running for California State Senate District 10 to fight for affordable housing, public safety, quality education, and economic opportunity for every family.",
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
    title: "Carmen Montano for State Senate 2026",
    description:
      "A community leader fighting for affordable housing, safer neighborhoods, and quality education in District 10.",
    type: "website",
    locale: "en_US",
    siteName: "Carmen Montano for Senate 2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carmen Montano for State Senate 2026",
    description:
      "A community leader fighting for affordable housing, safer neighborhoods, and quality education in District 10.",
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
