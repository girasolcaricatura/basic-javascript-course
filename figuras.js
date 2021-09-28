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

//código del círculo

/* console.group ("Círculo");

//radio
const radioCirculo1 = 4;
console.log ("El radio del círculo es: " + radioCirculo1);

//diametro
const diametroCirculo1 = radioCirculo1 * 2;
console.log ("El diámetro del círculo es: " + diametroCirculo1);

// PI 
const PI = Math.PI;

//circunferencia 
const perimetroCirculo = diametroCirculo1 * PI;
console.log ("El perímetro del círculo es: " + perimetroCirculo + " cm");


//área 

const areaCirculo1 = radioCirculo1 * radioCirculo1 * PI;
console.log ("El área del círculo mide: " + areaCirculo1 + " cm^2");


console.groupEnd;
 */
// funciones



