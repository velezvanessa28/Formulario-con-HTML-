var fecha_nacimiento = 2003;
var fecha_actual = 2018;

if (fecha_nacimiento <= fecha_actual) {
	var edad = fecha_actual - fecha_nacimiento;
	if (edad >= 18) {
		console.log("Este usuario es mayor de edad");
	}
	else {
	console.log("No pola");
	}
}

console.log(edad);

for (var i = 0; i <= 50; i++) {
	console.log(i * 7);
}

