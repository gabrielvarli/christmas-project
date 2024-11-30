import getDataClient from "../utils/getDataClient.mjs";
import products from "../data/products.mjs";

// Hämta lista av produkter
const listProducts = (req, res) => {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = 10; // Lägg till sidhantering (antal produkter per sida)
  const offset = (page - 1) * limit;

  const paginatedProducts = products.slice(offset, offset + limit);
  const response = {
    success: true,
    page,
    total: products.length,
    data: paginatedProducts,
  };

  res.status(200).json(response);
};

// Hämta specifik produkt
const getProduct = (req, res) => {
  const id = parseInt(req.params.id);

  if (!id) {
    res.status(400).json({ success: false, message: "Invalid product ID" });
    return;
  }

  const product = products.find((product) => product.id === id);

  if (!product) {
    res
      .status(404)
      .json({ success: false, message: `Product with ID ${id} not found` });
    return;
  }

  res.status(200).json({ success: true, data: product });
};

export { listProducts, getProduct };

// import getDataClient from "../utils/getDataClient.mjs";
// import products from "../data/products.mjs";

// /**
//  * Fetch and return a paginated list of products.
//  */
// const listProducts = (req, res) => {
//   try {
//     const page = req.query.page ? parseInt(req.query.page, 10) : 1;
//     const limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;

//     // Validate query params
//     if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1) {
//       return res.status(400).json({
//         success: false,
//         status: 400,
//         message: "Invalid pagination parameters",
//       });
//     }

//     const offset = (page - 1) * limit;
//     const paginatedProducts = products.slice(offset, offset + limit);

//     return res.status(200).json({
//       success: true,
//       status: 200,
//       message: "Products fetched successfully",
//       page,
//       limit,
//       total: products.length,
//       data: paginatedProducts,
//     });
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return res.status(500).json({
//       success: false,
//       status: 500,
//       message: "Internal Server Error",
//     });
//   }
// };

// /**
//  * Fetch and return a single product by ID.
//  */
// const getProduct = (req, res) => {
//   try {
//     const id = parseInt(req.params.id, 10);

//     // Validate ID
//     if (!id || isNaN(id)) {
//       return res.status(400).json({
//         success: false,
//         status: 400,
//         message: "Invalid product ID",
//       });
//     }

//     const product = products.find((product) => product.id === id);

//     // Check if product exists
//     if (!product) {
//       return res.status(404).json({
//         success: false,
//         status: 404,
//         message: `Product with ID ${id} not found`,
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       status: 200,
//       message: "Product fetched successfully",
//       data: product,
//     });
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return res.status(500).json({
//       success: false,
//       status: 500,
//       message: "Internal Server Error",
//     });
//   }
// };

// export { listProducts, getProduct };
