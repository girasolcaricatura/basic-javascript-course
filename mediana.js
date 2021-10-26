// este espacio es para agregar la función del promedio: 

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce (
        function  (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

// este espacio es para las listas:

const lista1 = [
    100,
    200,
    500,
    700,
    400000000,
];

const lista2 = [
    1000,
    20,
    2,
    19,
    15,
];

// función que regresa la mediana de cualquier lista:


function sacarMediana (lista) {
    lista.sort ((a,b) => {
        return a - b;
    });
    
    const mitadLista = parseInt(lista.length / 2);
    
    function esPar (listab) {
    if (listab % 2 === 0) {
        return true;
    } 
    else { 
        return false;
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista -1];
    const elemento2 = lista[mitadLista];
   const media = calcularMediaAritmetica([elemento1,elemento2])
    mediana = media;
}
else {
    mediana = lista[mitadLista];
}
return mediana;
}