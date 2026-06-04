"use client";
import { useState, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getProductBySlug, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import Toast from "@/components/Toast";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a0a12] flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-6xl mb-4">🔍</p>
          <h1 className="text-3xl font-black text-white mb-4">Produto não encontrado</h1>
          <Link href="/messi-store/shop" className="text-blue-400 hover:text-blue-300">
            ← Voltar à Loja
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona um tamanho");
      return;
    }
    addToCart({ ...product, size: selectedSize, quantity });
    setToast(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a12]">
      <Toast message="Adicionado ao carrinho! 🛒" show={toast} onHide={() => setToast(false)} />

      <div className="max-w-7xl mx-auto pt-28 pb-20 px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/messi-store" className="hover:text-white transition-colors">Início</Link>
          <span>/</span>
          <Link href="/messi-store/shop" className="hover:text-white transition-colors">Loja</Link>
          <span>/</span>
          <span className="text-blue-400">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-[#12121f] border border-gray-800">
              <Image
                src={product.images[selectedImg]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.tags.includes("bestseller") && (
                <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ Bestseller
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImg === i ? "border-blue-500" : "border-gray-700 hover:border-gray-500"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={`text-lg ${s <= Math.round(product.rating) ? "text-yellow-400" : "text-gray-600"}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-yellow-400 font-bold">{product.rating}</span>
              <span className="text-gray-400">({product.reviews.toLocaleString()} avaliações)</span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-black text-white">
                  €{product.price.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-gray-500 line-through text-lg">
                  €{(product.price * 1.3).toFixed(2).replace(".", ",")}
                </span>
              </div>
              <p className="text-green-400 text-sm mt-1">Pagamento seguro · Envio em 24h</p>
            </div>

            {/* Size */}
            <div className="mb-8">
              <p className="text-white font-bold mb-3">
                Tamanho {selectedSize && <span className="text-blue-400 ml-2">— {selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      selectedSize === size
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                        : "bg-[#12121f] text-gray-300 hover:bg-[#1a1a2e] border border-gray-700 hover:border-blue-500"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-10">
              <p className="text-white font-bold mb-3">Quantidade</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-[#12121f] border border-gray-700 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-[#1a1a2e] rounded-l-xl transition-colors"
                  >
                    −
                  </button>
                  <span className="text-white text-lg font-bold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-white text-xl hover:bg-[#1a1a2e] rounded-r-xl transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-400 text-sm">
                  Stock:{" "}
                  <span className={product.stock <= 5 ? "text-red-400 font-bold" : "text-green-400"}>
                    {product.stock} unidades
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={handleAddToCart}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-black py-4 px-8 rounded-xl text-lg shadow-2xl shadow-blue-600/30 transition-all"
              >
                🛒 Adicionar ao Carrinho
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#12121f] hover:bg-[#1a1a2e] text-white font-black py-4 px-8 rounded-xl text-lg border border-gray-700 transition-all"
              >
                ❤️ Wishlist
              </motion.button>
            </div>

            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <p>✓ Envio gratuito para encomendas acima de €100</p>
              <p>✓ Trocas e devoluções até 30 dias</p>
              <p>✓ Pagamento 100% seguro</p>
            </div>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-black text-white mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
