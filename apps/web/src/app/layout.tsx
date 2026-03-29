import type { Metadata, Viewport } from "next";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bbish.dev"),
  title: {
    default: "Brenden Bishop | Builder & Technologist",
    template: "%s | Brenden Bishop",
  },
  description:
    "Engineering leader and builder focused on how software gets built. Shipping products, integrating AI into real dev workflows, and founding from 0→1.",
  keywords: [
    "Brenden Bishop",
    "Software Engineer",
    "Engineering Lead",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "AI",
    "OpenAI",
    "Portfolio",
  ],
  authors: [{ name: "Brenden Bishop" }],
  creator: "Brenden Bishop",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bbish.dev",
    siteName: "Brenden Bishop",
    title: "Brenden Bishop | Builder & Technologist",
    description:
      "Engineering leader and builder focused on how software gets built. Shipping products, integrating AI into real dev workflows, and founding from 0→1.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brenden Bishop - Builder & Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenden Bishop | Builder & Technologist",
    description:
      "Engineering leader and builder focused on how software gets built. Shipping products, integrating AI into real dev workflows, and founding from 0→1.",
    images: ["/og-image.png"],
    creator: "@bbishdotdev",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

