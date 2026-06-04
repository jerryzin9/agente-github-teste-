"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories, getFeaturedProducts } from "@/lib/products";

export default function MessiStoreHome() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const featured = getFeaturedProducts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] overflow-x-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1920"
            alt="Messi"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a12]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-6"
          >
            <span className="text-7xl">⚽</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-4 tracking-tight"
          >
            MESSI <span className="text-blue-400">STORE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-2"
          >
            A loja oficial do maior jogador de todos os tempos
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-2 text-yellow-400 text-sm mb-10"
          >
            <span className="text-2xl">🏆</span>
            <span className="uppercase tracking-widest font-bold">Campeão do Mundo 2022</span>
            <span className="text-2xl">🏆</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/messi-store/shop">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl transition-all"
              >
                Ver Coleção Completa →
              </motion.button>
            </Link>
            <Link href="/messi-store/shop?category=jerseys">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full text-lg backdrop-blur border border-white/20 transition-all"
              >
                👕 Camisetas
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a12] to-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-center text-white mb-3"
          >
            Categorias
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center mb-16"
          >
            Escolhe a tua forma de celebrar o GOAT
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {categories.map((cat) => (
              <motion.div key={cat.slug} variants={itemVariants}>
                <Link href={`/messi-store/shop?category=${cat.slug}`}>
                  <motion.div
                    whileHover={{
                      y: -8,
                      backgroundColor: "rgb(59 130 246)",
                      borderColor: "rgb(59 130 246)",
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#12121f] rounded-2xl p-6 text-center border border-gray-800 cursor-pointer h-full flex flex-col items-center justify-center gap-3"
                  >
                    <span className="text-5xl">{cat.icon}</span>
                    <span className="text-white font-bold text-sm">{cat.name}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 px-6 bg-[#0f0f1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-400 text-xl">⭐</span>
                <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">
                  Best Sellers
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Produtos em Destaque
              </h2>
            </div>
            <Link
              href="/messi-store/shop"
              className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
            >
              Ver todos <span>→</span>
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featured.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BANNER */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1920')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-sm font-bold px-4 py-2 rounded-full mb-6"
          >
            <span>🏆</span> EDIÇÃO LIMITADA
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Messi — O GOAT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-8"
          >
            8 Bolas de Ouro · 4 Champions League · 1 Copa do Mundo
          </motion.p>
          <Link href="/messi-store/shop?category=jerseys">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg"
            >
              Ver Camisetas Messi →
            </motion.button>
          </Link>
        </div>
      </section>

      {/* ALL PRODUCTS */}
      <section className="py-24 px-6 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Coleção Completa
            </h2>
            <p className="text-gray-400">{products.length} produtos disponíveis</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {products.slice(0, 8).map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/messi-store/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full text-lg"
              >
                Ver Todos os Produtos ({products.length}) →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-gray-800 bg-[#06060e]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">⚽</span>
            <span className="text-white font-black text-xl">MESSI STORE</span>
          </div>
          <p className="text-gray-500 text-sm mb-2">
            A loja oficial de memorabilia de Lionel Messi
          </p>
          <p className="text-gray-600 text-xs">
            © 2026 Messi Store · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
