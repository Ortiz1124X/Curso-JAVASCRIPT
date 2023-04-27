// - Una función sin parámetros que devuelva siempre "true"

const funcion_s = true;
devuelva(funcion_s);

function devuelva(nombre) {
    console.log(`Always ${nombre}`);
    console.log(funcion_s);
}

function devuelve() {
    return true
}

// - Una función asíncrona que utilice un setTimeout

setTimeout(function(){
    console.log("Hola Soy Paulina!");
}, 1000)

const Callback = () => console.log("Hola Mucho gusto soy Felipe");
setTimeout(Callback, 1000);

//  y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const miPromesa = time => new Promise(resolveCallback => setTimeout(resolveCallback, time));

miPromesa(5000)
    .then(() => console.log(`Este es un retardo de al menos 5 segundos`))
    .catch(() => console.log(`Retardo fallido`));


// - Una función generadora de índices pares automáticos

function* Pares() {
    let par = 0
    while(true) {
        yield par += 2
    }
}
