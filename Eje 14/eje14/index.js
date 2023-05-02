// - Crea una variable con tu nombre

let nombre_;

// - Crea una variable con tu apellido

let apellido_;

// - Crea un objeto con tu nombre y tu apellido

let nombre = "Luis Felipe";
let apellido = "Hernandez Ortiz";

const nombreCompleto = `${nombre}, ${apellido}`

// - Almacena el objeto anterior en la SessionStorage

sessionStorage.setItem("nombreCompleto", "Nicol Valeria Agudelo Rojas");

// - Almacena el objeto anterior en la LocalStorage

localStorage.setItem("nombreCompleto", "Juan Camilo Sanchez Rojas");
localStorage.setItem("nombreCOmpleto", JSON.stringify({nombreCompleto: "Juan Jose Rojas Guaneme"}))

// - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior

// - Observa en Google Chrome cómo se almacenan los datos en la SessionStorage, LocalStorage y las cookies

// - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y CookieStorage y vuelve a abrirlo

// - Observa cómo la SessionStorage está vacía

// - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado antes de cerrar el navegador

// - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes, aunque ya está caducado

document.cookie = "nombreCookie=OrtizCookie; path=/";
document.cookie = "nombreCaducidad=Nombre; expires= max-age=120";

