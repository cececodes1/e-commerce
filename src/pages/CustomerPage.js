import React from 'react';
import CustomerForm from '../components/customers/CustomerForm';
import CustomerList from '../components/customers/CustomerList';
import './CustomerPage.css'; 

const CustomerPage = () => {
  return (
    <div className="customer-page">
      <header className="header">
        <h1 className="title">Customer Management</h1>
        <p className="subtitle">Manage your customers effectively</p>
      </header>
      <div className="content">
        <div className="form-section">
          <h2>Add New Customer</h2>
          <CustomerForm />
        </div>
        <div className="list-section">
          <h2>Customer List</h2>
          <CustomerList />
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;