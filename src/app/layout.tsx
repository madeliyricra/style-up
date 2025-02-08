import type { Metadata } from "next"
import ReactQueryProviderder from "./providers/react-query-provider"
import { openSans } from "../config/fonts"
import "./globals.css"
import { NAME } from "@/utils/constant"

export const metadata: Metadata = {
    title: NAME,
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
                <ReactQueryProviderder>{children}</ReactQueryProviderder>
            </body>
        </html>
    )
}
