import express from "express";
import {
  listProducts,
  getProduct,
} from "../controllers/product-controller.mjs";

const router = express.Router();

router.get("/list", listProducts);
router.get("/:id", getProduct);

// Hantera icke-existerande routes
router.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default router;

// import express from "express";
// import {
//   listProducts,
//   getProduct,
// } from "../controllers/product-controller.mjs";

// const router = express.Router();

// // Middleware för att logga inkommande förfrågningar
// router.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
//   next();
// });

// // Hämta alla produkter med stöd för paginering och filtrering
// router.get("/list", async (req, res, next) => {
//   try {
//     await listProducts(req, res);
//   } catch (error) {
//     next(error); // Skicka fel till error-handler
//   }
// });

// // Hämta en specifik produkt
// router.get("/:id", async (req, res, next) => {
//   try {
//     await getProduct(req, res);
//   } catch (error) {
//     next(error); // Skicka fel till error-handler
//   }
// });

// // Hantera icke-existerande routes
// router.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found. Please check the API documentation.",
//   });
// });

// // Global error-handler för att fånga upp fel
// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "An unexpected error occurred.",
//   });
// });

// export default router;
