
let alumnosPresentes = 0;
let contador = 1;

do {
  const nombreAlumno = prompt(`Ingrese el nombre del alumno ${contador} (o escriba "fin" para terminar):`);

  if (nombreAlumno.toLowerCase() === "fin") {
    break;
  }

  alumnosPresentes++;
  contador++;
} while (alumnosPresentes < 10);

if (alumnosPresentes >= 10) {
  alert("Todos los alumnos están presentes en el aula.");
} else {
  alert("No hay suficientes alumnos presentes en el aula.");
}



/* basicamente seria un contador de alumnos minimos para poder iniciar una clase */ 