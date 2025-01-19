import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProviders from "@/components/providers/AppProviders";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ScrapeFlow",
  description:
    "ScrapeFlow is a powerful SaaS application, allow users to visually build and execute web scraping workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/sign-in"}
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-primary hover:bg-primary/90 text-sm !shadow-none",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <AppProviders>{children}</AppProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
