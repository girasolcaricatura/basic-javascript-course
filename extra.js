// Para sacar la brecha salarial, es necesario dividir a hombres y mujeres y sacar la media del total del salario de c/u.



const paygapGenerator = (country) {
   country = document.getElementById()

// sacando el salario:
const maleFilter = colombia.filter(
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


// para sacar la difencia en porcentaje 

if (mediaFemale < mediaMale) {
    const decimal = (mediaMale - mediaFemale)
    return (decimal / mediaMale) * 100
}
else {
    const decimal = (mediaFemale - mediaMale)
    return (decimal / mediaFemale) * 100
};
}