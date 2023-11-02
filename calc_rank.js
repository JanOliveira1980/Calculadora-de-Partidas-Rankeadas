let prompt = require("prompt-sync")();

let vitorias = parseInt(prompt("Digite o numero de vitorias: "));
let derrotas = parseInt(prompt("Digite o numero de derrotas: "));
let nivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"];
const resp1 = ("O Herói tem o saldo de: ");
const resp2 = (" e está no nivel: ")


function calcSaldo(vitorias, derrotas){
    
    return vitorias - derrotas;

}


const saldoVitorias = calcSaldo(vitorias, derrotas);

if(saldoVitorias < 10){
    console.log(resp1 + saldoVitorias + resp2 + nivel[0])
}else if(saldoVitorias >= 11 && saldoVitorias < 20){
    console.log(resp1 + saldoVitorias + resp2 + nivel[1])
}else if(saldoVitorias >= 21 && saldoVitorias < 50){
    console.log(resp1 + saldoVitorias + resp2 + nivel[2])
}else if(saldoVitorias >= 51 && saldoVitorias < 80){
    console.log(resp1 + saldoVitorias + resp2 + nivel[3])
}else if(saldoVitorias >= 81 && saldoVitorias < 90){
    console.log(resp1 + saldoVitorias + resp2 + nivel[4])
}else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    console.log(resp1 + saldoVitorias + resp2 + nivel[5])
}else if(saldoVitorias > 100){
    console.log(resp1 + saldoVitorias + resp2 + nivel[6])
}