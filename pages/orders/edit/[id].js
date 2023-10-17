import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrders } from '../../../api/order';
import OrderForm from '../../../components/forms/OrderForm';

export default function EditOrder() {
  const [editOrder, setEditOrder] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { id } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleOrders(id).then(setEditOrder);
  }, [id]);

  // TODO: pass object to form
  return (<OrderForm itemObj={editOrder} />);
}
