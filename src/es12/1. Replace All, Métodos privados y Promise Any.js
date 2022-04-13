// Replace all
const string = 'JavaScript es maravilloso, con JavaScript puedo crearel futuro de la web';
const replaceString = string.replace('JavaScript', 'Python'); // Remplaza solo una vez
console.log(replaceString);
const replaceString2 = string.replaceAll('JavaScript', 'Python'); // Remplaza todas las repeticiones
console.log(replaceString2);

// Métodos privados
class Message {
    #show(val) { // #: Método privado
        console.log(val);
    }
    get #add(val) {
        // ...
    }
}
const message = new Message();
message.show('Hello');

// Promise Any: Retorna la primera promesa resuelta
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));