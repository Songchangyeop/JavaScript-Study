'use strict';

// song 객체 생성
let song = {
  name: 'song',
  age: 25,
};

// choi 객체 new 생성
let choi = new Object();
choi.name = 'choi';
choi.age = 24;

// arr 배열 생성
let arr = [1, 2, 3, 4];

// __proto__ 프로퍼티로 인해 toString 호출
console.log(song.toString());

// __proto__프로퍼티 확인
console.log(song);
console.log(choi);
console.log(arr);
