import { useEffect, useState } from 'react';
import { getAllOrders } from '../../api/order';
import OrderCard from '../../components/OrderCard';

function OrderPage() {
  const [orders, setOrder] = useState([]);

  const getOrders = () => {
    getAllOrders().then(setOrder);
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
        <h1>All Orders</h1>

      </div>
      <div className="d-flex justify-content-between">
        {orders?.map((order) => (
          <OrderCard orderObj={order} />))}
      </div>
    </>
  );
}

export default OrderPage;
