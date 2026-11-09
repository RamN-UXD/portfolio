import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramamoorthy Narayanan — UX Designer & Product Specialist",
  description:
    "I turn ambiguous problems into products teams can build and users can trust. UX Design portfolio across B2B SaaS, e-commerce, and field workforce tools.",
  metadataBase: new URL("https://ramn-portfolio.vercel.app"),
  openGraph: {
    title: "Ramamoorthy Narayanan — UX Designer & Product Specialist",
    description:
      "I turn ambiguous problems into products teams can build and users can trust. UX Design portfolio across B2B SaaS, e-commerce, and field workforce tools.",
    url: "https://ramn-portfolio.vercel.app",
    siteName: "RamN Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://ramn-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ramamoorthy Narayanan — UX Designer & Product Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramamoorthy Narayanan — UX Designer & Product Specialist",
    description:
      "I turn ambiguous problems into products teams can build and users can trust. UX Design portfolio across B2B SaaS, e-commerce, and field workforce tools.",
    images: ["https://ramn-portfolio.vercel.app/og-image.jpg"],
  },
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
