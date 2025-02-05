import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Coin Convert",
  description: "Online P2P platform for virtual assets trading",
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
        <div className="flex flex-col justify-between items-center justify-items-center min-h-screen pb-10 sm:pb-10 font-[family-name:var(--font-geist-sans)]">
          <header className="flex justify-center w-full h-26 px-8 py-6">
            <div className="container flex justify-start">
              <Link href={'./'}>
                <div className="flex flex-col items-center gap-0">
                  <div className=" h-12 w-12 relative">
                    <Image src={'/logo-icon.png'} objectFit="contain" fill alt='logo'/>
                  </div>
                  <div className="h-6 w-40 relative">
                    <Image src={'/logo-text.png'} objectFit="contain" fill alt='Cyber Coin Convert'/>
                  </div>
                </div>
              </Link>
        </div>
          </header>
          <main className="flex flex-col items-center sm:items-start w-full">
            {children}
          </main>
          <footer className="flex flex-col gap-6 flex-wrap items-center justify-center pt-10">
        <div className="flex gap-8 flex-wrap items-center justify-center mb-3">
          <Link href={'./terms-n-conditions'}>Terms and Conditions</Link>
          <Link href={'./privacy-policy'}>Privacy Policy</Link>
          <Link href={'./contacts'}>Contacts</Link>
       </div>
       <div>
       <div className="flex flex-col items-center gap-0 mb-4">
          <div className=" h-10 w-10 relative">
            <Image src={'/logo-icon.png'} objectFit="contain" fill alt='logo'/>
          </div>
          <div className="h-4 w-36 relative">
            <Image src={'/logo-text.png'} objectFit="contain" fill alt='Cyber Coin Convert'/>
          </div>
        </div>
        <p className=" text-sm">Copyright © 2025, Cyber Coin Convert.</p>
       </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
