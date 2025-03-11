/*Estrutura de repetição for: */

alert("Programa para saber se você passou de ano");

var nomeDoAluno = "";
var primeiraNota = 0;
var segundaNota = 0;
var terceiraNota= 0;
var media = 0;

var contador = 0;

for(contador = 0; contador < 3; contador++){

    nomeDoAluno = prompt("Digite o nome do Aluno");
    primeiraNota = Number(prompt("Digite a nota do primeiro trimestre") );
    segundaNota = Number(prompt("Digite a nota do segundo trimestre") );
    terceiraNota = Number(prompt("Digite a nota do terceiro trimestre") );

    media = ( primeiraNota + segundaNota + terceiraNota ) / 3;
        
    if (media >= 6.0 ){
        alert("Você passou");
    } else {
        alert("Você reprovou");
    }

}

alert("Terminou");



/* Estrutura de repetição do while:

alert("Programa para saber se você passou de ano");

var nomeDoAluno = "";
var primeiraNota = 0;
var segundaNota = 0;
var terceiraNota= 0;
var media = 0;

var contador = 0;

do{
nomeDoAluno = prompt("Digite o nome do Aluno");
primeiraNota = Number(prompt("Digite a nota do primeiro trimestre") );
segundaNota = Number(prompt("Digite a nota do segundo trimestre") );
terceiraNota = Number(prompt("Digite a nota do terceiro trimestre") );

media = ( primeiraNota + segundaNota + terceiraNota ) / 3;
    
if (media >= 6.0 ){
    alert("Você passou");
} else {
    alert("Você reprovou");
}

contador = contador + 1;

} while (contador < 3);

alert("Terminou");*/



/* Estrutura de repetição while:

alert("Programa para saber se você passou de ano");

var nomeDoAluno = "";
var primeiraNota = 0;
var segundaNota = 0;
var terceiraNota= 0;
var media = 0;

var contador = 0;

while (contador < 3){
    nomeDoAluno = prompt("Digite o nome do Aluno");
    primeiraNota = Number(prompt("Digite a nota do primeiro trimestre") );
    segundaNota = Number(prompt("Digite a nota do segundo trimestre") );
    terceiraNota = Number(prompt("Digite a nota do terceiro trimestre") );

    media = ( primeiraNota + segundaNota + terceiraNota ) / 3;
    
    if (media >= 6.0 ){
        alert("Você passou");
    } else {
        alert("Você reprovou");
    }

    contador = contador + 1;
}*/



/* Estrutura switch:

alert("Calculadora");

var primeiroNumero = Number( prompt("Digite um número:") );
var segundoNumero = Number( prompt("Digite um segundo número:") );
var operacao =prompt("Digite a operação a ser realizada:");


switch (operacao) {
    case "+" :
        var soma = primeiroNumero + segundoNumero;
        console.log("A soma é: " + soma);
    break;
    case "-" :
        var subtracao = primeiroNumero - segundoNumero;
        console.log("A subtração é " + subtracao);
    break;
    case "*" :
        var multiplicacao = primeiroNumero *  segundoNumero;
        console.log("A multiplicação é " + multiplicacao);
    break;
    case "/" :
        var divisao = primeiroNumero / segundoNumero;
        console.log("A divisão é " + divisao);
    break;
}*/
