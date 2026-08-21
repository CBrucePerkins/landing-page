import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://musios.io"),
  title: "MusiOS — Teach Music, Not Admin",
  description:
    "MusiOS is the all-in-one platform for music teachers to manage students, lessons, practice, and payments — all in one place.",
  openGraph: {
    title: "MusiOS — Teach Music, Not Admin",
    description:
      "The all-in-one platform for music teachers to manage students, lessons, practice, and payments — all in one place.",
    url: "https://musios.io",
    siteName: "MusiOS",
    images: ["/assets/Dashboard.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MusiOS — Teach Music, Not Admin",
    description:
      "The all-in-one platform for music teachers to manage students, lessons, practice, and payments — all in one place.",
    images: ["/assets/Dashboard.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased")}>
        <div className="bg-black text-white p-3 text-sm text-center cursor-pointer">
          <span className="hidden sm:inline pr-2 opacity-80">
            The all-in-one platform for music teachers to manage students, lessons, practice, and payments — all in one place.
          </span>
          <span className="pr-1">
            Get started for free <FaArrowRight className="inline h-2 w-2" />
          </span>
        </div>
        {children}
      </body>
    </html>
  );
}
