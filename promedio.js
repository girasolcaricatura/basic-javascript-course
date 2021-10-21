const lista1 = [
    100,
    200,
    300,
    400,
    500,
];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

// Para poder agregar cualquier lista a las función y no específicamente una en particular haremos el siguiente ejercicio: 
 /* {
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
    } */

function calcularMediaAritmetica (lista) {
const sumaLista = lista.reduce (
    function  (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento
    }
);
const promedioLista = sumaLista / lista.length;

return "El promedio de tu lista es: " + promedioLista;
}

