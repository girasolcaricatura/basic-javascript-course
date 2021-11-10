
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
    const inputBaseTriangulo = document.getElementById("InputBaseTriangulo");
    const inputAlturaTriangulo = document.getElementById("InputAlturaTriangulo");
    const base = inputBaseTriangulo.value;
    const altura = inputAlturaTriangulo.value;
    const resultadoAreaTriangulo = base * altura / 2;
    triangleResult.innerText = "¡El Área del Triángulo es: " + resultadoAreaTriangulo + "!"};

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

function altura (lado1,lado2,base) {
if (lado1 == lado2) {
    const mitadLadoTriangulo = base / 2;
    const x = lado1 * lado1 - mitadLadoTriangulo * mitadLadoTriangulo;
    return Math.sqrt(x);
}
else {
    alert ("Tu triángulo no es isóceles")
}
}

// hideNav

function hideNav() {
document.getElementById("nav").style.display="none"; 
}

function showNav() {
document.getElementById("nav").style.display="flex"; 
}






