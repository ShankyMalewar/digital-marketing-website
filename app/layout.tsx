import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Digitals",
  description: "Modern digital marketing agency website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}