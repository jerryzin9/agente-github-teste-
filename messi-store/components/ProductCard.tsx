"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/messi-store/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/messi-store/product/${product.slug}`}>
      <motion.div
        className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer border border-gray-700/50"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          {product.tags.includes("bestseller") && (
            <span className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
              ⭐ BESTSELLER
            </span>
          )}
          {product.tags.includes("unique") && (
            <span className="absolute top-3 right-3 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              ✨ UNIQUE
            </span>
          )}
          <div className="absolute bottom-3 right-3">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              €{product.price}
            </span>
          </div>
        </div>

        <div className="p-5">
          <p className="text-blue-400 text-xs uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-blue-300 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-yellow-400">★ {product.rating}</span>
            <span>({product.reviews.toLocaleString()} reviews)</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
