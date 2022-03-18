// Calculadora de médias
var z =1
var i = 1
var media = 0
var soma = 0
var medias = []
var notas =[]
var y=1 // quantidade de notas
var x = parseInt(prompt("Qual o número de alunos?:"))
var x2 = parseInt(prompt("Quantos perídos letivos no ano tem sua instituição de ensino?(trismestres, bimestres e etc..."))
while(i<=x){
        while(y<=x2){ 
            var nota = parseFloat(prompt("Qual a " +y + "° nota do seu "+i+"° aluno?")) 
            y++ 
            notas.push(nota) 
        } 
        for(var z2=0; z2<notas.length; z2++){
            soma += notas[z2]
        }
    media = soma/x2
    medias.push(media)
    y=1
    media = 0
    notas = []
    soma=0
    i++
}
var z2 =0
while(z<=x){
    alert("A média do aluno " + z+" é " + medias[z2].toFixed(2))
    z++
    z2++
}