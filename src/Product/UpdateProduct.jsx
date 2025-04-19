import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct() {

  // Get the product ID from the URL parameters
  // This ID is used to fetch the specific product to be updated
  // useParams is a hook that returns an object of key/value pairs of URL parameters
  const { id } = useParams();

  // useNavigate is a hook that returns a function that lets you navigate programmatically
  const navigate = useNavigate();

  // State to hold the product data
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: "",
  });

  // Fetch the product to edit
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:5000/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Failed to fetch product:", err);
    }
  };

  // Fetch the product when the component mounts
  // This useEffect hook runs once when the component mounts to fetch the product data
  // The empty dependency array [] means this effect runs only once after the initial render
  useEffect(() => {
    fetchProduct();
  }, []);

  // Handle input changes
  // This function updates the product state when the user types in the input fields
  // It uses the spread operator to copy the existing product state and update the specific field
  // The name attribute of the input field is used as the key to update the corresponding value in the product state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await convertBase64(file);
    setProduct({ ...product, image: base64 });
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle form submission
  // This function is called when the form is submitted
  // It prevents the default form submission behavior and sends a PUT request to update the product
  // If the update is successful, it navigates back to the product list page
  // If there is an error, it logs the error to the console
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5000/api/products/${id}`, product);
      console.log("Product updated");
      navigate("/productlist");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed. Please try again." , err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 style={{ color: "rgb(0, 197, 88)" }}>Update Product</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px" }}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Product Name"
          />
        </div>

        <div className="form-group">
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-control"
          />
        </div>

        {/* {product.image && (
          <div className="mb-3">
            <img
              src={product.image}
              alt="Preview"
              style={{ width: "100px", height: "auto", borderRadius: "8px" }}
            />
          </div>
        )} */}

        <div className="form-group">
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Price"
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            name="qty"
            value={product.qty}
            onChange={handleChange}
            className="form-control"
            placeholder="Quantity"
          />
        </div>

        <div className="form-group">
          <textarea
            name="info"
            value={product.info}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Product Info"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </div>
  );
}
