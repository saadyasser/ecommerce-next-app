"use client";

import { Cart, ProductsList } from "@/components";
import { PRODUCTS } from "@/contants";
import { useCart } from "@/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const { cart, addToCart, decrementQuantity } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      const productsResponse = await fetch(`/products`);
      const products = await productsResponse.json();
      setIsLoading(false);
      setProducts(products);
    };
    getProducts();
  }, []);
  return (
    <main className=" w-11/12 mx-auto sm:flex sm:gap-8 py-16">
      {isLoading ? (
        <p className="sm:mb-0 mb-12 sm:basis-2/3">Loading...</p>
      ) : (
        <ProductsList
          cart={cart}
          products={products}
          addToCart={addToCart}
          decrementQuantity={decrementQuantity}
        />
      )}

      <Cart cart={cart} decrementQuantity={decrementQuantity} />
    </main>
  );
}
