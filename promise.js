'use struict';

//  < Promise >
// 새로운 프로미스가 만들어지면 executor가 시작된다

// 1. then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log('finally'));

// 2. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 3. Error Handling

const promise = new Promise((resolve, reject) => {
  console.log('doing something....');
  setTimeout(() => {
    reject(new Error('😁'));
  }, 2000);
});

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${hen} => 알`), 1000)
  );

const cook = (egg) =>
  new Promise((resolve, rsject) => {
    setTimeout(() => resolve(`${egg} => 요리`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));
