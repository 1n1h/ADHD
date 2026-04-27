import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClarityMD – ADHD Care, Built Around You",
  description:
    "Start your free ADHD assessment today. ClarityMD connects you with licensed providers for personalized care — discreetly, conveniently, and responsibly.",
  keywords:
    "ADHD telehealth, ADHD assessment, ADHD treatment online, licensed ADHD provider, ADHD care plan",
  openGraph: {
    title: "ClarityMD – ADHD Care, Built Around You",
    description:
      "Start your free ADHD assessment today. Connect with licensed providers for personalized ADHD care.",
    type: "website",
    siteName: "ClarityMD",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
