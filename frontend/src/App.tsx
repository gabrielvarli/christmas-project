import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductInfoPage from "./pages/ProductInfoPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import CartProvider from "./utils/context/cartContext";
import { getAllProducts } from "./utils/http";

function App() {
  // Definiera router med en ErrorBoundary och loader
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} loader={getAllProducts}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductInfoPage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
