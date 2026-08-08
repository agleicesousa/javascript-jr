//? ----------------------------------------------------------  TIPOS DE DADOS  ------------------------------------------------------------

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
let usuarioLogado = true; 
console.log(typeof usuarioLogado); // Retorna "boolean"

// Ex³
let examploVariavel = null; 
console.log(typeof examploVariavel); // Retorna "object" (Bug histórico do JS)

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
