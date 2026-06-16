import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import WebWindow from "@/components/WebWindow";
import Head from "next/head";
import { ThemeProvider } from "@/lib/ThemeContext";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Awkward Studio",
  description: "Awkwardingly Unique, and Brilliantly Effective. Crafting Digital Solutions that don’t just work, they Stand Out.",
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
          content="Awkwardly Unique, and Brilliantly Effective. Crafting Digital Solutions that don’t just work, they Stand Out."
        />
        <meta property="og:title" content="Awkward Studio" />
        <meta
          property="og:description"
          content="Awkwardly Unique, and Brilliantly Effective. Crafting Digital Solutions that don’t just work, they Stand Out."
        />
        <meta property="og:image" content="./favicon.ico" />
        <meta property="og:url" content="https://www.awkwardstudio.in/" />
        <link rel="canonical" href="https://www.awkwardstudio.in/" />
      </Head>
      {/* Google Tag (gtag.js) scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-17028454912"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17028454912');
          `,
        }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17193759007"
        strategy="afterInteractive"
      />
      <Script
        id="google-ads-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17193759007');
          `,
        }}
      />
      {/* End Google Tag (gtag.js) scripts */}
      <body
        className={`bodyScroll ${playfair.variable} ${plusJakarta.variable} ${geistSans.variable} antialiased bg-black overscroll-none`}
      >
        <ThemeProvider>
          <SmoothScroll>
            <CustomCursor />
            <div className="noise-overlay" />
            <WebWindow children={children} className="w-[80%]" />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

