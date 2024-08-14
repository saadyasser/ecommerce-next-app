import { CART } from "@/contants";
import { Product } from "@/types";
import { useState } from "react";

export const useCart = () => {

    const [cart, setCart] = useState<Product[]>(CART);

    const addToCart = (product: Product) => {
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

    const removeFromCart = (product: Product) => {
        const targetProductIndex = cart.findIndex((p) => p.id === product.id);
        setCart((prevCart) => {
            prevCart.splice(targetProductIndex, 1);
            return [...prevCart];
        });
    };

    return { cart, removeFromCart, addToCart }
}

export default useCart;