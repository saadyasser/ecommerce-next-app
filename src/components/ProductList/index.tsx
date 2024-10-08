import React from "react";
import { Button } from "../ui/button";
import { CartItemType, ItemToAddToCart, Product as ProductType } from "@/types";
import Image from "next/image";
import { isFound } from "@/utils";
import Product from "./Product";

export const ProductsList = ({
  cart,
  products,
  addToCart,
  decrementQuantity,
}: {
  products: ProductType[];
  addToCart: (product: ItemToAddToCart) => void;
  decrementQuantity: (cartItem: CartItemType) => void;
  cart: CartItemType[];
}) => {
  return (
    <div className="sm:mb-0 mb-12 sm:basis-2/3">
      <h1 className="text-2xl font-bold sm:mb-8 mb-10 letter-spacing-1">
        Desserts
      </h1>
      <div
        className="md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 lg:gap-y-12 md:gap-y-6  pl-1"
        role="products-container"
      >
        {products.map((product: ProductType, index) => (
          <article
            role="product"
            key={product.id}
            className={`  ${
              index === products.length - 1 ? "" : "sm:mb-0 mb-10"
            }`}
          >
            <Product product={product} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
