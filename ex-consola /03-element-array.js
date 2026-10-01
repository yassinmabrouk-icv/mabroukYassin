/**
 * Exercici 3: Validar que l'índex no sigui menor a zero
 * i que l'element existeixi dins de l'array
 */

function getByIdx(arr,idx){
    if (idx < 0 || idx >= arr.length) {
        return "Valor no vàlid";
    }
    return arr[idx];
}

let resultat = getByIdx([1,2],1);
console.log(resultat);


