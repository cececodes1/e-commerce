import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UpdateProductForm = ({ product, onUpdate }) => {
  const [productName, setProductName] = useState(product.name);
  const [productPrice, setProductPrice] = useState(product.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...product, name: productName, price: productPrice });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formProduct Price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Product
      </Button>
    </Form>
  );
};

export default UpdateProductForm;