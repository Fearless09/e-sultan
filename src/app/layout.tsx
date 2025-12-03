import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Sultan - Premium Fitness & Wellness",
  description:
    "Transform your body and mind with E-Sultan. State-of-the-art facilities, expert trainers, and personalized fitness programs. Join our elite fitness community today.",
  keywords:
    "gym, fitness, online coaching, personal training, weight loss, muscle building, Philippines",
  authors: [{ name: "E-Sultan Fitness" }],
  openGraph: {
    title: "E-Sultan Fitness | Transform Your Body",
    description:
      "Physical gym + Online coaching. Free trial available. Certified coaches, proven results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <section className="flex min-h-dvh flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
