import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductDetail from "../../components/ProductDetail";
import { ProductInfo } from "../../models/productModels";
import CartProvider from "../../utils/context/cartContext";

const fakeProduct: ProductInfo = {
  id: 6,
  name: "Holiday Macaroon Medley",
  price: 80,
  weight: 150,
  description:
    "Indulge in the delightful flavors of the season with our Holiday Macaroon Medley...",
  image: "http://localhost:3000/macaroons.jpg",
  stock: 50,
};

describe("ProductDetail page", () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <ProductDetail product={fakeProduct} />
      </CartProvider>
    );
  });

  it("should render product details correctly", () => {
    const heading = screen.getByRole("heading", {
      name: /holiday macaroon medley/i,
    });
    expect(heading).toBeInTheDocument();
    const img = screen.getByRole("img", { name: /holiday macaroon medley/i });
    expect(img).toHaveAttribute("src", fakeProduct.image);
  });

  it("should have a button to decrease quantity", () => {
    const button = screen.getByRole("button", {
      name: /decrease quantity/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("should have a button to increase quantity", () => {
    const button = screen.getByRole("button", {
      name: /increase quantity/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("should allow adding products to the cart", () => {
    const addToCartButton = screen.getByRole("button", {
      name: /add 1 holiday macaroon medley to cart/i,
    });
    expect(addToCartButton).toBeInTheDocument();

    // Simulate adding to cart
    fireEvent.click(addToCartButton);
    expect(addToCartButton).toHaveAttribute(
      "aria-label",
      "Add 1 Holiday Macaroon Medley to cart"
    );
  });

  it("should increment and decrement the product quantity", () => {
    const incrementButton = screen.getByRole("button", {
      name: /increase quantity/i,
    });
    const decrementButton = screen.getByRole("button", {
      name: /decrease quantity/i,
    });
    const input = screen.getByRole("spinbutton");

    // Default quantity is 1
    expect(input).toHaveValue(1);

    // Increment quantity
    fireEvent.click(incrementButton);
    expect(input).toHaveValue(2);

    // Decrement quantity
    fireEvent.click(decrementButton);
    expect(input).toHaveValue(1);

    // Ensure it doesn't go below 1
    fireEvent.click(decrementButton);
    expect(input).toHaveValue(1);
  });
});
