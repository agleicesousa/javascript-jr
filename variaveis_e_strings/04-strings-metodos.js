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


//? ----------------------------------------------------------  MÉTODOS DE STRING  ------------------------------------------------------------

//* includes()
// Verifica se uma string contém outra string. Retorna true ou false.
let fraseRaposa = "A raposa marrom rápida pula sobre o cachorro preguiçoso.";
console.log(fraseRaposa.includes("raposa")); // Retorna true
console.log(fraseRaposa.includes("gato"));   // Retorna false

//* slice()
// Retorna uma parte da string, do índice inicial até o índice final (não inclusivo).
let texto = "Olá, mundo!";
console.log(texto.slice(0, 3)); // Retorna "Olá"
console.log(texto.slice(5));    // Retorna "mundo!"

//* toUpperCase() e toLowerCase()
// Converte a string para maiúsculas ou minúsculas.
let saudacao = "Olá, Mundo!";
console.log(saudacao.toUpperCase()); // Retorna "OLÁ, MUNDO!"
console.log(saudacao.toLowerCase()); // Retorna "olá, mundo!"

//* trim()
// Remove espaços em branco do início e do fim da string.
let textoComEspacos = "   Olá, mundo!   ";
console.log(textoComEspacos.trim()); // Retorna "Olá, mundo!"

//* trimStart()
// Remove espaços em branco do início da string.
let textoComEspacoInicio = "   Olá, mundo!";
console.log(textoComEspacoInicio.trimStart()); // Retorna "Olá, mundo!"

//* trimEnd()
// Remove espaços em branco do fim da string.
let textoComEspacoFim = "Olá, mundo!   ";
console.log(textoComEspacoFim.trimEnd()); // Retorna "Olá, mundo!"

//* replace() e replaceAll()
// Substitui a primeira ocorrência de uma substring por outra.
let fraseOriginal = "O gato é bonito. O gato é fofo.";
let fraseSubstituida = fraseOriginal.replace("gato", "cachorro");
console.log(fraseSubstituida); // Retorna "O cachorro é bonito. O gato é fofo."

// Substitui todas as ocorrências de uma substring por outra.
let fraseSubstituidaTodas = fraseOriginal.replaceAll("gato", "cachorro");
console.log(fraseSubstituidaTodas); // Retorna "O cachorro é bonito. O cachorro é fofo."
