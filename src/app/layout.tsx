import type { Metadata } from "next";
import { Inter, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

import { ThemeToggle } from "@/components/ThemeToggle";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finde",
  description: "Cari laptop yang cocok untukmu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value || "dark";
  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy bg-[#1f1e2e] dark:bg-gray-200 dark:text-black",
          inter.className
        )}
      >
        <ThemeToggle />

        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
