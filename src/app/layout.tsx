import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pavimalini T — Full Stack Developer & Product Designer",
  description:
    "Official portfolio of Pavimalini T: MSc Software Systems student at Coimbatore Institute of Technology, Full Stack Developer, and Product Designer passionate about designing experiences and building meaningful digital products.",
  keywords: [
    "Pavimalini T",
    "Pavimalini",
    "Full Stack Developer",
    "Product Designer",
    "Coimbatore Institute of Technology",
    "MSc Software Systems",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "AutoRAG",
    "Techno Tenant",
    "UI/UX Design"
  ],
  authors: [{ name: "Pavimalini T" }],
  creator: "Pavimalini T",
  metadataBase: new URL("https://pavimalini.dev"),
  openGraph: {
    title: "Pavimalini T — Full Stack Developer & Product Designer",
    description:
      "Designing experiences. Building meaningful digital products. MSc Software Systems student at CIT.",
    url: "https://pavimalini.dev",
    siteName: "Pavimalini T Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/pavimalini.jpg",
        width: 1024,
        height: 1024,
        alt: "Pavimalini T — Full Stack Developer and Product Designer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavimalini T — Full Stack Developer & Product Designer",
    description: "Designing experiences. Building meaningful digital products.",
    images: ["/images/pavimalini.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  themeColor: "#edf7fe",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen text-[#0b192c] font-body antialiased selection:bg-[#38bdf8] selection:text-[#070e1b]">
        {children}
      </body>
    </html>
  );
}
