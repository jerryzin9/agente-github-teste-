"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  const [selectedLeague, setSelectedLeague] = useState("Todos");

  const filteredProducts =
    selectedLeague === "Todos"
      ? products
      : products.filter((p) => p.league === selectedLeague);

  return (
    <div className="min-h-screen bg-gray-50">
      <CartDrawer />
      <HeroBanner />

      <main id="produtos" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Nossos Produtos</h2>
          <span className="text-gray-500">{filteredProducts.length} produtos</span>
        </div>

        <FilterBar selectedLeague={selectedLeague} onLeagueChange={setSelectedLeague} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto encontrado para esta liga.
            </p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Camisas de Times Oficiais. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
