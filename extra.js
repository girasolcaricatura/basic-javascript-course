// Para sacar la brecha salarial, es necesario dividir a hombres y mujeres y sacar la media del total del salario de c/u.

const maleFilter = colombia.map(
    (males) => {
    if (males.gender == "Male") {
        return males.salary;
    };
});

const femaleFilter = colombia.map (
    (females) => {
        if (females.gender == "Female") {
            return females.salary;
        }
    });