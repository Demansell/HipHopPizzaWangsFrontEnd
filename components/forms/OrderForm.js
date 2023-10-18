import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { getAllItems } from '../../api/items';
import { postOrder, updateOrder } from '../../api/order';

const initialState = {
  customerName: '',
  customerEmail: '',
  customerPhoneNumber: '',
  isOpen: false,
  orderTotal: 0,
  orderType: '',
  feedBack: false,
  tip: 0,
  id: null,
};

function OrderForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getAllItems(user.uid).then(setItems);

    if (obj.id) setFormInput(obj);
  }, [obj, user]);

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
    if (obj.id > 0) {
      updateOrder(formInput)
        .then(() => router.push(`/orders/${obj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      console.log(payload);
      postOrder(payload);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Order</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Customer Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="customerName"
          value={formInput.customerName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Customer Email" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter Customer Email"
          name="customerEmail"
          value={formInput.customerEmail}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Customer Phone Number" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Customer Phone Number"
          name="customerPhoneNumber"
          value={formInput.customerPhoneNumber}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Order Total" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Order Total"
          name="orderTotal"
          value={formInput.orderTotal}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Order Type" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Order Type"
          name="orderType"
          value={formInput.orderType}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Tip" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Tip"
          name="tip"
          value={formInput.tip}
          onChange={handleChange}
        />
      </FloatingLabel>

      <Form.Check
        type="switch"
        id="custom-switch"
        label="Click if Order is closed"
        onChange={() => {
          // eslint-disable-next-line no-param-reassign
          obj.isOpen = !obj.isOpen;
          console.log(obj.isOpen);
        }}
      />

      <Form.Check
        type="switch"
        id="custom-switch"
        label="Click if you enjoyed the service"
        onChange={() => {
          // eslint-disable-next-line no-param-reassign
          obj.feedBack = !obj.feedBack;
          console.log(obj.feedBack);
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Order</Button>
    </Form>
  );
}

OrderForm.propTypes = {
  obj: PropTypes.shape({
    customerName: PropTypes.string,
    customerEmail: PropTypes.string,
    customerPhoneNumber: PropTypes.string,
    isOpen: PropTypes.bool,
    orderTotal: PropTypes.number,
    orderType: PropTypes.string,
    feedBack: PropTypes.bool,
    tip: PropTypes.number,
    id: PropTypes.number,
  }),
};

OrderForm.defaultProps = {
  obj: initialState,
};

export default OrderForm;
