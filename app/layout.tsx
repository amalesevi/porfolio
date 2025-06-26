import "./globals.css";
import Head from 'next/head'
import { ReactNode } from "react";

export const metadata = {
  title: "Website Portfolio",
  description: "Portfolio Web Design",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      <link rel="icon" type="image/jpg" href="./images/favicon.jpg" />
    </Head>
      <body>{children}</body>
    </html>
  );
}