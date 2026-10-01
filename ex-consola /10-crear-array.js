/**
 * Crear un array de longitud N on els seus elements
 *  siguin nombres de 1 fins a N
 */

let longitud = 4;

function crearArray(n){
    let nouArray = [];
    for (let i = 0; i < n; i++) {
        nouArray[i] = i + 1;
    }
    return nouArray;

}

let resultat = crearArray(longitud);

console.log(resultat);
