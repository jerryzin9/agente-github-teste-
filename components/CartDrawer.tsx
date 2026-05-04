"use client";

import Image from "next/image";
import { useCartStore } from "@/lib/store";

export default function CartDrawer() {
  const { items, isOpen, setCartOpen, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setCartOpen(false)}>
      <div
        className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">Carrinho 🛒</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
              <button
                onClick={() => setCartOpen(false)}
                className="text-red-600 font-semibold hover:underline"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 bg-gray-50 p-3 rounded-lg">
                  <div className="relative h-20 w-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Tam: {item.selectedSize}</p>
                    <p className="text-green-600 font-bold">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id, item.selectedSize)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remover
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 bg-white">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                R$ {totalPrice().toFixed(2).replace(".", ",")}
              </span>
            </div>
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Finalizar Compra
            </button>
            <p className="text-center text-sm text-gray-500 mt-2">
              Checkout com Stripe (em breve)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
