/* 

5- Escribe un programa que solicite al usuario una calificacion (entre 0 y 100) y
determine la nota correspondiente : 
A (90-100)
B (80-89)
C (70-79)
D (60-69)
F (0-59)

*/


let cali = prompt("Ingrese una nota entre 0 y 100 : ");

if (cali >= 90 && cali <= 100) {
    alert("Tu nota fue de " + cali + " y obtuviste una A");
} else if (cali >= 80 && cali <= 89) {
    alert("Tu nota fue de " + cali + " y obtuviste una B");
} else if (cali >= 70 && cali <= 79) {
    alert("Tu nota fue de " + cali + " y obtuviste una C");
} else if (cali >= 60 && cali <= 69) {
    alert("Tu nota fue de " + cali + " y obtuviste una D");
} else if (cali >= 0 && cali <= 59) {
    alert("Tu nota fue de " + cali + " y obtuviste una F");
}