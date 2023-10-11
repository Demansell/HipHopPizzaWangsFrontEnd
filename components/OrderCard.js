import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteSingleOrder } from '../api/order';

// import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';

function OrderCard({ orderObj }) {
  // const router = useRouter();
  // const [singleOrder, setSingleOrder] = useState();
  // const { user } = useAuth();

  const deleteThisOrder = () => {
    if (window.confirm(`Delete ${orderObj.customerName}?`)) {
      deleteSingleOrder(orderObj.id).then(() => console.log(orderObj));
    }
  };

  /* useEffect(() => {
    getSingleOrders(orderObj?.id).then((data) => setSingleOrder(data));
  }, [orderObj]);
  const viewOrderDetails = () => {
    // console.log('Navigating to post details for post ID:', singlePost?.post?.id);
    router.push(`/${singleOrder?.id}`);
  };
  */
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
