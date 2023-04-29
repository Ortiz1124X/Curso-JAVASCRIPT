// - Crea un botón en html (<button>Botón</button>)

// - Vincula un evento de tipo "click" al botón anterior, que muestre una alerta en el navegador "click en el botón"

// - Crea un script para lanzar un servidor de desarrollo con http-server

// - Lanza el servidor de desarrollo a través del script anterior y prueba que el botón funciona correctamente

// - Integra jQuery a través del CDN (https://releases.jquery.com/)

// - En el fichero index.js crea un evento click en el botón a través de jQuery, que muestre por consola "Hola, estoy utilizando jQuery"

const boton = document.querySelector(".btn")

boton.addEventListener("click", () => {
    alert("Click en el Boton")

    const respuesta = confirm("¿Estas Seguro?")
        if (respuesta) {
            console.log("Hola Soy Felipe Y Estoy Utilizando JQuery")
        } else {
            console.log("Aqui tambien uso JQuery")
        }
})

