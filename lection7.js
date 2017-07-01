'use strict';

function House(name) {
    this.name = name;
    this.display = function () {
        console.log("Название дома: " + this.name);
    };
}

function CondiHouse(name, condiModule) {
    House.call(this, name);
    HorsePlace.call(this, 4);
    this._cond = condiModule;
    this.setCond = function (newCond) {
        this._cond = newCond;
    };
    this.increaseTemp = function () {
        this._cond.increase();
    };
    this.decreaseTemp = function () {
        this._cond.decrease();
    };
    this.display = function () {
        console.log(this._cond.temp);
    };
    this.wash = function (mochalka) {
        mochalka.superClean(this);
    };
}

function Condition(temp) {
    this.temp = temp;
    this.increase = function () {
        this.temp++;
    };
    this.decrease = function () {
        this.temp--;
    };
}
function ConditionFast(temp) {
    this.temp = temp;
    this.increase = function () {
        this.temp += 5;
    };
    this.decrease = function () {
        this.temp -= 5;
    };
}
function HorsePlace(size) {
    this.size = size;
    this.horses = [];
    this.addHorse = function (horse) {
        if (this.horses.length < this.size)
        this.horses[horse.id] = horse;
    };
    this.removeHorse = function (horseId) {
        this.horses[horseId] = null;
    };
}

function GTMochalka() {
    this.superClean = function (target) {
        console.log("Дом с названием: " + target.name + " чистится!");
    }
}

var cm = new Condition(22);
var h1 = new CondiHouse("PH1", cm);
h1.display();
h1.increaseTemp();
h1.display();

var cmf = new ConditionFast(15);
var h2 = new CondiHouse("PH2", cmf);
h2.display();
h2.increaseTemp();
h2.display();

h1.setCond(new ConditionFast(111));
h1.display();
h1.increaseTemp();
h1.display();


h1.wash(new GTMochalka());
h2.wash(new GTMochalka());
console.dir(h1);
var o2 = Object.create(null);
console.dir(o2);
// в конструкторе данные (состояние) а в прототипе поведение (методы)