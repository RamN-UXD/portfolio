import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
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
