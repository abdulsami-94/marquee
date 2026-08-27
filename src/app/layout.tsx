import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/navigation/Navbar";
import { WatchlistProvider } from "@/context/WatchlistContext";

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
    <html lang="en">
      <body>
        <WatchlistProvider>
          <Navbar />
          {children}
        </WatchlistProvider>
      </body>
    </html>
  );
}