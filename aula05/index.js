/**
 * constantes com const
 */

// não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// não pode começar o nome de uma constante com número
// não podem conter espaços e/ou traços
// utilizamos camelCase
// não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST

// String = texto | number = número
// typeof(variável) descobrir o tipo da variável

const nome = "João"
console.log(nome)

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero * segundoNumero
const resultadoDuplicado = resultado * 2
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
console.log(typeof(resultado))