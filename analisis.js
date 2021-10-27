// Helpers: número par

function esPar(numerito) {
    return (numerito % 2 === 0);
}

// Helpers: media aritmética:

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce (
        function  (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
    }

// Calculadora de mediana

function medianaSalarios (lista) {
    const mitad = parseInt(lista.length / 2);
    
    if (esPar(lista.length)){
        const elemento1 = lista [mitad -1];
        const elemento2 = lista [mitad];
        const media = calcularMediaAritmetica([elemento1,elemento2])
        mediana = media;
        return mediana;
    } 
    else  {
        const personitaMitad = lista[mitad]
        return personitaMitad;
    }
}

// Mediana General

const salariosCol = colombia.map(function (personita) {
    return personita.salary
});

const salariosColSorted = salariosCol.sort(function (a,b) {
    return a - b;
});



const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = salariosColSorted.length * 90 / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salariosColSorted);

console.log ({
    medianaGeneralCol,
    medianaTop10Col,
})
