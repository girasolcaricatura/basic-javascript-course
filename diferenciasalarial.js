// tengo que tener primero una lista de personas x país (listo)
// a cada persona la vamos a crear como objeto con sus datos (listo)
// *en nuestro análisis vamos a tener un total de ingresos (listo)
// **un promedio de ingresos del país (listo) 
// ***una mediana de ingresos del país (listo)
// ****vamos a seleccionar al top 10% del país  
// *****calcular la diferencia salarial 


// LISTA PAÍS Y CIUDADANOS

const colombia = [];

colombia.push({
  name: "Camila",
  salary: 500,
});
colombia.push({
  name: "Nath",
  salary: 1500,
});
colombia.push({
  name: "Luisa",
  salary: 1800,
});
colombia.push({
  name: "Laura",
  salary: 1000,
});
colombia.push({
  name: "Daniela",
  salary: 2200,
});
colombia.push({
  name: "Esperancita",
  salary: 200,
});
colombia.push({
  name: "Carla",
  salary: 500,
});
colombia.push({
  name: "Antonieta",
  salary: 1500,
});
colombia.push({
  name: "Alicia",
  salary: 1300,
});
colombia.push({
  name: "Ana",
  salary: 2400,
});
colombia.push({
  name: "Julia",
  salary: 3400,
});
colombia.push({
  name: "Rosa",
  salary: 400,
});
colombia.push({
  name: "Angélica",
  salary: 400,
});
colombia.push({
  name: "Tatiana",
  salary: 400,
});
colombia.push({
  name: "Lorena",
  salary: 600,
});
colombia.push({
  name: "Carolina",
  salary: 1600,
});
colombia.push({
  name: "Fernanda",
  salary: 2600,
});
colombia.push({
  name: "Nora",
  salary: 1000,
});
colombia.push({
  name: "Gisselle",
  salary: 2000,
});
colombia.push({
  name: "Bill Gates",
  salary: 100000000,
});

// solo salarios
const colombiaGana = colombia.map (function (salario) {
    return salario.salary;
});

//total de ingresos
const colombiaTotal = colombiaGana.reduce(function (acumulador, salario) {
    return acumulador + salario;
},0)

//promedio (media aritmética) de ingresos

const colombiaPromedio = colombiaTotal / colombiaGana.length;

//mediana de ingresos 
  
//****ordenar de menor a mayor:

const colombiaSalarioOrdenado = colombiaGana.sort (function (prev, next) {
    if (prev > next) {
        return 1;
    }
    if (prev > next) {
        return -1;
    }
    return 0;
});

function calcularMediaAritmetica (lista) {
  const sumaLista = lista.reduce (
      function  (valorAcumulado = 0, nuevoElemento) {
          return valorAcumulado + nuevoElemento
      }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
  }



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
      return mediana
  }
  else {
      mediana = lista[mitadLista];
  }
  return mediana;
  }

  // Top 10%
  
  const number = colombiaSalarioOrdenado.length * 30 / 100;
  const topten = colombiaSalarioOrdenado.filter((_,posicion) => {
    return posicion < number;
  })

  