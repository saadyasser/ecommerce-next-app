import Product from "../Product";

export interface ItemToAddToCart extends Product {
    quantity: number;
}

export default ItemToAddToCart