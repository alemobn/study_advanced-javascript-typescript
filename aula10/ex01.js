/**
 * faça com que A tenha o valor de B, B tenha o valor de C e C tenha o valor de A, sem alterar os valores das variáveis
 * exiba o resultado no console
 */

let varA = 'A' // B
let varB = 'B' // C
let varC = 'C' // A

console.log(`Exercício: ${varA} ${varB} ${varC}`)

const saveVarA = varA
varA = varB
varB = varC
varC = saveVarA

console.log(`Solução: ${varA} ${varB} ${varC}`)

// array
// [varA, varB, varC] = [varC, varB, varA]
// console.log(varA, varB, varC)