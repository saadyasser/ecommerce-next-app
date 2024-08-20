import { CartItemType, Product } from "@/types";
import React from "react";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components";
import { useCart } from "@/hooks";
import Image from "next/image";
import { Jersey_10 } from "next/font/google";
import EmptyCart from "./EmptyCart";
import { CartItem } from "./CatItem";

export const Cart = ({
  cart,
  decrementQuantity,
}: {
  cart: CartItemType[];
  decrementQuantity: (product: CartItemType) => void;
}) => {
  return (
    <div className="sm:basis-1/3 self-start bg-white rounded-md px-5 py-5">
      <h2 className="text-red text-xl font-bold sm:mb-6 mb-8 ">
        Your Cart ({cart.length})
      </h2>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <CartList
            className="mb-6"
            cart={cart}
            decrementQuantity={decrementQuantity}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button
                type="button"
                size="sm"
                className="w-full bg-red  text-white rounded-full"
              >
                Confirm
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="mb-2">Order Confirmed</DialogTitle>
                <DialogDescription className="text-gray-400 text-xs">
                  We Hope you enjoyed your food.
                </DialogDescription>
              </DialogHeader>
              <div>
                <CartList
                  cart={cart}
                  decrementQuantity={decrementQuantity}
                  withProductIcon={true}
                  withRemoveIcon={false}
                />
              </div>

              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button
                    type="button"
                    size="sm"
                    className="w-full bg-red  text-white rounded-full"
                  >
                    Start New Order
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </>
      )}
    </div>
  );
};

const CartList = ({
  className = "",
  cart,
  decrementQuantity,
  withRemoveIcon = true,
  withProductIcon = false,
}: {
  className?: string;
  cart: CartItemType[];
  decrementQuantity: (product: CartItemType) => void;
  withRemoveIcon?: boolean;
  withProductIcon?: boolean;
}) => {
  let totalPrice = 0;
  return (
    <div className={`bg-rose-50 px-3 py-4 rounded-md ${className} `}>
      <ul>
        {cart.map((cartItem: CartItemType, index) => {
          if (cartItem.quantity)
            totalPrice += cartItem.price * cartItem.quantity;
          return (
            <li
              key={cartItem.id}
              className={`flex justify-between items-center border-gray-100 pb-3 border-b ${
                index !== cart.length - 1 && "mb-4"
              }`}
            >
              <CartItem
                decrementQuantity={decrementQuantity}
                cartItem={cartItem}
                withProductIcon={withProductIcon}
                withRemoveIcon={withRemoveIcon}
              />
            </li>
          );
        })}
      </ul>
      <div className=" flex justify-between mt-5">
        <p className="text-sm opacity-70">Order Total</p>
        <span className=" font-bold ">${totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
