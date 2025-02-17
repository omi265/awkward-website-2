import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WebWindow from "@/components/WebWindow";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Awkward Studio",
  description: "Awkward Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bodyScroll ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WebWindow children={children} className="w-[80%]" />
      </body>
    </html>
  );
}
