/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let numeros = 0;

do {
  let num = prompt("Escriba número:");

  if (isNaN(num)) {
    alert("Introduzca un número válido.");
  } else {
    numeros = numeros + parseInt(num);
  }
  
} while (confirm("¿Desea seguir ingresando más números?"));

document.write(numeros);
