import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Talez",
  description: "Brain for your app's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
