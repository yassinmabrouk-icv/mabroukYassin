// Exercici 1: completa l'estructura següent perquè funcioni el programa
// i indiqui quin és el major dels dos nombres.
// dos nombres
alert("Programa per obtenir el valor més gran de dos nombres");
const a = Number(window.prompt("Introdueix el primer:"));
const b = Number(window.prompt("Introdueix el segon valor:"));


function quinEsMajor(primerValor,segonValor){
    if (primerValor > segonValor) {
        return primerValor;
    } else {
        return segonValor;
    }
}
let major = quinEsMajor(a,b);


document.writeln("<h3>Primer exercici:</h3>")
document.writeln("El valor major és: <br>" + major);

