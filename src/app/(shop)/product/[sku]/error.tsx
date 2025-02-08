"use client"

import Link from "next/link"

export default function Error() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center px-4">
            <h1 className="text-4xl font-bold text-red-600">
                ¡Ups! Algo salió mal
            </h1>
            <p className="mt-2 text-gray-600">
                Ha ocurrido un error inesperado. Por favor, intenta de nuevo más
                tarde.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all"
            >
                Volver al inicio
            </Link>
        </section>
    )
}
