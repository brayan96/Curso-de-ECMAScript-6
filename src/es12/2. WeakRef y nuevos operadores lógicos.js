// WeakRef: evita que el objeto sea recogido por el manejador de basura
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
}

// Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);