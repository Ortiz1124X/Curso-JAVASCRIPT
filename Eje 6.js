// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

const compra = ['Agua', 'Aceite de Oliva', 'Arroz', 'Pollo'];
console.log(compra);

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

const compra_1 = [compra, 'Aceite de Girasol'];
console.log(compra_1)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

const compra_2 = ['Agua', 'Aceite de Oliva', 'Arroz', 'Pollo', 'Aceite de Girasol'];
const resultado = compra_2.filter(compra2 => compra2 != 'Aceite de Girasol');
console.log(resultado);


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [

    {titulo: 'Creed III', director: 'Michael B. Jordan', fecha: '3 De Marzo 2023'},

    {titulo: 'Super Mario Bros La Pelicula',director: 'Aaron Horvath', fecha: '5 De abril 2023'},

    {titulo: 'Spider-Man: No Way Home',director: 'Jon Watts', fecha: '13 De Diciembre 2021'},
]
    
// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculas_1 = peliculas.filter(obj => obj.fecha >= '1 De Enero 2010');
console.log(peliculas_1);


// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

function directores_1({director}) {
    return `${director}`;
}

const director_n = peliculas.map(directores_1);
console.log(director_n);

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

function titulo_1({titulo}) {
    return `${titulo}`;
}

const titulos_1 = peliculas.map(titulo_1);
console.log(titulos_1);

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

console.log(director_n.concat(titulos_1));

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const final = [...director_n, ...titulos_1];
console.log(final);