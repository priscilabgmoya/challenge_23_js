/**
 * 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

 */

const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]; 
let posicion  = 0, confirmar = true;
while (confirmar) {
    let numeroIngresado = parseInt(prompt("Escriba su DNI en el rango entre 0 y 99999999 "));
     if (!isNaN(numeroIngresado) && numeroIngresado >= 0 && numeroIngresado <= 99999999 ) {
        posicion =  numeroIngresado % 23;
        alert(`Su DNI es: ${numeroIngresado} y su letra es: ${letras[posicion]}`); 
    } else {
        alert("ingrese un numero valido. Recomendacion: numeros positivos desde 0 hasta 99999999  y no palabras!!");
    }
    confirmar = confirm("¿Desea continuar?");
    } 