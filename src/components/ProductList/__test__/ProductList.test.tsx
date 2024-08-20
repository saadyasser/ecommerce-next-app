import { CART, PRODUCTS } from "@/contants";
import ProductsList from "..";
import { fireEvent, render, screen } from "@testing-library/react";

describe.skip("Products Section", () => {
  const addToCart = jest.fn();
  const decrementQuantity = jest.fn();
  render(
    <ProductsList
      products={PRODUCTS}
      cart={CART}
      addToCart={addToCart}
      decrementQuantity={decrementQuantity}
    />
  );

  test("Check The Products Container and Product List Are Found", () => {
    screen.debug();
    const productsContainer = screen.getByRole("products-container");

    const productsList = screen.getAllByRole("product");
    expect(productsContainer).toBeInTheDocument();
    expect(productsList).toHaveLength(9);
  });

  test("Check If The Items Are Added To The Cart Successfully", () => {
    const addToCartButtons = screen.getAllByText(/Add to Cart/);
    expect(addToCartButtons).toHaveLength(7);
    const firstButton = addToCartButtons[0];
    fireEvent.click(firstButton);
    expect(addToCart).toHaveBeenCalledTimes(1);
  });
});
