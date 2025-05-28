# EXPLICACIONES DE JAVASCRIPT ✍(◔◡◔)

Es un lenguaje de programación que actua en la consola. Su uso se aplica en creación de de webs, aplicaciones y juegos. La diferencia con HTML y CSS no son lenguajes de programación, sino de marcado y estilado. JS le da interactividad. Se ejecuta en el servidor del cliente, nuestro navegador viene ya con el paquete del lector.

js se enlaza con el HTML al final del body

                <body>
                <script src="index.js"></script>
                </body>

console.log("Hola, mundo!") va todo pegado console.log(" ")

Para comentar dentro del código usar este método. El atajo de teclado es "ctrl + k + c" (que es el mismo para otros lenguajes).

        // //comentario de una línea

        /* comentario
        de varias
        lineas */

## --------------- VARIABLES ---------------

Las variables son como gavetas que guardan información

let saludo; ⇐ Hemos dedclarado una variable pero no le hemos añadido valor.

saludo = "Hola"; ⇐ Valor variable.
saludo = "Adios"; puede mutar, la línea que esté más abajo es su valor final.

const nombre = "Cristina"; ⇐ Las variables de const tienen que estar siempre inicializadas. Siempre hay que declarar las variables con const.
nombre = "Manuel"; ⇐ En el caso de const esto genera error porque es una constante, salvo excepciones.

Después de declarar const y let no hace falta estar declarando todo el rato el let o el const, con el nombre (saludo en el caso de let y nombre en const) nos valdría

### let

                let age = 31;

                age = 30;

                console.log(age) ⇐ Veremeos que el que aparece es el último valor de la variable, se lee de arriba abajo

                age = 25; ⇐ En este caso el console.log que tenemos en la línea 21 no contaría este valor, tendríamos que añadir otro console.log en la prox línea

                console.log(age); ⇐ En la consola, al ejecutar esto, nos aparecerá "30" y "25" por tener dos console.log

### const

                const PI = 3.1416 ⇐ usaremos const para los valores inalterables

                console.log(PI)

                PI = "añadiendo cosas randoms"

                console.log(PI) ⇐ no habrá añadido cambios, porque const se mantiene

### --------------- Práctica de lo explicado ---------------

                const name = "Paula"
                const lastName = "Sanchez"
                let age;
                age = "44"

        console.log(~name~, lastName, age) ➟ Paula Sanchez 44  ⇐ El name aparece tachado porque js lo reconoce como una palabra reservada, pero en este caso está en desuso (hay una lista en
                                                                           los apuntes de palabras reservadas).

## --------------- Estilo de nombrado --------------- Buenas Prácticas ---------------

- Camelcasse let nombreCompleto es decir primera palabra en minus y la que le sigue en mayus. En el caso de js usaremos calmecase.

- Siempre intentar usar el inglés.

- Declara variables por líneas evitar cosas como:

                let nombreCompleto = "Paula Sanchez"; let coloresOjos = "verdes"; console.log(nombreCompleto, coloresOjos)

Evitarlo ante todo, se puede leer pero es más facil si cada uno ocupa disntintas líneas:

                let nombreCompleto = "Paula Sanchez"
                let coloresOjos = "verdes"
                console.log(nombreCompleto, coloresOjos)

- El primero caracter no puede ser un dígito y el nombre únicamente puede formarse por letras, dígitos o los símbolos $ y \_ (la \ incluido)

- La capitalización es muy importane, a la hora de la lectura, **EXISTE** diferencia, es case sensitive "manzana" es distinto a "MANZANA".

## --------------Tipos de datos------------------------

### --------------- Primitivos ---------------

Son datos básicos, no son objetos (nombres, numeros, booleanos...).

- String ➟ secuencia de caracteres usados para representar un texto. Estos irán entrecomillados.

                let pokemon = "Lucario";

                let cita = "Esta es la piel de un monstruo Bella"

- Number ➟ datos numéricos.

                let día = 26

- Booleanos ➟ Puede ser True o Falso.

                let diaSoleado = false;

                let mayorDeEdad = true;

