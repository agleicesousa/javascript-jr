//? ----------------------------------------------------------  BUSCANDO EM STRINGS (indexOf)  ------------------------------------------------------------

// indexOf() retorna a posição onde o texto começa.
let frase = "JavaScript é incrível!";
let posicao = frase.indexOf("incrível!");
console.log(posicao); // Retorna 15

// Buscando "JavaScript" a partir de uma posição específica (índice 10)
let fraseLonga = "JavaScript é incrível, e JavaScript é poderoso!";
let proximaPosicao = fraseLonga.indexOf("JavaScript", 10);
console.log(proximaPosicao); // Retorna 26


//? ----------------------------------------------------------  CÓDIGOS ASCII E CARACTERES  ------------------------------------------------------------

//* charCodeAt()
// Descobre o número (código ASCII/Unicode) por trás de um caractere. O (0) é a posição na string.

// Ex¹ - Letra "A" (maiúscula)
let letra = "A";
console.log(letra.charCodeAt(0)); // Retorna 65

// Ex² - Símbolo "!"
let simbolo = "!";
console.log(simbolo.charCodeAt(0)); // Retorna 33

//* String.fromCharCode()
// Faz o caminho inverso: transforma um número no seu caractere correspondente.
// Ex³ - Código 65
let caractere = String.fromCharCode(65);
console.log(caractere); // Retorna "A"
