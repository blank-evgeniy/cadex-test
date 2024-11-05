import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Some Copmany",
  description: "Some Company is...",
};

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
