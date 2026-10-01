alert("Programa per crear un array de l'1 fins a N");
const n = Number(window.prompt("Quina longitud vols? ex. 4"));

function crearArray(n){
    let nouArray = [];
    for (let i = 0; i < n; i++) {
        nouArray[i] = i + 1;
    }
    return nouArray;
}
let resultat = crearArray(n);

document.writeln("<h3>Exercici 10: crear un array</h3>");
document.writeln("Per a N = " + n + ": [" + resultat + "]");
