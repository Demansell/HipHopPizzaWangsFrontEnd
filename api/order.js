const getAllOrders = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7011/Order/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleOrders = (Id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/OrdersbyID/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleOrder = (orderId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/Order/${orderId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllOrders,
  getSingleOrders,
  deleteSingleOrder,
};
