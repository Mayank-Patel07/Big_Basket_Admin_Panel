import React, { useEffect } from "react";
import potato from "../assets/potato.jpeg";
import "../Product/Product.css";
import axios from "axios";
import { useState } from "react";
import { Helix } from "ldrs/react";
import "ldrs/react/Helix.css";
import { Spiral } from "ldrs/react";
import "ldrs/react/Spiral.css";

export default function ProductList() {
  // State to hold product data
  const [products, setproducts] = useState([]);

  // Fetch products from the API
  // This function fetches the product data from the API and sets it to the state
  useEffect(() => {
    const fetch_data = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/api/products");
        setproducts(res.data);
        // console.log(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
        alert("Error fetching data from server");
      }
    };
    fetch_data();
  }, []);

  return (
    <>
      {/* <pre>{JSON.stringify(products)}</pre> */}
      <div className="container mt-2">
        <div className="container">
          <h2 style={{ color: "rgb(0, 197, 88)" }}>Products Page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            iure eos nobis! Aut porro explicabo ex, tenetur nesciunt quis
            laboriosam delectus nulla mollitia eveniet, est odit quia
            voluptatibus, soluta tempore. Facere nobis odit repellendus quasi,
            nihil harum iure et deserunt ullam quae ipsa id molestias ad
            repellat officia ab laboriosam corporis.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 main">
              <div className="card-container">
                {products.length > 0 ? (
                  products.map((product) => {
                    return (
                      <div
                        className="card"
                        key={product._id}
                        style={{ width: "14rem" }}
                      >
                        <img
                          className="card-img-top"
                          src={product.image}
                          alt="Card image cap"
                          style={{ height: "12rem" }}
                        />
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item text-center">
                            Name : {product.name}
                          </li>
                          <li className="list-group-item text-center">
                            Price : ₹{product.price}
                          </li>
                          <li className="list-group-item text-center">
                            Qty : {product.qty}
                          </li>
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center m-auto ">
                    {/* <Spiral size="60" speed="0.9" color="black" /> */}
                    <Helix
                      size="120"
                      className="mt-2"
                      speed="2.9"
                      color="green"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
