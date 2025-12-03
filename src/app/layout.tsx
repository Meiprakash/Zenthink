import type { Metadata } from "next";
import {  Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Zenthink | Innovative IT Solutions",
  description: "Innovative IT Solutions for Your Business Growth",
  metadataBase: new URL("https://www.zenthink.in"),
  openGraph: {
    title: "Zenthink",
    description: "Innovative IT Solutions for Your Business Growth",
    url: "https://www.zenthink.in",
    type: "website",
    images: [
      "/og-image.png", 
    ],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
