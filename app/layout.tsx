import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Digitals | Digital Marketing Studio",
  description:
    "A motion-led digital marketing studio building sharper brands, cleaner funnels, and growth campaigns.",
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
