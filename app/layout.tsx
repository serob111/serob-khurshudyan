import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: `${profile.title}. ${profile.tagline}. Based in ${profile.location}.`,
  metadataBase: new URL("https://serob-khurshudyan.dev"),
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: `${profile.title}. ${profile.tagline}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-(--color-bg) text-(--color-fg) font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
