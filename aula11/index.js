/**
 * mais sobre strings
 */

// let umaString = "Um \"texto\"" // \ -> ignorar um caractere
let umaString = "Um texto"

console.log(umaString.toUpperCase()) // -> transformar caracteres em letras maiúsculas
console.log(umaString.toLowerCase()) // -> transformar caracteres em letras minúsculas

console.log(umaString[3]) // -> exibir índice específico da string
console.log(umaString.charAt(1)) // -> exibir índice específico da string

console.log(umaString.length) // -> ver o tamanho da string (por índices)
console.log(umaString.slice(3, 8)) // -> localizar índices após/antes de índices específicos
console.log(umaString.substring(umaString.length - 5, umaString.length - 9)) // -> localizar índices após/antes de índices específicos (método antigo)
console.log(umaString.split(' ', 7)) // -> separar índices com base no valor usado (retorna array)

console.log(umaString.concat(`, outro texto`)) // -> concatenar mais índices em uma string
console.log(umaString + `, outro texto`) // -> concatenar mais índices em uma string
console.log(`${umaString}, outro texto`) // -> concatenar mais índices em uma string

console.log(umaString.indexOf(`texto`)) // -> localizar primeiro índice específico
console.log(umaString.indexOf(`texto`, 5)) // -> localizar primeiro índice específico depois do índice 5
console.log((umaString.lastIndexOf(`texto`))) // -> localizar índice por ordem decrescente
console.log((umaString.lastIndexOf(`texto`, 5))) // -> localizar índice por ordem decrescente depois do índice 5

// exemplo com expressões regulares
console.log(umaString.match(/[a-z]/g)) // -> localizar índices com expressões regulares (retorna array)
console.log(umaString.search(/[a-z]/g)) // -> localizar índices com expressões regulares
console.log(umaString.replace(`Um`, `Segundo`)) // -> substituir índices
console.log(umaString.replace(/m/g, '#')) // -> substituir índices com expressões regulares
