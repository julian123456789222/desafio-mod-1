const argumentos = require("./pelis.js");
function argumento(i) {
  i.forEach(function (item, index) {
    if (item.startsWith("--")) {
      let quitarGuion = item.slice(2);
      let separarPalabras = i[index + 1];

      return argumentos.searchPorArgumento(quitarGuion, separarPalabras);
    }
  });
}

function main() {
  argumento(process.argv.slice(2));
  console.log(argumentos.getAll());
}

main();
