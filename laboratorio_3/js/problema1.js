function validarCadena(cadena){
    return !isNaN(cadena) && !isNaN(parseFloat(cadena));
}

function esPalindromo(cadena){
    let cadenaAlReves = cadena.split('').reverse().join('');
    return cadena === cadenaAlReves;
}

function esPalindromoBinario(cadena){
    let valorNum = parseInt(cadena, 10);
    let codBinario = valorNum.toString(2);
    return esPalindromo(codBinario);
}

export function verificarPalindromo(t){
    if (validarCadena(t)){
        if (esPalindromo(t) && esPalindromoBinario(t)){
            return "El número ingresado ES un palíndromo de doble base."
        } else {
            return "El número ingresado NO es un palíndromo de doble base"
        }
    } else {
        return "Input Inválido. Ingrese solo números.";
    }
}