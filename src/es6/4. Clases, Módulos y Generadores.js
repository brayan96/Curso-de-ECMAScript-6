// Clases
class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sumar(2, 2));

// Módulos
import { hello } from './5. Módulo';
import hello1 from './5. Módulo'; // importar módulos con default
import hello1,  { hello } from './5. Módulo'; // importar varios módulos de un archivo en una línea
console.log(hello());
console.log(hello1());

// Generators
function* helloWorld() {
    if(true) {
        yield 'Hello, ';
    }
    if(true) {
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);