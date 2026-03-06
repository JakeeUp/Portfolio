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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
