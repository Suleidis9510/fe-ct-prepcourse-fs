/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   return x === y
}
console.log(sonIguales(3, 6))

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
  
   if(str1 === str2){
      console.log(false);
   }else{
      console.log(false)
   }
}
confirm.log(tienenMismaLongitud(30, 30))

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90){
      console.log(true);
   }
   else if(num >= 90){ console.log("el numero es igual o mayor a 90")

   }
}
console.log(menosQueNoventa(89))

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50){
      return true;
   }else{
      return false;
   }
}
console.log(mayorQueCincuenta(50))

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if( num % 2 === 0){
      return true;
   }else{
      return false
   }
}
console.log(esPar(8))

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 0){
      return false;
   }
   else{
      return true
   }
}
console.log(esImpar(37));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
