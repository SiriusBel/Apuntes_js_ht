//1. Crear un programa que te salude.

function saludar(nombre) {
    nombre = String(nombre);
    console.log(`Buenos días ${nombre}!`)
}

saludar("Pep");

//2. Crea una función llamada sumar que reciba dos números como parámetros y devuelva el resultado.

function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(resultado);
}

sumar ("text", 12)

// Crea una función que reciba grados celsius y devuelva su equivalente en grados farenheit
//formula -> f=(C*9/5) +32

//elegir sabor y si queremos tarrina o cucurucho por medio de funciones


function hacerHelado(fn1, fn2, sabor, tipo) {           //ejemplo Carmen
    // const paso1 = fn1(sabor)
    // const paso2 = fn2(tipo)
    return fn1(sabor) + ` ` + fn2(tipo);
}

function preparar(sabor) {
    return `Su helado de ${sabor} se está preparando.`;
}
function soporte(tipo) {
    return `Su helado está en soporte ${tipo}`;
}
console.log(hacerHelado(preparar, soporte, "vainilla", "cono")); 

// function escogerHelado(fn, sabor, formato) {
//   return fn(sabor, formato);
// }

// function escogerSabor(sabor){
//     return `El sabor es ${sabor}`
// }

// function escogerFormato(formato){
//     return `Lo quiero en ${formato}`
// }

// console.log(escogerHelado(escogerSabor, "mango"))
// console.log(escogerHelado(escogerFormato, "cucurucho"))
