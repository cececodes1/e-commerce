import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/customers" element={<CustomerPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  </Router>
);

export default App;
