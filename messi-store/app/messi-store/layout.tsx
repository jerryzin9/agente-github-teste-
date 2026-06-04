import type { Metadata } from "next";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Messi Store — Official Collection",
  description: "Shop the official Lionel Messi collection. Jerseys, boots, memorabilia, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
