export const API_URL =  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api"

export const MENUS = [
    {
        name: "Inicio",
        link: "/",
    }
]

export const CATEGORIES = [
    {
        id: 'men',
        name: "Hombre",
        link: "/category/men",
    },
    {
        id: 'women',
        name: "Mujer",
        link: "/category/women",
    },
]

export const SEARCH_FILTER = [
    {
        id: "size",
        title: "Talla",
        options: ["XS", "S", "M", "L"],
    },
    {
        id: "brand",
        title: "Marca",
        options: ["nike", "adidas", "puma"],
    },
]

export const NAME = "StyleUp"