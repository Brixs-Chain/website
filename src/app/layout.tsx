import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brixs Chain | Premium Blockchain Platform",
  description:
    "Brixs Chain is a premium blockchain platform with a single flagship landing page, strong color grading, and high-end motion.",
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
