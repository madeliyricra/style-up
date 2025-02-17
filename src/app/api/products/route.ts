import { NextResponse } from "next/server"

const products = [
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
        description: "Zapatillas deportivas cómodas y con gran amortiguación.",
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
        description: "Chaqueta resistente al agua con capucha ajustable.",
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
    {
        sku: "jeans-levi501",
        name: "Jeans Levi's 501",
        category: "men",
        brand: "Levi's",
        description: "Jeans clásicos de Levi's con corte recto.",
        longDescription:
            "Jeans clásicos de Levi's con corte recto. Perfectos para un look casual y cómodo.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 59.99,
        inStock: 14,
        sizes: ["30", "32", "34", "36"],
        gender: "Hombre",
    },
    {
        sku: "falda-mango-midi",
        name: "Falda Mango Midi",
        category: "women",
        brand: "Mango",
        description: "Falda midi con estampado floral y diseño elegante.",
        longDescription:
            "Falda midi con estampado floral y diseño elegante. Ideal para eventos y salidas formales.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 39.99,
        inStock: 7,
        sizes: ["S", "M", "L"],
        gender: "Mujer",
    },
    {
        sku: "chaqueta-cuero-zara",
        name: "Chaqueta de Cuero Zara",
        category: "men",
        brand: "Zara",
        description: "Chaqueta de cuero sintético con estilo moderno.",
        longDescription:
            "Chaqueta de cuero sintético con estilo moderno. Perfecta para un look casual y urbano.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 99.99,
        inStock: 6,
        sizes: ["M", "L", "XL"],
        gender: "Hombre",
    },
    {
        sku: "sudadera-adidas-hoodie",
        name: "Sudadera Adidas Hoodie",
        category: "women",
        brand: "Adidas",
        description: "Sudadera con capucha cómoda y abrigada.",
        longDescription:
            "Sudadera con capucha cómoda y abrigada. Perfecta para el invierno y actividades al aire libre.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 44.99,
        inStock: 11,
        sizes: ["S", "M", "L", "XL"],
        gender: "Mujer",
    },
    {
        sku: "shorts-nike-running",
        name: "Shorts Nike Running",
        category: "men",
        brand: "Nike",
        description: "Shorts ligeros ideales para correr.",
        longDescription:
            "Shorts ligeros ideales para correr. Con tecnología Dri-FIT para mayor comodidad.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 27.99,
        inStock: 18,
        sizes: ["S", "M", "L"],
        gender: "Hombre",
    },
    {
        sku: "leggings-under-armour",
        name: "Leggings Under Armour",
        category: "women",
        brand: "Under Armour",
        description: "Leggings deportivos de alto rendimiento.",
        longDescription:
            "Leggings deportivos de alto rendimiento. Con tecnología HeatGear para mantener la piel seca.",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        price: 34.99,
        inStock: 9,
        sizes: ["XS", "S", "M", "L"],
        gender: "Mujer",
    },
]

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get("category")
    const sku = searchParams.get("sku")
    const query = searchParams.get("q")?.toLowerCase()

    let filteredProducts = products

    if (category) {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        )
    }

    if (sku) {
        filteredProducts = filteredProducts.filter(
            (product) => product.sku === sku
        )
    }

    if (query) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(query)
        )
    }

    return NextResponse.json(filteredProducts)
}
