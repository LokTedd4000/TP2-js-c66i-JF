/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let num = prompt("Ingrese un número");

if(num < 50){
    for (let i = num; i >= 1; i--) {
        
        let cadena = "";
    
        for (let j = 1; j <= i; j++) {
            cadena += i;        
        }
    
        document.write(cadena + "<br>");    
    }

} else {
    alert("Ingrese un número menor a 50");
}
