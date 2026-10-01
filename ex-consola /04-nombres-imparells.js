// Exercici 4: Imprimir només els nombres imparells del 0 al 10
// Sortida:
// imparell 1
// imparell 3
// imparell 5
// imparell 7
// imparell 9

for (let i = 0; i <= 10; i++) {
    if (!(i % 2 == 0)) {
        console.log("imparell " + i)
    }
}