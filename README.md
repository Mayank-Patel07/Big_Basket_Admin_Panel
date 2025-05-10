# 🛒 BigBasket Admin Panel

The **BigBasket Admin Panel** is a full-featured, responsive web application built using the **MERN stack** (MongoDB, Express, React, Node.js) and styled with **React Bootstrap** or **Material-UI (MUI)**. It enables administrators to manage products efficiently through a clean and responsive dashboard interface.

---

## 📝 Project Description

This admin panel allows the BigBasket team to manage all product-related operations:

- **🛒 Product Management:**  
  - Upload new products with images, pricing, categories, and descriptions  
  - Edit and update existing product details  
  - Delete products with confirmation  
  - Real-time UI updates via Axios and REST APIs

- **📱 Responsive Design:**  
  - Built with **React Bootstrap** or **MUI** for a seamless experience on desktops, tablets, and mobile devices

- **🧩 Modular Architecture:**  
  - Organized React folders for scalable frontend development  
  - Server built with Express and Mongoose for robust backend functionality

---

## 🚀 Technologies Used

### 🧩 Stack
- **MongoDB** – Database
- **Express.js** – Backend API framework
- **React.js (with Vite)** – Frontend SPA
- **Node.js** – Backend runtime

### 📚 Libraries & Tools
- **Axios** – API requests from frontend
- **React Hook Form** – Simplified form handling and validation
- **Mongoose** – MongoDB object modeling
- **React Bootstrap** or **MUI** – Component libraries for UI

---

## 📁 Project Structure

```bash
bigbasket-admin/
├── node_modules/
├── public/
├── server/                      # Backend server (Node.js + Express)
│   ├── models/                  # Mongoose schemas
│   └── routes/                  # Express route handlers
├── src/                         # React frontend (Vite)
│   ├── assets/                  # Static files and images
│   ├── product/                 # Product-related pages/components
│   ├── root/                    # Shared layouts/components
│   ├── services/                # Axios and API interaction
│   ├── App.jsx
│   └── main.jsx
├── .env
├── index.html
├── package.json
└── README.md
