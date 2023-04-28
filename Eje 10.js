// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {
    nombre;
    asignaturas;

    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas
    };

    obtenDatos () {
        console.log(`Hola mi nombre es ${this.nombre}, mi FP es DAW y estas son mis asignaturas ${this.asignaturas_S}`)
    }
};

const asignaturas_S = ["JavaScript", "HTML", "CSS"];

const nuevo_Dev = new Estudiante("Felipe" , "JavaScript");
console.log(nuevo_Dev);

const nuevo_Dev1 = new Estudiante("Juan", asignaturas_S)
console.log(nuevo_Dev1)
nuevo_Dev1.obtenDatos();
