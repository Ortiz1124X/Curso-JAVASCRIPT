
// - Una cadena de texto con tu Nombre

let cadena_1 = "Luis Felipe"
console.log(cadena_1)

// - Otra cadena de texto con tu Apellido

let cadena_2 = "Hernandez Ortiz"
console.log(cadena_2)

// - Una cadena de texto que se llame "estudiante"
// concatenando tu Nombre y tu Apellido con un espacio entre medias

let nombre = "Luis Felipe"
let apellido = "Hernandez Ortiz"
console.log(nombre.concat(" ", apellido))

// - Una cadena de texto que se llame "estudianteMayus"
// que contenga la cadena estudiante pero todo en mayúsculas

let estudianteMayus = "luis felipe hernandez ortiz"
console.log(estudianteMayus.toUpperCase())

// - Una cadena de texto que se llame "estudianteMinus"
// que contenga la cadena estudiante pero todo en minúsculas

let estudianteMinus = "LUIS FELIPE HERNANDEZ ORTIZ"
console.log(estudianteMinus.toLowerCase())

// - Una variable que contenga 
// el número de letras de la cadena "estudiante" contando los espacios

console.log(estudianteMinus.length)

// - Una variable que contenga la primera letra del Nombre

console.log(estudianteMinus.charAt(0))

// - Otra variable que contenga la última letra del Apellido

console.log(estudianteMinus.charAt(26))

// - Una cadena de texto que elimine los espacios de la variable "estudiante"

let estudiante1 = " Luis    felipe   hernandez   ortiz    "
console.log(estudiante1.length)
console.log(estudiante1.trim().length)

// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

console.log(estudiante1.includes(estudiante1))