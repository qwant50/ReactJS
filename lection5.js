'use strict';

function Sqrt(number){
    this.number = number;
    this.calc = function() {
        return Math.sqrt(this.number);
    }
}

function User(name) {
    var _name = '';
    function validName(name){
        if (typeof name === 'string'){
            _name = name;
        }
    }
    validName(name);
    this.setName = function(name){
        validName(name);
    };
    this.getName = function(){
        return _name;
    }
}


