const fs = require("fs");

const data = fs.readFileSync(__dirname + "/pelis.json");
const string = data.toString();
var pelis = JSON.parse(string);

exports.getAll = function () {
  return pelis;
};

function ordenar(property) {
  pelis = pelis.sort(function (a, b) {
    if (a[property] > b[property]) {
      return 1;
    }
    if (a[property] < b[property]) {
      return -1;
    }
    return 0;
  });
}
function tag(texto) {
  pelis = pelis.filter(function (i) {
    return i.tags.includes(texto);
  });
}
function search(texto) {
  pelis = pelis.filter(function (i) {
    return i.title.toLowerCase().includes(texto.toLowerCase());
  });
}
function noFormato() {
  pelis = JSON.stringify(pelis);
}

exports.searchPorArgumento = function (argumento, valor) {
  if (argumento == "sort") {
    return ordenar(valor);
  }
  if (argumento == "search") {
    return search(valor);
  }
  if (argumento == "tag") {
    return tag(valor);
  }
  if (argumento === "no-format") {
    noFormato();
  }
};
