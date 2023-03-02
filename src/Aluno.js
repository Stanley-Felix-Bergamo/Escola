let alunos = [
    {
        nome: 'Eduardo',
        nota: 7
    },
    {
        nome: 'Stevão',
        nota: 10
    },
    {
        nome: 'Luiz',
        nota: 5
    },

    {
        nome: 'Paulo',
        nota: 8
    },
    {
        nome: 'Jorge',
        nota: 2
    },
    {
        nome: 'Matheus',
        nota: 9
    },
];

let alunosAprovados = alunos.filter(function (item) {
    return item.nota >= 6 ? console.log(`${item.nome} nota: ${item.nota}`) : '';

});

console.log(alunosAprovados);


