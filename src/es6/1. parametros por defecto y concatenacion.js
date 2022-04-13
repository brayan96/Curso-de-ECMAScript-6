// Parametros por defecto con es6
function newFunction(name, age, country) {
    let name = name || 'Brayan';
    let age = age || 26;
    let country = country || 'Col';
    console.log(name, age, country);
}
function newFunction2(name = 'Brayan', age = 26, country = 'Col') {
    console.log(name, age, country);
}
newFunction2();
newFunction2('Luis', 24, 'Mex');

// Concatenación con template literal
let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);