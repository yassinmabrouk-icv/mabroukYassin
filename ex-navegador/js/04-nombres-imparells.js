alert("Programa per mostrar els nombres imparells del 0 a un nombre");
const nombre = Number(window.prompt("Fins a quin nombre?"));

document.writeln("<h3>Exercici 4: nombres imparells</h3>");

for (let i = 0; i <= nombre; i++) {
    if (i % 2 !== 0) {
        document.writeln("imparell " + i + "<br>");
    }
}