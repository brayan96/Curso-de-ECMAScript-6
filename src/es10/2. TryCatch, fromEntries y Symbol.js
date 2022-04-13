// Try catch: podemos obviar el uso de parámetros en el catch
try {
    
} catch {
    error
}

// fromEntries: inverso de función entries
let entries = [['name', 'Brayan'], ['age', 26], ['country', 'Col']];
console.log(Object.fromEntries(entries));

// Objeto symbol
let mySymbol = `My symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);