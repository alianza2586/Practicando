/* 
Ejecutar => CONTROL + OPTION + N

De una lista de segundos, conviértelos a minutos redondeando a 2 decimales.
*/
const segundos = [90, 120, 75];
// Resultado esperado: [1.5, 2.0, 1.25]

// agregando en desk

let minu = segundos.map(sg => sg / 60);
console.log(minu);