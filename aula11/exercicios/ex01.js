/**
 * crie um prompt pedindo o nome da pessoa, salve esse valor em uma variável
 * manipule essa string e exiba todos os resultados abaixo do código abaixo:
 */

const nome = prompt(`Digite o seu nome:`)

document.body.innerHTML = `Seu nome é: <strong>${nome}</strong> <br>`
document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br>`
document.body.innerHTML += `Qual o primeiro índice da letra a no seu nome? <strong>${nome.indexOf('a')}</strong> <br>`
document.body.innerHTML += `Qual o último índice da letra a no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br>`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br>`
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br>`
document.body.innerHTML += `Seu nome com letra maiúscula é: <strong>${nome.toUpperCase()}</strong> <br>`
document.body.innerHTML += `Seu nome com letra minúscula é: <strong>${nome.toLowerCase()}</strong> <br>`