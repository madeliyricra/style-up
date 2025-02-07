import { Header } from "@/components"

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
    </>
  )
}