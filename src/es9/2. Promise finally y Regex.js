// Promise finally
let helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000):
        reject(new Error('Test error'));
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'));

// Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const mach = regexData.exec('2022-04-12');
const year = mach[1];
const month = mach[2];
const day = mach[3];
console.log(year, month, day);