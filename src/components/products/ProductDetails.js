import React from 'react';

const ProductDetails = ({ product, onDelete }) => {
  if (!product) return <p>Loading...</p>;

  const handleDelete = () => {
    onDelete(product.id);
  };

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <Button variant="danger" onClick={handleDelete}>
        Delete Product
      </Button>
    </div>
  );
};

export default ProductDetails;