"use strict";

var alunos = [{
  nome: 'Eduardo',
  nota: 7
}, {
  nome: 'Stevão',
  nota: 10
}, {
  nome: 'Luiz',
  nota: 5
}, {
  nome: 'Paulo',
  nota: 8
}, {
  nome: 'Jorge',
  nota: 2
}, {
  nome: 'Matheus',
  nota: 9
}];
var alunosAprovados = alunos.filter(function (item) {
  return item.nota >= 6 ? console.log("".concat(item.nome, " nota: ").concat(item.nota)) : '';
});
console.log(alunosAprovados);