console.log("Hello! I'm your coding fun fact guide!");

const botName = "Jarvis";
const botLocation = "Brazil";
const favoriteLanguage = "JavaScript";

console.log("My name is ".concat(botName, " and I live on ", botLocation, "."));
console.log("My favorite programming language is ".concat(favoriteLanguage, "."));

let codingFact = "I can use ".concat(
  favoriteLanguage,
  " for both front-end and back-end development."
);
console.log(codingFact);

codingFact = "".concat(favoriteLanguage, " was created in just 10 days.");
console.log(codingFact);

codingFact = "In ".concat(favoriteLanguage, ", functions are also objects.");
console.log(codingFact);

console.log(
  "It was fun sharing these facts with you. Goodbye! - ".concat(
    botName,
    " from ",
    botLocation,
    "."
  )
);