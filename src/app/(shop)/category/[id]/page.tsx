"use client"

import { useState, useCallback, use } from "react"
import { CardProduct, Skeleton } from "@/components"
import { CATEGORIES } from "@/utils/constant"
import debounce from "lodash.debounce"
import { IoSearch } from "react-icons/io5"
import { useSearchProducts } from "@/hooks/useSearchProducts"
import Error from "./error"

export default function ProductListPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    const [search, setSearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")

    const {
        data: products,
        isLoading,
        error,
    } = useSearchProducts(id, debouncedSearch)
    
    if (error) return <Error />

    const handleSearch = useCallback(
        debounce((value) => setDebouncedSearch(value), 500),
        []
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
    }

    const category = CATEGORIES.find((category) => category.id === id)

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Categoría: {category?.name || "Desconocida"}
                </h1>
                <div className="relative mt-4 w-full max-w-md mx-auto">
                    <input
                        type="text"
                        value={search}
                        onChange={handleChange}
                        placeholder="Buscar productos..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900"
                    />
                    <IoSearch className="absolute right-3 top-3 text-gray-500" />
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
                <aside className="hidden lg:block p-4 rounded-md shadow-sm">
                    <h2 className="text-lg font-semibold">Filtros</h2>
                </aside>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {isLoading
                        ? Array.from({ length: 6 }).map((_, index) => (
                              <Skeleton key={index} className="h-64" />
                          ))
                        : products?.map((product) => (
                              <CardProduct
                                  key={product.sku}
                                  product={product}
                              />
                          ))}
                    {!isLoading && products?.length === 0 && (
                        <p className="text-center text-gray-600">
                            No se encontraron productos
                        </p>
                    )}
                </section>
            </div>
        </div>
    )
}
