/*
Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let cadenas = "";

do {
  let texto = prompt("Escriba texto:");
  if (cadenas === "") {
    cadenas = texto;
    console.log(cadenas);
  } else {
    cadenas = cadenas + "-" + texto;
    console.log(cadenas);
  }
} while (confirm("¿Desea seguir ingresando más textos?"));

document.write(cadenas);
