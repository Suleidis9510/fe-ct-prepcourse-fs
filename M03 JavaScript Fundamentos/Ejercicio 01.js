/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

// En los siguientes ejercicios deberás reemplazar el valor null
// por el correspondiente.

// Crea una variable de tipo string.
const nuevoString = "null";

// Crea una variable de tipo number.
const nuevoNumero = 10;

// Crea una variable de tipo boolean.
const nuevoBoolean = true;

// Resuelve el siguiente problema matemático.
const nuevaResta = 10 - null === 3;
if(nuevaResta === 3){
   console.log("la exprecion es verdadera")}
   else{
      console.log("la exprecion es falsa")
   }


// Resuelve el siguiente problema matemático.
const nuevaMultiplicacion = 10 * null === 40;
if(nuevaMultiplicacion === 40){
   console.log("true");
}else{
   console.log("false")
}

// Resuelve el siguiente problema matemático.
const nuevoModulo = 21 % 5 === null;
if(nuevoModulo === null){
   console.log("true");
}else{
   console.log("false")
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   nuevoString,
   nuevoNumero,
   nuevoBoolean,
   nuevaResta,
   nuevaMultiplicacion,
   nuevoModulo,
};
