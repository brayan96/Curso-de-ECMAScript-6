// Object entries
const data = {
    frontend: 'Brayan',
    backend: 'Luis',
    design: 'Ana'
}
const entries = Object.entries(data); // Transforma objeto en matriz con valores y nombre de valores
console.log(entries);
console.log(entries.length);

// Object values
const data2 = {
    frontend: 'Brayan',
    backend: 'Luis',
    design: 'Ana'
}
const values = Object.values(data2); // Transforma objeto en arreglo con valores
console.log(values);
console.log(values.length);

// Padding: concatena string al inicio o final del string inicial
const string = 'hello';
console.log(string.padStart(9, 'hi! '));
console.log(string.padEnd(9, ' hi!'));

// Trailing comas
const obj = {
    name: 'Brayan', //Se puede usar la coma así no haya otra propiedad después
}