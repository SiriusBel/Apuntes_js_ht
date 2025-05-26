# EXPLICACIONES DE JAVASCRIPT ✍(◔◡◔)

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

let saludo; ⇐ Hemos dedclarado una variable pero no le hemos añadido valor.

saludo = "Hola"; ⇐ Valor variable.
saludo = "Adios"; puede mutar, la línea que esté más abajo es su valor final.

const nombre = "Cristina"; ⇐ Las variables de const tienen que estar siempre inicializadas.
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

- Objetos ➟ Entre llaves {} tenemos distintos contenido del elementos, cada uno tiene una clave y un valor. En este caso es como un JSON.

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

## --------------- Operadores ---------------

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
