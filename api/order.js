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

const deleteSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/Order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const postOrder = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7011/api/Order/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (Id, payload) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/Order/${Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7011/isclosedOrders', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllOrders,
  getSingleOrders,
  deleteSingleOrder,
  postOrder,
  updateOrder,
  getClosedOrders,
};
