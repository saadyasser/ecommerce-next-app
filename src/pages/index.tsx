import { Cart, NavBar, ProductsList, Skeleton } from "@/components";
import ProductsListLoading from "@/components/ProductsListLoading";
import { PRODUCTS } from "@/contants";
import { useCart } from "@/hooks";
import { useEffect, useState } from "react";

export default function Page() {
  const { cart, addToCart, removeItemFully, decrementQuantity } = useCart();
  const [error, setError] = useState<null | Error>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const getProducts = async () => {
      try {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data.result);
      } catch (e) {
        setError({ name: "jdjdjd", message: "Fetching products failed" });
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);
  return (
    <main className="sm:flex sm:gap-8 py-10">
      {isLoading ? (
        <ProductsListLoading />
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
