const resultado = document.getElementById("excusa");
const limpiarBoton = document.getElementById("clean");

function generadorDeExcusas() {
  let who = ["El jefe", "Mi compañero", "El Formador"];
  let what = [
    "me da pereza",
    "es muy cansino",
    "no lo soporto",
    "es un inútil",
    "no hace nada",
    "es un pelele"
  ];
  let when = [
    "siempre que lo veo",
    "día sí y día también ",
    "hoy y mañana",
    "bocu de mucho",
    "forever"
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let nuevaExcusa =
    who[randomWho] + " " + what[randomWhat] + " " + when[randomWhen];
  resultado.innerHTML = nuevaExcusa;
}

function limpiadorDeExcusas() {
  document.getElementById("excusa").innerHTML = "";
}
