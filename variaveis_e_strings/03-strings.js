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

//? ----------------------------------------------------------  ACESSANDO CARACTERES (Indexação)  ------------------------------------------------------------

//* Strings funcionam como listas (índices começam no 0)
let greeting = "hello";
console.log(greeting[1]); // Retorna "e"

// Pegando o último caractere usando o tamanho (length)
console.log(greeting[greeting.length - 1]); // Retorna "o"

// Juntando caracteres específicos
let firstTwo = greeting[0] + greeting[1];
console.log(firstTwo); // Retorna "he"


//? ----------------------------------------------------------  CARACTERES DE ESCAPE  ------------------------------------------------------------

//* \n (Quebra de linha)
let poem = "Roses are red, \nViolets are blue,\nJavaScript is fun, \nAnd so are you.";
console.log(poem);

//* Escapando aspas (\", \') para não quebrar a string
let statement = "She said, \"Hello!\"";
console.log(statement);

let quote = 'It\'s a beautiful day!';
console.log(quote);


//? ----------------------------------------------------------  TEMPLATE LITERALS (Interpolação)  ------------------------------------------------------------

//* Usa crases (``) e permite injetar variáveis e matemática com ${}
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;

const output = `One of my favorite songs is "${song}". I rated it ${(score / highestScore) * 100}%.`;
console.log(output);


//? ----------------------------------------------------------  BUSCANDO EM STRINGS (indexOf)  ------------------------------------------------------------

//* indexOf() retorna a posição onde o texto começa. 
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!"); 
console.log(position); // Retorna 14
let nextPosition = longSentence.indexOf("JavaScript", 10);

// Buscando a partir de uma posição específica (índice 10)
let longSentence = "JavaScript is awesome, and JavaScript is powerful!";
console.log(nextPosition); // Retorna 27

//? ----------------------------------------------------------  CÓDIGOS ASCII E CARACTERES  ------------------------------------------------------------

//* charCodeAt()
// Descobre o número (código ASCII/Unicode) por trás de um caractere. O (0) é a posição na string.

// Ex¹ - Letra "A" (maiúscula)
let letter = "A";
console.log(letter.charCodeAt(0)); // Retorna 65

// Ex² - Símbolo "!"
let symbol = "!";
console.log(symbol.charCodeAt(0)); // Retorna 33


//* String.fromCharCode()
// Faz o caminho inverso: transforma um número no seu caractere correspondente.

// Ex³ - Código 65
let char = String.fromCharCode(65);
console.log(char); // Retorna "A"
