// const estudante = {
//     nome:'Rodolfo',
//     sobrenome:'Fretas',
//     numeroMatricula:123456,
//     notasDoSemestre:[8, 5.5, 10]
// }

// console.log(estudante)
// estudante.modulo = 'git e terminal'
// console.log(estudante)

// console.log('NOME:', estudante.nome)
// console.log('SEGUNDA NOTA:', estudante.notasDoSemestre[1])
// console.log('MODULO', estudante['modulo'])

// const novoEstudante = {...estudante}
// console.log(novoEstudante)

// novoEstudante.nome='Astrodev'
// // Método com PUSH de array
// // novoEstudante.notasDoSemestre = estudante.notasDoSemestre.slice()
// // novoEstudante.notasDoSemestre.push(9)
// //Método com SPREAD
// novoEstudante.notasDoSemestre=[...estudante.notasDoSemestre, 9]

// // MUDANDO NOME DA PROP MODULO
// novoEstudante["Modulo"]="Introdução a WEB"
// console.log('NOVO ESTUDANTE', novoEstudante)

// // Mostrando os dois objetos usando array
// const estudantesLabenu =[]
// estudantesLabenu.push(estudante, novoEstudante)
// console.log(estudantesLabenu

const carrinho = {
    nome:"Rodolfo",
    formaDePgto:"Pix",
    endereco:"Rua João n 5",
}
console.log(carrinho)

carrinho.compras=[{nomeDoProduto:"Pão 500g", precoProduto: 7.29, quantProduto: 1}, {nomeDoProduto: "Café 500g",precoProduto: 11.59, quantProduto: 3}]
console.log("Compras:", carrinho.compras)

const carrinhoPresente = {...carrinho}
carrinhoPresente.nome="Thaysa"
carrinhoPresente.formaDePgto="Cartão presente"
console.log(carrinhoPresente)













