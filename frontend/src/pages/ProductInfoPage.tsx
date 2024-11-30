import { useOutletContext, useParams } from "react-router-dom";
import { ProductInfo } from "../models/productModels";
import { useState, useEffect } from "react";
import ProductDetail from "../components/ProductDetail";
import ErrorMessage from "../components/ErrorMessage";
import LoadingPage from "../components/LoadingPage";

const ProductInfoPage = () => {
  const { id } = useParams<{ id: string }>();
  const allProducts = useOutletContext<ProductInfo[]>();

  const [state, setState] = useState<{
    product?: ProductInfo;
    isLoading: boolean;
    error?: string;
  }>({
    product: undefined,
    isLoading: true,
    error: undefined,
  });

  useEffect(() => {
    if (!id) {
      setState({ isLoading: false, error: "No product ID provided." });
      return;
    }

    const productId = Number(id);
    const findProduct = allProducts.find((p) => p.id === productId);

    if (findProduct) {
      setState({ product: findProduct, isLoading: false });
    } else {
      setState({ isLoading: false, error: "Could not find the product..." });
    }
  }, [id, allProducts]);

  const { product, isLoading, error } = state;

  if (isLoading) {
    return <LoadingPage text="Loading product details..." />;
  }

  if (error) {
    return <ErrorMessage text={error} />;
  }

  if (product) {
    return <ProductDetail product={product} />;
  }

  return <ErrorMessage text="Unexpected error occurred." />;
};

export default ProductInfoPage;
