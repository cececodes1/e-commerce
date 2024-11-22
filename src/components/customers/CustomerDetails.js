import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await api.get(`/customers/${id}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };
    fetchCustomer();
  }, [id]);

  if (!customer) return <p>Loading customer details...</p>;

  const handleDelete = async () => {
    try {
      await api.delete(`/customers/${id}`);
      alert("Customer deleted successfully!");
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div>
      <h2>{customer.name}</h2>
      <p>Email: {customer.email}</p>
      <p>Phone: {customer.phone}</p>
      <button onClick={handleDelete}>Delete Customer</button>
    </div>
  );
};

export default CustomerDetails;
