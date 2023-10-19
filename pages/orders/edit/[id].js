import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleOrders } from '../../../api/order';
import OrderForm from '../../../components/forms/OrderForm';

export default function EditOrder() {
  const [editOrder, setEditOrder] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleOrders(id).then(setEditOrder);
  }, [id]);
  console.log(setEditOrder);
  // TODO: pass object to form
  return (<OrderForm orderObj={editOrder} />);
}
