"use client";

import { Cart, ProductsList } from "@/components";
import { PRODUCTS } from "@/contants";
import { useCart } from "@/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const { cart, addToCart, removeItemFully, decrementQuantity } = useCart();
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const data = await fetch(`/products`);
        const products = await data.json();
        setProducts(products);
      } catch (e) {
        setError({ name: "jdjdjd", message: "Fetching products failed" });
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <main className=" w-11/12 mx-auto sm:flex sm:gap-8 py-16">
      {isLoading ? (
        <p className="sm:mb-0 mb-12 sm:basis-2/3">Loading...</p>
      ) : error ? (
        <div className="sm:mb-0 mb-12 sm:basis-2/3">{error.message}</div>
      ) : (
        <ProductsList
          cart={cart}
          products={products}
          addToCart={addToCart}
          decrementQuantity={decrementQuantity}
        />
      )}

      <Cart cart={cart} removeItemFully={removeItemFully} />
    </main>
  );
}
