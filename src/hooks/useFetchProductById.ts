import { fetchProduct } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

export function useFetchProductById(slug: string) {
    return useQuery({
        queryKey: ["products", slug],
        queryFn: () => fetchProduct(slug),
        staleTime: 1000 * 60 * 5,
        enabled: slug !== undefined,
    })
}