//? ----------------------------------------------------------  BUSCANDO EM STRINGS (indexOf)  ------------------------------------------------------------

// indexOf() retorna a posição onde o texto começa.
let frase = "JavaScript é incrível!";
let posicao = frase.indexOf("incrível!");
console.log(posicao); // Retorna 15

// Buscando "JavaScript" a partir de uma posição específica (índice 10)
let fraseLonga = "JavaScript é incrível, e JavaScript é poderoso!";
let proximaPosicao = fraseLonga.indexOf("JavaScript", 10);
console.log(proximaPosicao); // Retorna 26