import Product from "@/types/product"
import Link from "next/link"
import { IoCartOutline } from "react-icons/io5"

export const CardProduct = ({ product }: { product: Product }) => {
    return (
        <section className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img
                    className="object-cover object-center w-full h-full"
                    src={product.image}
                    alt="product image"
                />
                {product.salePrice && (
                    <span className="absolute top-0 right-0 m-2 p-1 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        Oferta
                    </span>
                )}
            </div>
            <article className="mt-4 px-5 pb-5">
                <Link
                    href={`/product/${product.sku}`}
                    className="cursor-pointer hover:underline"
                >
                    <h5
                        className="text-lg tracking-tight text-slate-900 truncate"
                        title={product.name}
                    >
                        {product.name}
                    </h5>
                </Link>
                <div className="flex space-2 mt-2 mb-2">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        {product.brand}
                    </span>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        {product.gender}
                    </span>
                </div>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-lg font-bold text-slate-900">
                            {product.price}
                        </span>
                        {product.salePrice && (
                            <span className="text-sm line-through text-gray-500 ml-2">
                                {product.salePrice}
                            </span>
                        )}
                    </p>
                </div>
                <button className="flex items-center justify-center rounded-md bg-gray-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full">
                    <IoCartOutline className="text-xl" />
                    <span>Agregar al carrito</span>
                </button>
            </article>
        </section>
    )
}
