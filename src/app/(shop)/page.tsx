"use client"

import { CardProduct } from "@/components"
import { useFetchProductRecommend } from "@/hooks/useFetchProductRecommend"

export default function Home() {
    const { data: products } = useFetchProductRecommend()

    return (
        <main>
            <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gray-900 text-white">
                <div className="absolute inset-0 bg-[url('/image/banner.webp')] bg-cover bg-center opacity-60"></div>
                <div className="relative text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Descubre lo Mejor en Moda
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Ofertas exclusivas y tendencias 2024
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Productos Destacados
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {products?.map((product) => (
                            <CardProduct key={product.slug} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
