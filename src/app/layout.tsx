import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CursorGlow from "@/components/ui/CursorGlow";
import NavbarMenu from "@/components/ui/navbar-menu";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import Analytics from "./analytics";
import { GA_TRACKING_ID } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Badkas",
  description: "Portfolio website of Saurabh Badkas",
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Script
          id="ga-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <CursorGlow />
          <NavbarMenu />
          <Analytics />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}