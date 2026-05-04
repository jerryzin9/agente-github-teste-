import { useCartStore } from "@/lib/store";

export default function HeroBanner() {
  const setCartOpen = useCartStore((state) => state.setCartOpen);

  return (
    <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Camisas de Times Oficiais
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100">
            As melhores camisas dos times do Brasil e do Mundo. Entrega rápida e original garantida!
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
            >
              Ver Catálogo
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
            >
              Carrinho 🛒
            </button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-transparent to-red-700/50 hidden md:block" />
    </section>
  );
}
