'use strict';

const log = function (a, b, ...rest) {
    console.log(a, b, ...rest);
}

log(1, 2, 3, 4, 5, 6);

function calcOrDouble(number , basis = 1) {
    console.log(number * basis);
}

calcOrDouble(2);
calcOrDouble(2, 6);