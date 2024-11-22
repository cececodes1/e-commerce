import React, { useState } from 'react';
import PlaceOrderForm from '../components/orders/PlaceOrderForm';
import OrdersList from '../components/orders/OrdersList';
import './OrdersPage.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]); // State to hold orders
  const products = [
    { id: 1, name: 'Lip Gloss A' },
    { id: 2, name: 'Lip Gloss B' },
  ];

  const placeOrder = (newOrder) => {
    setOrders([...orders, newOrder]); 
  };

  return (
    <div className="orders-page">
      <h1>Orders</h1>
      <p>Here you can view all the orders made by customers.</p>
      <PlaceOrderForm products={products} onPlaceOrder={placeOrder} />
      <OrdersList orders={orders} /> 
    ```javascript
    </div>
  );
};

export default OrdersPage;