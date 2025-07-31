import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AhamAI - Minimalistic AI Chat",
  description: "A beautiful, minimalistic AI chat interface with advanced features",
  keywords: ["AI", "Chat", "AhamAI", "Artificial Intelligence", "Assistant"],
  authors: [{ name: "AhamAI Team" }],
  creator: "AhamAI",
  publisher: "AhamAI",
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
