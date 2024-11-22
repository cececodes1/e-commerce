import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductList from '../components/products/ProductList'; 
import ProductForm from '../components/products/ProductForm'; 
import './ProductsPage.css'; 

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // State to hold products

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Add new product to the list
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Manage Products</h1>
      
      <Row className="mb-4">
        <Col md={6} className="offset-md-3">
          <ProductForm onAddProduct={addProduct} /> {/* Pass the addProduct function */}
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2 className="text-center mb-3">Product List</h2>
          <ProductList products={products} /> {/* Pass the products to the ProductList */}
        </Col>
      </Row>
      
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="primary" size="lg" className="add-product-btn">
            Add New Product
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsPage;