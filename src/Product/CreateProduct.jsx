// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import { Spiral } from "ldrs/react";
// import "ldrs/react/Spiral.css";

// export default function CreateProduct() {
//   let buttonPur = "background: #1A001A";
//   let buttonST = "background: #092509";
//   let navigate = useNavigate();

//   const [products, setproducts] = useState({
//     name: "",
//     image: "",
//     price: "",
//     qty: "",
//     info: "",
//   });

//   const [New_errors, setErrors] = useState({});

//   // updateImage
//   let updateImage = async (event) => {
//     let imageFile = event.target.files[0];
//     let base64Image = await convertBase64String(imageFile);
//     setproducts({
//       ...products,
//       image: base64Image,
//     });
//   };

//   let convertBase64String = (imageFile) => {
//     return new Promise((resolve, reject) => {
//       let fileReader = new FileReader();
//       fileReader.readAsDataURL(imageFile);
//       fileReader.addEventListener("load", () => {
//         if (fileReader.result) {
//           resolve(fileReader.result);
//         } else {
//           reject("Error Occurred");
//         }
//       });
//     });
//   };

//   const validate = () => {
//     let errors = {};
//     if (!products.name) {
//       errors.name = "Product name is required";
//     } else if (!products.image) {
//       errors.image = "Product image is required";
//     } else if (!products.price) {
//       errors.price = "Product price is required";
//     } else if (!products.qty) {
//       errors.qty = "Product quantity is required";
//     } else if (!products.info) {
//       errors.info = "Product info is required";
//     }
//     return errors;
//   };

//   let update = (e) => {
//     setproducts({
//       ...products,
//       [e.target.name]: e.target.value,
//     });
//   };

