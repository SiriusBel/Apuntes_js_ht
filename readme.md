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

# Falta clase 29/5

TIPOS DE ARRAY

## CLASE 02/06

- Arrays bidimensionales. Array de arrays.

let matriz = [
[1,2,3],
[2,5,6], ⇐ la posición 0 es [1,2,3] y la posicion (matriz[0][0] es [1])
[7,8,9]
]

console.log(matriz[2][2]); // ⇐ el primer [x] es fila, el segundo [x] es columna.

for (let i = 0; i< matriz.length; i++) {
console.log(matriz[i])
for(let j = 0; j< matriz[i].length; j++) { ⇐ Hará un despliegue del contenido de i(filas) y j(columnas)
console.log(matriz[i][j])
}
}

### OBJETOS

Estructura para almacenar coleccioenes de varios daos y entidades más complejas asociadas en pares clave valoe.

const malaga = {
clima(keys) = "calido"(value);
habitantes = 591.637;

}

console.log(malaga.clima) //calido
console.log(malaga.habitantes) //591.637

console.log(Object(palabra reservada).keys(malaga)); // te da toda las keys dentro del objeto
object.keys <= calima, habitantes
object.values; <= calido,591.637
object.entries(hace un array bidimensional??) <= [calido, 591.637]

object keys(malaga).forEach(key = {
console.log(key, malaga[key])
})

// let matriz = [
// [1,2,3],
// [2,5,6], // ⇐ la posición 0 es [1,2,3] y la posicion (matriz[0][0] es [1])
// [7,8,9]
// ]

// console.log(matriz[2][2]); // ⇐ el primer [x] es fila, el segundo [x] es columna.

// for (let i = 0; i< matriz.length; i++) {
// console.log(matriz[i])
// for(let j = 0; j< matriz[i].length; j++) {
// console.log(matriz[i][j])
// }
// }

//1 - Crea un objeto llamado persona con las propiedades nombre, edad y ciudad, y muestra sus valores por consola.

const persona = {
nombre:"Ana",
edad: 20,
ciudad: "Barcelona"
};

console.log(persona.nombre) //Ana
console.log(persona.edad) //20
console.log(persona.ciudad) //Barcelona

//2 - Añade una nueva propiedad profesion al objeto persona.

persona.profesion = "Estudiante";

console.log(persona.profesion) //Estudiante

//3 Modificar el valor de la propiedad ciudad.

persona.ciudad = "A Coruña";

console.log(persona.ciudad) //A Coruña

//4 - Elimina la propiedad edad del objeto persona

delete persona.edad;

console.log(persona) //Lo borra

//5 - Crea un objeto vacío llamado película.

pelicula = {}

console.log(persona.pelicula) //Objeto creado -> pelicula: {} <-undefined

//6 - Inyectar propiedad título, año de estreno y director.

pelicula.titulo = "Los Otros";
pelicula["año de estreno"]= 2001;
pelicula.director ="Amenábar";

console.log(pelicula) //crea un Objeto con estos values

//7 - Imprime un mensaje con todos los datos del objeto película.

console.log(`El estreno de ${pelicula.titulo} en el año ${pelicula["año de estreno"]} fue un gran éxito 
para ${pelicula.director}.`); //El estreno de Los Otros en el año 2001 fue un gran éxito para Amenábar.

//8 - Cambiar el título, el director y año de estreno. Añadir nueva propiedad, protagonista.

pelicula.titulo = "El Castillo Ambulante";
pelicula["año de estreno"]= 2004;
pelicula.director ="Miyazaki";
pelicula.protagonista = "Sophie"

console.log(pelicula) //Se han sustituido todos los valores por los nuevos

console.log(`El estreno de ${pelicula.titulo} en el año ${pelicula["año de estreno"]} fue un gran éxito 
para ${pelicula.director}.`); //El estreno de El Castillo Ambulante en el año 2004 fue un gran éxito para Miyazaki.

//9 - Todas las claves usando el método que muestre todas las keys del objeto.

console.log(Object.keys(pelicula)) //['titulo', 'año de estreno', 'director', 'protagonista']

console.log(Object.values(pelicula)) //['El Castillo Ambulante', 2004, 'Miyazaki', 'Sophie']

let arrayPelicula = Object.entries(pelicula);

