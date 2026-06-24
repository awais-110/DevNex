import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteUrl } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Techways | Full-Stack Agency",
    template: "Techways | %s",
  },
  description:
    "Techways builds websites, AI automation, brand identities, SEO, and digital marketing systems for growing businesses.",
  openGraph: {
    title: "Techways",
    description: "A Karachi software house for web, AI, design, SEO, and marketing.",
    url: siteUrl,
    siteName: "Techways",
    images: [{ url: "/og/home-og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techways",
    description: "Full-stack agency for web, AI, design, SEO, and marketing.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Link
          href="https://wa.me/923000000000"
          className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center border border-primary bg-primary text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:h-14 md:w-14"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        ) : null}
      </body>
    </html>
  );
}
