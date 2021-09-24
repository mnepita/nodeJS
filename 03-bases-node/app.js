const {
    createFile
} = require('./helpers/multiplicar')

console.clear();

const base = 1;

createFile(base);

const getSalario = () => {
    return new Promise((resolve, reject) => {

        const salario = salarios.find(s => s.id === id) ? .salario;

        (salario) ?
        resolve(salario): reject(`No existe salario con id ${ id }`);
    });
}