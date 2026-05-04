export interface Product {
  id: string;
  name: string;
  team: string;
  league: string;
  price: number;
  image: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Flamengo",
    team: "Flamengo",
    league: "Brasileirão",
    price: 189.9,
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "2",
    name: "Corinthians",
    team: "Corinthians",
    league: "Brasileirão",
    price: 179.9,
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "3",
    name: "Palmeiras",
    team: "Palmeiras",
    league: "Brasileirão",
    price: 199.9,
    image: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "4",
    name: "Real Madrid",
    team: "Real Madrid",
    league: "La Liga",
    price: 299.9,
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "5",
    name: "Barcelona",
    team: "Barcelona",
    league: "La Liga",
    price: 279.9,
    image: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "6",
    name: "Manchester United",
    team: "Manchester United",
    league: "Premier League",
    price: 349.9,
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "7",
    name: "PSG",
    team: "PSG",
    league: "Ligue 1",
    price: 329.9,
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
  {
    id: "8",
    name: "Bayern Munich",
    team: "Bayern Munich",
    league: "Bundesliga",
    price: 309.9,
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=400&h=400&fit=crop",
    sizes: ["P", "M", "G", "GG"],
  },
];

export const leagues = ["Todos", "Brasileirão", "La Liga", "Premier League", "Ligue 1", "Bundesliga"];
