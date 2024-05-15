/**
 * com console.log(), imprima: Luiz Otávio Miranda tem 30 anos, pesa 84kg
 * tem 1.80 de altura e seu IMC é de (cálculo imc).
 * Luiz Otávio nasceu em (ano nascimento)
 * use constantes e variáveis.
 */

const nome = "Luiz Otávio"
const sobreNome = "Miranda"
const idade = 30
const peso = 84
const altura = 1.80
let imc = peso / (altura * altura) // peso / (altura * altura)
let anoAtual = 2024
let anoNascimento = anoAtual - idade // anoAtual - idade

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg\ntem ${altura} de altura e seu IMC é de ${imc}\n${nome} nasceu em ${anoNascimento}.`)
