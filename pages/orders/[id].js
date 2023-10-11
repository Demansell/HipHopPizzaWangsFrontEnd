/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrders } from '../../api/order';
export default function orderDetails() {
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState({});
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleOrders(id).then (setOrderDetails);
  }, [id]);
  

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
            </div>
          </div>
        </div>
      </div>
  );
}
