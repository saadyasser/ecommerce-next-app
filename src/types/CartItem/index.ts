import Product from "../Product";

export interface CartItemType extends Product {
    quantity: number;
}

export default CartItemType