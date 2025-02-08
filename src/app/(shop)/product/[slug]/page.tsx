"use client"

import { useFetchProductById } from "@/hooks/useFetchProductById"
import { CATEGORIES, NAME } from "@/utils/constant"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"
import { FaShippingFast } from "react-icons/fa"
import { MdCancel } from "react-icons/md"
import { use } from "react"
import NotFound from "./not-found"
import Loading from "./loading"
import Error from "./error"
import { NextSeo } from "next-seo"

export default function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = use(params)
    const { data: product, error, isLoading } = useFetchProductById(slug)

    if (isLoading) return <Loading />
    if (error) return <Error />
    if (!product) return <NotFound />

    const category = CATEGORIES.find(
        (category) => category.id === product.category
    )

    return (
        <>
            <NextSeo
                title={`${product.name} | ${NAME}`}
                description={product.description}
                openGraph={{
                    title: `${product.name} | ${NAME}`,
                    description: product.description,
                    images: [
                        {
                            url: product.image,
                            alt: product.name,
                        },
                    ],
                }}
            />
            <section className="py-12 sm:py-16">
                <div className="container mx-auto px-4">
                    <nav className="flex">
                        <ol className="flex items-center">
                            <li className="text-left">
                                <Link
                                    href="/"
                                    className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800"
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li className="text-left flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                <Link
                                    href={category?.link || "/"}
                                    className="rounded-md p-1 text-sm font-medium text-gray-600 hover:text-gray-800"
                                >
                                    {category?.name}
                                </Link>
                            </li>
                        </ol>
                    </nav>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-lg shadow-lg p-8">
                        <div className="lg:col-span-3">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-[400px] object-cover rounded-lg shadow-md h-auto mx-auto"
                            />
                        </div>

                        <div className="lg:col-span-2 space-y-4">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                {product.name}
                            </h1>

                            <p className="text-gray-600">
                                {product.description}
                            </p>

                            <div className="flex space-x-2">
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                    {product.brand}
                                </span>
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                                    {product.gender}
                                </span>
                            </div>

                            {product.sizes && (
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-600">
                                        Tallas:
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {product.sizes.map((size) => (
                                            <span
                                                key={size}
                                                className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-0.5 rounded-full"
                                            >
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="mt-6 flex items-center justify-between border-t border-b py-4">
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">
                                            {product.price}
                                        </span>
                                        {product.salePrice && (
                                            <span className="text-2xl line-through text-gray-500 ml-2">
                                                {product.salePrice}
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    className="flex items-center gap-2 rounded-md bg-gray-900 px-6 py-3 text-white font-bold hover:bg-gray-800 transition"
                                >
                                    <IoCartOutline className="text-xl" />
                                    Agregar al carrito
                                </button>
                            </div>

                            <ul className="mt-6 space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <FaShippingFast className="mr-2 text-gray-500 text-xl" />
                                    Envío gratis a nivel mundial
                                </li>
                                <li className="flex items-center">
                                    <MdCancel className="mr-2 text-gray-500 text-xl" />
                                    Cancela en cualquier momento
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="border-b border-gray-300">
                                <nav className="flex gap-4">
                                    <a
                                        href="#"
                                        className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400"
                                    >
                                        Descripción
                                    </a>
                                </nav>
                            </div>
                            <div className="mt-6 sm:mt-10 text-gray-700">
                                {product.longDescription}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
