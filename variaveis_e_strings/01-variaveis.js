console.log('Hello, World!');

//* LET, CONST e VAR

// let - Mutável. Respeita escopo de bloco.
// Ex¹
let numero = 8;
console.log(numero);
numero = 25;    // Alteração de valor
console.log(numero);

// Ex²
let nome = "Gleice";
console.log(nome);
nome = "Fátima";
console.log(nome); 

// const - Imutável. Não pode ser reatribuído.
//! OBS: Descomente os blocos para testar os erros.

/*
// Ex¹
const lugar = "Brasil";
console.log(lugar);
lugar = "Portugal";     // Erro de reatribuição
console.log(lugar);
*/

/*
// Ex²
const saldo = 3.14;
console.log(saldo);
saldo = "9.75";         // Erro de reatribuição
console.log(saldo);
*/

// var - Mutável, mas não recomendado hoje em dia (foge do escopo de bloco).
// Ex¹
var nascimento = 1998;      
console.log(nascimento);
nascimento = 2000;          // Alteração de valor
console.log(nascimento);    

// EX²
var ultimoNome = "Sousa";    
console.log(ultimoNome);
ultimoNome = "Moretti";      
console.log(ultimoNome);
