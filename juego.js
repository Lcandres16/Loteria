document.getElementById("jugarButton").addEventListener("click", jugarLoteria);

function jugarLoteria() {
    const numeros = Array.from({ length: 4 }, () => Math.ceil(Math.random() * 2));
    const animales = ["perro", "gato", "elefante", "tigre"];
    const animal = animales[Math.floor(Math.random() * animales.length)];
    
    document.getElementById("numeros").textContent = numeros.join(", ");
    document.getElementById("animal").textContent = animal;

    const numerosCorrectos = numeros.join("") === "1122";
    const animalCorrecto = animal === "perro";

    const mensaje = numerosCorrectos && animalCorrecto
        ? "¡Ganaste el gran premio con 4 números y el animal correcto!"
        : numerosCorrectos
            ? "¡Ganaste con 3 números iguales!"
            : animalCorrecto
                ? "¡Ganaste un ticket adicional por tener el animal correcto!"
                : "No ganaste esta vez. ¡Inténtalo de nuevo!";

    document.getElementById("resultado").textContent = mensaje;
    console.log(mensaje);
}
