import {
    fetchProductsByCategory,
    fetchProductsByRecommended,
    fetchProduct,
} from "@/services/productService"
import { API_URL } from "@/utils/constant"

global.fetch = jest.fn()

describe("Product Service", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    test("fetchProductsByCategory obtiene productos filtrados por categoría y búsqueda", async () => {
        const mockProducts = [
            {
                sku: "camiseta-nike-dri-fit",
                name: "Camiseta Nike Dri-FIT",
                category: "men",
                brand: "Nike",
                description:
                    "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad.",
                longDescription:
                    "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad. Perfecta para entrenamientos de alta intensidad.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 29.99,
                salePrice: 19.99,
                inStock: 15,
                sizes: ["S", "M", "L", "XL"],
                gender: "Hombre",
            },
        ]

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue(mockProducts),
        })

        const products = await fetchProductsByCategory("men")

        expect(fetch).toHaveBeenCalledWith(
            `${API_URL}/products?category=men&q=`
        )
        expect(products).toHaveLength(1)
        expect(products[0].name).toBe("Camiseta Nike Dri-FIT")
    })

    test("fetchProductsByRecommended obtiene productos recomendados", async () => {
        const mockProducts = [
            {
                sku: "camiseta-nike-dri-fit",
                name: "Camiseta Nike Dri-FIT",
                category: "men",
                brand: "Nike",
                description:
                    "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad.",
                longDescription:
                    "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad. Perfecta para entrenamientos de alta intensidad.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 29.99,
                salePrice: 19.99,
                inStock: 15,
                sizes: ["S", "M", "L", "XL"],
                gender: "Hombre",
            },
            {
                sku: "pantalon-adidas-training",
                name: "Pantalón Adidas Training",
                category: "men",
                brand: "Adidas",
                description: "Pantalón de entrenamiento ligero y transpirable.",
                longDescription:
                    "Pantalón de entrenamiento ligero y transpirable. Ideal para entrenamientos de cardio y fuerza.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 39.99,
                inStock: 10,
                sizes: ["M", "L", "XL"],
                gender: "Hombre",
            },
            {
                sku: "zapatillas-puma-runner",
                name: "Zapatillas Puma Runner",
                category: "men",
                brand: "Puma",
                description:
                    "Zapatillas deportivas cómodas y con gran amortiguación.",
                longDescription:
                    "Zapatillas deportivas cómodas y con gran amortiguación. Perfectas para correr largas distancias.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 59.99,
                inStock: 8,
                sizes: ["40", "41", "42", "43"],
                gender: "Hombre",
            },
            {
                sku: "chaqueta-north-face-impermeable",
                name: "Chaqueta North Face Impermeable",
                category: "men",
                brand: "The North Face",
                description:
                    "Chaqueta resistente al agua con capucha ajustable.",
                longDescription:
                    "Chaqueta resistente al agua con capucha ajustable. Perfecta para actividades al aire libre.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 89.99,
                inStock: 5,
                sizes: ["M", "L", "XL"],
                gender: "Hombre",
            },
            {
                sku: "vestido-zara-elegante",
                name: "Vestido Zara Elegante",
                category: "women",
                brand: "Zara",
                description:
                    "Vestido largo de corte elegante para ocasiones especiales.",
                longDescription:
                    "Vestido largo de corte elegante para ocasiones especiales. Ideal para bodas y eventos formales.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 49.99,
                inStock: 12,
                sizes: ["S", "M", "L"],
                gender: "Mujer",
            },
            {
                sku: "blusa-hm-casual",
                name: "Blusa H&M Casual",
                category: "women",
                brand: "H&M",
                description: "Blusa ligera y cómoda para uso diario.",
                longDescription:
                    "Blusa ligera y cómoda para uso diario. Perfecta para combinar con jeans y zapatillas.",
                image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
                price: 24.99,
                inStock: 20,
                sizes: ["XS", "S", "M", "L"],
                gender: "Mujer",
            },
        ]

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue(mockProducts),
        })

        const products = await fetchProductsByRecommended(2)

        expect(fetch).toHaveBeenCalledWith(`${API_URL}/products`)
        expect(products).toHaveLength(2)
    })

    test("fetchProduct obtiene un producto por SKU", async () => {
        const mockProduct = {
            sku: "camiseta-nike-dri-fit",
            name: "Camiseta Nike Dri-FIT",
            category: "men",
            brand: "Nike",
            description:
                "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad.",
            longDescription:
                "Camiseta deportiva con tecnología Dri-FIT para mayor comodidad. Perfecta para entrenamientos de alta intensidad.",
            image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
            price: 29.99,
            salePrice: 19.99,
            inStock: 15,
            sizes: ["S", "M", "L", "XL"],
            gender: "Hombre",
        }

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValue([mockProduct]),
        })

        const product = await fetchProduct("camiseta-nike-dri-fit")

        expect(fetch).toHaveBeenCalledWith(
            `${API_URL}/products?sku=camiseta-nike-dri-fit`
        )
        expect(product).toEqual(mockProduct)
    })

    test("fetchProduct maneja errores correctamente", async () => {
        fetch.mockResolvedValueOnce({ ok: false })

        await expect(fetchProduct("invalid")).rejects.toThrow(
            "Error al obtener usuario"
        )
    })
})
