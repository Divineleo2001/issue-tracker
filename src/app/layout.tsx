import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import TanstackProvider from "./providers/providers";
import { fontSans } from "@/fontConfig";

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
    <html lang="en" className={fontSans.variable}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-x-auto"
        )}
      >
     
        <Navbar />

        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
