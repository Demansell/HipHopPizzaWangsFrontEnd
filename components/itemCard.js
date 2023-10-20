import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteSingleItem } from '../api/items';

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
        Item Name: {itemObj?.name}
      </Card.Text>
      <Card.Text>
        Item Price: ${itemObj?.price}
      </Card.Text>
      <Link href={`/items/${itemObj.id}`} passHref>
        <Button variant="primary" type="button" className="copy-btn"> View Item Details </Button>
      </Link>
      <Link href={`/items/edit/${itemObj.id}`} passHref>
        <Button variant="info">Edit Item</Button>
      </Link>
      <Button variant="danger" type="button" className="copy-btn" onClick={deleteThisItem}> Delete </Button>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    content: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
