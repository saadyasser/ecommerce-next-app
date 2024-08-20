import React from "react";
import Product from "../../types/Product";
import { Button } from "../ui/button";
import { CartItemType } from "@/types";
import Image from "next/image";
import { isFound } from "@/utils";
interface ItemToAddToCart extends Product {
  quantity: number;
}
export const ProductsList = ({
  cart,
  products,
  addToCart,
  decrementQuantity,
}: {
  products: Product[];
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
        className="grid  grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 md:gap-y-6  pl-1"
        role="products-container"
      >
        {products.map((product: Product, index) => (
          <article
            role="product"
            key={product.id}
            className={`  ${
              index === products.length - 1 ? "" : "sm:mb-0 mb-10"
            }`}
          >
            <div
              className={`sm:mb-7 mb-10 relative flex justify-center rounded-md  ${
                isFound(cart, product) ? "border-2 border-red" : ""
              }`}
            >
              <img
                width={2000}
                height={2000}
                className="w-full h-auto rounded-md"
                src={product.image.mobile}
                alt={product.name}
              />

              {isFound(cart, product) ? (
                <Button
                  size="sm"
                  className="font-semibold text-xs text-white absolute bottom-[-16px] sm:bottom-[-16px] bg-red     rounded-3xl "
                >
                  <div
                    onClick={() => {
                      addToCart(product as ItemToAddToCart);
                    }}
                    className="w-4 h-4 flex items-center justify-center border border-white rounded-full mr-6"
                  >
                    <Image
                      width={200}
                      height={200}
                      className=" w-auto h-auto"
                      src="/assets/images/icon-increment-quantity.svg"
                      alt={product.name}
                    />
                  </div>
                  {
                    cart.find((cartItem) => cartItem.id === product.id)
                      ?.quantity
                  }
                  <div
                    onClick={() => {
                      const cartItem = cart.find(
                        (cartItem) => cartItem.id === product.id
                      );
                      decrementQuantity(cartItem as CartItemType);
                    }}
                    className="w-4 h-4 flex items-center justify-center border border-white rounded-full ml-6"
                  >
                    <Image
                      width={200}
                      height={200}
                      className="w-auto h-auto"
                      src="/assets/images/icon-decrement-quantity.svg"
                      alt={product.name}
                    />
                  </div>
                </Button>
              ) : (
                <Button
                  role="add-to-cart"
                  onClick={() => {
                    addToCart(product as ItemToAddToCart);
                  }}
                  size="sm"
                  className="font-semibold text-xs text-black absolute bottom-[-16px] sm:bottom-[-16px] bg-white border-gray-300 border rounded-3xl hover:bg-gray-100"
                >
                  <Image
                    width={200}
                    height={200}
                    className="w-4 h-4 rounded-md mr-2"
                    src="/assets/images/icon-add-to-cart.svg"
                    alt={product.name}
                  />
                  Add to Cart
                </Button>
              )}
            </div>
            <span className="text-xs text-gray-400 font-semibold">
              {product.category}
            </span>
            <h3 className="text-sm font-bold">{product.name}</h3>
            <span className="text-2xl sm:text-base font-bold text-red">
              ${product.price}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
