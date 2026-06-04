"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import CartSidebar from "./CartSidebar";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg shadow-2xl py-3"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/messi-store" className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-2xl"
            >
              ⚽
            </motion.div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-tight">
                Messi Store
              </h1>
              <p className="text-blue-400 text-xs">Official Collection</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Shop", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/messi-store"
                    : `/messi-store${item === "Shop" ? "/shop" : ""}`
                }
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </nav>

          <motion.button
            onClick={() => setCartOpen(true)}
            className="relative bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🛒
            <AnimatePresence>
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
                >
                  {count}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
