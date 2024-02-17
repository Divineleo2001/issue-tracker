import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Auri Emergency ",
  description: "Application for the Hospital emergency system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.variable} >
      <body className={cn("min-h-screen bg-background font-sans antialiased overflow-x-auto")}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
