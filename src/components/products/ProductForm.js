import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProductForm = ({ onSubmit }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: productName, price: productPrice });
    setProductName('');
    setProductPrice('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProductPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter product price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;