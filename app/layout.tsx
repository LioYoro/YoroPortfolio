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
  description: "Personal portfolio website for Yoro, showcasing projects, skills, and experience.",
  keywords: [
    "Yoro",
    "Portfolio",
    "Web Developer",
    "Designer",
    "Next.js",
    "React",
    "Frontend",
    "Personal Website",
  ],
  authors: [{ name: "Yoro" }],
  creator: "Yoro",
  publisher: "Yoro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoro-portfolio.vercel.app",
    title: "Yoro Portfolio",
    description: "Personal portfolio website for Yoro, showcasing projects, skills, and experience.",
    siteName: "Yoro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoro Portfolio",
    description: "Personal portfolio website for Yoro, showcasing projects, skills, and experience.",
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
        <link rel="canonical" href="https://yoro-portfolio.vercel.app" />
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
