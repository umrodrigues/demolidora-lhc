import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Demolidora LHC - Demolição e Construção",
  description: "A Demolidora LHC entrega mais do que um serviço, entrega confiança e qualidade. Especializada em demolição e construção.",
  keywords: "demolição, construção, terraplanagem, escavação, Porto Alegre, RS",
  authors: [{ name: "Demolidora LHC" }],
  creator: "Demolidora LHC",
  publisher: "Demolidora LHC",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://demolidora-lhc.vercel.app",
    title: "Demolidora LHC - Demolição e Construção",
    description: "A Demolidora LHC entrega mais do que um serviço, entrega confiança e qualidade. Especializada em demolição e construção.",
    siteName: "Demolidora LHC",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Demolidora LHC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demolidora LHC - Demolição e Construção",
    description: "A Demolidora LHC entrega mais do que um serviço, entrega confiança e qualidade. Especializada em demolição e construção.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
