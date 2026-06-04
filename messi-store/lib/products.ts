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
  { name: "Chuteiras", slug: "chuteiras", icon: "⚽" },
  { name: "Bolas", slug: "bolas", icon: "🥅" },
  { name: "Memorabilia", slug: "memorabilia", icon: "🏆" },
  { name: "Treino", slug: "treino", icon: "🎯" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Argentina 2022 - Copa do Mundo",
    slug: "camiseta-argentina-2022-copa-do-mundo",
    description: "A camiseta histórica que vestiu Messi na conquista do hexa em Doha. Azul e branca celestial, o símbolo de uma geração vencedora. Edição oficial com escudo AFA bordado.",
    price: 149.90,
    images: [
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
    ],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 38,
    rating: 5.0,
    reviews: 3421,
    tags: ["bestseller", "copa-do-mundo", "oficial", "hexa"],
  },
  {
    id: "2",
    name: "Camiseta Inter Miami CF 2024 - Messi 10",
    slug: "camiseta-inter-miami-messi-10",
    description: "A camiseta do momento. Messi vestindo a rosa do Inter Miami na MLS. O número 10 immortalizado no rosa e preto. Torça pelo GOAT na liga americana.",
    price: 129.90,
    images: [
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800"
    ],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 25,
    rating: 4.9,
    reviews: 1876,
    tags: ["inter-miami", "mls", "messi10"],
  },
  {
    id: "3",
    name: "Camiseta Barcelona 10 - Era de Ouro",
    slug: "camiseta-barcelona-10-ouro",
    description: "A camiseta que escreveu história. 21 anos, 778 gols, 35 títulos. O número 10 mais icônico de todos os tempos. Edição especial La Liga campeão.",
    price: 119.90,
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
    ],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 42,
    rating: 4.9,
    reviews: 5632,
    tags: ["barcelona", "classic", "bestseller"],
  },
  {
    id: "4",
    name: "Camiseta PSG 30 - Anos de França",
    slug: "camiseta-psg-30-franca",
    description: "A aventura parisiense de Messi. Dois anos de magia na capital do futebol mundial. Edição limitada com patch Ligue 1.",
    price: 109.90,
    images: [
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
    ],
    category: "Jerseys",
    categorySlug: "jerseys",
    sizes: ["S", "M", "L", "XL"],
    stock: 18,
    rating: 4.7,
    reviews: 1203,
    tags: ["psg", "paris", "franca"],
  },
  {
    id: "5",
    name: "Chuteira Adidas X Messi - Speedflow",
    slug: "chuteira-adidas-x-messi-speedflow",
    description: "A chuteira que acelera como o raio. Design ultraleve desenvolvido com Messi para dribles mortais. Cabedal agile, solado para velocidade máxima em campos artificiais.",
    price: 279.90,
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800",
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800"
    ],
    category: "Chuteiras",
    categorySlug: "chuteiras",
    sizes: ["EU 38", "EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    stock: 15,
    rating: 4.9,
    reviews: 876,
    tags: ["adidas", "chuteira", "speed", "campo"],
  },
  {
    id: "6",
    name: "Chuteira Adidas Copa Pure - Campo",
    slug: "chuteira-adidas-copa-pure-campo",
    description: "Toque puro, controle absoluto. Chuteira de couro premium para campos de relva natural. O equipamento escolhido por Messi para dominar o jogo.",
    price: 319.90,
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    category: "Chuteiras",
    categorySlug: "chuteiras",
    sizes: ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45"],
    stock: 8,
    rating: 4.8,
    reviews: 543,
    tags: ["adidas", "chuteira", "campo", "couro"],
  },
  {
    id: "7",
    name: "Bola Oficial Qatar 2022 - Al Hilm",
    slug: "bola-oficial-qatar-2022-al-hilm",
    description: "A bola que selou o destino. FIFA World Cup Qatar 2022 bola oficial da final. Design dourado inspirando os sonhos de glória. Item de colecionador premium.",
    price: 229.90,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
    ],
    category: "Bolas",
    categorySlug: "bolas",
    sizes: ["Official Size 5"],
    stock: 22,
    rating: 4.8,
    reviews: 654,
    tags: ["bola", "copa-do-mundo", "qatar2022", "final"],
  },
  {
    id: "8",
    name: "Bola Adidas Al Rihla - Ligue 1",
    slug: "bola-adidas-al-rihla-ligue-1",
    description: "A bola oficial da Ligue 1 francesa. Velocidade e precisão com o design revolucionário da Al Rihla. Dribles a velocidades absurdas.",
    price: 89.90,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800"
    ],
    category: "Bolas",
    categorySlug: "bolas",
    sizes: ["Official Size 5"],
    stock: 35,
    rating: 4.7,
    reviews: 312,
    tags: ["bola", "adidas", "ligue1"],
  },
  {
    id: "9",
    name: "Réplica Taça Copa do Mundo - Edição Messi",
    slug: "replica-taca-copa-do-mundo-messi",
    description: "A taça dos sonhos. Réplica premium gold da FIFA World Cup com placa de edição limitada Messi. Plástico de alto impacto com banho de ouro. Peça de exposição definitiva.",
    price: 499.90,
    images: [
      "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800",
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800"
    ],
    category: "Memorabilia",
    categorySlug: "memorabilia",
    sizes: ["Standard 30cm"],
    stock: 6,
    rating: 5.0,
    reviews: 234,
    tags: ["trofeu", "copa-do-mundo", "ouro", "colecionador"],
  },
  {
    id: "10",
    name: "Chuteira Match Worn - Autografada Messi",
    slug: "chuteira-match-worn-autografada-messi",
    description: "Peça única. Chuteira autografada e vestida por Messi em partida oficial. Certificado de autenticidade, número de série limitado. Investimento e memória pura.",
    price: 3999.90,
    images: [
      "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=800",
      "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=800"
    ],
    category: "Memorabilia",
    categorySlug: "memorabilia",
    sizes: ["EU 42"],
    stock: 1,
    rating: 5.0,
    reviews: 3,
    tags: ["signed", "match-worn", "unique", "autenticidade"],
  },
  {
    id: "11",
    name: "Camiseta Treino Argentina - Térmica",
    slug: "camiseta-treino-argentina-termica",
    description: "Tecnologia de compressão para máxima performance. Tecido aeroready que elimina suor nos treinos mais intensos. Estampa celestial com escudo oficial AFA.",
    price: 89.90,
    images: [
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800",
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800"
    ],
    category: "Treino",
    categorySlug: "treino",
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 50,
    rating: 4.6,
    reviews: 445,
    tags: ["treino", "argentina", "termica"],
  },
  {
    id: "12",
    name: "Mochila Messi Training - Adidas",
    slug: "mochila-messi-training-adidas",
    description: "Carry your passion. Mochila técnica com compartimentos para chuteiras, garrafa de água e pertences. Design da linha assinatura Messi, edição limitada.",
    price: 159.90,
    images: [
      "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800",
      "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800"
    ],
    category: "Treino",
    categorySlug: "treino",
    sizes: ["One Size"],
    stock: 20,
    rating: 4.5,
    reviews: 187,
    tags: ["mochila", "treino", "adidas"],
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
