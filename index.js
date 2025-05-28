// let categoria = "acción"


// // switch (categoria) {
// //         case "acción":
// //         console.log("la categoría seleccionada es acción");
// //         break;
// //         case "comedia":
// //         console.log("la categoría seleccionada en comedia");
// //         break;
// //         case "drama":
// //         console.log("la categoría seleccionada es drama");
// //         break;
// //         default:
// //             console.log("no lo trabajamos");
// //             break;
// // }

// // //ejercicio

// let dia = parseInt(prompt("Del 1 al 7, ingresa el número del día de la semana:"));

// switch (dia) {
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miércoles");
//     break;
//   case 4:
//     console.log("Jueves");
//     break;
//   case 5:
//     console.log("Viernes");
//     break;
//   case 6:
//     console.log("Sábado");
//     break;
//   case 7:
//     console.log("Domingo");
//     break;
//   default:
//     console.log("No es un día válido de la semana.");
//     break;
// }
// // Crea un programa que reciba una calificación (como texto: "A", "B", "C", "D", "F") y muestre un mensaje como "Excelente",. "Bien", "Suficiente", "Insuficiente".

// let nota = prompt("Señala la nota de la A - F").toUpperCase();
// let nombre = prompt("Nombre del alumno");

// switch (nota) {
// case "A":
//     console.log(`Excelente ${nombre}`);
//     break;
//     case "B":
//         console.log("Bien");
//         break;
//       case "C":
//         console.log("Suficiente");
//         break;
//         case "D":
//             case "F":
//         console.log("Insuficiente");
//         break;
//         default:
//             console.log("No es una calificación");
//             break;
// }


// //otro ejercicio

// let valor1 = parseFloat(prompt("Introduce un número"));
// let valor2 =  parseFloat(prompt("Introduce un número"));
// let operacion = prompt("introduce una operación");
// let resultado;

// // switch (operacion) {
// //     case "+":
// //         resultado = valor1 + valor2;
// //     console.log(`esta suma da ${resultado}`);
// //   case "-":
// //     resultado = valor1 - valor2 ;
// //    console.log(`esta resta da ${resultado}`);
// //      case "*":
// //      case "x":
// //      resultado = valor1 * valor2;
// //      console.log(`esta multiplicación da ${resultado}`);
// //      default:
// //      console.log("none");
// // };

// switch (operacion) {
//     case "+":
//         resultado = valor1 + valor2;
//   case "-":
//     resultado = valor1 - valor2 ;
//      case "*":
//      case "x":
//      resultado = valor1 * valor2;
//      default:
// };

// console.log(`el resultado ${operacion} es ${resultado} `)

// let mes = prompt("Introduce el mes");


// // Un año es bisiesto si es divisible por 4

// // Pero no lo es si además es divisible por 100

// // Salvo que también sea divisible por 400
// // En ese caso, sí es bisiesto

// switch(mes){
//     case "enero":
//     case "marzo":
//     case "mayo":
//     case "julio":
//     case "agosto":
//     case "octubre":
//     case "diciembre":  
//      console.log(`El mes ${mes} tiene 31 días`);
//     break;
    
//     case "abril":
//     case "junio":
//     case "septiembre":
//     case "noviembre":
//      console.log(`El mes ${mes} tiene 30 días`);
//     break;


//     case "febrero":
//         let ano = parseInt(prompt("Introduce el año"));
//         if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
//             console.log(`El mes ${mes} tiene 29 días`);
//         }
//         else {
//             console.log(`El mes ${mes} tiene 28 días`);    
//         }
//     break;

//     default:
//             console.log("Error");
//     break;
// }

//bucle for -->

// let valor = parseInt(prompt("introduce valor"))

// for (let i = 0; i <= 10; i++) {
//     console.log(`${valor} x ${i} = ${i *1}`);
// }

//bucle while --> no sabemos cuantas veces se va a repetir el código.

// let i = 0;

// while(i <= 5){
//     console.log(i);         // --> cuenta hasta 5
//     i++;
    
// }
// let multi = 5;

// while(i <= 10){
//     console.log(multi * i);         // --> tabla de multiplicar
//     i++;
// }

