// Solicitar al usuario que ingrese el lado a del triángulo
var ladoA = parseFloat(prompt("Ingrese el lado a del triángulo:"));

// Solicitar al usuario que ingrese el lado b del triángulo
var ladoB = parseFloat(prompt("Ingrese el lado b del triángulo:"));

// Solicitar al usuario que ingrese el lado c del triángulo
var ladoC = parseFloat(prompt("Ingrese el lado c del triángulo:"));

// Calcular el perímetro del triángulo (perímetro = a + b + c)
var perimetro = ladoA + ladoB + ladoC;

// Mostrar el resultado
console.log("El perímetro del triángulo es: " + perimetro);
