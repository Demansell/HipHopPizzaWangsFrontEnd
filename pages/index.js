import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.fbUser.displayName}! </h1>

      <Link href="/orders/order" passHref>
        <Button variant="info">View all Orders</Button>
      </Link>
      <Link href="/orders/new" passHref>
        <Button variant="warning">Create A Order</Button>
      </Link>
      <Link href="/closedOrders/closedOrder" passHref>
        <Button variant="success">Total Revenue</Button>
      </Link>
    </div>
  );
}

export default Home;
