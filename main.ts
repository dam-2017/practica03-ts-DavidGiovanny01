import {Cadena} from './cadena';
import {Operaciones} from './operaciones';


var c=new Cadena("Anita lava la tina");

console.log("Palíndromo: "+c.palindromo());
console.log("Vocales: "+c.vocales());
console.log("Letras: "+c.letras());
console.log("Palabras: "+c.palabras());

var o=new Operaciones();

console.log("Suma 5+5: "+o.sumar(5,5));
console.log("Suma 12-8: "+o.restar(12,8));
console.log("Factorial de 4: "+o.factorial(4));
console.log("Primo 11: "+o.primo(11));