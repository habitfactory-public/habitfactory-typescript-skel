"use strict";
// function
function sayHelloTo1(name) {
    return `hello, ${name}`;
}
const sayHelloTo2 = (name) => {
    return `hello, ${name}`;
};
function kingSays(name, greet) {
    return `King says: ${greet(name)}`;
}
console.log(kingSays('juheon', sayHelloTo1));
// optional in function
function sayName(name) {
    if (name) {
        console.log(`name is ${name}`);
    }
    else {
        console.log(`nameless one!`);
    }
}
// optional in object
const obj = {
    name: '이주헌',
    age: 44
};
