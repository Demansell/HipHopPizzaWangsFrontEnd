/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItems } from '../../api/items';
export default function orderDetails() {
  const router = useRouter();
  const [itemDetails, setitemDetails] = useState({});
  // TODO: grab firebaseKey from url
  const { id } = router.query;
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleItems(id).then (setitemDetails);
  }, [id]);
  

  return (
    <div>
        <div className="body2" class="c2">
          <div class="b2">
            <span></span>
            <div class="c3">
              <h1>Item Details</h1> {itemDetails.name} 
              <p style={{ marginButton: '100px' }}>
                {itemDetails.id}
                {itemDetails.price}
                {itemDetails.description}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
