"use client";

import { Cart, ProductsList } from "@/components";
import { PRODUCTS } from "@/contants";
import { useCart } from "@/hooks";

export default function Home() {
  const { cart, addToCart, decrementQuantity } = useCart();
  return (
    <main className=" w-11/12 mx-auto sm:flex sm:gap-8 py-16">
      <ProductsList
        cart={cart}
        products={PRODUCTS}
        addToCart={addToCart}
        decrementQuantity={decrementQuantity}
      />
      <Cart cart={cart} decrementQuantity={decrementQuantity} />
    </main>
  );
}
