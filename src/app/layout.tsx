import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

import "antd/dist/reset.css";
import Providers from "@/utils/Provider";
// import Footer from "@/components/shared/footer/footer";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500', '600', '700'], // regular and bold
  variable: '--font-roboto', // optional if using Tailwind
});






export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}  antialiased`}
      >
        <Providers>    
        <div>
        <Toaster position="top-right" className="!fixed !top-4 !right-4 !w-auto !z-[100]" />
          {children}
          </div>
        </Providers> 
      </body>
    </html>
  );
}
