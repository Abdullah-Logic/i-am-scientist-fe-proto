import React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "react-toastify/dist/ReactToastify.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";
import ClientLayoutShell from "./ClientLayoutShell";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Pacifico = localFont({
  src: "./fonts/PacificoRegular-BXvV.ttf",
  variable: "--font-pacifico",
  weight: "100 900",
});
const SparkyStones = localFont({
  src: "./fonts/SparkyStonesRegular-BW6ld.ttf",
  variable: "--font-sparkystones",
  weight: "100 900",
});
const Croissant = localFont({
  src: "./fonts/CroissantOne-Regular.otf",
  variable: "--font-geist-croissant",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default:
      "AI Content & AI Course for Kids | Fun & Engaging Learning for Children",
    template: "%s | AI Content & Learning",
  },
  description:
    "Unlock your child's potential with our AI Content and AI Course for Kids. Explore fun, interactive lessons designed to make artificial intelligence easy and exciting for young learners!",
  alternates: {
    canonical: "https://iamscientist.ai",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "glsAjRscZ_lRQgWSrF9MXcS4WlRPRL-_TyKijHWji1c",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Pacifico.variable} ${SparkyStones.variable} ${Croissant.variable} antialiased`}
      >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3WT9VPQE0V"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3WT9VPQE0V');
          `}
        </Script>
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
