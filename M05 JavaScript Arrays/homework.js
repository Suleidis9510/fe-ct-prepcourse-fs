/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
if( myArray.length > 0){
   return myArray[0]
}
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8]
let valorParam = devolverPrimerElemento(myArray)
console.log(valorParam)

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   if(arr.length > 0){
      return arr[arr.length - 1]
   }
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let valorFunction = devolverUltimoElemento(arr)
console.log(valorFunction)

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código: 
 if(cadena.length > 0){
   return "Estos son los valores de mi array: " + array.length
 }
}
let cadena =[1, 2, 3, 4, 5, 6, 7]
let valorCadena = obtenerLargoDelArray(cadena)
console.log(valorCadena)

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let newResult = []
for(let i = 0; i < array.length; i++){
newResult.push(array[i] + 1)
}
return newResult
}
let arreglos = [1, 2, 3, 4, 5, 6, 7]
let resultado =incrementarPorUno(arreglos)
console.log(resultado)

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
array.push(elemento)
return array
}
let miArray = [1,2,3,4]
let elementoAgregado = 5;
let answer = agregarItemAlFinalDelArray(miArray, elementoAgregado)
console.log(answer)

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:  
   array.unshift(elemento)
   return array
}
let array1 = [1,2,3,4,5]
let nuevoElemento = 0;
let respuesta1 = agregarItemAlComienzoDelArray(array1, nuevoElemento)
console.log(respuesta1)

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
return palabras.join(" ")

}
let arregloDePalabras = ["Hola", "mundo!"]

let resultad0 = dePalabrasAFrase(arregloDePalabras)
console.log(resultad0)

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento)

}
let otroArreglo = [1,2,3,4,5]
let element0 = 3;
let newResult = arrayContiene(otroArreglo, element0)
console.log(newResult);


function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;
   for(let i = 0; i < arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i]
   }
   return suma
}
let numeros = [1,2,3,4,5];
let miResultad0 = agregarNumeros(numeros);
console.log(miResultad0);


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
let suma = 0
for(let i = 0; i < resultadosTest.length; i++)
suma = suma + resultadosTest[i]

let promedio = suma / resultadosTest.length
return promedio
}
let resultad0sTest = [1,2,3,4,5]
let promedio = promedioResultadosTest(resultad0sTest)
console.log(promedio)

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(arrayOfNums)
}

let numer0s = [2,4,3,6,7,9]
let masGrande = numeroMasGrande(numer0s)
console.log(masGrande)

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if(arguments.length === 0){
      return 0
   }
   let total = 1
   for(let i = 0; i < arguments.length; i++){
total = total * arguments[i]
   }
return total
}
let argumentos = [1,1,2,3,4,5,6,7]
let resultadoMultiplicacion =multiplicarArgumentos(argumentos)
console.log(resultadoMultiplicacion)

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
 let contador = 0
 for(let i = 0; i < array.length; i++){
if(array[i] > 18){
   contador = contador + 1
}
 }
}
let cantidadElementos = [1,23,3,4,56,6,77,8,9,10]
let nuevaCantidad = multiplicarArgumentos(cantidadElementos)
console.log(nuevaCantidad)

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   }else{
      return "Es dia laboral"
   }
}
console.log(1)
console.log(3)
console.log(7)

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numString = num.toString()
   if(numString[0] === "9"){
      return true
   }else{
      return false
   }
}
console.log(empiezaConNueve(98,))

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   if(array.length === 0){
      return true
   }
   for(let i = 0; i < array.length; i++){
      if(array[i]!== array[0]){
         return false
      }
   }
   return true
}
console.log(todosIguales([1, 1, 1])); 
console.log(todosIguales([1, 2, 1])); 
console.log(todosIguales([]));

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let nuevoArreglo = []
for (let i = 0; i < array.length; i++) {
   if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoArreglo.push(array[i])
   }
}
}
let arregolMeses = ["Marzo", "Noviembre", "Enero", "Marzo", "Octubre"]

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultados = []
   for(let i = 0; i <= 10; i++){
      resultados.push(i * 6)
   }
   return resultados
}
console.log(tablaDelSeis())

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let enterosMayores100 = []
   for(let i = 0; i < array.length; i++){
      if(array[i] > 100){
         enterosMayores100.push(array[i])
      }
   }return enterosMayores100

}
let arrayNum = [13, 45, 600, 409, 356, 1000, 23]
let miResultado = mayorACien(arrayNum)
console.log(miResultado)

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let newArray = [];
   for(let i = 0; i < 10; i++){
      if(num === i){
         return "Se interrumpió la ejecución"
   }
      num = num + 2
     newArray.push(num)
   
}
return newArray
}
console.log(breakStatement(9))

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let miNuevoArr = []
   for(let i = 0; i < 10; i++){
      if( i === 5){
       continue;
      }
  num = num + 2
  miNuevoArr.push(num)
}
 return miNuevoArr
 }
console.log(continueStatement(10))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
