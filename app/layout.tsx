import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { CategoryNav } from "@/components/category-nav"
import { Footer } from "@/components/footer"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Mini APK - Download Free Android Apps",
    template: "%s | Mini APK",
  },
  description: "Download free Android apps, games and more",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miniapk.com",
    siteName: "Mini APK",
    images: [
      {
        url: "https://miniapk.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mini APK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miniapk",
    creator: "@miniapk",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <header className="border-b">
              <div className="bg-[#8BC34A] text-white">
                <div className="container mx-auto px-4">
                  <MainNav />
                </div>
              </div>
              <div className="container mx-auto px-4 py-2">
                <CategoryNav />
              </div>
            </header>
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

