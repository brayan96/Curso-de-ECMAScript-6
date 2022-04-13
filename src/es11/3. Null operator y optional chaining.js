// Null operator: si el valor es null devuelve un valor por defecto
const fooo = null ?? 'default string';
console.log(fooo); // imprime 'default string'
const fooo2 = 'not null' ?? 'default string';
console.log(fooo2); // imprime 'not null'
// Forma alternativa
const fooo3 = null || 'default string';
console.log(fooo3); // imprime 'default string'

// Optional chaining
const user = {};
console.log(user.profile.email); // Error: La propiedad profile no existe
console.log(user?.profile?.email); //imprime undefine
if(user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}