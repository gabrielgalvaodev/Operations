import readlineSync from 'readline-sync';

const n1 = parseInt(readlineSync.question('Digite o numero:'));
const n2 = parseInt(readlineSync.question('Digite o numero:'));


    
    const opcoes = `=== Menu Principal === 
    1- Somar
    2- Subtrair 
    3- Multiplicar
    4- Dividir`



console.log(opcoes);
let operaçao = parseInt(readlineSync.question('Digite qual operacao deseja fazer:'));

if(operaçao == 1){
    console.log("Resultado :", n1+n2)
}

if(operaçao == 2){
    console.log("Resultado :", n1-n2)
}

if(operaçao == 3){
    console.log("Resultado :", n1*n2)
}

if(operaçao == 4){
    console.log("Resultado :", n1/n2)
}
