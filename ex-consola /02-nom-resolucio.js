/**
 * Exercici 2:
 *  Donada la funció següent fer que indiqui quin és el nom 
 * de la resolució en funció dels paràmetres amplada i altura
 * 
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD  1280 x 720 
 */
function nomResolucio(amplada, altura) {
    if (amplada == 7680 && altura == 4320) {
        return "8K";
    } else if (amplada == 3840 && altura == 2160) {
        return "4K";
    } else if (amplada == 2560 && altura == 1440) {
        return "WQHD";
    } else if (amplada == 1920 && altura == 720) {
        return "FHD";
    } else if (amplada == 1280 && altura == 720) {
        return "HD";
    } else {
        console.log("Error: No es reconeix el valor!");
    }
}
let nom =nomResolucio(1280,720);

// En cas de que els valors no corresponguin a cap resolució,
// la validació evita que es mostri valor undifined a la consola.
if (nom == undefined) {
    console.log("Els valors introduits no corresponen a cap resolució");
} else {
    console.log("El nom de la resolució és: <br>" + nom);
}