- Undefined (indefinidos) ➟ sin especificar, existe como variable pero su valor no ha sido asignado. Es decir, no se ha inicializado.

                let fecha;

                console.log(fecha); <!-- en este caso, al ejecutarses el valor que nos saldrá será undefined-->

- Null ➟ Vacío intencional dentro de una variable.

                let userCountry = null;

### --------------- Práctica de lo explicado ---------------

- string

                let book = "Orgullo y Prejuicio";

- number

                let year = 2025;

- boolean

                let isCloudy = true;

- undefined

                >let weDoThat;

- null

                let myCode = null;


                        console.log(book, year, isCloudy, weDoThat, myCode)

## --------------- Datos complejos ---------------

Un poco más complejos como los objetos, arrays y funciones.

- Objetos ➟ Entre llaves {} tenemos distintos contenido del elemento, cada uno tiene una clave y un valor. En este caso es como un JSON, similar.

                let someone = {
                name: "Ana",
                age: 30,                                ⇐ Esto sería un objeto. Acordarse de las comas para separar cada uno,
                userName: "Annie"                          tener presente que elementos van entrecomillados y cuales no.
                };


                let dog = {
                dogName = "Chloe",
                dogAge = 10,
                dogBreed = "Labrator Retriever"
                }

- Array ➟ Matrices o vectores, es una estructura de datos compuestos que existen en otros lenguajes, son listas ordenadas de elementos, donde cada elemento, tendrá una posición. Se usan corchetes []

                let numbers = [1, 2, 3, 4, 5];

                let fruits = ["apple", "pear", "kiwi", "watermelon"]

                let random = ["manzana", "true", 14] ⇐ podríamos poner esto, pero no es coherente. Los datos tienen que tener cohesión entre si

- Funciones ➟ Bloque de código reutilizable que realiza una tarea o devuelve un valor.

                function welcome() {
                }                       ⇐   Esto es la declaración de una función, es su esquema, dentro de las llaves irá la lógica de la función



                function welcome() {
                console.log("Hola");    ⇐  se termina la sentencia porque termina la función, se usa un ;
                };

                welcome();
                welcome(); ⇐ esto hará que se ejecute por el número de veces que lo señalemos. Usar elemento que vamos a reutilizar varias veces. Si no usamos, estas invocaciones/llamadas
                no se ejecutará la función, la tenemos creada, pero si no la llamamos no aparecería en nuestra consola.

                function welcome() {
                console.log("Hola")
                console,log("Buenas tardes");
                };

                welcome();               ⇐  aparecerá en la consola  ➝  Hola
                                                                          Buenas tardes

## --------------- Operadores Aritméticos---------------

Símbolos o palabras claves que permiten realizar operaciones.

- Operadores aritméticos ➟ suma, resta multiplicación, etc (hay una tablilla en los apuntes de las operaciones que engloban).

### Suma

                let num1 = 10;
                let num2 = 5;

                let suma = num1 + num2; //15

                console.log(suma)   ⇐ acabamos siempre con el console.log para que poder ver el resultado en la consola

Sería igual

                let suma = 10 + 5; //15  ⇐   pero en el primer caso nos estamos trayendo las cifras de una variable

También podemos usar la misma variable de forma repetida

                let suma = num1 + num1 + num1; //30

                console.log(suma)

### Resta

                let resta = num1 - num2

                console.log(resta) // 5

### Multiplicación

                let multi = num1 * num2;
                console.log(multi) //30

### División

                let div = num1/num2
                console.log(div) //2

### Resto

Te van a enseñar el resto, es decir, el sobrante de la operación.

                let resto = 20% 3;
                console.log(resto); //2

### Exponenciación

                let expo = num1 ** num2 ⇐ es sin la barra,se pone por la cara
                console.log(expo); //1000 ⇐ 10^5

### Operadores de incremento y decremento

                let numero1 = 3;
                console.log(++numero1) //4 ⇐ porque incrementa 1 más; es lo mismo que ""numero1 = numero1 + 1""
                console.log(numero1) //4 se quedaría con el valor incrementado
                console.log(++numero1) //5
                console.log(++numero1) //6


                let numero2 = 5
                console.log(--numero2) //4
                console.log(--numero2) //3
                console.log(--numero2) //2
                console.log(--numero2) //1
                console.log(--numero2) //0
                console.log(--numero2) //-1
                console.log(--numero2) //-2
                console.log(--numero2) //-3

