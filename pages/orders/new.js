import React from 'react';
import OrderForm from '../../components/forms/OrderForm';

function newOrder() {
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <OrderForm />
      </div>
    </>
  );
}

export default newOrder;
