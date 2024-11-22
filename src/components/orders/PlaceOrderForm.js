import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlaceOrderForm = ({ products, onPlaceOrder }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      product: selectedProduct,
      customer: customerName,
      orderDate,
      quantity,
    };
    onPlaceOrder(newOrder); // Call the function to place the order
    // Reset form fields
    setSelectedProduct('');
    setCustomerName('');
    setOrderDate('');
    setQuantity(1);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProduct">
        <Form.Label>Select Product</Form.Label>
        <Form.Control
          as="select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          required
        >
          <option value="">Choose a product...</option>
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formCustomerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formOrderDate">
        <Form.Label>Order Date</Form.Label>
        <Form.Control
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Place Order
      </Button>
    </Form>
  );
};

export default PlaceOrderForm;