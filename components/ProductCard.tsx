"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, products } from "@/lib/products";
import { useCartStore } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const setCartOpen = useCartStore((state) => state.setCartOpen);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Selecione um tamanho!");
      return;
    }
    addItem(product, selectedSize);
    setCartOpen(true);
    setSelectedSize("");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {product.league}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2">{product.team}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ver Detalhes
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-500 mb-2">{product.team} • {product.league}</p>
            <p className="text-3xl font-bold text-green-600 mb-4">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </p>
            <div className="mb-4">
              <p className="font-semibold text-gray-700 mb-2">Tamanho:</p>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg font-semibold border-2 transition-colors ${
                      selectedSize === size
                        ? "border-red-600 bg-red-600 text-white"
                        : "border-gray-300 hover:border-red-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Adicionar ao Carrinho
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
