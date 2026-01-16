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
  title: "Tej Pratap Singh - Product Engineer & Strategist",
  description: "Product-minded engineer operating at the intersection of strategy, analytics, and automation. Turning messy data into scalable systems and measurable growth.",
  keywords: ["Product Manager", "Engineer", "Strategy", "Analytics", "Automation", "Data Science"],
  authors: [{ name: "Tej Pratap Singh" }],
  openGraph: {
    title: "Tej Pratap Singh - Product Engineer & Strategist",
    description: "Product-minded engineer operating at the intersection of strategy, analytics, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
