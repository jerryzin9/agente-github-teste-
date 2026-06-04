"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Product } from "@/lib/products";
import { useSearchParams, useRouter } from "next/navigation";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [sort, setSort] = useState("featured");
  const [filtered, setFiltered] = useState<Product[]>(products);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    let result = category === "all" ? products : products.filter((p) => p.categorySlug === category);
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sort === "newest") result = [...result].reverse();
    setFiltered(result);
  }, [category, sort]);

  return (
    <div className="min-h-screen bg-[#0a0a12] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-3">
            Nossa Coleção
          </h1>
          <p className="text-gray-400 text-lg">
            {filtered.length} produtos · Encontre o seu estilo
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          <button
            onClick={() => { setCategory("all"); router.push("/messi-store/shop"); }}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              category === "all"
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-[#12121f] text-gray-300 hover:bg-[#1a1a2e] border border-gray-800"
            }`}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => { setCategory(cat.slug); router.push(`/messi-store/shop?category=${cat.slug}`); }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                category === cat.slug
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-[#12121f] text-gray-300 hover:bg-[#1a1a2e] border border-gray-800"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Sort */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-end mb-10"
        >
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-[#12121f] text-white text-sm px-5 py-2.5 rounded-xl border border-gray-800 focus:border-blue-500 focus:outline-none cursor-pointer"
          >
            <option value="featured">Destaque</option>
            <option value="price-low">Menor Preço</option>
            <option value="price-high">Maior Preço</option>
            <option value="rating">Melhor Avaliado</option>
            <option value="newest">Mais Recentes</option>
          </select>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category + sort}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-5xl mb-4">🔍</p>
            <p>Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
