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
