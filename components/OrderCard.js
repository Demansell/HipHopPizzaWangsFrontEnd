import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleOrder } from '../api/order';

function OrderCard({ orderObj }) {
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
      <Link href={`/orders/${orderObj.id}`} passHref>
        <Button variant="primary" type="button" className="copy-btn"> View Order </Button>
      </Link>
      <Link href={`/orders/edit/${orderObj.id}`} passHref>
        <Button variant="info">Edit Order</Button>
      </Link>      <Button variant="danger" type="button" className="copy-btn" onClick={deleteThisOrder}> Delete </Button>
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
