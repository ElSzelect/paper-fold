// Sabias que si doblas 7 veces una hoja A4 tendrias el espesor de 1.28 cm/ de un cuaderno
// no es posible doblar mas que eso un papel, pero.. y si fuera posible??
// esta funcion devuelve las medidas y equivalencias de la cantidad de pliegues que reciba
// su hoja A4 de 0.1 milimetros.

export default function CalculaPlieguesHoja(n) {
  var grosorHoja = 0.1;
  var suma = grosorHoja * 2 ** n;
  var contador = 0;
  var reducir = function (numero) {
    return numero / 10;
  };

  var arregloMedidas = [
    "mm (milimeters)",
    "cm (centimeters)",
    "dm (decimeters)",
    "m (meters)",
    "dam (decameters)",
    "hm (hectometers)",
    "km (kilometers)",
    "Mm (megameters)",
    "Gm (gigameters)",
    "Tm (terameters)",
  ];

  while (suma > 10) {
    suma = reducir(suma);
    contador = contador + 1;
    if (contador >= arregloMedidas.length - 1) {
      break;
    }
  }

  var pliegues = function (n) {
    var total = 1;
    for (let i = 0; i < n; i++) {
      total = total * 2;
    }
    return total;
  };

  var objeto = {
    CantidadHojas: pliegues(n),
    Espesor: suma,
    UnidadMedida: arregloMedidas[contador],
  };

  return objeto;
}
