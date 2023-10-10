import { useEffect, useState } from 'react';
import { getAllItems } from '../../api/items';
import ItemCard from '../../components/itemCard';

function ItemPage() {
  const [items, setItems] = useState([]);

  const getItems = () => {
    getAllItems().then(setItems);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '22vh',
          padding: '7px',
          maxWidth: '100px',
          margin: '0 auto',
        }}
      >
        <h1>All Items</h1>

      </div>
      <div className="d-flex justify-content-between">
        {items?.map((item) => (
          <ItemCard itemObj={item} />))}
      </div>
    </>
  );
}

export default ItemPage;
