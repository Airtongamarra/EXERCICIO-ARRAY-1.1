var nomes = []  
var nota = []
var contador = 0
var continuar = true
var somaNotas = 0
var mediaGeral = 0 
while(continuar){
    var nomeAlunoAtual = prompt("Qual o nome do aluno?")
    var notaAtual = parseInt(prompt(" Insira sua nota "))
    nomes[contador] = nomeAlunoAtual
    nota[contador] = notaAtual
    somaNotas = somaNotas + nota[contador]
    var desejaContinuar = prompt("Deseja continuar? 'S' ou 'N' ")
    if(desejaContinuar== "n"){
        continuar = false
    }
    contador++
    
}
mediaGeral = somaNotas / contador

for (var index = 0; index < contador; index++){
    console.log(" Aluno: " + nomes[index] + " Tirou nota: " + nota[index])
}
console.log(" A soma das notas foi: " + somaNotas)
console.log(" A media geral foi de: " + mediaGeral)