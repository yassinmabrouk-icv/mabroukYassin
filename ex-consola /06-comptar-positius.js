/**
 * Exercici 6:
 * Crear un algoritme que retorni la quantitat 
 * de nombres positius d'un array
 * 
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function quantsPositius(arr) {
    let comptadorPositus = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            comptadorPositus++;
        }
    }
    return comptadorPositus;
}

let resultat = quantsPositius(array);
console.log(resultat);
