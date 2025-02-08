import { fetchProductsByCategory } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

export function useSearchProducts(categoryId: string, query?: string) {
    return useQuery({
        queryKey: ["products", categoryId, query],
        queryFn: () => fetchProductsByCategory(categoryId, query),
        staleTime: 1000 * 60 * 5,
        enabled: categoryId !== undefined,
    })
}