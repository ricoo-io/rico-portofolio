import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import MusicPlayer from "../components/MusicPlayer";
import ParticleEffect from "../components/ParticleEffect";
import Footer from "../components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deric's Portofolio",
  description: "Web Portofolio by Deric Navino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${jakarta.variable} antialiased`}
      >
        <Navbar />
        <MusicPlayer />
        <Footer />
        <ParticleEffect type="snow" count={60} cursorEffect={true} />
        {children}
      </body>
    </html>
  );
}
