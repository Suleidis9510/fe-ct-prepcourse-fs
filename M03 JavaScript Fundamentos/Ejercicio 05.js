/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if(num > 0){
      return "es positivo"
   }else if(num < 0){
      return "es negativo"
   }else{
      return false
   }
   
}
console.log(esPositivo(3))
console.log(esPositivo(-1))
console.log(esPositivo(0))

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   return srt + "!"
}

console.log(agregarSimboloExclamacion("Hello world"));


function combinarNombres(nombre, apellido) { 
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   return "Hola mi nombre es " + nombre + " y mi apellido es " + apellido;
}
console.log(combinarNombres("Henry", "Ford"));

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   return "Hola " + nombre + "!"
}
console.log(obtenerSaludo("Henry"));


function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   return alto * ancho;
}
let area = obtenerAreaRectangulo(4, 8)
console.log("El area del rectangulo tiene un valor de: " + area);


function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   return lado * 4
}
var ladoCuadrado = 6;
var perimetro = retornarPerimetro(ladoCuadrado)
console.log(perimetro)

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return base * altura;
}
let areaTriangulo = areaDelTriangulo(40, 60);
console.log("El area del triangulo es de: " + areaTriangulo);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   let tasaDeCambio = 1.20;
   let dolares = euro * tasaDeCambio;
   return dolares
}
console.log(tasaDeCambio(5))

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   const vocales = ['a', 'e', 'i', 'o', 'u']
   if(
       letra.length > 1 || !vocales.includes(letra.toLowerCase())){
      return "Dato incorrecto";
   }
   return "Es vocal";
}
const result = esVocal("9")
console.log(result)



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
