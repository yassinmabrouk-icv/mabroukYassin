/**
 * Exercici 9: fer l'operació inversa de l'exercici 8.
 * 
 * 
 * [
  { name: 'John', id: 1 },
  { name: 'Doe', id: 2 },
  { name: 'Brown', id: 3 }
]
 */
let pairs = [
    [1, {  name: 'John' }],
    [2, {  name: 'Doe' }],
    [3, { name: 'Brown' }]
];

function toCollection(arr){
    let nouArray = [];
    for (let i = 0; i < arr.length; i++) {
        nouArray[i] = arr[i][1];
        nouArray[i].id = arr[i][0];
    }
    return nouArray;
}

let resultat = toCollection(pairs);
console.log(resultat);
