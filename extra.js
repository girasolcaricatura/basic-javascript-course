// Para sacar la brecha salarial, es necesario dividir a hombres y mujeres y sacar la media del total del salario de c/u.

// usando filter + map:

const maleFilter = colombiaSalary.filter(
    (males) => {
        return males.gender === "Male"
    })
    .map ((males) => males.salary);

const femaleFilter = colombia.filter(
    (females) => {
        return females.gender === "Female"
    })
    .map ((females) => females.salary);
    


// sacando el total:

const totalFemale = femaleFilter.reduce ((acumulador,numero) => {
    return acumulador + numero;
}, 0);

const totalMale = maleFilter.reduce ((acumulador,numero) => {
    return acumulador + numero;
}, 0);

// sacando la media

const mediaMale = (totalMale / maleFilter.length);

const mediaFemale = (totalFemale / femaleFilter.length);

