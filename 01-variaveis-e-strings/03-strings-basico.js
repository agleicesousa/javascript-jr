//? ----------------------------------------------------------  CONCATENAÇÃO E ADIÇÃO  ------------------------------------------------------------
//\* OPERADOR +
// Ex¹ - Concatenação (Juntando textos)
let nome = "Maria";
let sobrenome = "Antonieta";
console.log(nome + " " + sobrenome);

// Ex² - Adição Matemática
let numeroUm = 33;
let numeroDois = 34;
console.log(numeroUm + numeroDois);

//\* OPERADOR += (Atribuição com Concatenação)
let mensagem = "Olá";
mensagem += ", Usuário!";
console.log(mensagem);

//\* MÉTODO concat()
let palavraUm = "Deu";
let palavraDois = "certo!";
let fraseCompleta = palavraUm.concat(" ", palavraDois);
console.log(fraseCompleta);


//? ----------------------------------------------------------  ACESSANDO CARACTERES (Indexação)  ------------------------------------------------------------
//\* Strings funcionam como listas (índices começam no 0)
let saudacao = "olá";
console.log(saudacao[1]); // Retorna "l"

// Pegando o último caractere usando o tamanho (length)
console.log(saudacao[saudacao.length - 1]); // Retorna "á"

// Juntando caracteres específicos
let primeirosDois = saudacao[0] + saudacao[1];
console.log(primeirosDois); // Retorna "ol"


//? ----------------------------------------------------------  CARACTERES DE ESCAPE  ------------------------------------------------------------
//\* \n (Quebra de linha)
let poema = "Rosas são vermelhas,\nVioletas são azuis,\nJavaScript é divertido,\nE aprender também!";
console.log(poema);

//\* Escapando aspas (", ') para não quebrar a string
let frase = "Ela disse: \"Olá!\"";
console.log(frase);

let citacao = 'Ele disse: \'Está um lindo dia!\'';
console.log(citacao);


//? ----------------------------------------------------------  TEMPLATE LITERALS (Interpolação)  ------------------------------------------------------------
//\* Usa crases (``) e permite injetar variáveis e matemática com ${}
const musica = "Evidências";
const nota = 9.5;
const notaMaxima = 10;

const resultado = `Uma das minhas músicas favoritas é "${musica}". Eu dei a nota ${(nota / notaMaxima) * 100}%.`;

console.log(resultado);