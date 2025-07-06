import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aboah1994.github.io"),
  title: {
    default: "SMART Lab - Innovative Transportation Research At NDSU",
    template: "%s | SMART Lab - NDSU",
  },
  description:
    "Dedicated to pushing the boundaries of technology through cutting-edge research, collaborative partnerships, and mentoring the next generation of researchers in transportation systems.",
  keywords: [
    "transportation research",
    "smart cities",
    "autonomous vehicles",
    "machine learning",
    "computer vision",
    "big data analytics",
    "North Dakota State University",
    "NDSU",
    "SMART Lab",
    "Dr. Armstrong Aboah",
  ],
  authors: [{ name: "Prof. Armstrong Aboah" }],
  creator: "SMART Lab",
  publisher: "Prof. Aboah Armstrong",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aboah1994.github.io",
    siteName: "SMART Lab - NDSU",
    title: "SMART Lab - Innovative Transportation Research At NDSU",
    description:
      "Dedicated to pushing the boundaries of technology through cutting-edge research, collaborative partnerships, and mentoring the next generation of researchers.",
    images: [
      {
        url: "/ndsu-favicon.png",
        width: 1200,
        height: 630,
        alt: "SMART Lab - NDSU Transportation Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMART Lab - Innovative Transportation Research At NDSU",
    description:
      "Dedicated to pushing the boundaries of technology through cutting-edge research, collaborative partnerships, and mentoring the next generation of researchers.",
    images: ["/ndsu.png"],
    creator: "@armweak9",
  },
  icons: {
    icon: [
      { url: "/ndsu-favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/ndsu-favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/ndsu-favicon.png",
    apple: [{ url: "/ndsu-favicon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://aboah1994.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ResearchOrganization",
              name: "SMART Lab",
              alternateName:
                "Sustainable Mobility and Advanced Research in Transportation Lab",
              url: "https://aboah1994.github.io",
              logo: "https://aboah1994.github.io/ndsu.png",
              description:
                "Dedicated to pushing the boundaries of technology through cutting-edge research, collaborative partnerships, and mentoring the next generation of researchers.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
                addressRegion: "ND",
                addressLocality: "Fargo",
              },
              affiliation: {
                "@type": "Organization",
                name: "North Dakota State University",
              },
              founder: {
                "@type": "Person",
                name: "Dr. Armstrong Aboah",
                jobTitle: "Assistant Professor",
                worksFor: {
                  "@type": "Organization",
                  name: "North Dakota State University",
                },
              },
              sameAs: [
                "https://www.linkedin.com/in/armstrong-aboah-ph-d-5ab809142/",
                "https://github.com/aboah1994",
                "https://scholar.google.com/citations?user=Ev1PAAwAAAAJ&hl=en&oi=ao",
              ],
            }),
          }}
        />
      </head>
      <body className={`${bitter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
