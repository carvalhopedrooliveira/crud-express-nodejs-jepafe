import express from "express";
import querystring from "querystring";

const router = express.Router();

// router.get("/all", async (req, res) => {
//   const products = await fetch("https://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then((data) => res.json(data));
//   return res.render("index", { title: "Express 2", products: products });
// });

// router.get("/products", async (req, res) => {
//   const products = await fetch(
//     `https://fakestoreapi.com/products?limit=${req.params.limit}`,
//   )
//     .then((response) => response.json())
//     .then((data) => res.json(data));
//   return res.render("index", { title: "Express 2", products: products });
// });

router.get("/products", async (req, res) => {
  const queryParams = querystring.stringify(req.query);
  try {
    const products = await fetch(
      `https://fakestoreapi.com/products?${queryParams}`,
    )
      .then((response) => response.json())
      .then((data) => res.json(data));
    return res.status(200).json({ success: true, products: products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
});

router.get("/products/:id", async (req, res) => {
  const product = await fetch(
    `https://fakestoreapi.com/products/${req.params.id}`,
  )
    .then((response) => response.json())
    .then((data) => res.json(data));
  return res.render("index", { title: "Express 2", product: product });
});

export default router;
