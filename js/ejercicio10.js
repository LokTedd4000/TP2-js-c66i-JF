/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

let filas = prompt("Ingrese número de filas");

let columnas = prompt("Ingrese número de columnas");

let numero = filas * columnas

for (let i = 1; i <= filas; i++) {
    
    for (let j = 1; j <= columnas; j++) {
        
        if (numero < 10) {
            document.write("0" + numero + " ");
            numero--;
        }else{
            document.write(numero + " ");
            numero--;
        }
    }
    document.write("<br>");
}