import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleOrder } from '../api/order';

// import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';

function OrderCard({ orderObj }) {
  // const { user } = useAuth();
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${orderObj.customerName}?`)) {
      deleteSingleOrder(orderObj.id).then(() => console.log(orderObj));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Text>
        {orderObj?.customerName}
      </Card.Text>
      <Card.Text>
        {orderObj?.customerEmail}
      </Card.Text>
      <Card.Text>
        {orderObj?.customerPhoneNumber}
      </Card.Text>
      <Button variant="primary" type="button" className="copy-btn"> View Order </Button>
      <Button variant="warning" type="button" className="copy-btn"> Edit Order </Button>
      <Button variant="danger" type="button" className="copy-btn" onClick={deleteThisOrder}> Delete </Button>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    customerName: PropTypes.string,
    id: PropTypes.number,
    customerEmail: PropTypes.string,
    customerPhoneNumber: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
