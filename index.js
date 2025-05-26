//Ejercicio 1

let num1 = 7;
let num2 = 3;

let suma = num1 + num2
console.log(suma)  //10

//Ejercicio 2

let resto1 = 25;
let resto2 =  4;

let resto = resto1 % 7;
console.log(resto);  //4

resto = 25 % resto2;
console.log(resto)  //1

resto = resto1 % resto2;
console.log(resto) //1

//Ejercicio 3

let base = 2;
let exponente = 3;
let resultado = base ** exponente;
console.log(resultado) //8

// Ejercicio 4. Hacer que se incremente dos veces

let a = 10;
console.log(++a); //11
console.log(++a); //12

// Ejercicio 5. Decremento combinado. No podemos usar un operador de
//decremento e icremento en una misma suma, porque con el -- y ++ usamos variables, no se pueden mezclar operadores.


let y = 15;
let x = 5
let answer = y - x;

 console.log(--answer); //9

// Ejercicio 6

let number = 10;
let number2 = "5";
let total = number + number2;

console.log(total) //105, en este caso lo ha unido, el número y el texto (number y "string"), solo pasa con el operador de suma, se llama contatenación



