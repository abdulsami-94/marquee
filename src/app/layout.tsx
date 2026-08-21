import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}