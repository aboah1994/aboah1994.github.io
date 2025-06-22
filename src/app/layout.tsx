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
  title: "Aboah Armstrong",
  description: "Associate Professor @ North Dakota State University",
  icons: {
    icon: [{ url: "/aboah.png", type: "image/png" }],
    shortcut: "/aboah.png",
    apple: "/aboah.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bitter.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
