// Para sacar la brecha salarial, es necesario dividir a hombres y mujeres y sacar la media del total del salario de c/u.



const paygapGenerator = (country) => {

// sacando el salario:
const maleFilter = country.filter(
    (males) => {
        return males.gender === "Male"
    })
    .map ((males) => males.salary);

const femaleFilter = country.filter(
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
    const payGapIs = (decimal / mediaMale) * 100
    const textResult = document.getElementById("paygapResult");
    textResult.style.display ="inherit"
    const showCloseButton = document.getElementById("closeButton");
    showCloseButton.style.display ="inline-block"
    if (country === colombia){ 
     textResult.innerText = `The salary pay gap between male and female in Colombia is from ${payGapIs} %`;
     }
    if (country === mexico){ 
     textResult.innerText = `The salary pay gap between male and female in México is from ${payGapIs} %`;
     }
    if (country === peru){ 
     textResult.innerText = `The salary pay gap between male and female in Peru is from  ${payGapIs} %`;
     }
}
else if (mediaMale < mediaFemale) {
    const decimal = (mediaFemale - mediaMale)
    const payGapIs = (decimal / mediaFemale) * 100
    const textResult = document.getElementById("paygapResult");
    textResult.style.display ="inherit"
    const showCloseButton = document.getElementById("closeButton");
    showCloseButton.style.display ="inline-block"
    textResult.innerText = `The pay gap from male to female in this country is ${payGapIs}%`;
};
}

const hideInfo = () => {
    document.getElementById("paygapResult").style.display ="none";
    const stopCloseButton = document.getElementById("closeButton");
    stopCloseButton.style.display ="none"
}


