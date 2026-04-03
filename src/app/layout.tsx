import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "For Product Teams – RevenueCat",
  description:
    "RevenueCat for product managers: design paywalls, run A/B testing experiments, and ship monetization changes — no engineering sprint required.",
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "For Product Teams – RevenueCat",
    description:
      "Design paywalls, run A/B tests, and ship monetization changes — no engineering sprint required. Built for product managers.",
    url: "https://www.revenuecat.com/for-product/",
    siteName: "RevenueCat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Product Teams – RevenueCat",
    description:
      "Design paywalls, run A/B tests, and ship monetization changes — no engineering sprint required.",
  },
  alternates: {
    canonical: "https://www.revenuecat.com/for-product/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
