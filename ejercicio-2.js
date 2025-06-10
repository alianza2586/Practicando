/* 
Ejecutar => CONTROL + OPTION + N

De una lista de segundos, conviértelos a minutos redondeando a 2 decimales.
*/
const datos = ["uno", "dos", "tres", "cuatro", "cinco"];

const resultado = datos.filter((valor, indice, arreglo) => {
  return valor.length > indice;
});

console.log(resultado); // ["uno", "tres", "cuatro", "cinco"]

// msj github