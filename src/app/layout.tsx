"use client";
import "@/app/globals.css"
import { Poppins, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import useLenis from "@/hooks/useLenis";
import CustomCursor from "@/components/CustomCursor"; 

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${poppins.variable} ${manrope.variable} bg-black text-white`}>
        <CustomCursor /> 
        <Navbar/>
        {children}
       <Footer/>
      </body>
    </html>
  );
}
