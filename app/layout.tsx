import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "THE MAHA-RAGE | Travis Scott India Tour",
  description:
    "Experience Travis Scott's Utopia world fused with Indian culture. Book your tickets for the most immersive concert experience in India.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        <main className="pb-20 md:pb-0 md:pt-20">{children}</main>
      </body>
    </html>
  )
}
