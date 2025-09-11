import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Selamat Ulang Tahun - Birthday Celebration",
  description: "Website perayaan ulang tahun dengan animasi kue dan galeri foto",
  generator: "SFD LABS",
  icons: {
    icon: "/asset/birthday-cake.png", // ambil dari folder public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}