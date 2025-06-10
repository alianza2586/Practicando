class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = [];

    }

    agregarCalificaciones(calificaciones) {
        this.calificaciones.push(calificaciones);

    }
    obtenerPromedio() {
        if (this.calificaciones.length === 0) return 0;
        let suma = this.calificaciones.reduce((acumulado, calificaciones) => acumulado + this.calificaciones, 0);
        return suma / this.calificaciones.length;

    }
}

let est_1 = new Estudiante("Anna", 20);
est_1.agregarCalificaciones(10);
est_1.agregarCalificaciones(16);
est_1.agregarCalificaciones(12);
est_1.agregarCalificaciones(16);
est_1.agregarCalificaciones(9);

let est_2 = new Estudiante("Jose", 22);
est_1.agregarCalificaciones(17);
est_1.agregarCalificaciones(11);
est_1.agregarCalificaciones(15);
est_1.agregarCalificaciones(8);
est_1.agregarCalificaciones(8);

console.log(`Promedio de ${est_1.nombre}: ${est_1.obtenerPromedio()}`);