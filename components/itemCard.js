import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleItem } from '../api/items';
// import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';

function ItemCard({ itemObj }) {
  // const { user } = useAuth();
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisItem = () => {
    if (window.confirm(`Delete ${itemObj.content}?`)) {
      deleteSingleItem(itemObj.id).then(() => console.log(itemObj));
    }
  };

  return (
    <Card style={{ width: '18rem' }}>

      <Card.Text>
        {itemObj?.name}
      </Card.Text>
      <Button variant="primary" type="button" className="copy-btn"> View Item </Button>
      <Button variant="warning" type="button" className="copy-btn"> Edit Item </Button>
      <Button variant="danger" type="button" className="copy-btn" onClick={deleteThisItem}> Delete </Button>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default ItemCard;