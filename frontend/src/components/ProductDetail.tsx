import { ProductInfo } from "../models/productModels";
import { FC, useState, useCallback } from "react";
import { useCart } from "../utils/context/cartContext";

type ProductDetailProps = {
  product: ProductInfo;
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  const [count, setCount] = useState<number>(1);
  const cartContext = useCart();

  if (!cartContext) return null;

  const { dispatch } = cartContext;

  const addToCart = useCallback(() => {
    for (let i = 0; i < count; i++) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  }, [dispatch, product, count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = Number(e.target.value);
      if (input >= 1) setCount(input);
    },
    []
  );

  return (
    <section className="sm:py-20 overflow-hidden bg-white">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          {/* Produktbild */}
          <div className="w-full px-4 md:w-1/2">
            <div className="sticky top-0">
              <div className="relative mb-6" style={{ height: "450px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Produktdetaljer */}
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="pb-6 mb-8 border-b border-gray-200">
                <h2 className="text-xl font-bold md:text-4xl">
                  {product.name}
                </h2>
                <p className="text-gray-700 my-4">{product.description}</p>
                <div className="p-4 mb-8 border border-gray-300 rounded-2xl">
                  <p className="text-xs font-medium text-gray-700">
                    Skynda! Bara {product.stock} kvar i lager
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        product.stock > 50
                          ? "bg-green-500"
                          : product.stock > 20
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${(product.stock / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-2xl font-semibold text-gray-700">
                  {product.price} SEK
                </p>
                <p className="text-sm text-gray-700">{product.weight} g</p>
              </div>

              {/* Köpsektionen */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start">
                <div className="flex items-center mb-4 mr-4">
                  <button
                    onClick={handleDecrement}
                    aria-label="Decrease quantity"
                    className="w-10 h-10 text-gray-600 bg-gray-100 border-r rounded-l hover:bg-gray-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="w-16 text-center bg-gray-100 border outline-none"
                    value={count}
                    onChange={handleInputChange}
                  />
                  <button
                    onClick={handleIncrement}
                    aria-label="Increase quantity"
                    className="w-10 h-10 text-gray-600 bg-gray-100 border-l rounded-r hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={addToCart}
                  className="btn-primary"
                  aria-label={`Add ${count} ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
