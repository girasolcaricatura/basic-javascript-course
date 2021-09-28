//código del cuadrado, ahora en funciones

console.group ("Cuadrados");

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}


console.groupEnd;

//mi código del triángulo

console.group ("Mi triángulo");

const ladoTriangulo = 6;
const baseTriangulo = 4;
console.log (`Los lados del triángulo miden: ${ladoTriangulo} cm , ${ladoTriangulo} cm y ${baseTriangulo} cm`);

const mitadLadoTriangulo = baseTriangulo / 2;
const x = ladoTriangulo * ladoTriangulo - mitadLadoTriangulo * mitadLadoTriangulo;
const alturaTriangulo = Math.sqrt(x);

const perimetroTriangulo = ladoTriangulo + ladoTriangulo + baseTriangulo;
console.log (`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = baseTriangulo * alturaTriangulo / 2;
console.log (`El área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd;

//código del triángulo, ahora con funciones

console.group ("Triángulo");

function perimetroTriangulo1 (lado1,lado2,base) {
    return lado1 + lado2 + base;
}

function areaTriangulo1 (base, altura) {
    return base * altura / 2;
}


console.groupEnd;

// mi código del círculo, ahora con funciones

console.group ("miCírculo");

function circunferenciaCirculo (diametro) {
    return diametro * Math.PI;
}

function areaCirculo (radio) {
   return radio * radio * Math.PI;
}


console.groupEnd;

// Aquí interactuamos con HTML

//Cuadrado 

function CalcularPerimetroCuadrado() {
    const inputLadoCuadrado = document.getElementById("InputLadoCuadrado");
    const ladoCuadrado = inputLadoCuadrado.value;
    const resultadoPerimetroCuadrado = ladoCuadrado * 4;
    alert("¡El Perímetro del Cuadrado es " + resultadoPerimetroCuadrado + "!");
}

function CalcularAreaCuadrado() {
    const inputLadoCuadrado = document.getElementById("InputLadoCuadrado");
    const ladoCuadrado = inputLadoCuadrado.value;
    const resultadoPerimetroCuadrado = ladoCuadrado * ladoCuadrado;
    alert("¡El Área del Cuadrado es " + resultadoPerimetroCuadrado + "!");
}
//Triangulo 

function CalcularPerimetroTriangulo() {
    const inputLado1Triangulo = document.getElementById("InputLado1Triangulo");
    const inputLado2Triangulo = document.getElementById("InputLado2Triangulo");
    const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const lado1 = inputLado1Triangulo.value;
    const lado2 = inputLado2Triangulo.value;
    const base = inputBaseTriangulo.value;
    const resultadoPerimetroTriangulo = Number(lado1) + Number(lado2) + Number(base);
    alert("¡El Perímetro del Triángulo es " + resultadoPerimetroTriangulo + "!");
}

function CalcularAreaTriangulo() {
    const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const base = inputBaseTriangulo.value;
    const altura = inputAlturaTriangulo.value;
    const resultadoAreaTriangulo = base * altura / 2;
    alert("¡El Área del Triángulo es " + resultadoAreaTriangulo + "!");


}
//Circulo 

function CalcularPerimetroCirculo() {
    const inputRadioCirculo = document.getElementById("InputRadioCirculo");
    const radio = inputRadioCirculo.value;
    const diametro = radio * 2;
    const resultadoPerimetroCirculo = diametro * Math.PI;
    alert("¡La circunferencia del Círculo es " + resultadoPerimetroCirculo + "!");
}

function CalcularAreaCirculo() {
    const inputRadioCirculo = document.getElementById("InputRadioCirculo");
    const radio = inputRadioCirculo.value;
    const resultadoAreaCirculo = radio * radio * Math.PI;
    alert("¡La circunferencia del Círculo es " + resultadoAreaCirculo + "!");
}




