"use client";
import { useState, use } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getProductBySlug, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import Toast from "@/components/Toast";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Link href="/messi-store/shop" className="text-blue-400 hover:text-blue-300">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize, quantity });
    setToast(true);
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Toast message="Added to cart!" show={toast} onHide={() => setToast(false)} />

      <div className="max-w-7xl mx-auto pt-28 pb-20 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-gray-900">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.tags.includes("bestseller") && (
                <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ BESTSELLER
                </span>
              )}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-blue-400 text-sm uppercase tracking-widest mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-black mb-4">{product.name}</h1>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-400 text-lg font-bold">
                ★ {product.rating}
              </span>
              <span className="text-gray-400">
                ({product.reviews.toLocaleString()} reviews)
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <p className="text-5xl font-black text-white mb-8">
              €{product.price}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-white font-medium mb-3">
                Select Size: {selectedSize && <span className="text-blue-400">{selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-white font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 bg-gray-800 rounded-lg text-white text-lg"
                >
                  -
                </button>
                <span className="text-white text-xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 bg-gray-800 rounded-lg text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <motion.button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-2xl shadow-blue-600/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              🛒 Add to Cart — €{(product.price * quantity).toFixed(2)}
            </motion.button>

            <div className="mt-6 text-gray-500 text-sm">
              {product.stock <= 5 ? (
                <span className="text-red-400">⚠️ Only {product.stock} left in stock</span>
              ) : (
                <span>In stock — ships within 2-3 days</span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
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
