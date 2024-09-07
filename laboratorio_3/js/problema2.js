export function contarCaracteres(t){
    // Validar si la cadena tiene mínimo un carácter
    if (!(t === "")) {
        // Convertir la cadena "t" en un arreglo
        let arr = t.split('');
        // arreglo que contendrá los carácteres individuales
        let arrChar = [];
        // arreglo que contendrá la cantidad de veces que se repite cada carácter
        let arrCount = [];

        // Recorrer el arreglo original carácter por carácter
        for (let i=0; i<arr.length; i++){
            let encontrado = false;
            for (let j=0; j<arrChar.length; j++){
                // Si el carácter ya está en arrChar, actualizamos arrCount
                if (arr[i] === arrChar[j]){
                    arrCount[j]++;
                    encontrado = true;
                    break;
                }
            }
            // Si el carácter no está en arrChar, lo agregamos
            if (!encontrado){
                arrChar.push(arr[i]);
                arrCount.push(1);
            }
        }

        let respuesta = "Ha ingresado:";
        for (let k=0; k<arrChar.length; k++){
            respuesta += ` Carácter: "${arrChar[k]}" Cantidad: ${arrCount[k]},`;
        }
        return respuesta;
    } else {
        return "Por favor ingrese una cadena";
    }
}