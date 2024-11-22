import React from 'react';

const OrdersList = () => {
  const orders = [
    { id: 1, customer: 'John Doe', total: '$100', status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', total: '$200', status: 'Pending' },
  ];

  return (
    <div>
      <h2>Orders List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;