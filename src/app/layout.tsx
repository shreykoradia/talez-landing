import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Head from "next/head";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Talez",
  description: "a brain for your apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
