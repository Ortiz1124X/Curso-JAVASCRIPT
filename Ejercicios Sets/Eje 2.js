// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj = [
    {nombre: 'Felipe', apellido: 'Ortiz', edad: 19, altura: '1.75 mts', eresDesarrollador: true}
];

console.log(obj);

// - Una variable que obtenga tu edad a partir del objeto anterior

const obj2 = obj;
console.log(obj2);

obj2.edad = 20;
console.log(obj2);
console.log(obj);


// - Una lista que contenga el objeto con tus datos personales y
// un nuevo objeto con los datos personales de tus dos mejores amig@s

const obj_p = [
    {nombre: 'Luis Felipe', apellido: 'Hernandez Ortiz', edad: 19, altura: '1.75 mts', eresDesarrollador: true}
];

const amigos_s = [
    {nombre: 'Juan Jose', apellido: 'Rojas Guaneme', edad: 18, altura: '1.60 mts', eresDesarrollador: true},
    {nombre: 'Oscar David', apellido: 'Contreras Juarez', edad: 22, altura: '1.80 mts', eresDesarrollador: false},
];

// - Una nueva lista con los objetos de la lista anterior ordenados por edad,
//  de mayor a menor

obj_p.sort();
console.log(obj_p);

let amigos_p = [
    {nombre1: 'Juan Jose', apellido: 'Rojas Guaneme', edad: 18, altura: '1.60 mts', eresDesarrollador: true},
    {nombre2: 'Oscar David', apellido: 'Contreras Juarez', edad: 22, altura: '1.80 mts', eresDesarrollador: false},
];

const amigos_a = [
    {nombre1: 'Juan Jose', apellido: 'Rojas Guaneme', edad: 18, altura: '1.60 mts', eresDesarrollador: true},
    {nombre2: 'Oscar David', apellido: 'Contreras Juarez', edad: 22, altura: '1.80 mts', eresDesarrollador: false},
];

amigos_a.sort((a, b) => 18 - 22);
console.log(amigos_a);