'use strict';

function House(name, owner){
    this.name = name;
    this.owner = owner;
    this.openDoor = function () {
        console.log('стандартное открытие двери');
    };
    this.display = function () {
        console.log('Имя: ' + this.name + ', Босс дома: ' + this.owner)
    }
}

/*function ConditionerHouse(name, owner, temp) {
    House.apply(this, arguments);
    this._temp = temp;
    this.increaseTemp = function () {
        this._temp++;
    };
    this.decreaseTemp = function () {
        this._temp--;
    }
}*/

// IConditioner temp, maxLimit, minLimit, increase(), decrease(), set()
function Conditioner(temp, maxLimit, minLimit) {
    this.temp = temp;
    this.minLimit = minLimit;
    this.maxLimit = maxLimit;
    this.increase = function(){
        if (this.temp < this.maxLimit){
            this.temp++;
        }
    };
    this.decrease = function(){
        if (this.temp > this.minLimit){
            this.temp--;
        }
    }
}

function ConditionerHouse(name, owner, temp, minLimit, maxLimit) {
    House.call(this, name, owner);
    this._conditionerModule = new Conditioner(temp, minLimit, maxLimit);
    this.increaseTemp = function () {
        this._conditionerModule.increase();
    };
    this.decreaseTemp = function () {
        this._conditionerModule.decrease();
    }
}