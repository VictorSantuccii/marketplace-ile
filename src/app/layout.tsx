import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilê Conecta - Conectando saberes",
  description: "Ilê Conecta é uma plataforma de conexão entre pessoas e instituições que atuam na promoção da cultura afro-brasileira.",
  icons: {
    icon: "/ileconecta.png",
    apple: "/ileconecta.png",
    shortcut: "/ileconecta.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Ilê Conecta - Conectando saberes",
    description: "Ilê Conecta é uma plataforma de conexão entre pessoas e instituições que atuam na promoção da cultura afro-brasileira.",
    images: [
      {
        url: "/ileconecta.png",
        width: 1200,
        height: 630,
        alt: "Ilê Conecta",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ilê Conecta - Conectando saberes",
    description: "Ilê Conecta é uma plataforma de conexão entre pessoas e instituições que atuam na promoção da cultura afro-brasileira.",
    images: ["/ileconecta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}