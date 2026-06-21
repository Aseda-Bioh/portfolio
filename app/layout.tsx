import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk'
})

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo'
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nana Kwabena Aseda Bioh",
  description: "A full stack web developer with a passion for building scalable and efficient web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${archivo.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="fixed top-0 left-0 w-125 h-125 rounded-[50%] bg-cyan-500/20 blur-[120px] -z-10 pointer-events-none"></div>
        <div className="fixed bottom-0 right-0 w-125 h-125 rounded-[50%] bg-purple-500/20 blur-[120px] -z-10 pointer-events-none"></div>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
