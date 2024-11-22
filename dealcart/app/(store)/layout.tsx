import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import Footer from "@/components/Footer";
import { SanityLive } from "@/sanity/lib/live";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
    <body className={poppins.variable}>
      {/* Wrap only necessary components in ClerkProvider */}
      <ClerkProvider>
        <SidebarProvider >
          <AppSidebar />
          <main className="basis-full"> 
           
            <Header />
            {children}
            <Footer />
            <SanityLive />
          </main>
        </SidebarProvider>
      </ClerkProvider>
    </body>
  </html>
  );
}