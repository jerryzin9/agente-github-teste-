export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  categorySlug: string;
  sizes: string[];
  stock: number;
  rating: number;
  reviews: number;
  tags: string[];
}

export interface CartItem extends Product {
  size: string;
  quantity: number;
}

export interface Category {
  name: string;
  slug: string;
  icon: string;
}

export const categories: Category[] = [
  { name: "Jerseys", slug: "jerseys", icon: "👕" },
  { name: "Balls", slug: "balls", icon: "⚽" },
  { name: "Boots", slug: "boots", icon: "👟" },
  { name: "Memorabilia", slug: "memorabilia", icon: "🏆" },
  { name: "Accessories", slug: "accessories", icon: "🎽" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Argentina 2022 World Cup Jersey",
    slug: "argentina-2022-world-cup-jersey",
    description: "The iconic sky blue and white jersey that carried Messi to his historic World Cup victory. Official Adidas replica.",
    price: 129.99,
    images: ["https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800"],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 45,
    rating: 4.9,
    reviews: 1289,
    tags: ["world-cup", "official", "bestseller"],
  },
  {
    id: "2",
    name: "Inter Miami CF 2024 Jersey",
    slug: "inter-miami-cf-2024-jersey",
    description: "Messi's current club jersey. The pink and black Lionel Messi Inter Miami CF official match jersey.",
    price: 119.99,
    images: ["https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL"],
    stock: 32,
    rating: 4.8,
    reviews: 876,
    tags: ["inter-miami", "mls"],
  },
  {
    id: "3",
    name: "Barcelona 10 Messi Home Jersey",
    slug: "barcelona-10-messi-home-jersey",
    description: "The legendary Barcelona number 10 that made Messi a global icon. Official Nike replica.",
    price: 109.99,
    images: ["https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800"],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 28,
    rating: 4.9,
    reviews: 2145,
    tags: ["barcelona", "classic", "bestseller"],
  },
  {
    id: "4",
    name: "PSG 21/22 Messi Jersey",
    slug: "psg-21-22-messi-jersey",
    description: "The legendary Paris Saint-Germain jersey from Messi's seasons in France.",
    price: 99.99,
    images: ["https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 18,
    rating: 4.7,
    reviews: 654,
    tags: ["psg", "retro"],
  },
  {
    id: "5",
    name: "Al Hilm Match Ball",
    slug: "al-hilm-match-ball",
    description: "The official match ball from the 2022 Qatar World Cup final. Designed for the greatest match in history.",
    price: 189.99,
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"],
    category: "Balls",
    categorySlug: "balls",
    sizes: ["Standard"],
    stock: 12,
    rating: 4.8,
    reviews: 432,
    tags: ["world-cup", "final-ball"],
  },
  {
    id: "6",
    name: "Messi Signature Football Boots",
    slug: "messi-signature-football-boots",
    description: "Adidas Messi signature boots. The same boots he wore to 8 Ballon d'Or victories.",
    price: 249.99,
    images: ["https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800"],
    category: "Boots",
    categorySlug: "boots",
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    stock: 8,
    rating: 4.9,
    reviews: 321,
    tags: ["adidas", "signature"],
  },
  {
    id: "7",
    name: "Messi World Cup Trophy Replica",
    slug: "messi-world-cup-trophy-replica",
    description: "Official FIFA World Cup trophy replica. Gold-plated collector's edition with Messi engraving.",
    price: 399.99,
    images: ["https://images.unsplash.com/photo-1553778263-73a83bad9b9b?w=800"],
    category: "Memorabilia",
    categorySlug: "memorabilia",
    sizes: ["Standard"],
    stock: 5,
    rating: 5.0,
    reviews: 89,
    tags: ["world-cup", "trophy", "collector"],
  },
  {
    id: "8",
    name: "Messi Signed Match-Worn Boots",
    slug: "messi-signed-match-worn-boots",
    description: "Authentic pair of match-worn boots signed by Lionel Messi. Comes with certificate of authenticity.",
    price: 2999.99,
    images: ["https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800"],
    category: "Memorabilia",
    categorySlug: "memorabilia",
    sizes: ["EU 42"],
    stock: 1,
    rating: 5.0,
    reviews: 12,
    tags: ["signed", "match-worn", "unique"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags.includes("bestseller"));
}
