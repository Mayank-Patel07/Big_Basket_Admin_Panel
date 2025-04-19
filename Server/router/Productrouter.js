const express = require("express");
const router = express.Router();
const Product = require("../models/Products");
const { body, validationResult } = require("express-validator");

// Get all Products
// This route is used to get all products from the database
router.get("/products", async (req, res) => {
  try {
    // Find all products in the database and return them as a JSON response
    const products = await Product.find();
    // res.status(200).json(products);
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Get single Product
// This route is used to get a single product by its ID
router.get("/products/:id", async (req, res) => {
  try {
    // Find a product by its ID in the database and return it as a JSON response
    const product = await Product.findById(req.params.id);
    // If the product is not found, return a 404 error response
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Delete Product
// This route is used to delete a product by its ID
router.delete("/products/:id", async (req, res) => {
  try {
    // Find a product by its ID in the database and delete it
    const product = await Product.findByIdAndDelete(req.params.id);
    // If the product is not found, return a 404 error response
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ product, message: "Product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Create Product
// This route is used to create a new product
router.post(
  "/products",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("image").notEmpty().withMessage("Image is required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("qty").notEmpty().withMessage("Quantity is required"),
    body("info").notEmpty().withMessage("Infomation is required"),
  ],
  async (req, res) => {
    // Validating the request body using validator
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // If there are no errors, proceed to create the product
    // Create a new product object using the request body
    // and save it to the database
    try {
      let product = {
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        qty: req.body.qty,
        info: req.body.info,
      };

      product = new Product(product);
      // Save the product to the database
      product = await product.save();
      // If the product is saved successfully, send a response with the product data
      res.status(200).json(product);
      // res.status(200).json({msg:"Ok"});
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);

// Update Single Product

router.put("/products/:id", async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    let Update_product = {
      name: req.body.name,
      image: req.body.image,
      price: req.body.price,
      qty: req.body.qty,
      info: req.body.info,
    };

    product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: Update_product,
      },
      { new: true }
    );
    res.status(200).json({
      message: `Update Single product with id ${req.params.id}`,
      product,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
