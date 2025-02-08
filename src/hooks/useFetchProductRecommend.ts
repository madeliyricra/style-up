import { fetchProductsByRecommended } from "@/services/productService"
import { useQuery } from "@tanstack/react-query"

export function useFetchProductRecommend() {
    const COUNT = 4
    return useQuery({
        queryKey: ["products", COUNT],
        queryFn: () => fetchProductsByRecommended(COUNT),
        staleTime: 1000 * 60 * 5,
    })
}
