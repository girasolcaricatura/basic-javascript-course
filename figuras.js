//código del cuadrado

console.group ("Cuadrados");

const ladoCuadrado = 5;
console.log (`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log (`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log (`El área del cuadrado es: ${areaCuadrado} cm^2`);

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

//código del triángulo

console.group ("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo1 = 4;


console.log (
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + " cm, "
    + ladoTriangulo2
    + " cm y "
    + baseTriangulo1
    + " cm "
    );

const alturaTriangulo1 = 5.5;
console.log ("La altura del triángulo mide: " + alturaTriangulo1 + " cm");

const perimetroTriangulo1 = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo1;

console.log ("El perímetro del triángulo es: " + perimetroTriangulo1 + " cm");

const areaTriangulo1 = (baseTriangulo1 * alturaTriangulo1) / 2;
console.log ("El área del triángulo mide: " + areaTriangulo1 + " cm^2");

console.groupEnd;

// mi código del círculo

console.group ("miCírculo");

const diametroCirculo = 16;
console.log (`El diámetro del círculo es: ${diametroCirculo} cm`);

const radioCirculo = 8;
console.log (`El radio del círculo es: ${radioCirculo} cm`);

const circunferenciaCirculo = diametroCirculo * Math.PI;
console.log (`La circunferencia del círculo es: ${circunferenciaCirculo} cm`);

const areaCirculo = radioCirculo * radioCirculo * Math.PI;
console.log (`El área del círculo es: ${areaCirculo} cm^2`);

console.groupEnd;

//código del círculo

console.group ("Círculo");

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


