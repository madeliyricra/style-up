import { fetchProduct } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

export function useFetchProductById(sku: string) {
    return useQuery({
        queryKey: ["products", sku],
        queryFn: () => fetchProduct(sku),
        staleTime: 1000 * 60 * 5,
        enabled: sku !== undefined,
    })
}