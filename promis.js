const song = { name: 'song' };
const value = { age: 25, look: 'good' };

const yeop = { ...song, nickname: 'doctor', ...value };

console.log(yeop);
