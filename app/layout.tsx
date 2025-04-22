import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Hub: Discover your Next Favorite Car",
  description: "Discover Your Next Favorite Car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
              <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                            <Navbar />
                            {children}
                            <Footer />
      </body>
    </html>
  );
}
