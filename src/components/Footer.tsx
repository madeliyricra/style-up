import { NAME } from "@/utils/constant"

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-bold">{NAME}</h5>
                    </div>
                    <p className="text-sm text-gray-400">
                        © 2025 @madeliyricra. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
