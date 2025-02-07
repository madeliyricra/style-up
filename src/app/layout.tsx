import type { Metadata } from "next"
import "./globals.css"
import { openSans } from "../config/fonts"

export const metadata: Metadata = {
    title: "Home | StyleUp",
    description: "Tienda de ropa"
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <body
                className={`${openSans.className} antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
