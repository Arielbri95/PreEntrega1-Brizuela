let alumno = prompt("Ingrese el nombre del alumno");
let totalNotas = parseInt(
  prompt("Ingrese la cantidad de notas del alumno: " + alumno)
);
let contador = 0;
let sumaNotas = 0;

while (contador != totalNotas) {
  let nota = parseInt(prompt("Ingrese la nota numero " + (contador + 1)));

  if (nota >= 0 && nota <= 10) {
    sumaNotas = sumaNotas + nota;
    contador = contador + 1;
  } else {
    alert("Ingrese la nota de vuelta");
  }
}
console.log("El promedio de " + alumno + " es: ");
console.log(sacarPromedio(totalNotas, sumaNotas));

function sacarPromedio(totalNotas, sumaNotas) {
  return sumaNotas / totalNotas;
}
