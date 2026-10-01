/**
 * Exercici 5:
 * Crear un algoritme que retorni el nombre major i menor d'un array
 * NOTA: Exercici típic de prova tècnica en entrevistes de feina
 */

let array =[2,5,7,15,-5,-100,55];

function getMenorMajor(arr){
    let major = arr[0];
    let menor = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
        if (arr[i] > major) {
            major = arr[i];
        }
    }
    return [major, menor];
}

let nombres =getMenorMajor(array);
console.log(nombres);