### Combinando operadores

                let resultado = (2 + 3) \ 4;
                console.log(resultado); // 20

                let resultado = 2 + 3 \ 4;
                console.log(resultado); // 12

# CLASE 27/05

## --------------- Operadores de Comparación ---------------

Comparan sus operandos y devuelven un valor lógico (un true o un false, valores booleanos), no un calculo.

        **está la tabla en los apuntes.

- Operador de igualdad ==

                let igual = 5 =="5";
                console.log(igual);      ⇐ El resultado sería True porque el valor es el mismo. Importante porque estámos usando un tipo numérico y un string. Es como si lo "convirtiera",
                                            si usasemos "cinco" entonces, no lo podría leer, daría false.

- Operador de igualdad estricta ====
  Compara cualquier tipo de diferencia entre operadores.

                  console.log(2 === 2);  ⇐ true;

                  console.log("dos" === "dos"); ⇐ true;
                  console.log(1 === "ole ole")  ⇐ false;

- Operador de desigualdad !=

                console.log(5 != "5");  ⇐ false

- Operador de desigualdad estricta !==

                console.log(5 !== "5"); ⇐ true. No es igual igual.
                console.log(5 !== 5);   ⇐ false.

- Operador mayor que >

                console.log(10> 5);             ⇐ true
                console.log(10 > "10");         ⇐ false
                console.log(10 > 40);           ⇐ false
                console.log(true > false);      ⇐ true (los true son 1 y los false son 0, porque están basados en lenguje binario)
                console.log(false > true);      ⇐ false

- Operador menor que <

                console.log(5 < 10);            ⇐ true
                console.log(-3 < 100);          ⇐ true

                let a = 2;
                let b = 10;

                console.log(a < b );            ⇐ true

- Operador mayor o igual >=

                console.log( 2>= 2);            ⇐ true
                console.log(2 >= 7);            ⇐ false
                console.log(2 >= b);            ⇐ false

- Operador menor o igual <=

                console.log(10 <= "10");        ⇐ true, hace conversión de tipo
                console.log(10 <= 350);         ⇐ true

## --------------- Operadores de Asignación ---------------

Para asignar un valor a una variable o constante.

- Operador asignación

                let variable = "valor";

- Operador suma/asignación

                let num1 = 2;
                let num2 = 5;
                let total = 50          let total;

                total += num1; //52      total += num1; //2
                total += num2; //57 porque total tiene el valor de la última operación

- Operador asignación/resta

                total -= num1 + num2;
                console.log(total); //50, se ha restado 5 y 2 en la oeración anterior

- Operador multi/asignación

                total *= num1; // 100 se multiplica 50 x 2

- Operador división/asignación

                total /= num2; // 20 se divide 100 / 5

- Operador exponencial/asginación

                total **= num2; // 400

- Operador resto/asignación

                total %= num5 // 0

## --------------- Operadores lógicos ---------------

Comparan valores booleanos y devuelven respuestas booleanas

        EQUIVALE        EN ESPAÑOL SERÍA

&& (AND) ➟ y
|| (OR) ➟ o
! (NOT) ➟ NO

- && Solo devolverá true si ambas condiciones/expresiones son true. No hay excepciones.

                true && true ➟ true
                true && false ➟ false
                false && false  ➟false

let edad = 18;
console.log(edad >= 18 && edad <= 50); ➟ true
console.log(edad > 18 && edad <= 50); ➟false

#### truthy y falsy

- Falsy

        0; -0; ""; null, undefined, NaN (Not a Number); On;

- Truthy.Todos los demás valores son truthy

        1; "hola"; true; etc

ej:
1 && 2; // true
0 && 5; // verdadero
"hola" && "mundo" // true
"" && "algo" // false
null && "texto" // false
true && undefined // false

//Ejercicio 1

