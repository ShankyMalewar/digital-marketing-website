import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AR Digitals | Creative Digital Marketing Agency",
  description:
    "AR Digitals bridges the gap between your business and your customers with social media marketing, Google Ads, branding, websites, content, and SEO.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
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
