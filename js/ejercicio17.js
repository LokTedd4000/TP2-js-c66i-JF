/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Ingrese texto: ");
let vocales = ["a","e","i","o","u"];

for (let i = 0; i < texto.length; i++) {
    const letras = texto[i].toLowerCase();

    if (vocales.includes(letras)) {
        document.write("La vocal '" + letras + "' está en la posición " + i);
        break;
    }
}
