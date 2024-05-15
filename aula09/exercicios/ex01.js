/**
 * armazene 2 valores de 2 prompts e faça a soma dos valores, exiba o resultado em um alert
 */

const num1 = Number(prompt('Digite um número:'))
const num2 = Number(prompt('Digite outro número:'))

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2
const potenciacao = num1 ** num2
const restoDivisao = num1 % num2

alert
(`
Muito bem! Aqui estão os resultados:\n
Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
Potenciação: ${potenciacao}
Resto da divisão: ${restoDivisao}
`)