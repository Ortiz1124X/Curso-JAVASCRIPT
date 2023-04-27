// - La fecha de hoy

const fecha = new Date();
console.log(fecha);

// - La fecha de tu nacimiento

const fecha_n = new Date("2003, 06, 16");
console.log(fecha_n)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

console.log(fecha.getTime() > fecha_n.getTime());

// - Una variable que contenga el día de tu nacimiento

console.log(fecha_n.getDay());

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

console.log(fecha_n.getMonth());

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

console.log(fecha_n.getFullYear());