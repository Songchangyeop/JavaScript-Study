'use strict';

function loginUser(id, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        resolve(id);
      } else {
        reject(new Error('not found'));
      }
    }, 2000);
  });
}

function getRoles(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === 'ellie') {
        resolve({ name: 'ellie', role: 'admin' });
      } else {
        reject(new Error('no access'));
      }
    }, 1000);
  });
}

const id = prompt('enter your id');
const password = prompt('enter your password');

loginUser(id, password)
  .then(getRoles)
  .then((user) => alert(`Hello ${user.name}, you hava a ${user.role} role`))
  .catch(console.log);
