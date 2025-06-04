import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import WebWindow from "@/components/WebWindow";
import Head from "next/head";
import Script from "next/script";

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
      <Head>
        <link
          rel="icon"
          type="image/ico"
          sizes="48x48"
          href="./favicon.ico"
        ></link>
        <meta
          name="description"
          content="Awkwardly Uniqe, and Brilliantly Effective. Crafting Digital Solutions that don’t just work, they Stand Out."
        />
        <meta property="og:title" content="Awkward Studio" />
        <meta
          property="og:description"
          content="Awkwardly Uniqe, and Brilliantly Effective. Crafting Digital Solutions that don’t just work, they Stand Out."
        />
        <meta property="og:image" content="./favicon.ico" />
        <meta property="og:url" content="https://www.awkwardstudio.in/" />
        <link rel="canonical" href="https://www.awkwardstudio.in/" />

        {/* Google Tag (gtag.js) scripts */}
        {/* Script for loading the gtag.js library */}
        <Script
          strategy="afterInteractive" // Recommended for analytics to not block rendering
          src="https://www.googletagmanager.com/gtag/js?id=AW-17028454912"
        />
        {/* Inline script for initializing gtag and sending page views */}
        <Script
          id="google-analytics" // Unique ID for this script
          strategy="afterInteractive" // Loads after the page is interactive
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17028454912');
          `,
          }}
        />
        {/* End Google Tag (gtag.js) scripts */}
      </Head>
      <body
        className={`bodyScroll ${geistSans.variable} ${geistMono.variable} antialiased bg-black overscroll-none`}
      >
        <WebWindow children={children} className="w-[80%]" />
      </body>
    </html>
  );
}
