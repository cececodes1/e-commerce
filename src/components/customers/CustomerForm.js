import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../../api";

const CustomerForm = () => {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/customers", customer);
      alert("Customer added successfully!");
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">Add Customer</Button>
    </Form>
  );
};

export default CustomerForm;
