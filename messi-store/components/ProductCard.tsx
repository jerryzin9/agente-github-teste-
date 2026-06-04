"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/messi-store/product/${product.slug}`}>
      <motion.div
        className="group bg-[#12121f] rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-gray-800 hover:border-blue-500/50 transition-all"
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        layout
      >
        <div className="relative h-64 overflow-hidden bg-[#1a1a2e]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12121f] via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.tags.includes("bestseller") && (
              <span className="bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                ⭐ Bestseller
              </span>
            )}
            {product.tags.includes("unique") && (
              <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ✨ Único
              </span>
            )}
            {product.stock === 1 && (
              <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                🔥 Última
              </span>
            )}
          </div>
          <div className="absolute bottom-3 right-3">
            <span className="bg-blue-600 text-white text-base font-extrabold px-4 py-1.5 rounded-full shadow-lg">
              €{product.price.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1.5">
            {product.category}
          </p>
          <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 font-bold text-sm">★ {product.rating}</span>
              <span className="text-gray-500 text-xs">({product.reviews.toLocaleString()})</span>
            </div>
            <span className="text-gray-500 text-xs">
              {product.stock > 5 ? "Em stock" : product.stock <= 5 ? `Só ${product.stock}` : ""}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
