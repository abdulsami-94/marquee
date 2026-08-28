import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/navigation/Navbar";
import { WatchlistProvider } from "@/context/WatchlistContext";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "MovieApp",
  description: "A movie discovery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <WatchlistProvider>
          <Navbar />
          {children}
        </WatchlistProvider>
      </body>
    </html>
  );
}