"use client";

import { Cart, ProductsList } from "@/components";
import { PRODUCTS } from "@/contants";
import { useCart } from "@/hooks";

export default function Home() {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <main className=" w-11/12 mx-auto sm:flex sm:gap-8 py-16">
      <ProductsList
        cart={cart}
        products={PRODUCTS}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </main>
  );
}
