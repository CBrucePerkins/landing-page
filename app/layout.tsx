import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Analytics from "@/components/Analytics";
import { WaitlistProvider } from "@/components/WaitlistContext";
import { BETA_START } from "@/lib/beta";

const dmSans = DM_Sans({ subsets: ["latin"] });

// Search results show `title` and `description`; link previews (Facebook,
// Messenger, iMessage, Slack) show the openGraph/twitter versions with the
// image from app/opengraph-image.png and app/twitter-image.png. Lead with
// files and practice, the headline feature.
const SEARCH_TITLE = "MusiOS: The app for music teachers and their students";
const SHARE_TITLE = "MusiOS: Teach music, not admin";
const DESCRIPTION =
  "Give every practice item its own videos, play-alongs and sheet music. Schedule lessons, get paid and message students from one app. Students get the app too.";
const SHARE_DESCRIPTION = `Videos, play-alongs and sheet music for every practice item, plus scheduling, payments and messages. Closed beta for music teachers from ${BETA_START}.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://musios.io"),
  title: SEARCH_TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    url: "https://musios.io",
    siteName: "MusiOS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
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
