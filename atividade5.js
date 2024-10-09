let nota1 = Number(prompt(`Qual a sua primeira nota?`))
let nota2 = Number(prompt(`Qual a sua segunda nota?`))

let media = (nota1 + nota2) /2

let res = media >= 6 ? 'Aprovado' : 'Reprovado'

alert(`${res}`)

