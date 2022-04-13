// Parámetros de objetos
let name = 'Brayan';
let age = 26;
obj = { name: name, age: age };
obj2 = { name, age };
console.log(obj2);

// Arrow Functions (funciones anónimas)
const names = [
    { name: 'Brayan', age: 26 },
    { name: 'Yessica', age: 27}
];
let listOfNames = names.map(function(item) {
    console.log(item.name);
});
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name) => {
    console.log(name);
};
const listOfNames4 = name => {
    console.log(name);
};
const square = num => num * num;

// Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .catch(error =>  console.log(error));