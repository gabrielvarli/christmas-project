import products from "../data/products.mjs";

const fetchData = (endpoint) => {
  let data;
  const response = {
    status: "Not found",
    statusCode: 404,
    data: null,
    error: null,
  };

  try {
    if (typeof endpoint === "number") {
      const product = products.find(
        (product) => product.id === parseInt(endpoint)
      );
      if (product !== undefined) {
        data = product;
        response.status = "Success";
        response.statusCode = 200;
        response.data = data;
      }
      if (product === undefined) {
        response.error = "Could not find the product";
      }
    } else {
      data = products;
      response.status = "Success";
      response.statusCode = 200;
      response.data = data;
    }
  } catch (error) {
    response.error = "Could not find any products";
  }

  return response;
};

export default fetchData;

// import products from "../data/products.mjs";

// /**
//  * Fetch data based on the endpoint provided.
//  * @param {number|string} endpoint - Endpoint identifier; number for a specific product, otherwise fetch all.
//  * @returns {object} Response object containing status, data, or error message.
//  */
// const fetchData = (endpoint) => {
//   const response = {
//     status: "Error",
//     statusCode: 500,
//     data: null,
//     error: null,
//   };

//   try {
//     // Hantera specifik produkt baserat på numerisk endpoint
//     if (typeof endpoint === "number") {
//       const product = products.find((product) => product.id === endpoint);

//       if (product) {
//         response.status = "Success";
//         response.statusCode = 200;
//         response.data = product;
//       } else {
//         response.status = "Not Found";
//         response.statusCode = 404;
//         response.error = `Product with ID ${endpoint} not found.`;
//       }
//     } else {
//       // Hantera alla produkter
//       response.status = "Success";
//       response.statusCode = 200;
//       response.data = products;
//     }
//   } catch (error) {
//     console.error("Fetch Data Error:", error);
//     response.status = "Error";
//     response.statusCode = 500;
//     response.error = "An unexpected error occurred while fetching data.";
//   }

//   return response;
// };

// export default fetchData;
