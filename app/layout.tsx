import "../styles/globals.css";
import { type ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';
import { Roboto } from 'next/font/google';
import Footer from 'components/footer'

const fontser = Roboto({
  subsets: ["latin"],
  weight: ['700','900'],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "T Savage LLC",
  description: "Count us In! Commercial & Residential Preplanning, Construction Management, Skilled Labor",
  icons: [{ url: "/favicon.ico" }],
  openGraph: {
    images: [{ url: "/og-image" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/og-image" }],
  },
};



export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontser.className}>
      <body style={{ 
          backgroundImage: `url(${'./images/assets/diamonds.png'})`,
          backgroundRepeat: 'repeat',
        }}>
        <main className="container mx-auto flex-1 px-1 md:px-4 backdrop-blur-3">
          {children}
        </main>
        <Analytics /> 
        <Footer></Footer>
      </body>
    </html>
  );
}
