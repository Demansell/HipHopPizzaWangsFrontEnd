const getAllItems = () => new Promise((resolve, reject) => {
  fetch('https://localhost:7011/items/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleItems = (Id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/ItembyID/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getItemsByOrderId = (Id) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/ItembyOrderID/${Id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleItem = (itemId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/Item/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const postItem = (payload) => new Promise((resolve, reject) => {
  fetch('https://localhost:7011/api/Item/', {
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

const updateItem = (id, payload) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/Items/${id}`, {
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

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/api/ItembyorderID/${orderId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllItems,
  getSingleItems,
  deleteSingleItem,
  postItem,
  updateItem,
  getItemsByOrderId,
  getOrderItems,
};
