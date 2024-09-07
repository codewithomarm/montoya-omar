function validarCadena(cadena){
    return !isNaN(cadena) && !isNaN(parseFloat(cadena));
}

export function esBisiesto(a){
    let respuesta = "";
    if (validarCadena(a)){
        if (a % 4 === 0) {
            if (a % 100 === 0) {
                if (a % 400 === 0) {
                    respuesta = "El año ingresado ES bisiesto";
                } else {
                    respuesta = "El año ingresado NO es bisiesto";
                }
            } else {
                respuesta = "El año ingresado ES bisiesto";
            }
        } else {
            respuesta = "El año ingresado NO es bisiesto";
        }
    } else {
        respuesta = "Input inválido. Ingrese solo números";
    }
    return respuesta;
}