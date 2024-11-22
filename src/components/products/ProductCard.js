import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onDelete }) => {
  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="secondary">Edit</Button>
        <Button variant="danger" onClick={() => onDelete(product.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;