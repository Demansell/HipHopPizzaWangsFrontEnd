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
              <h1>{itemDetails.name} Details</h1> 
              <h4>Item Price: ${itemDetails.price}</h4>
              <h4> Item description: {itemDetails.description}</h4>
            </div>
          </div>
        </div>
      </div>
  );
}
