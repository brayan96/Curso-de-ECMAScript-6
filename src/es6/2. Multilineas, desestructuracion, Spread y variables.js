// Multilinea con es6
let lorem = 'Frase de prueba para la clase de ecmaScript 6+ en platzi \n'
    + 'Otra frase de prueba para multilinea';
let lorem2 = `Frase de prueba para la clase de ecmaScript 6+ en platzi
Otra frase de prueba para multilinea`;
console.log(lorem);
console.log(lorem2);

// Desestructuración
let person = {
    'name': 'Brayan',
    'age': 26,
    'county': 'Col'
}
console.log(person.name, person.age);
let { name, age } = person;
console.log(name, age);

// Spread Operator: concatena arreglos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];
let education = ['David', ...team1, ...team2];
console.log(education);

// Let, var y const
{ var globalVar = 'Global var'; }
{
    let globalLet = 'Global let';
    console.log(globalLet);
}
console.log(globalVar); // Se puede llamar de forma global
// console.log(globalLet); // Error: no se puede usar de forma global
const a = 'b';
// a = 'a'; // Error: la variable no se puede modificar