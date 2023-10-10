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
  fetch(`https://localhost:7011/pi/ItembyID/${Id}`, {
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

export {
  getAllItems,
  getSingleItems,
  deleteSingleItem,
};
