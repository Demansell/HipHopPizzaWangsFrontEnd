import React from 'react';
import ItemForm from '../../components/forms/ItemForm';

function newItem() {
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
        <ItemForm />
      </div>
    </>
  );
}

export default newItem;
