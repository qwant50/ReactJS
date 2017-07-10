'use strict';

function Person(name) {
    this._name = name;
}
Person.prototype.getName = function (){
    return this._name;
};
Person.prototype.setName = function (name){
    this._name = name;
};
Person.prototype.display = function (){
    console.log(this._name);
};

var tom = new Person("Tom");
console.dir(tom);
console.dir(tom.__proto__.__proto__ === window.Object.prototype);

function Person2(name) {
    this._name = name;
}
Person2.prototype = {
    constructor: Person2,
    getName2: function () {
        return this._name;
    },
    setName2: function (name) {
        this._name = name;
    },
    display2: function () {
        console.log(this._name);
    },
    __proto__ : Object.create(Person).prototype
};

var sam = new Person2("Sam");
console.dir(sam);