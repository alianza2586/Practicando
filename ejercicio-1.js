
// Uso de Class y arreglos
class Trabajador{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    infoTrabajador(){
        return  `Nombre : ${this.nombre} - Apellido: ${this.apellido} - Edad: ${this.edad} años`;
    }

}

class Empleador{
    constructor(){
        this.empleado=[];
    }
    agregarTrabajador(empleado){
         this.empleado.push(empleado);
    }
    
}
let trabajador1 = new Trabajador("Andre","Saavedra",37);
let trabajador2 = new Trabajador("Miguel","Diaz",34);
let trabajador3 = new Trabajador("Jose","Urbano",25);

let persona = new Empleador();

persona.agregarTrabajador(trabajador1);
persona.agregarTrabajador(trabajador2);
persona.agregarTrabajador(trabajador3);

console.log(trabajador1.infoTrabajador());
console.log(trabajador2.infoTrabajador());
console.log(trabajador3.infoTrabajador());
