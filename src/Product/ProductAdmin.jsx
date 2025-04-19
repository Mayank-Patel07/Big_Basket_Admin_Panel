import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";

export default function ProductAdmin() {

  // State to hold product data
  const [products, setProducts] = useState([]);

  // Use this to navigate programmatically
  const navigate = useNavigate();

  // Fetch products from the API
  // This function fetches the product data from the API and sets it to the state
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/products");
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  // Fetch products when the component mounts
  // This useEffect hook runs once when the component mounts to fetch the product data
  useEffect(() => {
    fetchProducts();
  }, []);

  // Function to handle delete action
  // This function deletes a product by its ID and refreshes the product list
  // After deletion, it calls fetchProducts to refresh the list
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container mt-2">
      <div className="container">
        <h2 style={{ color: "rgb(0, 197, 88)" }}>Products Details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
          veniam fugit consequatur molestiae rem reiciendis eos officia
          suscipit? Distinctio repellat sunt praesentium ab cupiditate.
        </p>
        <button
          type="button"
          style={{
            background:
              "linear-gradient(to top right, #092509 0%, #0B9D17 100%)",
          }}
          className="btn text-white"
        >
          <Link to="/create" className="text-white">
            Create New
          </Link>
        </button>

        <div className="table-responsive mt-4">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">SNO</th>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length <= 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    <Helix size="120" speed="2.9" color="green" />
                  </td>
                </tr>
              ) : (
                products.map((product, index) => (
                  <tr key={product._id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>₹{product.price}</td>
                    <td>{product.qty}kgs</td>
                    <td>
                      <div>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm m-1"
                          style={{
                            background:
                              "linear-gradient(to right, #1A001A 0%, #6A006A 100%)",
                          }}
                          onClick={() => navigate(`/update/${product._id}`)}
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm m-1"
                          style={{
                            background:
                              "linear-gradient(to right, #310000 0%, #D30000 100%)",
                          }}
                          onClick={() => handleDelete(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
