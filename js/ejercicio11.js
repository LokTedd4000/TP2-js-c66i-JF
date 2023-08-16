/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let edad1 = prompt("Ingrese la edad: ");
let edad2 = prompt("Ingrese la edad: ");
let edad3 = prompt("Ingrese la edad: ");

let nombre1 = prompt("¿Quien tiene esta edad?");
let nombre2 = prompt("¿Quien tiene esta edad?");
let nombre3 = prompt("¿Quien tiene esta edad?");

let mayor = Math.max(edad1,edad2,edad3);

if (mayor == edad1) {
    document.write("El mayor es: " + nombre1);    
} else if (mayor == edad2) {
    document.write("El mayor es: " + nombre2);    
} else if (mayor == edad3) {
    document.write("El mayor es: " + nombre3);    
}


