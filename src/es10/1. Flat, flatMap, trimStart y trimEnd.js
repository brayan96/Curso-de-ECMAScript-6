// Función flat
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat());
console.log(array.flat(2));

// Funcion flat.map
let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(value => [value, value * 2]));

// Función trimStart y trimEnd
let hello = '   hello world!';
console.log(hello);
console.log(hello.trimStart());
let hello2 = 'hello world!    ';
console.log(hello2);
console.log(hello2.trimEnd());