let num1 = 7;
let num2 = 3;

let suma = num1 + num2
console.log(suma) //10

//Ejercicio 2

let resto1 = 25;
let resto2 = 4;

let resto = resto1 % 7;
console.log(resto); //4

resto = 25 % resto2;
console.log(resto) //1

resto = resto1 % resto2;
console.log(resto) //1

//Ejercicio 3

let base = 2;
let exponente = 3;
let resultado = base \*\* exponente;
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

// PRACTICA IF/ELSE
// Una atracción en un parque de aventuras tiene las siguientes reglas:
// Solo pueden subir las personas que midan más de 120 cm.,
// Si la persona mide más de 120 cm y tiene más de 14 años, puede subir sola.,
// Si mide más de 120 cm pero tiene 14 años o menos, necesita ir acompañada.,
// Si mide 120 cm o menos, no puede subir.

// let age = 13;
// let altura = 118;

// if (age > 14 && altura > 120){
// console.log("puede entrar");
// } else if (age > 14 && altura < 120)
// {
// console.log("tiene que ir acompañado");
// } else {
// console.log("no puede entrar");
// }

// Crea un programa que recomiende qué ponerse según la temperatura:
// Si hace 30 grados o más, muestra "Hace mucho calor, ponte ropa ligera y bebe agua.",
// Si la temperatura está entre 20 y 29 grados, muestra "Hace buen tiempo, ponte ropa cómoda.",
// Si la temperatura está entre 10 y 19 grados, muestra "Hace fresco, ponte una chaqueta.",
// Si la temperatura es menor de 10 grados, muestra "Hace frío, abrígate bien."

let temperatura = 28;

if(temperatura >= 30){
console.log("Hace mucho calor, ponte ropa ligera y bebe agua.");
} else if (temperatura <= 29 && temperatura >= 20){
console.log("Hace buen tiempo, ponte ropa cómoda.");
} else if (temperatura >= 10 && temperatura <= 19){
console.log("Hace fresco, ponte una chaqueta.");
} else {
console.log("Hace frío, abrígate bien.");
};

// Reglas:
// Solo puede participar si:,
// Tiene entre 18 y 40 años (inclusive),
// y
// Tiene certificado médico válido ( certificado === true),
// y
// Ha pagado la cuota de inscripción (cuotaPagada === true).
// Si cumple todas las condiciones anteriores, muestra:,
// "Inscripción completada con éxito."
// Si no ha pagado la cuota, pero cumple el resto, muestra:,
// "Falta el pago de la cuota de inscripción."
// Si no tiene el certificado médico, muestra:,
// "Necesitas presentar un certificado médico válido."
// Si no está en el rango de age, muestra:,
// "No cumples los requisitos de age para participar."

let age = 45;
let certificado = true;
let pago = true;

if (age >=18 && age <=40 && certificado && pago) {
console.log("Puede participar");
}else if (age >=18 && age <=40 && certificado && !pago) {
console.log("falta el pago de la cuota para la inscripción");
}else if (age >=18 && age <=40 && ! certificado && pago) {
console.log("debes pasar una revisión médica para participar");
}else if (age <18 || age >=41) {
console.log("No puedes participar");
}else {
console.log("los datos introducidos no son válidos");
}

# CLASE 28/05

## Prompt

El prompt muestra un dialogo opcional donde solicita al usuario que añada un texto o dato.

let num1 = parseInt(promt("Introduce otro número")); parse int funciona para números enteros. La función parseFloat() sería con decimales. Si no lo tenemos, Int redondeará la cifra
let num2 = parseInt(promt("Introduce otro número"));

console.log(num1 + num2);

        let nombre = prompt("Introduce tu nombre");

        console.log(`Hola ${nombre}, buenos días`); el uso de las comillas francesas nos dan la posibilidad de añadir la variable, ese dato es una interpolación

## Switch

Es un condicional, permite evaluar una expresión y asociar cada caso a la correspondiente declaración.

switch (categoria) {
case "accion":
console.log("la categoría seleccionada es acción");
break;
case "comedia":
console.log("la categoría seleccionada en comedia"):
break;
case "drama":
console.log("la categoría seleccionada es drama");
break;
default
}

