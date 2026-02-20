import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yoro Portfolio",
  description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products that balance user needs and business goals. 3+ years of industry experience.",
  keywords: [
    "Ibrahim Memon",
    "Software Engineer",
    "UI/UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "WebHR Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Ibrahim Memon" }],
  creator: "Ibrahim Memon",
  publisher: "Ibrahim Memon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibiimemon.com",
    title: "Ibrahim Memon - Software Engineer & UI/UX Designer",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products.",
    siteName: "Ibrahim Memon Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Memon - Software Engineer & UI/UX Designer",
    description: "A self-taught UI/UX designer and Software Engineer at WebHR.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://ibiimemon.com" />
        {/* Favicon — replace /favicon.ico with your file in /public */}
        <link rel="icon" href="/logo/TabIcon.svg" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-blue-900 text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
