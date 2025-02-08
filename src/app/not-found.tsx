import Link from "next/link"

export default function NotFound() {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">
                Página no encontrada
            </h2>
            <p className="mt-2 text-gray-600">
                No pudimos encontrar la página que buscas.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-800 transition-all"
            >
                Volver al inicio
            </Link>

            <img
                src="https://i.imgur.com/qIufhof.png"
                alt="Not Found"
                className="mt-6 w-64 opacity-80"
            />
        </section>
    )
}
