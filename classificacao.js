let listaAlunos = ["Maria","Andréia","Edson","Sofia","João"]

let quantidadeAlunos = 5;

for(let contador = 0; contador < listaAlunos.length; contador++) {
console.log(contador)

    
// contador % 2 == 0 -> PAR
// contador % 2 == 0 -> IMPAR

if (contador == 0) {
    console.log(`o aluno(a) ${listaAlunos[contador]} é o número ZERO`)
} else if (contador % 2 == 0) {
    // elif
    // concatenação -> junção de texto

  console.log("O aluno(a) " + listaAlunos[contador] + " é o número " + contador + " : PAR ")

} else if (contador % 2 ==1){
    //interpolação -> Formata e insere valor no texto
    console.log(`o aluno(a) ${listaAlunos[contador]} é o número  ${contador} : IMPAR`)
    
}

}
