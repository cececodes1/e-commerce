import React from 'react';
import ProductCard from './ProductCard'; 

const ProductList = ({ products, onDelete }) => {
  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} onDelete={onDelete} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;