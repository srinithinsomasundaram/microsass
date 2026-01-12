import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#144B2A",
};

export const metadata: Metadata = {
  title: "MicroSaaS Free Webinar | Build & Monetize with AI",
  description: "Join Srinithin Somasundaram's free 3-hour live webinar to learn how to build, deploy, and monetize a MicroSaaS product alongside your job.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: "MicroSaaS Isn't Hype. It's Money.",
    description: "Discover the secrets to MicroSaaS success - Join our free live webinar.",
    images: [{ url: '/srinithin.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MicroSaaS Isn't Hype. It's Money.",
    description: "Join the MicroSaaS Free Live Webinar.",
    images: ['/srinithin.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
