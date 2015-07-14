'use strict';

function createArray() {
    return [1, 2];
}

function sum(a, b) {
    console.log("a", a);
    console.log("b", b);
    return a + b;
}

let [a,b='b'] = [1];
//let [a,b='b'] = createArray();
console.log(a);
console.log(b);

class Daniel {
    oho: string;
}