import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/app/globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "DealCart - Pakistan's Favorite Grocery App & Free Delivery",
  description: "Pakistan's Favorite Grocery App & Free Delivery",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; 
}>) { 
 return (
   <section className={`container ${poppins.variable} mx-auto md:px-0 mt-10`}>
     {children}
   </section>
  );
}