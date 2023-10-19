import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemForm from '../../../components/forms/ItemForm';
import { getSingleItems } from '../../../api/items';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleItems(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<ItemForm itemObj={editItem} />);
}
