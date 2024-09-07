function validarCadena(cadena){
    return !isNaN(cadena) && !isNaN(parseFloat(cadena));
}

function esPrimo(n){
    if (n <= 1) {
        return false;
    }
    
    if (n === 2) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

export function sumarPrimos(n){
    let suma = 0;
    if (validarCadena(n)){
        if (n > 0) {
            if (n < 1000000){
                for (let i=2; i<n; i++){
                    if (esPrimo(i)){
                        suma+=i;
                    }
                }
                return `Sumatoria de números primos: ${suma}`;
            } else {
                return "Por favor ingrese un número menor a 1000000";
            }
        } else {
            return "Por favor ingrese un número mayor a cero";
        }
    } else {
        return "Input inválido. Ingrese solo números";
    }
}