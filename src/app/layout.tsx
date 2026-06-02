import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jacobfernandez.dev"),
  title: "Jacob Fernandez | Game Programmer",
  description:
    "Game Programmer & Software Engineer specializing in C++, Unreal Engine 5, Unity, and OpenGL. MFA candidate at the University of the Incarnate Word.",
  keywords: [
    "game programmer",
    "software engineer",
    "C++",
    "Unreal Engine 5",
    "Unity",
    "OpenGL",
    "Jacob Fernandez",
    "San Antonio",
  ],
  openGraph: {
    title: "Jacob Fernandez | Game Programmer",
    description:
      "Game Programmer & Software Engineer specializing in C++, Unreal Engine 5, Unity, and OpenGL.",
    url: "https://www.jacobfernandez.dev",
    siteName: "Jacob Fernandez",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Jacob Fernandez — Game Programmer & Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Fernandez | Game Programmer",
    description:
      "Game Programmer & Software Engineer specializing in C++, Unreal Engine 5, Unity, and OpenGL.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Speed up the Vimeo reel embed by warming up the connection early */}
        <link rel="preconnect" href="https://player.vimeo.com" />
        <link rel="preconnect" href="https://i.vimeocdn.com" />
        <link rel="preconnect" href="https://f.vimeocdn.com" />
        {/* Prefetch the resume so Download Resume is instant on click */}
        <link rel="prefetch" href="/resume.pdf" as="document" />
      </head>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
