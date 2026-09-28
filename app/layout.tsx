import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/content/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaimesyvino.vercel.app"),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.subLine,
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.subLine,
    images: ["/images/headshot.jpg"],
  },
  twitter: {
    card: "summary",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.subLine,
    images: ["/images/headshot.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black dark:bg-black dark:text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
