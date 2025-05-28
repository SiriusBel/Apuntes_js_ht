// // 1 - Declara una variable x = 10. Suma 4 al valor de x. Luego usa -- para restarle 1. Guarda el resultado en una variable llamada resultado.

// let x = 10;

// x = 10 + 4;

// console.log(--x);

// let resultado = 13;

// // 2 -  Declara una variable a = 6. Multiplícala por 3. Calcula el resto de dividir el nuevo valor entre 5. Guarda el resultado en una variable llamada final.

// let a = 6;

// a = a * 3

// console.log(a % 5);

// let final = 3;

// // 3 - Declara una variable valor = 20. Divídela entre 4. Usa ++ dos veces para incrementarla. Guarda el valor final en una variable llamada total.

// let valor = 20;

// valor = valor / 4;                      //Este puede ser otro método

// console.log(++valor);                  //   valor++;
// console.log(++valor);                  //     valor = valor++;
//                                        //    let total = valor;
// let total = 7;

// // -------------------------------Operadores de comparación

// 5 == "5"; true
// 5 === "5"; false
// 7 != 8; true
// "Hola" !== "hola"; true
// 10 >= 10; true
// 3 < 2; false
// null == undefined; true //son iguales porque están vacios.
// null === undefined; false //no son el mismo tipo de datos.
// 0 == false; true // el false equivale a  0
// 0 === false; false //uno es número y otro es booleano
// "10" > 5; true // hace conversión de valor. Todos lo hacen menos la igualdad estricta y desigualdad estricta
// "10" > "5"; false //son string, está haciendo una convserión alfabética. Se trabaja con tabla unicode (que aun no la hemos dado) 1 es 31 y 5 es 35
// "apple" < "banana"; true // cada caracter tiene una cifra numérica en la tabla unicode. A es menor que B, por lo que decide que apple es menor que banana
// "apple" < "apricot"; true // 

// EJERCICIOS BUCLES
// 1 - Imprime por consola los números del 1 al 10.


for (let a = 1; a <= 10; a++) {
   console.log(`Imprime por consola los números del ${a}`); 
};

// let i = 1;

// console.log("Números del 1 al 10");              ejemplo de Carmen con "do/while"

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// 2- Muestra los múltiplos de 5 hasta el 50. 


for (let i = 5; i <= 50; i++) {
    i % 5 === 0 ? console.log(`${i} es múltiplo de 5`) : "";
      
}
          //---------Con parseInt y prompt-------

 let multiploDe = parseInt (prompt("introduce numero"))
 
for (let i =0; i <= 50; i++) {
    i % multiploDe === 0 ? console.log(`${i} es múltiplo de ${multiploDe} `) : "";
      
 }

 let multiplo = 5;

do {
    console.log(`multiplo de 5 es ${multiplo}`);     //Ejmeplo Carmen
    multiplo += 5;
} while (multiplo <= 50);

// 3 - Calcula la suma de los números del 1 al 100. 

let i = 1;
let suma = 0;

do {
    suma += i;
    i++;
} while (i <= 100);

console.log("La suma total es:", suma);



let add = 0 //desde donde empieza a sumar y se actualiza
for (let i = 1; i <= 100; i++) {
    add += i; // suma = suma + i

     // La i tambien se va actualizando por lo que se va sumando lo siguiente a lo anterior
  
}
console.log("La suma del 1 al 100 es:", add);