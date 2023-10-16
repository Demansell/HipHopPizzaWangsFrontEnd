const findUser = (uid) => new Promise((resolve, reject) => {
  fetch(`https://localhost:7011/checkuser/${uid}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default {
  findUser,
};
