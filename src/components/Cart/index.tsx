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

export const Cart = ({
  cart,
  removeFromCart,
}: {
  cart: Product[];
  removeFromCart: (product: Product) => void;
}) => {
  return (
    <div className="sm:basis-1/3 self-start bg-white rounded-md px-5 py-5">
      <h2 className="text-red text-xl font-bold sm:mb-6 mb-8 ">
        Your Cart ({cart.length})
      </h2>
      {cart.length === 0 ? (
        <>
          <Image
            width={10}
            height={10}
            alt=" = kkkk"
            className="w-[70%] mx-auto"
            src="/assets/images/illustration-empty-cart.svg"
          />
          <p className="text-sm text-center text-red">
            Your added items will appear here.
          </p>
        </>
      ) : (
        <>
          <CartList cart={cart} removeFromCart={removeFromCart} />
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
                  removeFromCart={removeFromCart}
                  className="bg-rose-50 px-3 py-4 rounded-md"
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
  withRemoveIcon = true,
  className = "",
  cart,
  removeFromCart,
}: {
  withRemoveIcon?: boolean;
  className?: string;
  cart: Product[];
  removeFromCart: (product: Product) => void;
}) => {
  let totalPrice = 0;
  return (
    <div className={className}>
      <ul>
        {cart.map((product, index) => {
          if (product.quantity) totalPrice += product.price * product.quantity;
          return (
            <li
              key={product.id}
              className={`flex justify-between items-center border-gray-100 pb-3 border-b ${
                index !== cart.length - 1 && "mb-4"
              }`}
            >
              <CartItem removeFromCart={removeFromCart} product={product} />
            </li>
          );
        })}
      </ul>
      <div className=" flex justify-between my-5">
        <p className="text-sm opacity-70">Order Total</p>
        <span className="text-xl font-bold ">${totalPrice}</span>
      </div>
    </div>
  );
};

const CartItem = ({
  product,
  removeFromCart,
}: {
  product: Product;
  removeFromCart: (product: Product) => void;
}) => {
  return (
    <>
      <div>
        <h4 className="text-sm font-medium">{product.name}</h4>
        <div className="flex gap-2">
          <span className="text-sm font-bold text-red">
            {product.quantity}x
          </span>
          <span className="text-sm  text-gray-300 ">@ ${product.price}</span>
          {product?.quantity && (
            <span className="text-sm  text-gray-600">
              ${product.price * product.quantity}
            </span>
          )}
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Image
            width={20}
            height={20}
            alt={product.name}
            className="cursor-pointer border border-black opacity-15 rounded-full p-1"
            src="/assets/images/icon-remove-item.svg"
          />
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="mb-2">Item Deletion</DialogTitle>
            <DialogDescription className="text-gray-400 text-xs">
              We Hope you enjoyed your food.
            </DialogDescription>
          </DialogHeader>
          <div>Are you sure you want to delete ?</div>

          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <div className="flex justify-center">
                <Button
                  className="bg-red text-white  border-0"
                  onClick={() => {
                    removeFromCart(product);
                  }}
                >
                  Delete
                </Button>
                <Button className="bg-white text-black ">Cancle</Button>
              </div>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Cart;
