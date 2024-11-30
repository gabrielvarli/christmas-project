import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useCart } from "../utils/context/cartContext";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartContext = useCart();

  if (!cartContext) return null;

  const { cartState } = cartContext;
  const { myCart } = cartState;

  const cartItemCount = myCart.length;

  const toggleShoppingCart = () => setIsCartOpen((prev) => !prev);

  return (
    <header className="bg-rose-500">
      <div className="flex items-center justify-between px-6 py-4 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-auto transform scale-x-[-1] rotate-[-25deg]"
            src="/images/santaclausremovebg.png"
            alt="Santa Claus Logo"
          />
          <h1 className="font-mountain text-white text-3xl md:text-4xl">
            Christmas Shopping
          </h1>
        </div>

        {/* Shopping Cart Button */}
        <button
          type="button"
          onClick={toggleShoppingCart}
          className="relative flex items-center justify-center bg-rose-700 hover:bg-rose-800 text-white p-2 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-rose-300"
          aria-label="Shopping Cart"
        >
          <ShoppingCartIcon className="h-7 w-7" aria-hidden="true" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-gray-800 text-white text-xs font-semibold rounded-full px-2 py-0.5">
              {cartItemCount}
            </span>
          )}
        </button>
      </div>

      {/* Shopping Cart Dropdown */}
      <ShoppingCart show={isCartOpen} onClose={toggleShoppingCart}>
        <div className="mb-4 max-h-96 overflow-y-auto px-4">
          {myCart.length > 0 ? (
            myCart.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 py-4 border-b border-gray-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{`Price: ${product.price} kr`}</p>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-lg text-gray-600">
              Your cart is empty.
            </h3>
          )}
        </div>
      </ShoppingCart>
    </header>
  );
};

export default Header;
