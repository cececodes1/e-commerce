import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <Container className="text-center mt-5">
      {/* Hero Section */}
      <Row className="hero-section">
        <Col>
          <h1 className="display-4">CeCe's Lip Gloss Collection</h1>
          <p className="lead">Explore our range of luxurious lip glosses.</p>
          <Button variant="primary" size="lg" className="shop-now-btn">
            Shop Now
          </Button>
        </Col>
      </Row>

      {/* Featured Products Section */}
      <Row className="mt-5">
        <Col>
          <h2>Featured Products</h2>
        </Col>
      </Row>

      {/* About Section */}
      <Row className="mt-5 about-section">
        <Col>
          <h2>About Us</h2>
          <p>Discover the beauty of our lip glosses, crafted with love and care.</p>
        </Col>
      </Row>

      {/* Newsletter Signup Section */}
      <Row className="mt-5">
        <Col>
          <h2>Stay Updated</h2>
          <p>Sign up for our newsletter to receive exclusive offers.</p>
          <input type="email" placeholder="Your Email" className="newsletter-input" />
          <Button variant="success" className="subscribe-btn">Subscribe</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;