/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

let cadena = prompt("Ingrese una cadena de texto: ");
let resultado = "";

for (let i = 0; i < cadena.length; i++) {
    
    resultado += cadena[i];

    if (i !== cadena.length - 1) {
        resultado += "-";        
    }
        
}
 
document.write(resultado);