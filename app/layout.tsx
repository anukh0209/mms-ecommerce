import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMS - The Future Is Electric",
  description: "MMS E-commerce - Professional electrical products supplier for Mining, Construction and Energy sector of Mongolia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
