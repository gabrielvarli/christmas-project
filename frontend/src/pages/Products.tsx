// import { useOutletContext } from "react-router-dom";
// import ProductCard from "../components/ProductCard";
// import { ProductInfo } from "../models/productModels";
// import { getHeroPropsForPage } from "../components/Hero";
// import { HeroProps } from "../models/productModels";
// import Hero from "../components/Hero";
// import ErrorMessage from "../components/ErrorMessage";

// const Products = () => {
//   let products: ProductInfo[] = (useOutletContext() as ProductInfo[]) || [];
//   const heroInfo = getHeroPropsForPage("Products") as HeroProps;

//   return (
//     <div>
//       <Hero {...heroInfo} />
//       <div className="max-w-4xl text-center m-auto flex flex-wrap justify-center gap-8 my-12">
//         {products.length !== 0 ? (
//           products.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))
//         ) : (
//           <ErrorMessage text="Couldn't fetch data..." />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { useOutletContext } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import ErrorMessage from "../components/ErrorMessage";
import { ProductInfo, HeroProps } from "../models/productModels";
import { getHeroPropsForPage } from "../components/Hero";

const Products = () => {
  const products: ProductInfo[] = useOutletContext<ProductInfo[]>() || [];
  const heroInfo: HeroProps = getHeroPropsForPage("Products");

  return (
    <div>
      {/* Hero Section */}
      <Hero {...heroInfo} />

      {/* Products Section */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 py-12">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <ErrorMessage text="No products available at the moment. Please check back later." />
        )}
      </div>
    </div>
  );
};

export default Products;
