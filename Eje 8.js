const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
],
});

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo Number")
}

const numero = "8";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de buena manera")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar de manera determinada al no cumpliser ninguno de los dos casos")
}

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));
}



// logger.log("Hola esoty saliendo por pantalla");
logger.info("Hola esto es un mensaje informativo");
logger.debug("Hola esto es un mensaje de debug");
logger.warn("Hola esto es un mensaje de dvertencia");
logger.error("Hola esto es un mensaje de error");