// let categoria = "acción"

// // switch (categoria) {
// // case "acción":
// // console.log("la categoría seleccionada es acción");
// // break;
// // case "comedia":
// // console.log("la categoría seleccionada en comedia");
// // break;
// // case "drama":
// // console.log("la categoría seleccionada es drama");
// // break;
// // default:
// // console.log("no lo trabajamos");
// // break;
// // }

// // //ejercicio

// let dia = parseInt(prompt("Del 1 al 7, ingresa el número del día de la semana:"));

// switch (dia) {
// case 1:
// console.log("Lunes");
// break;
// case 2:
// console.log("Martes");
// break;
// case 3:
// console.log("Miércoles");
// break;
// case 4:
// console.log("Jueves");
// break;
// case 5:
// console.log("Viernes");
// break;
// case 6:
// console.log("Sábado");
// break;
// case 7:
// console.log("Domingo");
// break;
// default:
// console.log("No es un día válido de la semana.");
// break;
// }
// // Crea un programa que reciba una calificación (como texto: "A", "B", "C", "D", "F") y muestre un mensaje como "Excelente",. "Bien", "Suficiente", "Insuficiente".

// let nota = prompt("Señala la nota de la A - F").toUpperCase();
// let nombre = prompt("Nombre del alumno");

// switch (nota) {
// case "A":
// console.log(`Excelente ${nombre}`);
// break;
// case "B":
// console.log("Bien");
// break;
// case "C":
// console.log("Suficiente");
// break;
// case "D":
// case "F":
// console.log("Insuficiente");
// break;
// default:
// console.log("No es una calificación");
// break;
// }

// //otro ejercicio

// let valor1 = parseFloat(prompt("Introduce un número"));
// let valor2 = parseFloat(prompt("Introduce un número"));
// let operacion = prompt("introduce una operación");
// let resultado;

// // switch (operacion) {
// // case "+":
// // resultado = valor1 + valor2;
// // console.log(`esta suma da ${resultado}`);
// // case "-":
// // resultado = valor1 - valor2 ;
// // console.log(`esta resta da ${resultado}`);
// // case "_":
// // case "x":
// // resultado = valor1 _ valor2;
// // console.log(`esta multiplicación da ${resultado}`);
// // default:
// // console.log("none");
// // };

// switch (operacion) {
// case "+":
// resultado = valor1 + valor2;
// case "-":
// resultado = valor1 - valor2 ;
// case "_":
// case "x":
// resultado = valor1 _ valor2;
// default:
// };

// console.log(`el resultado ${operacion} es ${resultado} `)

// let mes = prompt("Introduce el mes");

// // Un año es bisiesto si es divisible por 4

// // Pero no lo es si además es divisible por 100

// // Salvo que también sea divisible por 400
// // En ese caso, sí es bisiesto

// switch(mes){
// case "enero":
// case "marzo":
// case "mayo":
// case "julio":
// case "agosto":
// case "octubre":
// case "diciembre":  
// console.log(`El mes ${mes} tiene 31 días`);
// break;

// case "abril":
// case "junio":
// case "septiembre":
// case "noviembre":
// console.log(`El mes ${mes} tiene 30 días`);
// break;

// case "febrero":
// let ano = parseInt(prompt("Introduce el año"));
// if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
// console.log(`El mes ${mes} tiene 29 días`);
// }
// else {
// console.log(`El mes ${mes} tiene 28 días`);  
// }
// break;

// default:
// console.log("Error");
// break;
// }

//bucle for -->

// let valor = parseInt(prompt("introduce valor"))

// for (let i = 0; i <= 10; i++) {
// console.log(`${valor} x ${i} = ${i *1}`);
// }

//bucle while --> no sabemos cuantas veces se va a repetir el código.

// let i = 0;

// while(i <= 5){
// console.log(i); // --> cuenta hasta 5
// i++;

// }
// let multi = 5;

// while(i <= 10){
// console.log(multi \* i); // --> tabla de multiplicar
// i++;
// }
