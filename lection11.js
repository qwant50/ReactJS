'use strict';

function House() {

}
House.prototype = {
    houseName: 'qwant',
    houseCost: 10000
};

function Fork() {

}
Fork.prototype = {
    forkLength: 5,
    forkType: 'kitchen'
};

let house = new House();
let fork = new Fork();
let ff = Object.assign({},house, fork);

console.dir(ff);

let user1 = {
    name: "Tom",
    age: 24
};
let user2 = {
    name: "Sam",
    height: 175
};
Object.assign(user1, user2);
console.dir(user1); // Sam, свойство из user2 перезаписало свойство из user1
console.log(user1.name); // Sam, свойство из user2 перезаписало свойство из user1
console.log(user1.age); // 24
console.log(user1.height); // 175


