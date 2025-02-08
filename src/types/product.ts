/* eslint-disable @typescript-eslint/no-empty-interface */
export default interface Product {
    sku: string
    name: string
    category: string
    brand: string
    description: string
    longDescription?: string
    image: string
    price: number
    salePrice?: number
    inStock: number
    sizes: string[]
    gender: string
}