for(let i = 0; i < arrayPelicula.length; i++) {
console.log(arrayPelicula[i].join(": ")) //(2) ['titulo', 'El Castillo Ambulante']*siguiente linea (2) ['año de estreno', 2004]
} // *y asi hasta poner todos los datos dentro del objeto.Con el join " " le hemos añadido espacios entre,
// y con eñ ": " se nos muestra ['año de estreno', 2004] + etc

//9.1 Hacer el ejercicio con forEach

// Object.keys(pelicula).forEach(propPeli => {
// console.log(propPeli, pelicula[propPeli])
// })

Object.keys(pelicula).forEach(propPeli => {
console.log(`${propPeli}: ${pelicula[propPeli]}`) //Aquí se mostrará igual que en el ejemplo anterior.
})

## CLASE 03/06

### REPASO

//1. Crea un objeto llamado libro que tenga las siguientes propiedades: titulo, autor, año publicación y género

let libro = {
titulo: "La Celestina",
autor: "Fernando de rojas",
anno_publicacion: 1499,
//"año de publicación": 1499, es más correcta la primera forma, la que más vas a ver.
genero: "Narrativa",
ISBN: 9788423972821,
}

console.log(libro);

//2. Usa ambas notaciones para mostrar por consola el título y autor del libro.

console.log(libro.titulo);
console.log(libro["autor"]) //para llamar una key dentro de un objeto

//3. Modifica

libro.genero = "Drama",
libro.paginas = 300.

console.log(libro)

//4. Elimina

delete libro.genero;

console.log(libro)

//5. Obten todos las claves de un objeto.

console.log(Object.keys(libro))

//5. Obten todos los valores de un objeto.

console.log(Object.values(libro))

//6. Más métodos para recorrer un objeto.

console.log(Object.entries(libro)); //genera un array bidimensional. Se crea un array con propiedades dentro.

//7. Otro método para sacar todos los valores y propiedades de un objeto.

for(let propiedad in libro) {
console.log(`${propiedad}:${libro[propiedad]}`)
};

//6. Anidación de objetos.

const usuario = {
nombre: "Ana",
direccion: {
ciudad: "Madrid",
calle: "Calle Cadiz"
}
}

console.log(usuario.direccion.ciudad)

usuario.direccion.numero = 30;

console.log(usuario.direccion)

delete usuario.direccion.numero;

console.log(usuario.direccion)

// lo ideal es hacer como mucho dos o tres anidaciones, cuanto más allá, más caótico y dificil de leer será el código.

## DESUSTRUCTURACIÓN ARRAYS.

const numeros = [1, 2, 3];
// const a = numeros[0]; //1
// const b = numeros[2]; //3

//desustructurandolo, sería asi.

const [a, b, c] = [1, 2, 3]; //si quisier saltarme un valor, por ejemplo b sería así const [a, , c] = [1, 2, 3]; no declararíamos el console.log, pues no existe
console.log(a);
console.log(b);
console.log(c);

/_1. Dado el array ["rojo", "verde","azul"] usa desustructuración para: - Crear 3 variables primero, segundo y tercero. - Imprime los 3 valores _/

const colores = ["rojo", "verde","azul"]
const [primero, segundo, tercero] = colores; //es lo mismo que poner todo el array, porque estamos respetando el orden.

console.log(primero);
console.log(segundo);
console.log(tercero);

// Si hubiesemos añadido más valors dentro del array pero seguimos con la cuenta hasta tercero, aquellos que no entren serán omitidos.
// Para que no se pierdan el resto de colores podemos hacer:
const color = ["rojo", "verde","azul", "amarillo", "rosa"]
const [first, second, third, ...rest] = color;

console.log(first);
console.log(second);
console.log(third);  
console.log(...rest); //Esta variable -tiene un nombre que no recuerdo- puede tener cualquier nombre, se quedaría con los sobrantes.

//En el caso de que se declaren más variables en exceso, estas vacías serán "undefined", si queremos que nos aparezca algo, cuando la declaramos
// pondríamos (siguiento el ejemplo anterior) const [first, second, third, fourth = "cyan"; fith = null].
// si existe un contendio para esa variable tendrá prioridad a la que hemos declarado. Si queremos dejarlo vacío, es mejor declararlo como null

// Teniendo en cuenta esta variable const datos = [100], desestructura el primer elemento y asigna valores por defecto para
// el segundo y tercero: 100, 0 y "unknown".

const datos = [100];
let [x, y = 0, z = 'unknown'] = datos;

