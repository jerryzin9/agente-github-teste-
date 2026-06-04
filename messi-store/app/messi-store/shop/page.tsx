"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Product } from "@/lib/products";

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const [filtered, setFiltered] = useState<Product[]>(products);

  useEffect(() => {
    let result = category === "all" ? products : products.filter((p) => p.categorySlug === category);
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    setFiltered(result);
  }, [category, sort]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-black mb-2">Shop Messi Collection</h1>
          <p className="text-gray-400">
            {filtered.length} products available
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setCategory("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              category === "all"
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.slug
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Sort */}
        <div className="flex justify-end mb-8">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg border border-gray-700"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
