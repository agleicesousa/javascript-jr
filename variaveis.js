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


//? ----------------------------------------------------------  TIPOS DE DADOS (PRIMITIVOS)  ------------------------------------------------------------

//* STRINGS (Textos)
let frase = "Olá JavaScript!";
console.log(frase);

//* NUMBERS (Números)
// Ex¹ - Inteiros
let dia = 9;
console.log(dia);

// Ex² - Decimais
let pi = 3.14;
console.log(pi);

//* BOOLEANS (Booleanos)
// Ex¹ - Verdadeiro
let sim = true;
console.log(sim);

// Ex² - Falso
let nao = false;
console.log(nao); 

//* UNDEFINED (Indefinido)
// Variável declarada, mas sem valor
let nada;
console.log(nada);

//* typeof (Descobre o tipo de dado)
// Ex¹
let num = 42;
console.log(typeof num); // Retorna "number"

// Ex²
let isUserLoggedIn = true; 
console.log(typeof isUserLoggedIn); // Retorna "boolean"

// Ex³
let exampleVariable = null; 
console.log(typeof exampleVariable); // Retorna "object" (Bug histórico do JS)


//? ----------------------------------------------------------  CONCATENAÇÃO E ADIÇÃO  ------------------------------------------------------------

//* OPERADOR +
// Ex¹ - Concatenação (Juntando textos)
let primeiroNome = "Maria";
let segundoNome = "Antonieta";
console.log(primeiroNome + " " + segundoNome); 

// Ex² - Adição Matemática
let numeroUm = 33;
let numeroDois = 34;
console.log(numeroUm + numeroDois); 

//* OPERADOR += (Atribuição com Concatenação)
let texto = "Olá";
texto += ", Usuário!";
console.log(texto);

//* MÉTODO concat()
let palavraUm = "Deu";
let palavraDois = "certo!";
let fraseCompleta = palavraUm.concat(' ', palavraDois); 
console.log(fraseCompleta);


//? ----------------------------------------------------------  OUTROS TIPOS DE DADOS  ------------------------------------------------------------

//* OBJETOS (Objects)
// Coleção de dados estruturados em pares de "chave: valor" (Não é um tipo primitivo)
let pet = {
  nome: 'Milly',
  idade: 8,
  tipo: 'gato'
};
console.log(pet);


//* SYMBOL
// Cria um valor identificador único e imutável (É primitivo)
const chave1 = Symbol("a1234");
const chave2 = Symbol("a1234");
console.log(chave1 === chave2); // Retorna false, pois cada Symbol gerado é único, mesmo com descrições iguais.


//* BIGINT (n)
// Usado para números inteiros gigantes que ultrapassam o limite seguro do tipo Number (É primitivo)
const numeroGrande = 1234567890123456789012345678901234567891234456789n;
console.log(numeroGrande);