console.log()
console.log(y)
console.log(z)

                        La declaración const crea una referencia inmutable a un valor. Eso no
                        signific a que el valor se mantenga inmutable, solo que la variable
                        que lo identifica no puede ser reasignada. Por ejemplo, en caso de que
                        el contenido sea un objeto, eso signifca que el contenido del objeto
                        (por ejemplo, sus propiedades) puede ser alterado. Hay que entender, que la
                        declaración const como "crea una variable con una identidad constante" no
                        "una variable con un valor que se mantiene constante" o "crea información(?)
                        inmutable" no "valores inmutables"

## DESUSTRUCTURACIÓN OBJETOS

const perro = {
nombre : "Mambo",
edad: 11,
chucheFavorita: "Pan",
raza: "Bull Terrie",
capa: "corto",
}

const{ nombre, chucheFavorita } = perro;
console.log(nombre);
console.log(chucheFavorita);

//También podría ser const {nombre: nombrePerrete, chucheFavorita: varChuchePerro} = perro; (son otro forma de llamarlo)

//Con el objeto.

const usuario = {
id: 123,
name: "Paco",
email: "paco@paco.paco"
}

// Extrae nombre y el mail
// Extrae el id y renombrarlo a usuarioID

const {name, email, id: userID} = usuario;
console.log(name, email, userID)

//Ejercicios.

// Teneindo en cuenta el siguiente array
const coordenadas = [13, 20];

// Desestructura los valores en variables x e y. Imprime ambos valores.

const [x, y] = coordenadas;
console.log(x);
console.log(y);

// Pasa los valores de una variable a otra, con una desustructuración

let a = 12;
let b = 56;

[a, b] = [b, a]
console.log(a)
console.log(b)

// Dado este objeto

const mascota = {
nombre: "Timmy",
especie: "perro",
}

//Desetructura para obtener el nombre y la especie. Imprime "La mascota es [especie] que se llama [nombre]":

const {nombre, especie} = mascota;
console.log(`la mascota es un ${especie} y se llama ${nombre}`);

// Dado este objeto

const vehiculo = {
tipo: "coche",
}
//Desetructura el tipo y color, usando gris como valor por defecto para color.

const {tipo, color = "gris"} = vehiculo;
console.log(tipo);
console.log(color); //el objeto no muta, hay que señalarlo por separado.

// Dado este objeto:

const pelicula = {
titulo: "Inception",
director: "Christopher Nolan"
}

//Desetructura titulo y director, pero renombralos a nombrePelicula y autor

const {titulo: nombrePelicula, director: autor} = pelicula //ACORDARSE DE LOS ":" PARA RENOMBRAR
console.log(pelicula)

const dias = ["lunes", "martes", "miercoles", "jueves"];
const [primero, , tercero] = dias; //tengo que llamarlos, si uso días será todo el array
console.log(primero);
console.log(tercero);

// Teniendo en cuenta este objeto, imprimero el autor (author) y de nacionalidad (nationality).

const libro = {
title: "1984",  
 author: {
name: "George Orwell",
nationality: "Británica",
}
}

const {
author: { author, //IMPORTANTE: En este caso usamos los : y las {} para llamar el objeto anidado
nationality,
genero = "ciencia ficción"
}
} = libro;

console.log(`El autor ${author} era de nacionalidad ${nationality}`) //El autor undefined era de nacionalidad Británica
console.log(libro.author) //esto era solo porque quería ver como lo tenía que declarar. El género no sae porque no es original al objeto

// Desestructura este nuevo objeto para obtener un segundo ingrediente es una variable dulce. Imprime el elemento dulce.

const receta = {
nombre: "Tarta de manzana",
ingredientes: ["manzana", "azúcar", "harina"]
}

const {
ingredientes: [ ,dulce]
} = receta

//let dulce = receta.ingredientes[1];
console.log(`la tarta lleva ${dulce}`) //la tarta lleva azúcar

// ## DESESTRUCTURACIÓN EN BUCLE

const personas = [
{
nombre: "Paco",
edad: 33
},
{
nombre: "María",
edad: 20
},
{
nombre: "Pablo",
edad: 25
}
]

for (const {nombre, edad} of personas) { //for of es un bucle para arrays, se usa bastanta para desustructuración
console.log(`${nombre} tiene ${edad}`) //Paco tiene 33
} //María tiene 20
//Pablo tiene 25

