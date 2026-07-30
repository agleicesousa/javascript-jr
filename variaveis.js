console.log('Hello, World!');

//* LET, CONST e VAR

// let - É possível alterar no futuro. Respeita o escopo de bloco.

// Ex¹
let numero = 8;
console.log(numero);
numero = 25;    // Alteração do valor da variável
console.log(numero);

// Ex²
let nome = "Gleice";
console.log(nome);
nome = "Fátima";
console.log(nome);   // Outra alteração de valor


// const - Valor não mutável. Uma vez atribuído, não pode ser reatribuído.
//! OBS: Para testar ambos os resultados descomente o exemplo que gostaria de usar removendo os '/*  */' correspondentes

/*
// Ex¹
const lugar = "Brasil";
console.log(lugar);
lugar = "Portugal";     // Vai dar erro no console: Assignment to constant variable.
console.log(lugar);
*/

/*
// Ex²
const saldo = 3.14;
console.log(saldo);
saldo = "9¾";           // Erro no console: Assignment to constant variable.
console.log(saldo);
*/


// var - Pode ser alterado, porém não é mais recomendado nas versões modernas do JavaScript (ES6+).
// O 'var' não respeita escopo de bloco e pode causar comportamentos inesperados.

// Ex¹
var nascimento = 1998;      // Mantenha se quiser um valor fixo
console.log(nascimento);
nascimento = 2000;          // Alteração do valor da variável
console.log(nascimento);    // O valor mudará para '2000'


// EX²
var ultimoNome = "Sousa";    // Mantenha se quiser um valor fixo
console.log(ultimoNome);
ultimoNome = "Moretti";      // Alteração do valor da variável
console.log(ultimoNome);     // O valor mudará para 'Moretti'


//? ----------------------------------------------------------  TIPOS DE DADOS (PRIMITIVOS)  ------------------------------------------------------------

//* STRINGS (Textos)
// Ex
let frase = "Olá JavaScript!";
console.log(frase);


//* NUMBERS (Números)
// Ex¹ - Inteiros
let dia = 9;
console.log(dia);

// Ex² - Pontos flutuantes / quebrados (Decimais)
let pi = 3.14;
console.log(pi);


//* BOOLEANS (Booleanos)
// Ex¹ - valor verdadeiro / true
let sim = true;
console.log(sim);

// Ex² - valor falso / false
let nao = false;
console.log(nao); 


//* UNDEFINED (Indefinido)
// Ex - Uma variável criada, mas sem nenhum valor atribuído a ela
let nada;
console.log(nada);


//? ----------------------------------------------------------  ??  ------------------------------------------------------------

//* OPERADOR +
// Ex¹
let primeiroNome = "Maria";
let segundoNome = "Antonieta";
console.log(primeiroNome + " " + segundoNome);

// Ex²
let numeroUm = 33;
let numeroDois = 34;
console.log(numeroUm + numeroDois);


//* OPERADOR +=
let texto = "Olá";
texto += ", Usuário!";
console.log(texto);


//* MÉTODO concat()
let palavraUm = "Deu";
let palavraDois = "certo!";
let fraseCompleta = palavraUm.concat(' ', palavraDois);
console.log(fraseCompleta);