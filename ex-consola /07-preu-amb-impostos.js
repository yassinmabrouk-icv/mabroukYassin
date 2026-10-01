/**
 * Exercici 7:
 *  Crear un algoritme que retorni el preu del producte més impostos
 * 
 */

function preuComplet(preu, impost){
    let preuFinal = (preu + (preu * impost)).toFixed(2);
    return preuFinal;
}
let resultat = preuComplet(19.90,0.15);
console.log(resultat);
