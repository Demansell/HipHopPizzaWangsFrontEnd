import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { useAuth } from '../../utils/context/authContext';
import { getAllItems, postItem, updateItem } from '../../api/items';

const initialState = {
  name: '',
  description: '',
  price: '',
  id: null,
};
// this is a comment
function ItemForm({ itemObj, orderId }) {
  const [items, setItems] = useState([]);
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllItems(user.uid).then(setItems);

    if (itemObj.id) setFormInput(itemObj);
  }, [itemObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(items);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemObj > 0) {
      updateItem(formInput)
        .then(() => router.push(`/items/${itemObj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      console.log(payload);
      postItem(payload);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingInput1" label="Enter Comment Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Comment Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Enter Comment Price" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Comment Description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput1" label="Enter Item Price" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Item Price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <div>
        <Button type="submit" variant="outline-warning" style={{ marginBottom: '30px' }}>{orderId ? 'Update' : 'Post'} Your Menu Item</Button>
      </div>
    </Form>
  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }),
  // eslint-disable-next-line react/require-default-props
  orderId: PropTypes.number,
  // userId: PropTypes.number,

};

ItemForm.defaultProps = {
  itemObj: initialState,
  // eslint-disable-next-line react/default-props-match-prop-types
  postId: PropTypes.number,
  // userId: PropTypes.number,
};

export default ItemForm;
