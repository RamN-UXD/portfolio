import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RamN - Portfolio",
  description: "RamN — UX design portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Favicon — explicit links override browser cache reliably */}
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-circle.png?v=2" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon-circle.png?v=2" />
        <link rel="shortcut icon" href="/favicon-circle.png?v=2" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css" />
      </head>
      <body className="bg-[#080810] text-[#FAFAFA] antialiased">
        {children}
      </body>
    </html>
  );
}
