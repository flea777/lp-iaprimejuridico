  import type { Metadata } from "next";
  import { Geist, Geist_Mono, IBM_Plex_Serif, Inter } from "next/font/google";
  import "./globals.css";
  import { cn } from "@/lib/utils";

  const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
  });

  const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    variable: "--font-ibm-plex-serif",
    weight: ["400", "500", "600", "700"],
  });

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "Prime Jurídico",
    description: "Tráfego pago para escritórios de advocacia",
  };

  export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
      <html
        lang="pt-BR"
        className={cn(
          "h-full antialiased",
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          ibmPlexSerif.variable,
        )}
      >
        <body className="min-h-full flex flex-col bg-background">
          {children}
        </body>
      </html>
    );
  }