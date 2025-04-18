import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "antd/dist/reset.css";
import Footer from "@/components/shared/footer/footer";
import Navbar from "@/components/shared/navber/navber";
import Providers from "@/utils/Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>   
        <Navbar />
         {/* <NavbarMenu/> */}
        <div className="px-3">{children}</div>
        <Footer/>
        </Providers>  
      </body>
    </html>
  );
}
