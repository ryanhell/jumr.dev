import "../styles/globals.css";
import { type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "T Savage LLC",
  description: "Construction Management & Manpower",
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
    <html lang="en">
      <body style={{ 
          backgroundImage: `url(${'./images/assets/diamonds.png'})`,
          backgroundRepeat: 'repeat',
        }}>
        <main className="container mx-auto flex-1 px-1 md:px-4 backdrop-blur-3">
          {children}
        </main>
        <Analytics /> 
      </body>
    </html>
  );
}
