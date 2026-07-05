import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brixs Chain | The Zero-Gas, High-Performance Layer 2",
  description: "Brixs Chain is an institutional-grade, zero-gas ZK-Rollup Layer 2 blockchain designed for mass adoption. Build dApps seamlessly with native Account Abstraction and instant finality.",
  keywords: "blockchain, web3, layer 2, zero gas, account abstraction, ZK rollup, Brixs, Brixs Chain, DPoS, crypto",
  openGraph: {
    title: "Brixs Chain | Zero-Gas L2",
    description: "The scalable, zero-gas ZK-Rollup for the next billion users.",
    url: "https://www.brixs.space",
    siteName: "Brixs Chain",
    images: [{ url: "/full_logo_black_on_white.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brixs Chain | Zero-Gas L2",
    description: "The scalable, zero-gas ZK-Rollup for the next billion users.",
    images: ["/full_logo_black_on_white.png"],
  },
  metadataBase: new URL("https://www.brixs.space"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#000000] dark:text-[#f4f1ea] antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
