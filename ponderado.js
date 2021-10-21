// para sacar el promedio ponderado se debe:
// 1- reunir los números de nuestra lista
// 2- determinar cuánto vale cada número de nuestra lista y convertirlo en decimal
// 3- multiplicar cada número por su valor de 'ponderancia' 
// 4- sumar los números resultantes para encontrar el promedio ponderado

const listaPromedio = [
    {tipo: "examen", calificacion: 8, valor: 0.30},
    {tipo: "tareas", califiacion: 9, valor: 0.50},
    {tipo: "proyecto", calificacion: 10, valor: 0.20},
];

    const multiplicacion = listaPromedio.map (function (elemento) {
    return elemento.calificacion * elemento.valor
    });
    
    let total = multiplicacion.reduce (function (acumulador,numero) {
    return acumulador + numero;
    }, 0);
    
    console.log(total);