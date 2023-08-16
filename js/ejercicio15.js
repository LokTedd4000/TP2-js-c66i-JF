/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let texto = prompt("Ingrese texto: ");
let contVocales = 0;
let vocales = ["a","e","i","o","u"];

for (let i = 0; i < texto.length; i++) {
    let letra = texto[i].toLowerCase();
        
    if(vocales.includes(letra)) {
        contVocales++;
    }

}

document.write("La cantidad de vocales son: " + contVocales);

