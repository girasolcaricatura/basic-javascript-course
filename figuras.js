
// Aquí interactuamos con HTML

//Cuadrado 

function CalcularPerimetroCuadrado() {
    const inputLadoCuadrado = document.getElementById("InputLadoCuadrado");
    const ladoCuadrado = inputLadoCuadrado.value;
    const resultadoPerimetroCuadrado = ladoCuadrado * 4;
    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = "The perimeter of your square is: " + resultadoPerimetroCuadrado + "cm!";
}

function CalcularAreaCuadrado() {
    const inputLadoCuadrado = document.getElementById("InputLadoCuadrado");
    const ladoCuadrado = inputLadoCuadrado.value;
    const resultadoPerimetroCuadrado = ladoCuadrado * ladoCuadrado;
    const squareResult = document.getElementById("squareResult");
    squareResult.innerText = "The area of your square is: " + resultadoPerimetroCuadrado + "cm!";
}
//Triangulo 

function CalcularPerimetroTriangulo() {
    const inputLado1Triangulo = document.getElementById("InputTriangle1");
    const inputLado2Triangulo = document.getElementById("InputTriangle2");
    const inputBaseTriangulo = document.getElementById("InputTriangle3");
    const lado1 = inputLado1Triangulo.value;
    const lado2 = inputLado2Triangulo.value;
    const base = inputBaseTriangulo.value;
    const resultadoPerimetroTriangulo = Number(lado1) + Number(lado2) + Number(base);
    triangleResult.innerText = "The perimeter of your triangle is : " + resultadoPerimetroTriangulo + "cm!"};

function CalcularAreaTriangulo() {
    const baseTriangle = document.getElementById("InputTriangle1");
    const side1Triangle = document.getElementById("InputTriangle2");
    const side2Triangle = document.getElementById("InputTriangle3");

    const base = baseTriangle.value;
    const side1 = side1Triangle.value;
    const side2 = side2Triangle.value;
    const height = helpAltura(side1,side2,base);
    const result = base * height / 2;
    triangleResult.innerText = "The area of the triangle is: " + result + "cm!"};

/* 
function altura() {
        const first = document.getElementById("InputTriangle2");
        const side1 = first.value;
        const second = document.getElementById("InputTriangle3");
        const side2 = second.value;

        if (side1 == side2) {
        const third = document.getElementById("InputTriangle1");
        const base = third.value;
        const mitad = base / 2;
        const operation = side1 * side1 - mitad * mitad;
        const result = Math.sqrt(operation);
        const triangleResult = document.getElementById("triangleResult");
        triangleResult.innerText = "The perimeter of your square is: " + result + "cm!";
        }
    else {
        triangleResult.innerText = `Sorry! Your triangle is not isoseles`;
    }};
     */

    //Circulo 

function CalcularPerimetroCirculo() {
    const inputRadioCirculo = document.getElementById("InputCircle");
    const radio = inputRadioCirculo.value;
    const diametro = radio * 2;
    const resultadoPerimetroCirculo = diametro * Math.PI;
    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The circumference of your circle is " + resultadoPerimetroCirculo + " cm!";
}

function CalcularAreaCirculo() {
    const inputRadioCirculo = document.getElementById("InputCircle");
    const radio = inputRadioCirculo.value;
    const resultadoAreaCirculo = radio * radio * Math.PI;
    const circleResult = document.getElementById("circleResult");
    circleResult.innerText = "The area of your circle is " + resultadoAreaCirculo + " cm!";
}


// calculo de la altura de un triángulo 

function helpAltura (lado1,lado2,base) {
if (lado1 == lado2) {
    const mitadLadoTriangulo = base / 2;
    const x = lado1 * lado1 - mitadLadoTriangulo * mitadLadoTriangulo;
    return Math.sqrt(x);
}
else {
    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = `Sorry! Your triangle is not isoseles`;
}};

function altura() {
    const first = document.getElementById("InputTriangle2");
    const side1 = first.value;
    const second = document.getElementById("InputTriangle3");
    const side2 = second.value;

    if (side1 == side2) {
    const third = document.getElementById("InputTriangle1");
    const base = third.value;
    const mitad = base / 2;
    const operation = side1 * side1 - mitad * mitad;
    const result = Math.sqrt(operation);
    const triangleResult = document.getElementById("triangleResult");
    triangleResult.innerText = "The height of your square is: " + result + "cm!";
    }
else {
    triangleResult.innerText = `Sorry! Your triangle is not isoseles`;
}};
