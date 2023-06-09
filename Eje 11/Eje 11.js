// Crea un nuevo fichero JS que contenga las siguientes líneas
// - Una función que admita un parámetro "num", y devuelva una lista
//con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])

function Fibonacci(num) {
    if (num === 1) return [1];
    if (num === 2) return [1,1];

    let lista = [1, 1];
    for (let i = 2; i < num; i++) {
        lista.push(lista[i - 1] + lista[i - 2]);
    };
    return lista;
};

console.log(Fibonacci(6));

// - Ejecuta la depuración de VSCode para visualizar la ejecución de la función