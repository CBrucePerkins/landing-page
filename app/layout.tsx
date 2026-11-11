import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Analytics from "@/components/Analytics";
import { WaitlistProvider } from "@/components/WaitlistContext";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://musios.io"),
  title: "MusiOS: Teach music, not admin",
  description:
    "Schedule lessons, assign practice, get paid and message students from one app on your phone. Your students get the app too.",
  openGraph: {
    title: "MusiOS: Teach music, not admin",
    description:
      "Schedule lessons, assign practice, get paid and message students from one app on your phone.",
    url: "https://musios.io",
    siteName: "MusiOS",
    images: ["/assets/Dashboard.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MusiOS: Teach music, not admin",
    description:
      "Schedule lessons, assign practice, get paid and message students from one app on your phone.",
    images: ["/assets/Dashboard.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
};

// Organization/WebSite structured data — kept to verifiable facts only
// (name, url, logo). Deliberately no SoftwareApplication/Offer schema yet:
// pricing is still shown as "Coming soon" with no live numbers, and
// fabricating price data in structured markup would be worse than omitting
// it. Add that once real prices are published.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "MusiOS",
      url: "https://musios.io",
      logo: "https://musios.io/assets/logo.png",
    },
    {
      "@type": "WebSite",
      name: "MusiOS",
      url: "https://musios.io",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </head>
      <body className={twMerge(dmSans.className, "antialiased")}>
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
