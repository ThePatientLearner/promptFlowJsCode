// Pide al usuario que ingrese su nombre
var nombre = prompt("Por favor, ingresa tu nombre:");

// Muestra un saludo con el nombre proporcionado
var resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = "Hola, " + nombre + "! ¿Cómo estás?";
