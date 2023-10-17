import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ItemForm from '../../../components/forms/ItemForm';
import { getSingleItems } from '../../../api/items';

export default function EditMember() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { id } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleItems(id).then(setEditItem);
  }, [id]);

  // TODO: pass object to form
  return (<ItemForm itemObj={editItem} />);
}
