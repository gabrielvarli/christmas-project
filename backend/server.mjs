""; // Steg 1. Importera alla beroenden...
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import products from "./routes/product-routes.mjs";
// Steg 2. Starta upp tillgång till .env filens konfiguration...
dotenv.config({ path: "./config/.env" });

// Steg 3. Få tag i express applikationen...
const app = express();

// --------- MIDDLEWARE --------- //
app.use(cors());
app.use("/api/v1/products", products);
app.use(express.static("public"));
// ------------------------------ //

//cannot GET Detta innebär att backend bara är avsett för API-anrop.

// Fulkod, vi sätter upp våra routings endpoints...
// app.get("/", (req, res) => {
//   res.send("<H1>Node is awesome!!!</H1>");
// });

// Globala variabler...
// const PORT = 3000;
const PORT = process.env.PORT || 5010;

// Steg 5. Starta upp servern och lyssna på anrop...
app.listen(PORT, () =>
  console.log(`Server är startad och lyssnar på: ${PORT}`)
);

// // Steg 1. Importera alla beroenden
// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import products from "./routes/product-routes.mjs";
// import path from "path";
// import { fileURLToPath } from "url";

// // Steg 2. Konfigurera miljövariabler
// dotenv.config({ path: "./config/.env" });

// // Steg 3. Skapa Express-applikationen
// const app = express();

// // --------- MIDDLEWARE --------- //
// // CORS för säker API-åtkomst
// app.use(cors());

// // Middleware för att hantera JSON och URL-enkodade data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routing för produkt-API
// app.use("/api/v1/products", products);

// // Statisk filserver för publika filer
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, "public")));

// // --------- FELHANTERING --------- //
// // Hantera icke-existerande endpoints
// app.use((req, res, next) => {
//   res.status(404).json({
//     success: false,
//     message: "Endpoint not found",
//   });
// });

// // Global felhantering
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     success: false,
//     message: "Something went wrong on the server",
//     error: err.message,
//   });
// });

// // ------------------------------ //

// // Steg 4. Miljövariabler och port
// const PORT = process.env.PORT || 5010;

// // Steg 5. Starta upp servern
// app.listen(PORT, () =>
//   console.log(`✅ Server is running on http://localhost:${PORT}`)
// );
