import { Header, Footer } from "@/components"

export default function ShopLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main className="min-h-screen max-w-7xl mx-auto ">{children}</main>
            <Footer />
        </>
    )
}
