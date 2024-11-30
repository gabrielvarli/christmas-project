import { FC, useCallback } from "react";
import { ProductInfo } from "../models/productModels";
import { Link } from "react-router-dom";
import { useCart } from "../utils/context/cartContext";

type ProductCardProps = {
  product: ProductInfo;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const cartContext = useCart();

  if (!cartContext) {
    return null; // Returnera inget om cartContext saknas
  }

  const { dispatch } = cartContext;

  // Memoized funktion för att lägga till i varukorgen
  const addToCart = useCallback(() => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }, [dispatch, product]);

  return (
    <div
      className="flex flex-col justify-between gap-2 mb-6 border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
      role="group"
      aria-labelledby={`product-card-${product.id}`}
    >
      <Link
        to={`/product/${product.id}`}
        state={product}
        aria-label={`View details for ${product.name}`}
        className="hover:opacity-90"
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-56 h-56 max-w-56 max-h-56 rounded-sm"
        />
        <div id={`product-card-${product.id}`}>
          <h3 className="font-semibold mt-3 text-lg">{product.name}</h3>
          <p className="text-gray-700">{product.price} SEK</p>
        </div>
      </Link>
      <button
        onClick={addToCart}
        className="btn-primary mt-2"
        aria-label={`Add ${product.name} to cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
