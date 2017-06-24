'use strict';

var calculator = {
    a: null,
    b: null,
    read: function () {
        this.a = prompt('Enter first argument', '0');
        this.b = prompt('Enter second argument', '0');
        this.a = Number(this.a);
        this.b = Number(this.b);
    },
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

function mul() {
    var res = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (!isNaN(parseInt(arguments[i]))) {
            if (res == 0) {
                res = arguments[i];
            } else {
                res *= arguments[i];
            }
        }
    }
    return res;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

var country = {
    name: "Украина",
    language: "украинский",
    capital: {
        name: "Киев",
        population: 2907817,
        area: 847.66
    }
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // <Украина>
format.apply(country, ['[', ']']); // [Украина]
format.call(country.capital, '"', '"'); // "Киев"
format.apply(country.capital, ['', '']); // Киев

