import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netaniasferreira.vercel.app"),
  title: {
    default: "Netanias Ferreira — Copywriter Estrategista",
    template: "%s | Netanias Ferreira",
  },
  description:
    "Copywriter estrategista para mentores e infoprodutores de alto ticket. Reescrevo a copy do seu funil para parar de perder leads qualificados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
