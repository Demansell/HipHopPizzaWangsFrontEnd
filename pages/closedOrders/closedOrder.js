import { useEffect, useState } from 'react';
import { getClosedOrders } from '../../api/order';
import ClosedOrderCard from '../../components/ClosedOrderCard';

function OrderPage() {
  const [orders, setOrder] = useState([]);

  const getOrders = () => {
    getClosedOrders().then(setOrder);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>All Closed Orders</h1>

      </div>
      <div className="d-flex justify-content-between">
        {orders?.map((order) => (
          <ClosedOrderCard closedOrderObj={order} />))}
      </div>
    </>
  );
}

export default OrderPage;
