// Spread en objetos: crea otro objeto ignorando propiedades
const obj = {
    name: 'Brayan',
    age: 26,
    country: 'Col'
}
let {name, ...all} = obj;
console.log(name, all);
let {country, ...rest} = obj;
console.log(rest);

// Propagation Properties
const obj2 = {
    name: 'Brayan',
    age: 26,
}
const obj3 = {
    ...obj2,
    country: 'Col'
}
console.log(obj3);