alert("Programa per calcular el preu amb impostos");
const preu = Number(window.prompt("Introdueix el preu del producte ex. 19.90"));
const percentatge = Number(window.prompt("Introdueix l'impost en percentatge ex. 15):")); // No ho demano en decimal per fer-ho més "amigable"

document.writeln("<h3>Exercici 7: preu amb impostos</h3>");

function preuComplet(preu, impost) {
    let preuFinal = (preu + (preu * impost)).toFixed(2); // Només mostro dos decimals amb el toFixed
    return preuFinal;
}
let resultat = preuComplet(preu, percentatge / 100); // Paso el percentatge a decimal
document.writeln(resultat);


