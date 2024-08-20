import { CART } from "@/contants";
import { CartItemType, Product } from "@/types";
import { useState } from "react";

export const useCart = () => {

    const [cart, setCart] = useState<CartItemType[]>(CART);


    interface ItemToAddToCart extends Product {
        quantity: number;
    }

    const addToCart = (product: ItemToAddToCart) => {
        const targetProduct = cart.find((p) => p.id === product.id);
        const targetProductIndex = cart.findIndex((p) => p.id === product.id);

        if (!targetProduct) {
            product.quantity = 1;
            setCart((prevCart) => [...prevCart, product]);
        } else {
            targetProduct.quantity = (targetProduct.quantity ?? 0) + 1;
            setCart((prevCart) => {
                prevCart.splice(targetProductIndex, 1, targetProduct);
                return [...prevCart];
            });
        }
    };

    const decrementQuantity = (cartItem: CartItemType) => {
        const targetProductIndex = cart.findIndex((p) => p.id === cartItem.id);
        const targetProduct = cart.find((p) => p.id === cartItem.id);

        if (targetProduct?.quantity === 1) {
            setCart((prevCart) => {
                prevCart.splice(targetProductIndex, 1);
                return [...prevCart]
            });
        } else if (targetProduct?.quantity && targetProduct?.quantity > 1) {
            targetProduct.quantity = targetProduct.quantity - 1;

            setCart((prevCart) => {
                prevCart.splice(targetProductIndex, 1, targetProduct);
                return [...prevCart];
            });
        }
    };

    return { cart, decrementQuantity, addToCart }
}

export default useCart;