//   let dataSubmit = (e) => {
//     e.preventDefault();
//     if (Object.keys(validate()).length > 0) {
//       setErrors(validate());
//     } else {
//       let url = "http://127.0.0.1:5000/api/products";
//       axios
//         .post(url, products)
//         .then((res) => {
//           console.log("Data has been submitted successfully");
//           navigate("/productlist");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <>
//       {/* <pre>{JSON.stringify(products)}</pre> */}
//       <div className="container mt-2">
//         <div className="container ">
//           <h2 className="" style={{ color: "rgb(0, 197, 88)" }}>
//             Create New Product
//           </h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet
//             veniam fugit consequatur molestiae rem reiciendis eos officia
//             suscipit? Distinctio repellat sunt praesentium ab cupiditate.
//           </p>
//         </div>
//         <div className="container ">
//           <div className="row">
//             <div className="card" style={{ width: "20rem" }}>
//               <h3 className="text-start h4  pro pl-1">New Product</h3>
//               <form onSubmit={dataSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     value={products.name}
//                     name="name"
//                     onChange={update}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="Product Name"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <div className="input-group">
//                     <div className="custom-file">
//                       <input
//                         type="file"
//                         name="image"
//                         // value={products.image}
//                         className="custom-file-input"
//                         id="inputGroupFile01"
//                         onChange={updateImage}
//                         placeholder="Product Image"
//                       />
//                       <label
//                         className="custom-file-label"
//                         for="inputGroupFile01"
//                       >
//                         Choose file
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="number"
//                     value={products.price}
//                     name="price"
//                     min="1"
//                     onChange={update}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="Enter a Price"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="number"
//                     value={products.qty}
//                     name="qty"
//                     min="1"
//                     onChange={update}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="Avaliable Quantity"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     rows="2"
//                     cols="30"
//                     className="form-control"
//                     value={products.info}
//                     name="info"
//                     onChange={update}
//                     id="exampleInputEmail1"
//                     aria-describedby="emailHelp"
//                     placeholder="General Info"
//                   ></textarea>
//                 </div>
//                 <div className="m-3">
//                   <input
//                     type="submit"
//                     value="submit"
//                     className=" button-create"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function CreateProduct() {
  // Use this navigate function to redirect to the product list end
  const navigate = useNavigate();

  // Material UI Component
  // const VisuallyHiddenInput = styled('input')({
  //   clip: 'rect(0 0 0 0)',
  //   clipPath: 'inset(50%)',
  //   height: 1,
  //   overflow: 'hidden',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   whiteSpace: 'nowrap',
  //   width: 1,
  // });

  // State to hold product data
  const [products, setProducts] = useState({
    name: "",
    image: "",
    price: "",
    qty: "",
    info: "",
  });

  const updateImage = async (event) => {
    const imageFile = event.target.files[0];
    const base64Image = await convertBase64String(imageFile);
    setProducts({ ...products, image: base64Image });
  };

  const convertBase64String = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Function for updating the state of the form fields
  const update = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };

  // State to hold validation errors
  const [errors, setErrors] = useState({});

  // Function to validate the form fields
  // It checks if the fields are empty or not and returns an object with error messages
  // If there are no errors, it returns an empty object
  const validate = () => {
    const newErrors = {};
    if (!products.name.trim()) newErrors.name = "Product name is required";
    if (!products.image) newErrors.image = "Product image is required";
    if (!products.price || products.price <= 0)
      newErrors.price = "Valid product price is required";
    if (!products.qty || products.qty <= 0)
      newErrors.qty = "Valid quantity is required";
    if (!products.info.trim()) newErrors.info = "Product info is required";
    return newErrors;
  };

  // Function to handle form submission
  // It prevents the default form submission behavior and validates the form fields
  // If there are validation errors, it sets the errors state
  // If there are no errors, it sends a POST request to the server with the product data
  // If the request is successful, it redirects to the product list page
  const dataSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const fetch_data = () => {
        try {
          const res = axios.post(
            "http://127.0.0.1:5000/api/products",
            products
          );
          // console.log("Data has been submitted successfully", res.data);
          navigate("/productlist");
        } catch (error) {
          console.log(error);
        }
      };
      fetch_data();
    }
  };

  return (
    <div className="container mt-3">
      <h2 className="text-success">Create New Product</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet veniam
        fugit consequatur molestiae rem reiciendis eos officia suscipit?
        Distinctio repellat sunt praesentium ab cupiditate. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Libero alias architecto deserunt
        assumenda voluptas excepturi animi quis, placeat exercitationem ipsam.
      </p>
      <div className="form_data" style={{ width: "fit-content" }}>
        <form onSubmit={dataSubmit} className="" noValidate>
          <h3 className="text-start h4  pro pl-1">New Product</h3>

          <div className="form-group">
            <input
              type="text"
              name="name"
              value={products.name}
              onChange={update}
              className="form-control"
              placeholder="Product Name"
            />
            {errors.name && (
              <small className="text-danger">{errors.name}</small>
            )}
          </div>

          <div className="form-group">
            <input
              type="file"
              name="image"
              className="form-control"
              onChange={updateImage}
            />

            {/* <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={updateImage}
                multiple
              />
            </Button> */}

            {errors.image && (
              <small className="text-danger">{errors.image}</small>
            )}
          </div>

          <div className="form-group">
            <input
              type="number"
              name="price"
              value={products.price}
              onChange={update}
              min="1"
              className="form-control"
              placeholder="Price"
            />
            {errors.price && (
              <small className="text-danger">{errors.price}</small>
            )}
          </div>

          <div className="form-group">
            <input
              type="number"
              name="qty"
              value={products.qty}
              onChange={update}
              min="1"
              className="form-control"
              placeholder="Quantity"
            />
            {errors.qty && <small className="text-danger">{errors.qty}</small>}
          </div>

          <div className="form-group">
            <textarea
              name="info"
              value={products.info}
              onChange={update}
              className="form-control"
              rows="3"
              placeholder="Product Information"
            ></textarea>
            {errors.info && (
              <small className="text-danger">{errors.info}</small>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
