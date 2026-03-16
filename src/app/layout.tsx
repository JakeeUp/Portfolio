import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    url: "https://jacobfernandezdev.vercel.app",
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
      <body>
        {/* Black overlay that fades out after load — hides Three.js/font init */}
        <div id="page-loader" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
