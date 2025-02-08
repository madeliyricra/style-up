import { API_URL } from "@/utils/constant"
import Product from "@/types/product"

export const fetchProductsByCategory = async (
    category: string,
    search?: string,
): Promise<Product[]> => {
    try {
        const response = await fetch(
            `${API_URL}/products?category=${category}&q=${search || ""}`
        )
        if (!response.ok) {
            throw new Error("Error al obtener usuarios")
        }

        const products = await response.json()

        return products
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const fetchProductsByRecommended = async (
    count: number
): Promise<Product[]> => {
    try {
        const response = await fetch(`${API_URL}/products`)
        if (!response.ok) {
            throw new Error("Error al obtener productos")
        }
        const products: Product[] = await response.json()
        const shuffled = products.sort(() => 0.5 - Math.random())
        return shuffled.slice(0, count)
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const fetchProduct = async (sku: string): Promise<Product> => {
    try {
        const response = await fetch(`${API_URL}/products?sku=${sku}`)
        if (!response.ok) {
            throw new Error("Error al obtener usuario")
        }
        const data = await response.json()
        return data[0] as Product
    } catch (error) {
        console.error(error)
        throw error
    }
}
