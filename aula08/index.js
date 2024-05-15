/**
 * operadores aritméticos, de atribuição e incremento
 */

/*
Aritméticos (já com ordem de precedência)
() -> ...
** -> potenciação
* -> multiplicação, / -> divisão, % -> resto da divisão
+ -> adição / concatenação, - -> subtração
*/

let num1 = 5
let num2 = 10
let soma = num1 + num2
console.log(soma)

/*
Incremento / Decremento
++ -> incremento
-- -> decremento
++variável -> pré-incremento
variável++ -> pós-incremento
--variável -> pré-decremento
variável-- -> pós-decremento
*/

let contador = 1
contador++ // 2
contador++ // 3
++contador // 4
++contador // 5
console.log(contador)

/*
Atribuição
+= -> igual a ele mesmo + soma
-= -> igual a ele mesmo + subtração
*= -> igual a ele mesmo + multiplicação
**= -> igual a ele mesmo + potenciação
/= -> igual a ele mesmo + divisão
%= -> igual a ele mesmo + resto da divisão
*/

const passo = 2
let contador1 = 0

contador1 += passo // contador1 = contador1 + passo
contador1 += passo
contador1 *= passo
console.log(contador1)

// NaN -> Not A Number
/*
parseInt(...) -> converte para número inteiro
parseFloat(...) -> converte para números flutuantes (decimais)
Number(...) -> converte para números, independente se é inteiro ou decimal
*/
const num3 = 5
const num4 = Number('10')
console.log(num3 * num4)
console.log(typeof(num4))