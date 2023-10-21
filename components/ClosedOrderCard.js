import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleOrder } from '../api/order';

function ClosedOrderCard({ closedOrderObj }) {
  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${closedOrderObj.customerName}?`)) {
      deleteSingleOrder(closedOrderObj.id).then(() => console.log(closedOrderObj));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Text>
        Order Total: {closedOrderObj.orderTotal}
      </Card.Text>
      <Card.Text>
        Order Type: {closedOrderObj?.orderType}
      </Card.Text>
      <Card.Text>
        Order Tip: {closedOrderObj?.tip}
      </Card.Text>
      <Card.Text>
        Payment Method: {closedOrderObj?.paymentMethod}
      </Card.Text>
      <Link href={`/closedorder/${closedOrderObj.id}`} passHref>
        <Button variant="primary" type="button" className="copy-btn"> View Total Rev </Button>
      </Link>
      <Button variant="danger" type="button" className="copy-btn" onClick={deleteThisOrder}> Delete </Button>
    </Card>
  );
}

ClosedOrderCard.propTypes = {
  closedOrderObj: PropTypes.shape({
    orderTotal: PropTypes.number,
    customerName: PropTypes.string,
    id: PropTypes.number,
    orderType: PropTypes.string,
    paymentMethod: PropTypes.string,
    tip: PropTypes.number,
  }).isRequired,
};

export default ClosedOrderCard;
