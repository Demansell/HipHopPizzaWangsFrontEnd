/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrders } from '../../api/order';
import ItemCard from '../../components/itemCard';
import { getOrderItems } from '../../api/items';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
export default function orderDetails() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState({});
  const [items, setItems] = useState([]);
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleOrders(id).then (setOrderDetails);
  }, [id]);

  useEffect(() => {
    getOrderItems(id).then(setItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <div>
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>Orders</h1> {orderDetails.customerName} 
              <p style={{ marginButton: '100px' }}>
                {orderDetails.customerName} 
                {orderDetails.customerEmail}
                {orderDetails.customerPhoneNumber}
              </p>
              <Link href="/items/new" passHref>
        <Button> Add A Item</Button>
      </Link>
      <div className="CommentCardShow d-flex flex-wrap" style={{ marginTop: '20px' }}>
        {items.map((item) => (
          <ItemCard key={item.orderId} itemObj={item} onUpdate={getOrderItems} />
        ))}
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
