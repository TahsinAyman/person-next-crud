import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Toaster } from "@/components/ui/sonner";
import Confirmation from "./components/confirmation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD",
  description: "Author: Tahsin Ayman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Toaster />
        <Confirmation />
      </body>
    </html>
  );
}