// const [nombre2, edad] = personas; //como realmente solo está llamando a dos elementos solo se ejecuta al llamado, por eso nos hace falta el bucle for
// console.log(nombre2); // {nombre: 'Paco', edad: 33}
// console.log(edad); //{nombre: 'María', edad: 20}

Otro ejemplo de desutructuración

const productos = [
{ nombre: "teclado", precio: 35},
{ nombre: "ratón", precio: 40},
{ nombre: "monitor", precio: 105},
]

for (const{nombre, precio} of productos){
console.log(nombre, precio);
}

## TIPOS DE DATOS (ADD)

### VALOR Y REFERENCIA

x = 5;
y = x; //y = 5

x = "adios"; //y = 5, porque mantiene el valor previo, si fuese en una línea más abajo si lo cambiaría.

### ALMACENADOS POR REFERENCIAS

const casa = {
precio: "caro",
metros: 100\*2,
ubicacion: "málaga"
};

const apartamento = casa; //le asingo una referencia, la referencia SIEMPRE se verá afectada por los cambios del objeto

console.log(apartamento); //{precio: 'caro', metros: 200, ubicacion: 'málaga'}
console.log(casa); //{precio: 'caro', metros: 200, ubicacion: 'málaga'}

casa.precio = "mas caro aun"

console.log(apartamento); //{precio: 'mas caro aun', metros: 200, ubicacion: 'málaga'}. Cambia por ser dependiente
console.log(casa); //{precio: 'mas caro aun', metros: 200, ubicacion: 'málaga'}

apartamento.piso = "primero" //comparten datos, así que se añade en ambos

console.log(apartamento); //{precio: 'mas caro aun', metros: 200, ubicacion: 'málaga', piso: 'primero'}
console.log(casa); //{precio: 'mas caro aun', metros: 200, ubicacion: 'málaga', piso: 'primero'}

### Copia profunda (deep copy), ahora mismo lo que estamos haciendo es una copia supercial (shallow copy)

const deepCopy = JSON.parse(JSON.stringify(casa)); //hemos puesto deepCopy solo para identificarlo en este caso. JSON.stringfy lo convierte en string
deepCopy.precio = "barato" // y parse lo convierte en objeto.
console.log(deepCopy);

### Casting por conversión de tipo

### Coerción

#### 04/06

## FUNCIONES

Bloque de codigo que se puede reutilizar y hace una acción específica. Puedo invocarla/llamarla, cuantas veces quiera.

## DECLARACIÓN DE FUNCIONES

También llamada expresión de funciones, primero se usa la palabra reservada function, luego un nombre (siempremepezará con un verbo) y luego una lista de parámetros entre parentesis (separado por coma si hay más de uno) y luego el código de la función entrellaves, "cuerpo de la función".

function saludar() /_el parentesis puede ir vacío_/{
console.log("HOLA!")
}

saludar(); //esto sería la invocación de una función nombrada, sino en este caso no se ejecuta el console.log.
saludar();
saludar();
saludar();
saludar(); //puedo llamarla tantas veces quiera

function saludar(nombre){ //parametro como variable que definen la declaración de la función, marcadores para los argumentos
console.log(`Hola ${nombre} buenos días!`)
}

saludar("Ana") //argumentos a usar cuando llamamos a la función. Son valores reales.
saludar("Pedro")
// saludar(prompt("Indica tu nombre")) //podemos usar prompt

//podemos crear también variables con let o const

function suma(num1, num2) {
let resultado = num1 + num2
console.log(`El resultado sería ${resultado}`)
}

suma(4, 10) // El resultado sería 14
suma(18, 24) // El resultado sería 42
suma(53) //NaN porque se suma el argumento con un undefine por no haber definido el valor del num2

//Variable Locar aqauellas que se declaran dentro de una función (el ejmplo de los apuntes)
//Varables Externas, aquellas que se pueden usar en cualquier parte del código.

//Variables locales y globales

let global ="Soy la var global";

function example() {
let local = "Soy un var local";
global = "eeeoo"; //podemos cambiar el interior de la variable que está fuera
console.log(global);
console.log(local)
}

example();
example();
example();
example();

console.log(global);
console.log(local); //no se puede llamar

## return devolver un valor de una operación o calculo

function calculo(a, b) {
return a \* b;
}

let resultado = calculo(2, 2)
console.log(resultado);
